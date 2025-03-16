import { Controller, Post, UseGuards, Request, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        console.log("✅ Usuario autenticado recibido en el controlador:", req.user);

        if (!req.user) {
            console.error("❌ Error: req.user es undefined, la autenticación falló.");
            throw new UnauthorizedException("Credenciales incorrectas.");
        }

        return this.authService.login(req.user);
    }

    @Post('register')
    async register(@Body() body: CreateClienteDto) {
        return this.authService.register(body);
    }
}
