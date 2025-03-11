import { CestavideojuegoService } from './cestavideojuego.service';
import { CreateCestavideojuegoDto } from './dto/create-cestavideojuego.dto';
import { UpdateCestavideojuegoDto } from './dto/update-cestavideojuego.dto';
export declare class CestavideojuegoController {
    private readonly cestavideojuegoService;
    constructor(cestavideojuegoService: CestavideojuegoService);
    create(createCestavideojuegoDto: CreateCestavideojuegoDto): Promise<import("./entities/cestavideojuego.entity").Cestavideojuego>;
    findAll(): Promise<import("./entities/cestavideojuego.entity").Cestavideojuego[]>;
    findOne(id: string): Promise<import("./entities/cestavideojuego.entity").Cestavideojuego>;
    update(id: string, updateCestavideojuegoDto: UpdateCestavideojuegoDto): Promise<import("./entities/cestavideojuego.entity").Cestavideojuego>;
    remove(id: string): Promise<void>;
}
