import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dto';
declare const LocalStrategy_base: new (...args: [options: import("passport-local").IStrategyOptionsWithRequest] | [options: import("passport-local").IStrategyOptions] | []) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(creatreClienteDto: CreateClienteDto): Promise<any>;
}
export {};
