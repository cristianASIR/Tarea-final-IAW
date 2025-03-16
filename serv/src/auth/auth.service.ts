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

    async validateUser(loginDto: LoginDto): Promise<any> {
        console.log("📌 Buscando usuario con email:", loginDto.email.trim().toLowerCase());

        const user = await this.clienteService.findByEmail(loginDto.email.trim().toLowerCase());

        if (!user) {
            console.error("❌ Usuario no encontrado en la base de datos.");
            return null;
        }

        console.log("✅ Usuario encontrado en BD:", user);

        if (!loginDto.password || !user.password) {
            console.error("❌ Error: La contraseña ingresada o almacenada en BD es inválida.");
            return null;
        }

        console.log("🔑 Comparando contraseña ingresada:", loginDto.password);
        console.log("🔒 Hash en BD:", user.password);

        const isMatch = await bcrypt.compare(loginDto.password, user.password);
        console.log("🔍 ¿Contraseña coincide?:", isMatch);

        if (!isMatch) {
            console.error("❌ Contraseña incorrecta.");
            return null;
        }

        console.log("✅ Contraseña correcta, autenticando usuario...");
        const { password, ...result } = user;
        return result;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.idcliente };
        return {
            token: this.jwtService.sign(payload),
        };
    }

    async register(createClienteDto: CreateClienteDto) {
        const { nombre, email, password, apellido, direccion, telefono } = createClienteDto;

        console.log("🔑 Contraseña antes de hashear:", password);

        if (!password || password.trim() === "") {
            console.error("❌ Error: La contraseña no puede estar vacía.");
            throw new Error("La contraseña es obligatoria.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        console.log("🔒 Hash generado correctamente:", hashedPassword);

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