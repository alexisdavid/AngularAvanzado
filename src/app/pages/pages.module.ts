import { NgModule } from '@angular/core';

// modulos
import { SharedModule } from '../shared/shared.module';

// RUTAS
import { PAGES_ROUTES } from './pages.routes';


// components

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

@NgModule({
    imports: [
        SharedModule,
        PAGES_ROUTES
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
        PagesComponent
    ],
    providers: [

    ],
})
export class PagesModule { }
