import { Routes } from '@angular/router';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

export const routes: Routes = [
    {
        path: '',
        component: TasksPageComponent
    },
    {
        path: ':id',
        component: DetailsPageComponent
    }
];
