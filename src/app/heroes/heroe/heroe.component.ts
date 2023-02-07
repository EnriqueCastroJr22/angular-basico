import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['./../../app.component.css']
})
export class HeroeComponent {
    nombre: string = 'Iroman';
    edad  : number = 45


    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    get nombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase();
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
    
}