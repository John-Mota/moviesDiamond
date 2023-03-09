import { Routes } from '@angular/router'
import { DetalhesComponent } from './detalhes/detalhes.component'

import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'



export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    {path: 'detalhes/:id', component: DetalhesComponent}
]