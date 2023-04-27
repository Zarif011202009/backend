import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() createuserDTO: CreateUserDTO) {
    return this.userService.createUser(createuserDTO);
  }

  @Get()
  async getUser() {
    const user = [
      {
        name: 'Mr X',
        id: 1,
        email: 'x@gmail.com',
      },
      {
        name: 'Mr Y',
        id: 2,
        email: 'y@gmail.com',
      },
      {
        name: 'Mr Z',
        id: 3,
        email: 'z@gmail.com',
      },
    ];

    return user;
  }

  @Get('getUserByID')
  async getUserByID(@Param('id') id: number) {
    console.log(id);
    return this.userService.getUserByID(id);
  }
}