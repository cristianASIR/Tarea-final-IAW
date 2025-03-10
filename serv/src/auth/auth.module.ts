import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local-strategy/local-strategy';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: 'tu_secreto_jwt', 
            signOptions: { expiresIn: '60m' }, 
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService] 
})

export class AuthModule { }