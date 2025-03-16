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
exports.CestavideojuegoController = void 0;
const common_1 = require("@nestjs/common");
const cestavideojuego_service_1 = require("./cestavideojuego.service");
const create_cestavideojuego_dto_1 = require("./dto/create-cestavideojuego.dto");
const update_cestavideojuego_dto_1 = require("./dto/update-cestavideojuego.dto");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
let CestavideojuegoController = class CestavideojuegoController {
    cestavideojuegoService;
    constructor(cestavideojuegoService) {
        this.cestavideojuegoService = cestavideojuegoService;
    }
    create(createCestavideojuegoDto) {
        return this.cestavideojuegoService.create(createCestavideojuegoDto);
    }
    findAll() {
        return this.cestavideojuegoService.findAll();
    }
    findOne(id) {
        return this.cestavideojuegoService.findOne(+id);
    }
    update(id, updateCestavideojuegoDto) {
        return this.cestavideojuegoService.update(+id, updateCestavideojuegoDto);
    }
    remove(id) {
        return this.cestavideojuegoService.remove(+id);
    }
};
exports.CestavideojuegoController = CestavideojuegoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cestavideojuego_dto_1.CreateCestavideojuegoDto]),
    __metadata("design:returntype", void 0)
], CestavideojuegoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CestavideojuegoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CestavideojuegoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cestavideojuego_dto_1.UpdateCestavideojuegoDto]),
    __metadata("design:returntype", void 0)
], CestavideojuegoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CestavideojuegoController.prototype, "remove", null);
exports.CestavideojuegoController = CestavideojuegoController = __decorate([
    (0, common_1.Controller)('cestavideojuego'),
    __metadata("design:paramtypes", [cestavideojuego_service_1.CestavideojuegoService])
], CestavideojuegoController);
//# sourceMappingURL=cestavideojuego.controller.js.map