import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideojuegosModule } from './videojuegos/videojuegos.module';
import { ClienteModule } from './cliente/cliente.module';
import { CestaModule } from './cesta/cesta.module';
import { CestavideojuegoModule } from './cestavideojuego/cestavideojuego.module';
import { AuthModule } from './src/auth/auth.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}),
    TypeOrmModule.forRoot({
      //Utilizo solo 1 base de datos, no hay obligación de espeficicar a cual tiene que insertar los datos si esta está activa
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.DBUSERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      //Se utiliza la sincronización de los datos cuando estamos en desarrollo
      //Si esta en producción se mantiene desactivada para no provocar conflicto
      synchronize: true
    }),
    VideojuegosModule,
    ClienteModule,
    CestaModule,
    CestavideojuegoModule,
    AuthModule,
    
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
