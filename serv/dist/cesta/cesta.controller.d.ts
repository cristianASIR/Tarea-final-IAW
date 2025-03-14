import { CestaService } from './cesta.service';
import { CreateCestaDto } from './dto/create-cesta.dto';
import { UpdateCestaDto } from './dto/update-cesta.dto';
export declare class CestaController {
    private readonly cestaService;
    constructor(cestaService: CestaService);
    create(createCestaDto: CreateCestaDto): Promise<import("./entities/cesta.entity").Cesta>;
    findAll(): Promise<import("./entities/cesta.entity").Cesta[]>;
    findOne(id: string): Promise<import("./entities/cesta.entity").Cesta>;
    update(id: string, updateCestaDto: UpdateCestaDto): Promise<import("./entities/cesta.entity").Cesta>;
    remove(id: string): Promise<void>;
}
