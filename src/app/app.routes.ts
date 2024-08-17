import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { PaginaDisciplinaComponent } from './component/pages/pagina-disciplina/pagina-disciplina.component';
import { PaginaMetodologiasComponent } from './component/pages/pagina-metodologias/pagina-metodologias.component';
import { PaginaQuemSomosComponent } from './component/pages/pagina-quem-somos/pagina-quem-somos.component';
import { PaginaPlanosEstudoComponent } from './component/pages/pagina-planos-estudo/pagina-planos-estudo.component';
import { PaginaSimuladosComponent } from './component/pages/pagina-simulados/pagina-simulados.component';
import { PaginaDisciplinasComponent } from './component/pages/pagina-disciplinas/pagina-disciplinas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'disciplina/:id', component: PaginaDisciplinaComponent },
    { path: 'disciplinas', component: PaginaDisciplinasComponent},
    { path: 'metodologias', component: PaginaMetodologiasComponent },
    { path: 'quem-somos', component: PaginaQuemSomosComponent },
    { path: 'planos-estudo', component: PaginaPlanosEstudoComponent },
    { path: 'simulados', component: PaginaSimuladosComponent },
    
];
