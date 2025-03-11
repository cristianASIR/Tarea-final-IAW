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
let CestavideojuegoService = class CestavideojuegoService {
    cestavideojuegoRepository;
    constructor(cestavideojuegoRepository) {
        this.cestavideojuegoRepository = cestavideojuegoRepository;
    }
    async create(createDto) {
        const cestavideojuego = this.cestavideojuegoRepository.create(createDto);
        return await this.cestavideojuegoRepository.save(cestavideojuego);
    }
    async findAll() {
        return await this.cestavideojuegoRepository.find({
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
        const result = await this.cestavideojuegoRepository.update(id, updateDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Cestavideojuego con id ${id} no encontrado`);
        }
        return await this.findOne(id);
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
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CestavideojuegoService);
//# sourceMappingURL=cestavideojuego.service.js.map