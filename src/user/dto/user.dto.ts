import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    name: 'name',
    description: "Name",
    type: String,
    example: 'Jamil Ahmed',
  })
  @IsString()
  readonly name: string;


  @ApiProperty({
    name: 'email',
    description: 'Email',
    type: String,
    example: 'jamil@gmail.com',
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    name: 'phone',
    description: 'Phone',
    type: String,
    example: '01715443321',
  })
  @IsString()
  readonly phone: string;
}