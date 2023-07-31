
import { IsInt, IsNumber, Min, Max, IsNotEmpty, IsOptional, isString, IsString, isNumber } from 'class-validator';

export class CreateModuloDto{

    id?: number;

    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNumber()
    @Min(0)
    @Max(10)
    @IsOptional()
    nota1?: number;

    @IsNumber()
    @Min(0)
    @Max(10)
    @IsOptional()
    nota2?: number;

    @IsNumber()
    @Min(0)
    @Max(10)
    @IsOptional()
    nota3?: number;

}
