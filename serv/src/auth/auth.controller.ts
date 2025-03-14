import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
    @Post('register')
    async register(@Body() body: CreateClienteDto) {
        return this.authService.register(body);
    }
}
