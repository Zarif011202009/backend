import { Injectable } from '@nestjs/common';
import { AddProductDTO } from './dto/product.dto';
import { Product } from 'src/models/product.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async addProduct(productData: Product) {
    const result = await this.productRepository.insert(productData);
    return result;
  }
}