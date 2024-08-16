import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { DisciplinasPaginaComponent } from './component/pages/disciplinas-pagina/disciplinas-pagina.component';
import { MetodologiasPaginaComponent } from './component/pages/metodologias-pagina/metodologias-pagina.component';
import { QuemSomosPaginaComponent } from './component/pages/quem-somos-pagina/quem-somos-pagina.component';
import { PlanosEstudosPaginaComponent } from './component/pages/planos-estudos-pagina/planos-estudos-pagina.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'disciplinas', component: DisciplinasPaginaComponent },
    {path: 'metodologias', component: MetodologiasPaginaComponent },
    {path: 'quem-somos', component: QuemSomosPaginaComponent },
    {path: 'planos-estudos', component: PlanosEstudosPaginaComponent },
];
