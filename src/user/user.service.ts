import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async createUser(user: User) {
    const result = this.userRepository.insert(user);
    return result;
  }

  async getUserByID(id: number) {
    const result = await this.userRepository.findOne({
      where: { id: id },
    });
    return result;
  }
}