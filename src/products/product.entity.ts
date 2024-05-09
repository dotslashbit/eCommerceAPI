import { User } from 'src/users/user.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Product {
  @PrimaryGeneratedColumn()
  productId: number;
  @Column()
  productName: string;
  @Column()
  productDescription: string;
  @Column()
  productPrice: number;
  @Column()
  productImage: string;
  @Column()
  productCategory: string;
  @Column()
  productStock: number;

  @ManyToOne(() => User, (user) => user.products)
  user: User;
}
