import { Routes } from "@angular/router";
import { UnitComponent } from "./unit.component";
import { LessonComponent } from "../lesson/lesson.component";

export default [
    {
        path: '',
        component: UnitComponent
    },
    {
        path: ':id',
        component: UnitComponent,
    },
    {
        path: ':id/lesson/:id',
        component: LessonComponent,
    }
] as Routes;