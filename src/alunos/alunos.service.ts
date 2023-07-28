import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlunosService {

  constructor(private prisma: PrismaService) {}

  async create({name, date_birth, cpf}: CreateAlunoDto) {
        
    return this.prisma.alunos.create({
        data: {
          name,
          date_birth,
          cpf
        }

      });
    }


    async list() {
      return this.prisma.user.findMany();
  }


  async show(id: number) {
    return this.prisma.user.findUnique({
        where: {
            id
        }
    })
}


async updatePartial(id: number, {name, date_birth, cpf}: UpdateAlunoDto) {

  const data: any = {}

  if (name) {
    data.name
  }

  if (date_birth) {
    data.date_birth;
  }


  if (cpf) {
    data.cpf
  }


  return this.prisma.alunos.update({
      data: {name, date_birth, cpf},
      where: {
          id
      }
  })
}



async delete(id: number) {

await this.exists(id);

  return this.prisma.alunos.delete({
      where: {
          id
      }
  })
 
}


async exists(id: number) {
  if(!(await this.show(id))) {
     throw new NotFoundException(`O usuário ${id} não existe`)
      }
  }

}
