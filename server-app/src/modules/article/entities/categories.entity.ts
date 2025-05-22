import { CreateDateColumn, Column, Entity } from 'typeorm';
import { AbstractEntity } from 'src/common/api/entities/abstract.entity';

@Entity('categories')
export class CategoriesEntity extends AbstractEntity<CategoriesEntity> {
  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;
}
