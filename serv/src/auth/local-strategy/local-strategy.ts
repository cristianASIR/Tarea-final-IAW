import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'email', passwordField: 'password' }); // Asegura que se usan los mismos nombres
    }

    async validate(email: string, password: string): Promise<any> { 
        console.log("📌 Validando usuario con:", { email, password });

        if (!email || !password) {
            console.error("❌ Error: email o password no proporcionados.");
            throw new UnauthorizedException("Email y contraseña son obligatorios.");
        }

        const user = await this.authService.validateUser({ email, password });

        if (!user) {
            console.error("❌ Credenciales incorrectas. No se encontró usuario válido.");
            throw new UnauthorizedException("Correo o contraseña incorrectos.");
        }

        console.log("✅ Usuario autenticado:", user.email);
        return user;
    }
}
