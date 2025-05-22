import { AbstractEntity } from 'src/common/api/entities/abstract.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Column, OneToOne, JoinColumn } from 'typeorm';
import { ArticleStatusEnum } from '../enums/article-status.enum';

@Entity()
export class ArticleEntity extends AbstractEntity<ArticleEntity> {
  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'author_id' })
  author: UserEntity;

  @Column()
  title: string;

  @Column()
  summary: string;

  @Column()
  content: string;

  @Column()
  author_id: number;

  @Column()
  views: number;

  @Column({
    type: 'enum',
    enum: ArticleStatusEnum,
    default: ArticleStatusEnum.DRAFT,
  })
  status: ArticleStatusEnum;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
}
