import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 10000
        }
      ];

    constructor(){
    } 

    get personajes(): Personaje [] {
        return[...this._personajes];
    }

    agregarPersonajes( personaje: Personaje) {
        this._personajes.push( personaje );
    }



}