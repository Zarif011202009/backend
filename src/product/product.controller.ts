import { Body, Controller, Post } from '@nestjs/common';
import { AddProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addProduct(@Body() addProdutDTO: AddProductDTO) {
    return this.productService.addProduct(addProdutDTO);
  }
}