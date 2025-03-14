"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CestaModule = void 0;
const common_1 = require("@nestjs/common");
const cesta_service_1 = require("./cesta.service");
const cesta_controller_1 = require("./cesta.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cesta_entity_1 = require("./entities/cesta.entity");
const cliente_entity_1 = require("src/cliente/entities/cliente.entity");
let CestaModule = class CestaModule {
};
exports.CestaModule = CestaModule;
exports.CestaModule = CestaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cesta_entity_1.Cesta, cliente_entity_1.Cliente])],
        controllers: [cesta_controller_1.CestaController],
        providers: [cesta_service_1.CestaService],
        exports: [cesta_service_1.CestaService]
    })
], CestaModule);
//# sourceMappingURL=cesta.module.js.map