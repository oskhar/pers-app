import { AbstractEntity } from 'src/common/api/entities/abstract.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity extends AbstractEntity<UserEntity> {
  @Column()
  full_name: string;

  @Column()
  phone: string | null;

  @Column()
  address: string | null;

  @Column()
  facebook_url: string | null;

  @Column()
  instagram_url: string | null;

  @Column()
  twitter_url: string | null;

  @Column()
  email: string;

  @Column({ default: true })
  is_public_email: boolean;

  @Column()
  password: string;

  @Column()
  verification_code: string | null;

  @Column({ default: 'member' })
  role: string;

  @Column({ default: false })
  is_active: boolean;
}
