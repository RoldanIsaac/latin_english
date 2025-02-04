import { Routes } from '@angular/router';
import { WelcomeComponent } from './modules/landing/welcome/welcome.component';
import { HomeComponent } from './modules/latin_english/home/home.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { UnitComponent } from './modules/latin_english/unit/unit.component';
import { ContentComponent } from './modules/latin_english/content/content/content.component';

export const routes: Routes = [

    // Redirect empty path to '/welcome'
    {path: '', pathMatch : 'full', redirectTo: 'app/welcome'},

    {path: 'app', pathMatch : 'full', redirectTo: 'app/welcome'},

    // Auth routes for guests
    {
        path: 'app',
        component: AppLayoutComponent,
        // resolve: {
        //     initialData: initialDataResolver
        // },
        // data: {
        //     layout: 'sho'
        // },
        children: [
            { 
                path: 'welcome', 
                component: WelcomeComponent },
            { 
                path: 'home', 
                component: HomeComponent },
            { 
                path: 'content', 
                component: ContentComponent,
            },
            { 
                path: 'content/unit', 
                loadChildren: () => import('./modules/latin_english/unit/unit.routes')
            },
        ]
    },
]
