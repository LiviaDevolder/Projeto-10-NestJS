import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    cria(usuario: Usuario): Usuario;
    buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario;
}
