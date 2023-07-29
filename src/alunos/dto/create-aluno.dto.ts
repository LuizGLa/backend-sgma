
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsOptional, IsString } from "class-validator";
import { Aluno } from '../entities/aluno.entity';
import { Transform } from 'class-transformer';

export class CreateAlunoDto extends Aluno{

    @IsString()
    name: string;

    @ApiProperty({ example: '12345678901' })
    @IsString()
    cpf: string;

    @IsDate()
    @Transform(({ value }) => new Date(value))
    dateBirth: Date;

}
