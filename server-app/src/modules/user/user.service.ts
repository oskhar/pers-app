import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterDataDto } from 'src/common/api/dto/pagination.dto';
import { IdsDto } from 'src/common/api/dto/ids.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common';
import { ILike } from 'typeorm';

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
    const { page, limit, search } = filterDataDto;

    const whereClause = search ? { full_name: ILike(`%${search}%`) } : {};

    return await this.userRepository.find({
      skip: (page - 1) * limit,
      take: limit,
      where: whereClause,
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id: +id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id: +id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  async remove(ids: IdsDto) {
    const idNumbers = ids.map((id) => +id); // konversi ke number

    // Ambil semua user yang ditemukan
    const existingUsers = await this.userRepository.findByIds(idNumbers);

    const existingIds = existingUsers.map((user) => user.id);
    const notFoundIds = idNumbers.filter((id) => !existingIds.includes(id));

    if (notFoundIds.length) {
      throw new NotFoundException(
        `User(s) with id(s) ${notFoundIds.join(', ')} not found`,
      );
    }

    await this.userRepository.delete(idNumbers);
  }
}
