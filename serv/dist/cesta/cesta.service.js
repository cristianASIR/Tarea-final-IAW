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
exports.CestaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cesta_entity_1 = require("./entities/cesta.entity");
const cliente_entity_1 = require("src/cliente/entities/cliente.entity");
let CestaService = class CestaService {
    cestaRepository;
    clienteRepository;
    constructor(cestaRepository, clienteRepository) {
        this.cestaRepository = cestaRepository;
        this.clienteRepository = clienteRepository;
    }
    async create(createCestaDto) {
        const { id_cliente, ...cestaData } = createCestaDto;
        const cliente = await this.clienteRepository.findOne({ where: { idcliente: id_cliente } });
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente con id ${id_cliente} no encontrado`);
        }
        const cesta = this.cestaRepository.create({
            ...cestaData,
            cliente: cliente,
        });
        return await this.cestaRepository.save(cesta);
    }
    async findAll() {
        return await this.cestaRepository.find({
            relations: ['cliente', 'cestaVideojuego'],
        });
    }
    async findOne(id) {
        const cesta = await this.cestaRepository.findOne({
            where: { idcesta: id },
            relations: ['cliente', 'cestaVideojuego'],
        });
        if (!cesta) {
            throw new common_1.NotFoundException(`Cesta con id ${id} no encontrada`);
        }
        return cesta;
    }
    async update(id, updateCestaDto) {
        const cesta = await this.cestaRepository.findOne({ where: { idcesta: id } });
        if (!cesta) {
            throw new common_1.NotFoundException(`Cesta con id ${id} no encontrada`);
        }
        Object.assign(cesta, updateCestaDto);
        return await this.cestaRepository.save(cesta);
    }
    async remove(id) {
        const result = await this.cestaRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Cesta con id ${id} no encontrada`);
        }
    }
};
exports.CestaService = CestaService;
exports.CestaService = CestaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cesta_entity_1.Cesta)),
    __param(1, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CestaService);
//# sourceMappingURL=cesta.service.js.map