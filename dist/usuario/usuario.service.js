"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
let UsuarioService = class UsuarioService {
    constructor() {
        this.usuarios = [{
                id: 1,
                nomeDeUsuario: 'Livia',
                email: 'liviadevolder@gmail.com',
                senha: '123123',
                nomeCompleto: 'Livia Devolder Pinheiro',
                dataDeEntrada: new Date(),
            }];
    }
    cria(usuario) {
        this.usuarios.push(usuario);
        return usuario;
    }
    buscaPorUsuario(nomeDeUsuario) {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario);
    }
};
UsuarioService = __decorate([
    common_1.Injectable()
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map