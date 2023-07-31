import { Injectable } from '@nestjs/common';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ModulosService {
  constructor(private readonly prisma: PrismaService) { }

  async create(id_alunos: number, moduloData: any) {
    return this.prisma.modulos.create({
      data: {
        ...moduloData,
        id_alunos: id_alunos, // Ou apenas id_alunos, pois tem o mesmo nome
      },
    });
  }


  async findAll() {
    return this.prisma.modulos.findMany();
  }


  findOne(id: number) {
    return this.prisma.modulos.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, { name, nota1, nota2, nota3 }: UpdateModuloDto) {
    return this.prisma.modulos.update({
      where: {
        id
      },
      data: {
        name,
        nota1,
        nota2,
        nota3
      }
    })

  }

  async remove(id: number) {
    return this.prisma.modulos.delete({
      where: {
        id
      }
    })
  }
}
