import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateModuloDto {

    @IsOptional()
    @IsString()
    name: string;

    @IsNumber()
    @IsOptional()
    nota1?: number;

    @IsNumber()
    @IsOptional()
    nota2?: number;

    @IsNumber()
    @IsOptional()
    nota3?: number;
}
