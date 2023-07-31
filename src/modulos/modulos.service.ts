import { Injectable } from '@nestjs/common';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ModulosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(id_alunos: number, moduloData: any) {
    return this.prisma.modulos.create({
      data: {
        ...moduloData,
        id_alunos: id_alunos, // Ou apenas id_alunos, pois tem o mesmo nome
      },
    });
  }
  

  findAll() {
    return `This action returns all modulos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modulo`;
  }

  update(id: number, updateModuloDto: UpdateModuloDto) {
    return `This action updates a #${id} modulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} modulo`;
  }
}
