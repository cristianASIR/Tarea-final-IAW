// src/cliente/seed-cliente.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class SeedClienteService implements OnModuleInit {
  constructor(private readonly clienteService: ClienteService) {}

  async onModuleInit() {
    // Comprueba si ya existen clientes en la base de datos
    const clientes = await this.clienteService.findAll();
    if (clientes.length > 0) {
      console.log('Ya existen clientes en la base de datos. Seed omitido.');
      return;
    }

    // Define los datos de los clientes a insertar
    const seedClientes: CreateClienteDto[] = [
      {
        nombre: 'Cristian',
        apellido: 'Cortes',
        email: 'Cristian@gmail.com',
        telefono: '+34123456789',
        direccion: 'C/ Cuara Valera, 1',
        password: 'password123'
      },
      {
        nombre: 'Juan Luis',
        apellido: 'Sanchez',
        email: 'juanluis@gmail.com',
        telefono: '+34123456789',
        direccion: 'C/ Cuara Valera, 1',
        password: 'password123'
      },
      {
        nombre: 'Jazmin',
        apellido: 'Carlos',
        email: 'Jazmin@gmail.com',
        telefono: '+34123456789',
        direccion: 'C/ Cuara Valera, 1',
        password: 'password123'
      },
      {
        nombre: 'Victor',
        apellido: 'Alvarez',
        email: 'Victor@gmail.com',
        telefono: '+34123456789',
        direccion: 'C/ Cuara Valera, 1',
        password: 'password123'
      },
    ];
    
    try {
      for (const clienteDto of seedClientes) {
        await this.clienteService.create(clienteDto);
        console.log(`Cliente ${clienteDto.email} insertado correctamente.`);
      }
    } catch (error) {
      console.error('Error al insertar cliente en el seed:', error);
    }
  }
}
