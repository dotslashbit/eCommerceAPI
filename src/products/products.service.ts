import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  // GET all products
  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // GET product by :id
  async getProductById(productId: number): Promise<Product> {
    return await this.productRepository.findOne({ where: { productId } });
  }

  // POST a new product
  async createProduct(product: Product): Promise<Product> {
    const newProduct = this.productRepository.create(product);
    return await this.productRepository.save(newProduct);
  }

  // PUT an updated product
  async updateProduct(productId: number, product: Product): Promise<Product> {
    await this.productRepository.update(productId, product);
    return await this.productRepository.findOne({ where: { productId } });
  }

  // DELETE a product
  async deleteProduct(productId: number): Promise<void> {
    await this.productRepository.delete({ productId: productId });
  }
}
