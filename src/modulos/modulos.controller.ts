import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModulosService } from './modulos.service';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';

@Controller('modulos')
export class ModulosController {
  constructor(private readonly modulosService: ModulosService) {}

  @Post(':id_alunos')
  create(@Param('id_alunos') id_alunos: number, @Body() createModuloDto: CreateModuloDto) {
    console.log(createModuloDto)
    return this.modulosService.create(id_alunos, createModuloDto);
  }

  @Get()
  findAll() {
    return this.modulosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id:number) {
    return this.modulosService.findOne(id);
    

  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateModuloDto: UpdateModuloDto) {
    return this.modulosService.update(+id, updateModuloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.modulosService.remove(id);
  }
}
