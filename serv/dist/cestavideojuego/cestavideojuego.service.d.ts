import { Repository } from 'typeorm';
import { CreateCestavideojuegoDto } from './dto/create-cestavideojuego.dto';
import { UpdateCestavideojuegoDto } from './dto/update-cestavideojuego.dto';
import { Cestavideojuego } from './entities/cestavideojuego.entity';
import { Cesta } from 'src/cesta/entities/cesta.entity';
import { Videojuego } from 'src/videojuegos/entities/videojuego.entity';
export declare class CestavideojuegoService {
    private readonly cestavideojuegoRepository;
    private readonly cestaRepository;
    private readonly videojuegoRepository;
    constructor(cestavideojuegoRepository: Repository<Cestavideojuego>, cestaRepository: Repository<Cesta>, videojuegoRepository: Repository<Videojuego>);
    create(createDto: CreateCestavideojuegoDto): Promise<Cestavideojuego>;
    findAll(): Promise<Cestavideojuego[]>;
    findOne(id: number): Promise<Cestavideojuego>;
    update(id: number, updateDto: UpdateCestavideojuegoDto): Promise<Cestavideojuego>;
    remove(id: number): Promise<void>;
}
