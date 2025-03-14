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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cliente_entity_1 = require("./entities/cliente.entity");
const bcrypt = require("bcrypt");
let ClienteService = class ClienteService {
    clienteService;
    clienteRepository;
    constructor(clienteService, clienteRepository) {
        this.clienteService = clienteService;
        this.clienteRepository = clienteRepository;
    }
    async create(createClienteDto) {
        const hashedPassword = await bcrypt.hash(createClienteDto.password, 10);
        const cliente = this.clienteRepository.create(createClienteDto);
        return await this.clienteRepository.save(cliente);
    }
    async findAll() {
        return await this.clienteRepository.find({ relations: ['cesta'] });
    }
    async findOne(id) {
        const cliente = await this.clienteRepository.findOne({
            where: { idcliente: id },
            relations: ['cesta'],
        });
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente con id ${id} no encontrado`);
        }
        return cliente;
    }
    async update(id, updateClienteDto) {
        const result = await this.clienteRepository.update(id, updateClienteDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Cliente con id ${id} no encontrado`);
        }
        return await this.findOne(id);
    }
    async remove(id) {
        const result = await this.clienteRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Cliente con id ${id} no encontrado`);
        }
    }
    async findByEmail(email) {
        const cliente = await this.clienteRepository.findOne({ where: { email } });
        return cliente;
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __metadata("design:paramtypes", [ClienteService,
        typeorm_2.Repository])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map