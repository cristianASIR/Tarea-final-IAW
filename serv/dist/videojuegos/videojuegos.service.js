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
exports.VideojuegoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const videojuego_entity_1 = require("./entities/videojuego.entity");
let VideojuegoService = class VideojuegoService {
    videojuegoRepository;
    constructor(videojuegoRepository) {
        this.videojuegoRepository = videojuegoRepository;
    }
    async create(createVideojuegoDto) {
        const videojuego = this.videojuegoRepository.create(createVideojuegoDto);
        return await this.videojuegoRepository.save(videojuego);
    }
    async findAll() {
        return await this.videojuegoRepository.find({
            relations: ['cestaVideojuegos'],
        });
    }
    async findOne(id) {
        const videojuego = await this.videojuegoRepository.findOne({
            where: { idproducto: id },
            relations: ['cestaVideojuegos'],
        });
        if (!videojuego) {
            throw new common_1.NotFoundException(`Videojuego con id ${id} no encontrado`);
        }
        return videojuego;
    }
    async update(id, updateVideojuegoDto) {
        const result = await this.videojuegoRepository.update(id, updateVideojuegoDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Videojuego con id ${id} no encontrado`);
        }
        return await this.findOne(id);
    }
    async remove(id) {
        const result = await this.videojuegoRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Videojuego con id ${id} no encontrado`);
        }
    }
};
exports.VideojuegoService = VideojuegoService;
exports.VideojuegoService = VideojuegoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(videojuego_entity_1.Videojuego)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VideojuegoService);
//# sourceMappingURL=videojuegos.service.js.map