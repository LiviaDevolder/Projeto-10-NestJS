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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const is_nome_de_usuario_unico_validator_1 = require("./is-nome-de-usuario-unico.validator");
class Usuario {
}
__decorate([
    class_transformer_1.Expose({
        name: 'username',
    }),
    is_nome_de_usuario_unico_validator_1.IsNomeDeUsuarioUnico({
        message: 'nomeDeUsuario precisa ser único',
    }),
    class_validator_1.IsNotEmpty({
        message: 'nomeDeUsuario é obrigatório.',
    }),
    class_validator_1.IsString({
        message: 'nomeDeUsuario precisa ser uma string.',
    }),
    __metadata("design:type", String)
], Usuario.prototype, "nomeDeUsuario", void 0);
__decorate([
    class_transformer_1.Expose({
        name: 'email',
    }),
    class_validator_1.IsEmail({}, {
        message: 'email precisa ser um endereço de email válido.',
    }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    class_transformer_1.Expose({
        name: 'password',
    }),
    class_transformer_1.Exclude({
        toPlainOnly: true,
    }),
    class_validator_1.IsNotEmpty({
        message: 'senha é obrigatório.',
    }),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    class_transformer_1.Expose({
        name: 'fullName',
    }),
    class_validator_1.IsNotEmpty({
        message: 'nomeCompleto é obrigatório.',
    }),
    __metadata("design:type", String)
], Usuario.prototype, "nomeCompleto", void 0);
__decorate([
    class_transformer_1.Expose({
        name: 'joinDate',
    }),
    __metadata("design:type", Date)
], Usuario.prototype, "dataDeEntrada", void 0);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.entity.js.map