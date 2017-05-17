import { Component } from '@angular/core';

@Component({
     moduleId : module.id
    ,selector : 'rota1'
    ,templateUrl : './rota1.component.html'
})
export class Rota1Component {

    obj: Object[] = [];

    constructor() {
        console.log("Entrando no construtor da rota 1");
    }

}