import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public-decorator';

@IsPublic()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updatePartial(+id, updateUserDto);
  }

  @Post('login')
  async login(@Body() { email, password }: { email: string; password: string }) {
    try {
      const isLoginValid = await this.userService.verifyLogin(email, password);

      if (isLoginValid) {
        // Login bem-sucedido, você pode retornar uma resposta adequada aqui
        return { success: true, message: 'Login bem-sucedido' };
      } else {
        // Credenciais inválidas
        return { success: false, message: 'Credenciais inválidas' };
      }
    } catch (error) {
      // Ocorreu um erro durante o login
      return { success: false, message: 'Falha no login: ' + error.message };
    }
  }
}