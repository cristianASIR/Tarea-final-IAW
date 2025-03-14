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
exports.VideojuegosController = void 0;
const common_1 = require("@nestjs/common");
const create_videojuego_dto_1 = require("./dto/create-videojuego.dto");
const update_videojuego_dto_1 = require("./dto/update-videojuego.dto");
const videojuegos_service_1 = require("./videojuegos.service");
const jwt_guard_1 = require("src/auth/jwt/jwt.guard");
let VideojuegosController = class VideojuegosController {
    videojuegosService;
    constructor(videojuegosService) {
        this.videojuegosService = videojuegosService;
    }
    create(createVideojuegoDto) {
        return this.videojuegosService.create(createVideojuegoDto);
    }
    findAll() {
        return this.videojuegosService.findAll();
    }
    findOne(id) {
        return this.videojuegosService.findOne(+id);
    }
    update(id, updateVideojuegoDto) {
        return this.videojuegosService.update(+id, updateVideojuegoDto);
    }
    remove(id) {
        return this.videojuegosService.remove(+id);
    }
};
exports.VideojuegosController = VideojuegosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_videojuego_dto_1.CreateVideojuegoDto]),
    __metadata("design:returntype", void 0)
], VideojuegosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VideojuegosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideojuegosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_videojuego_dto_1.UpdateVideojuegoDto]),
    __metadata("design:returntype", void 0)
], VideojuegosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideojuegosController.prototype, "remove", null);
exports.VideojuegosController = VideojuegosController = __decorate([
    (0, common_1.Controller)('videojuegos'),
    __metadata("design:paramtypes", [videojuegos_service_1.VideojuegoService])
], VideojuegosController);
//# sourceMappingURL=videojuegos.controller.js.map