import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AddProductDTO {
  @ApiProperty({
    name: 'category',
    description: "Category",
    type: String,
    example: 'Road Accident',
  })
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiProperty({
    name: 'condition',
    description: "Condition",
    type: String,
    example: 'Minor Injuries',
  })
  @IsString()
  @IsNotEmpty()
  readonly condition: string;

  @ApiProperty({
    name: 'priority',
    description: "Priority",
    type: Number,
    example: 5,
  })
  @IsInt()
  readonly priority: number;
}