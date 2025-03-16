"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CestavideojuegoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cestavideojuego_entity_1 = require("./entities/cestavideojuego.entity");
const cesta_entity_1 = require("../cesta/entities/cesta.entity");
const videojuego_entity_1 = require("../videojuegos/entities/videojuego.entity");
let CestavideojuegoService = class CestavideojuegoService {
    cestavideojuegoRepository;
    cestaRepository;
    videojuegoRepository;
    constructor(cestavideojuegoRepository, cestaRepository, videojuegoRepository) {
        this.cestavideojuegoRepository = cestavideojuegoRepository;
        this.cestaRepository = cestaRepository;
        this.videojuegoRepository = videojuegoRepository;
    }
    async create(createDto) {
        const { id_cesta, id_producto, cantidad, fecha_compra } = createDto;
        const nuevoCestaVideojuego = this.cestavideojuegoRepository.create({
            cantidad,
            fecha_compra,
            cesta: { idcesta: id_cesta },
            videojuegos: { idproducto: id_producto },
        });
        return this.cestavideojuegoRepository.save(nuevoCestaVideojuego);
    }
    async findAll() {
        return this.cestavideojuegoRepository.find({
            relations: ['cesta', 'videojuegos'],
        });
    }
    async findOne(id) {
        const cestavideojuego = await this.cestavideojuegoRepository.findOne({
            where: { id },
            relations: ['cesta', 'videojuegos'],
        });
        if (!cestavideojuego) {
            throw new common_1.NotFoundException(`Cestavideojuego con id ${id} no encontrado`);
        }
        return cestavideojuego;
    }
    async update(id, updateDto) {
        if (Object.keys(updateDto).length === 0) {
            throw new common_1.BadRequestException('No se han enviado campos para actualizar');
        }
        const result = await this.cestavideojuegoRepository.update(id, updateDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Cestavideojuego con id ${id} no encontrado`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.cestavideojuegoRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Cestavideojuego con id ${id} no encontrado`);
        }
    }
};
exports.CestavideojuegoService = CestavideojuegoService;
exports.CestavideojuegoService = CestavideojuegoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cestavideojuego_entity_1.Cestavideojuego)),
    __param(1, (0, typeorm_1.InjectRepository)(cesta_entity_1.Cesta)),
    __param(2, (0, typeorm_1.InjectRepository)(videojuego_entity_1.Videojuego)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CestavideojuegoService);
//# sourceMappingURL=cestavideojuego.service.js.map