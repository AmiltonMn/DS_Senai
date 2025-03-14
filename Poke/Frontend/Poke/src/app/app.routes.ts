import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'pokedex',
        component: PokedexPageComponent
    }
];
