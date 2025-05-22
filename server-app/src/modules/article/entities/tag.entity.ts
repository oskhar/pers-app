import { Entity } from 'typeorm';
import { CreateDateColumn, Column } from 'typeorm';
import { AbstractEntity } from 'src/common/api/entities/abstract.entity';

@Entity('tags')
export class TagEntity extends AbstractEntity<TagEntity> {
  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;
}
