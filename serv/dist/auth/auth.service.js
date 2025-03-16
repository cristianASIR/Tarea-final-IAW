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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const cliente_service_1 = require("../cliente/cliente.service");
let AuthService = class AuthService {
    clienteService;
    jwtService;
    constructor(clienteService, jwtService) {
        this.clienteService = clienteService;
        this.jwtService = jwtService;
    }
    async validateUser(loginDto) {
        console.log("📌 Buscando usuario con email:", loginDto.email.trim().toLowerCase());
        const user = await this.clienteService.findByEmail(loginDto.email.trim().toLowerCase());
        if (!user) {
            console.error("❌ Usuario no encontrado en la base de datos.");
            return null;
        }
        console.log("✅ Usuario encontrado en BD:", user);
        if (!loginDto.password || !user.password) {
            console.error("❌ Error: La contraseña ingresada o almacenada en BD es inválida.");
            return null;
        }
        console.log("🔑 Comparando contraseña ingresada:", loginDto.password);
        console.log("🔒 Hash en BD:", user.password);
        const isMatch = await bcrypt.compare(loginDto.password, user.password);
        console.log("🔍 ¿Contraseña coincide?:", isMatch);
        if (!isMatch) {
            console.error("❌ Contraseña incorrecta.");
            return null;
        }
        console.log("✅ Contraseña correcta, autenticando usuario...");
        const { password, ...result } = user;
        return result;
    }
    async login(user) {
        const payload = { email: user.email, sub: user.idcliente };
        return {
            token: this.jwtService.sign(payload),
        };
    }
    async register(createClienteDto) {
        const { nombre, email, password, apellido, direccion, telefono } = createClienteDto;
        console.log("🔑 Contraseña antes de hashear:", password);
        if (!password || password.trim() === "") {
            console.error("❌ Error: La contraseña no puede estar vacía.");
            throw new Error("La contraseña es obligatoria.");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("🔒 Hash generado correctamente:", hashedPassword);
        const user = await this.clienteService.create({
            nombre,
            email,
            password: hashedPassword,
            apellido,
            direccion,
            telefono
        });
        return this.login(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map