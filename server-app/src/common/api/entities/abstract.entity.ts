import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class AbstractEntity<T> {
  constructor(payload: Partial<T>) {
    Object.assign(this, payload);
  }

  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
