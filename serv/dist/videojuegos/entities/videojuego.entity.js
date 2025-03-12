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
exports.Videojuego = void 0;
const cestavideojuego_entity_1 = require("../../cestavideojuego/entities/cestavideojuego.entity");
const typeorm_1 = require("typeorm");
let Videojuego = class Videojuego {
    idproducto;
    nombre;
    precio;
    descripcion;
    cestaVideojuegos;
};
exports.Videojuego = Videojuego;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Videojuego.prototype, "idproducto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Videojuego.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Videojuego.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Videojuego.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cestavideojuego_entity_1.Cestavideojuego, (cv) => cv.videojuegos),
    __metadata("design:type", Array)
], Videojuego.prototype, "cestaVideojuegos", void 0);
exports.Videojuego = Videojuego = __decorate([
    (0, typeorm_1.Entity)()
], Videojuego);
//# sourceMappingURL=videojuego.entity.js.map