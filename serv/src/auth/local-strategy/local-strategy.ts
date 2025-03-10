import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dto';
//fichero para validar el usuario mediante email y password
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'email' }); //Si no pones nada lo hará por ambos
    }
    async validate(creatreClienteDto: CreateClienteDto): Promise<any> {
        const user = await this.authService.validateUser(creatreClienteDto);
        //Si no existe el usuario lanzamos una excepción
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
