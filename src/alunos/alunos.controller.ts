import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';


@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  create(@Body() data: CreateAlunoDto) {
    return this.alunosService.create(data);
  }

    @Get()
    async list() {
        return this.alunosService.list();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number) {
        return this.alunosService.show(id);
    }


    @Patch(':id')
    async updatePartial(@Body() data: UpdateAlunoDto, @Param('id', ParseIntPipe) id: number) {
        return this.alunosService.updatePartial(id, data);}



    @Delete(':id')
    
    async delete(@Param('id', ParseIntPipe) id: number) {

        return this.alunosService.delete(id);
    }
}
