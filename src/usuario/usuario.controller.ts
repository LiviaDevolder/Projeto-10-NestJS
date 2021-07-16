import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) {}

    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
        throw new Error('Erro no cadastro de usuário');
        const usuarioCriado = this.usuarioService.cria(usuario);

        return usuarioCriado;
    }

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
        const usuarioEncontrado = this.usuarioService.buscaPorUsuario(nomeDeUsuario);

        return usuarioEncontrado;
    }
}
