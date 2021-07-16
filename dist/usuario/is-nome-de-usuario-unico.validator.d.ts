import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UsuarioService } from './usuario.service';
export declare class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    validate(nomeDeUsuario: string, validationArguments?: ValidationArguments): boolean | Promise<boolean>;
}
export declare function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
