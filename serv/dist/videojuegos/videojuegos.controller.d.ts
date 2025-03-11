import { CreateVideojuegoDto } from './dto/create-videojuego.dto';
import { UpdateVideojuegoDto } from './dto/update-videojuego.dto';
import { VideojuegoService } from './videojuegos.service';
export declare class VideojuegosController {
    private readonly videojuegosService;
    constructor(videojuegosService: VideojuegoService);
    create(createVideojuegoDto: CreateVideojuegoDto): Promise<import("./entities/videojuego.entity").Videojuego>;
    findAll(): Promise<import("./entities/videojuego.entity").Videojuego[]>;
    findOne(id: string): Promise<import("./entities/videojuego.entity").Videojuego>;
    update(id: string, updateVideojuegoDto: UpdateVideojuegoDto): Promise<import("./entities/videojuego.entity").Videojuego>;
    remove(id: string): Promise<void>;
}
