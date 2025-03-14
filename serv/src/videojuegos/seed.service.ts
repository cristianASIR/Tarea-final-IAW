import { Injectable, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { VideojuegoService } from './videojuegos.service';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(private readonly videojuegoService: VideojuegoService) {}

  async onModuleInit() {
    // Verifica si ya existen registros para evitar sembrar de nuevo
    const existingVideojuegos = await this.videojuegoService.findAll();
    if (existingVideojuegos.length > 0) {
      console.log('Ya existen videojuegos en la base de datos. Seed omitido.');
      return;
    }

    try {
      // Construye la ruta al archivo videojuegos.json usando process.cwd()
      // Se asume que el archivo se encuentra en: src/videojuegos/videojuegos.json
      const filePath = path.join(process.cwd(), 'src', 'videojuegos', 'videojuegos.json');
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      let videojuegos = JSON.parse(fileContents);

      // La entidad Videojuego requiere la propiedad "descripcion"
      // Si no se encuentra en el JSON, se asigna un valor por defecto (cadena vacía)
      videojuegos = videojuegos.map(videojuego => ({
        ...videojuego,
        descripcion: videojuego.descripcion || ''
      }));

      // Inserta cada videojuego en la base de datos usando el servicio
      for (const videojuego of videojuegos) {
        await this.videojuegoService.create(videojuego);
      }

      console.log('Videojuegos importados correctamente.');
    } catch (error) {
      console.error('Error al cargar los videojuegos:', error);
    }
  }
}
