import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from './entities/article.entity';
import { FilterDataDto } from 'src/common/api/dto/pagination.dto';
import { ILike } from 'typeorm';
import { IdsDto } from 'src/common/api/dto/ids.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    const article = new ArticleEntity(createArticleDto);

    return await this.articleRepository.save(article);
  }

  async findAll(filterDataDto: FilterDataDto) {
    const { page, limit, search } = filterDataDto;

    const whereClause = search ? { title: ILike(`%${search}%`) } : {};

    return await this.articleRepository.find({
      skip: (page - 1) * limit,
      take: limit,
      where: whereClause,
    });
  }

  async findOne(id: number) {
    return await this.articleRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const article = await this.articleRepository.findOne({ where: { id: id } });

    if (!article) {
      throw new UnprocessableEntityException('Article not found');
    }

    Object.assign(article, updateArticleDto);

    return await this.articleRepository.save(article);
  }

  async remove(ids: IdsDto) {
    for (const id of ids) {
      const article = await this.articleRepository.findOne({
        where: { id: +id },
      });
      if (!article) {
        throw new UnprocessableEntityException('Article not found');
      }

      await this.articleRepository.delete(+id);
    }
  }
}
