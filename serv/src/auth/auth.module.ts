import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './local-strategy/local-strategy';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClienteModule } from 'src/cliente/cliente.module';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        ClienteModule,
        PassportModule,
        JwtModule.register({
            secret: 'tu_secreto_jwt', 
            //signOptions: { expiresIn: '30m' }, //Producción
            signOptions: { expiresIn: '7d' }, //Mientras editamos
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService] 
})

export class AuthModule { }