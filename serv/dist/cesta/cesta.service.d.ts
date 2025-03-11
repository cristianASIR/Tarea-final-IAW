import { Repository } from 'typeorm';
import { CreateCestaDto } from './dto/create-cesta.dto';
import { UpdateCestaDto } from './dto/update-cesta.dto';
import { Cesta } from './entities/cesta.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
export declare class CestaService {
    private readonly cestaRepository;
    private readonly clienteRepository;
    constructor(cestaRepository: Repository<Cesta>, clienteRepository: Repository<Cliente>);
    create(createCestaDto: CreateCestaDto): Promise<Cesta>;
    findAll(): Promise<Cesta[]>;
    findOne(id: number): Promise<Cesta>;
    update(id: number, updateCestaDto: UpdateCestaDto): Promise<Cesta>;
    remove(id: number): Promise<void>;
}
