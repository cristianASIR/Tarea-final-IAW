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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cesta = void 0;
const cestavideojuego_entity_1 = require("../../cestavideojuego/entities/cestavideojuego.entity");
const cliente_entity_1 = require("../../cliente/entities/cliente.entity");
const typeorm_1 = require("typeorm");
let Cesta = class Cesta {
    idcesta;
    cliente;
    cestaVideojuego;
};
exports.Cesta = Cesta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cesta.prototype, "idcesta", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cliente_entity_1.Cliente, (cliente) => cliente.cesta),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", cliente_entity_1.Cliente)
], Cesta.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cestavideojuego_entity_1.Cestavideojuego, (cv) => cv.cesta, { cascade: true }),
    __metadata("design:type", Array)
], Cesta.prototype, "cestaVideojuego", void 0);
exports.Cesta = Cesta = __decorate([
    (0, typeorm_1.Entity)()
], Cesta);
//# sourceMappingURL=cesta.entity.js.map