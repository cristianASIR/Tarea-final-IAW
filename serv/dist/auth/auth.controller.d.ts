import { AuthService } from './auth.service';
import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        token: string;
    }>;
    register(body: CreateClienteDto): Promise<{
        token: string;
    }>;
}
