"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVideojuegoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_videojuego_dto_1 = require("./create-videojuego.dto");
class UpdateVideojuegoDto extends (0, mapped_types_1.PartialType)(create_videojuego_dto_1.CreateVideojuegoDto) {
}
exports.UpdateVideojuegoDto = UpdateVideojuegoDto;
//# sourceMappingURL=update-videojuego.dto.js.map