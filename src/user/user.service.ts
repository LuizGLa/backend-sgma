import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}


  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password:await bcrypt.hash(createUserDto.password, 10),
    };



    const createdUser = await this.prisma.user.create({data})

    return {
      ...createdUser,
      password: undefined
    };
  }



  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


  async updatePartial(id: number, {email, name, password}: UpdateUserDto) {

        const data: any = {}

        if (email) {
            data.email;
        }

        if (name) {
            data.name
        }

        if (password) {
            data.password
        }
        return this.prisma.user.update({
            data: {email, name, password},
            where: {
                id
            }
        })
    }

  
}
