import { JwtService } from '@nestjs/jwt';
import { ClienteService } from 'src/cliente/cliente.service';
import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private clienteService;
    private jwtService;
    constructor(clienteService: ClienteService, jwtService: JwtService);
    validateUser(loginDto: LoginDto): Promise<any>;
    login(user: any): Promise<{
        token: string;
    }>;
    register(createClienteDto: CreateClienteDto): Promise<{
        token: string;
    }>;
}
