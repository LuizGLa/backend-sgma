import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async updatePartial(id: number, { email, password }: UpdateUserDto) {
    const data: any = {};

    if (email) {
      data.email = email;
    }

    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }

    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async verifyLogin(email: string, password: string): Promise<boolean> {
    const user = await this.findByEmail(email);

    if (!user) {
      return false;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    return isPasswordValid;
  }
}
