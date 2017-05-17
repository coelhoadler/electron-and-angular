import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'rota2',
    templateUrl: './rota2.component.html'
})
export class Rota2Component {

    obj: Object[] = [];

    constructor() {
        console.log("Entrando no construtor da rota 2");
    }

}