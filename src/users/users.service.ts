import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

/*   findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }  */
   
  async remove(id: string): Promise<String> {
    await this.usersRepository.delete(id);
    return "delete success";
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id,updateUserDto);
  }

  findName(firstName:string): Promise<User[]> {
    return this.usersRepository.find({
         where: {
            firstName: firstName,    
        },
    });
  }

}
