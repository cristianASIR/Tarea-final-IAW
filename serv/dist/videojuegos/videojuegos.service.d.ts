import { Repository } from 'typeorm';
import { Videojuego } from './entities/videojuego.entity';
import { CreateVideojuegoDto } from './dto/create-videojuego.dto';
import { UpdateVideojuegoDto } from './dto/update-videojuego.dto';
export declare class VideojuegoService {
    private readonly videojuegoRepository;
    constructor(videojuegoRepository: Repository<Videojuego>);
    create(createVideojuegoDto: CreateVideojuegoDto): Promise<Videojuego>;
    findAll(): Promise<Videojuego[]>;
    findOne(id: number): Promise<Videojuego>;
    update(id: number, updateVideojuegoDto: UpdateVideojuegoDto): Promise<Videojuego>;
    remove(id: number): Promise<void>;
}
