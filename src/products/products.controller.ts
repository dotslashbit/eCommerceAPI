import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  // GET all products
  @Get('/')
  @UseGuards(JwtAuthGuard)
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  // GET a product by ID
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getProductById(@Param('id') id: number): Promise<Product> {
    return this.productsService.getProductById(id);
  }

  // POST a new product
  @Post('/')
  @UseGuards(JwtAuthGuard)
  async createProduct(@Body() product: Product): Promise<Product> {
    return this.productsService.createProduct(product);
  }

  // PUT an updated product
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateProduct(
    @Param('id') id: number,
    @Body() product: Product,
  ): Promise<Product> {
    return this.productsService.updateProduct(id, product);
  }

  // DELETE a product
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteProduct(@Param('id') id: number): Promise<void> {
    this.productsService.deleteProduct(id);
  }
}
