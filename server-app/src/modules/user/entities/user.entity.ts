import { AbstractEntity } from 'src/common/api/entities/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends AbstractEntity<UserEntity> {
  @Column()
  full_name: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  facebook_url?: string;

  @Column({ nullable: true })
  instagram_url?: string;

  @Column({ nullable: true })
  twitter_url?: string;

  @Column()
  email: string;

  @Column({ default: true })
  is_public_email: boolean;

  @Column()
  password: string;

  @Column({ nullable: true })
  verification_code?: string;

  @Column({ default: 'member' })
  role: string;

  @Column({ default: false })
  is_active: boolean;
}
