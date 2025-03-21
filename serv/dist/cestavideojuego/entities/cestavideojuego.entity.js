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
exports.Cestavideojuego = void 0;
const cesta_entity_1 = require("../../cesta/entities/cesta.entity");
const videojuego_entity_1 = require("../../videojuegos/entities/videojuego.entity");
const typeorm_1 = require("typeorm");
let Cestavideojuego = class Cestavideojuego {
    id;
    cantidad;
    fecha_compra;
    cesta;
    videojuegos;
};
exports.Cestavideojuego = Cestavideojuego;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cestavideojuego.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cestavideojuego.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Cestavideojuego.prototype, "fecha_compra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cesta_entity_1.Cesta, (cesta) => cesta.cestaVideojuego),
    __metadata("design:type", cesta_entity_1.Cesta)
], Cestavideojuego.prototype, "cesta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => videojuego_entity_1.Videojuego, (videojuego) => videojuego.cestaVideojuegos),
    __metadata("design:type", videojuego_entity_1.Videojuego)
], Cestavideojuego.prototype, "videojuegos", void 0);
exports.Cestavideojuego = Cestavideojuego = __decorate([
    (0, typeorm_1.Entity)()
], Cestavideojuego);
//# sourceMappingURL=cestavideojuego.entity.js.map