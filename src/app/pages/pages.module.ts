import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
// modulos
import { SharedModule } from '../shared/shared.module';

// RUTAS
import { PAGES_ROUTES } from './pages.routes';


// components

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

@NgModule({
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ],
    exports: [
        DashboardComponent,
        GraficosComponent,
        ProgressComponent,
        PagesComponent
    ],
    declarations: [
        DashboardComponent,
        GraficosComponent,
        ProgressComponent,
        PagesComponent,
        IncrementadorComponent
    ],
    providers: [

    ],
})
export class PagesModule { }
