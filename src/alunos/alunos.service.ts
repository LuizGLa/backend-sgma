import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlunosService {

  constructor(private prisma: PrismaService) {}

  async contarAlunos(): Promise<number> {
    const totalAlunos = await this.prisma.alunos.count();
    return totalAlunos;
  }

  async create({name, dateBirth, cpf}: CreateAlunoDto) {
        
    return this.prisma.alunos.create({
        data: {
          name,
          dateBirth,
          cpf
        }

      });
    }


    async list() {
      return this.prisma.alunos.findMany();
  }


  async show(id: number) {
    return this.prisma.alunos.findUnique({
        where: {
            id
        }
    })
}


async updatePartial(id: number, {name, dateBirth, cpf}: UpdateAlunoDto) {

  const data: any = {}

  if (name) {
    data.name
  }

  if (dateBirth) {
    data.date_birth = new Date(dateBirth);
  }


  if (cpf) {
    data.cpf
  }


  return this.prisma.alunos.update({
      data: {name, dateBirth, cpf},
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
