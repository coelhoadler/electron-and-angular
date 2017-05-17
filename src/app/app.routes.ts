import { RouterModule, Routes } from '@angular/router';
import { BookcaseComponent } from './bookcase/bookcase.component';
import { Rota1Component } from './rota1/rota1.component';
import { Rota2Component } from './rota2/rota2.component';

const appRoutes : Routes = [
    { path: 'bookcase', component : BookcaseComponent },
    { path: 'rota1', component : Rota1Component },
    { path: 'rota2', component : Rota2Component },
    { path: '**', component : BookcaseComponent }
];

export const routing = RouterModule.forRoot(appRoutes);