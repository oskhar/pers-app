import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import {
  CreateArticleDto,
  CreateArticleDtoSchema,
} from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ZodPipe } from 'src/common/pipes/zod.pipe';
import { UpdateArticleDtoSchema } from './dto/update-article.dto';
import {
  FilterDataDto,
  FilterDataSchema,
} from 'src/common/api/dto/pagination.dto';
import { IdsDto, IdsSchema } from 'src/common/api/dto/ids.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(
    @Body(new ZodPipe(CreateArticleDtoSchema))
    createArticleDto: CreateArticleDto,
  ) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  findAll(@Body(new ZodPipe(FilterDataSchema)) filterDataDto: FilterDataDto) {
    return this.articleService.findAll(filterDataDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodPipe(UpdateArticleDtoSchema))
    updateArticleDto: UpdateArticleDto,
  ) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Body(new ZodPipe(IdsSchema)) ids: IdsDto) {
    return this.articleService.remove(ids);
  }
}
