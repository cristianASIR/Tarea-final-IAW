"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCestaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cesta_dto_1 = require("./create-cesta.dto");
class UpdateCestaDto extends (0, mapped_types_1.PartialType)(create_cesta_dto_1.CreateCestaDto) {
}
exports.UpdateCestaDto = UpdateCestaDto;
//# sourceMappingURL=update-cesta.dto.js.map