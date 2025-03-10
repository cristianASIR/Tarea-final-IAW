import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ClienteService } from 'src/cliente/cliente.service';
import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private clienteService: ClienteService,
        private jwtService: JwtService,
    ) { }

    async validateUser(loginDto: LoginDto): Promise<any> { // Use LoginDto
        const user = await this.clienteService.findByEmail(loginDto.email); // Find by email
        if (!user) {
            return null;
        }
        if (user && await bcrypt.compare(loginDto.password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
            token: this.jwtService.sign(payload), //Firmar Payload con token
        };
    }

    async register(createClienteDto: CreateClienteDto) {
        const { nombre, email, password, apellido, direccion, telefono } = createClienteDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.clienteService.create({ 
            nombre, 
            email, 
            password: hashedPassword,
            apellido,
            direccion,
            telefono
        });
        return this.login(user);
    }
}