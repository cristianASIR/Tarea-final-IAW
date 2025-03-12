import { Repository } from 'typeorm';
import { CreateCestavideojuegoDto } from './dto/create-cestavideojuego.dto';
import { UpdateCestavideojuegoDto } from './dto/update-cestavideojuego.dto';
import { Cestavideojuego } from './entities/cestavideojuego.entity';
export declare class CestavideojuegoService {
    private readonly cestavideojuegoRepository;
    constructor(cestavideojuegoRepository: Repository<Cestavideojuego>);
    create(createDto: CreateCestavideojuegoDto): Promise<Cestavideojuego>;
    findAll(): Promise<Cestavideojuego[]>;
    findOne(id: number): Promise<Cestavideojuego>;
    update(id: number, updateDto: UpdateCestavideojuegoDto): Promise<Cestavideojuego>;
    remove(id: number): Promise<void>;
}
