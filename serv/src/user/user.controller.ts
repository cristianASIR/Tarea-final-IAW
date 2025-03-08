import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt/jwt.guard";
import { UsuarioService } from "./user.service";

@Controller('usuario')
export class UserController {
  constructor(private userService: UsuarioService) { }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
