import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString } from "class-validator";

export class CreateAlunoDto {

    @IsString()
    name: string;

    @ApiProperty({ example: '12345678901' })
    @IsString()
    cpf: string;

    @IsDateString()
    date_birth: string;

}
