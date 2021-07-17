import { NestResponse } from 'src/core/http/nest-response';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    cria(usuario: Usuario): NestResponse;
    buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario;
}
