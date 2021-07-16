import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
    private usuarios = [{
        id: 1,
        nomeDeUsuario: 'Livia',
        email: 'liviadevolder@gmail.com',
        senha: '123123',
        nomeCompleto: 'Livia Devolder Pinheiro',
        dataDeEntrada: new Date(),
    }];

    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);

        return usuario;
    }

    public buscaPorUsuario(nomeDeUsuario: string): Usuario {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario);
    }

}
