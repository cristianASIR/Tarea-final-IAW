"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CestavideojuegoModule = void 0;
const common_1 = require("@nestjs/common");
const cestavideojuego_service_1 = require("./cestavideojuego.service");
const cestavideojuego_controller_1 = require("./cestavideojuego.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cestavideojuego_entity_1 = require("./entities/cestavideojuego.entity");
const cesta_entity_1 = require("../cesta/entities/cesta.entity");
const videojuego_entity_1 = require("../videojuegos/entities/videojuego.entity");
let CestavideojuegoModule = class CestavideojuegoModule {
};
exports.CestavideojuegoModule = CestavideojuegoModule;
exports.CestavideojuegoModule = CestavideojuegoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cestavideojuego_entity_1.Cestavideojuego, cesta_entity_1.Cesta, videojuego_entity_1.Videojuego])],
        controllers: [cestavideojuego_controller_1.CestavideojuegoController],
        providers: [cestavideojuego_service_1.CestavideojuegoService],
    })
], CestavideojuegoModule);
//# sourceMappingURL=cestavideojuego.module.js.map