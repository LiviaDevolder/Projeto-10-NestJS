"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const nest_response_1 = require("../core/http/nest-response");
const nest_response_builder_1 = require("../core/http/nest-response-builder");
const usuario_entity_1 = require("./usuario.entity");
const usuario_service_1 = require("./usuario.service");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    cria(usuario) {
        const usuarioCriado = this.usuarioService.cria(usuario);
        return new nest_response_builder_1.NestResponseBuilder()
            .comStatus(common_1.HttpStatus.CREATED)
            .comHeaders({
            'Location': `/users/${usuarioCriado.nomeDeUsuario}`,
        })
            .comBody(usuarioCriado)
            .build();
    }
    buscaPorNomeDeUsuario(nomeDeUsuario) {
        const usuarioEncontrado = this.usuarioService.buscaPorUsuario(nomeDeUsuario);
        if (!usuarioEncontrado) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Usu??rio n??o encontrado.',
            });
        }
        return usuarioEncontrado;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario]),
    __metadata("design:returntype", nest_response_1.NestResponse)
], UsuarioController.prototype, "cria", null);
__decorate([
    common_1.Get(':nomeDeUsuario'),
    __param(0, common_1.Param('nomeDeUsuario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "buscaPorNomeDeUsuario", null);
UsuarioController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map