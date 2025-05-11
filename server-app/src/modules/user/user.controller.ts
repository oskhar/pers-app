import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, CreateUserSchema } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserSchema } from './dto/update-user.dto';
import { ZodPipe } from 'src/common/pipes/zod.pipe';
import {
  FilterDataDto,
  FilterDataSchema,
} from 'src/common/api/dto/pagination.dto';
import { IdsDto, IdsSchema } from 'src/common/api/dto/ids.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body(new ZodPipe(CreateUserSchema)) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Body(new ZodPipe(FilterDataSchema)) filterDataDto: FilterDataDto) {
    return this.userService.findAll(filterDataDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodPipe(UpdateUserSchema)) updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Body(new ZodPipe(IdsSchema)) ids: IdsDto) {
    return this.userService.remove(ids);
  }
}
