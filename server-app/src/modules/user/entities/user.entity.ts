import { AbstractEntity } from 'src/common/api/entities/abstract.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity extends AbstractEntity<UserEntity> {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  verificationCode: string;

  @Column()
  isVerified: boolean;
}
