import { Routes } from "@angular/router";
import { ContentComponent } from "../content/content/content.component";
import { UnitComponent } from "./unit.component";

export default [
    {
        path: '',
        component: ContentComponent
    },
    {
        path: 'unit/:id',
        component: UnitComponent
    }
] as Routes;