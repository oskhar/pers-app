import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterDataDto } from 'src/common/api/dto/pagination.dto';
import { IdsDto } from 'src/common/api/dto/ids.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new UserEntity(createUserDto);

    await this.userRepository.save(user);
  }

  async findAll(filterDataDto: FilterDataDto) {
    return await this.userRepository.find({
      skip: (filterDataDto.page - 1) * filterDataDto.limit,
      take: filterDataDto.limit,
      where: filterDataDto.search ? { full_name: filterDataDto.search } : null,
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(+id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne(+id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    Object.assign(user, updateUserDto);
    return await this.userRepository.update(user);
  }

  async remove(ids: IdsDto) {
    for (const id of ids) {
      const user = await this.userRepository.findOne(+id);
      if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
      }

      await this.userRepository.delete(+id);
    }
  }
}
