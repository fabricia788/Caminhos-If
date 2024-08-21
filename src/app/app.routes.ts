import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { PaginaDisciplinaComponent } from './component/pages/pagina-disciplina/pagina-disciplina.component';
import { PaginaMetodologiasComponent } from './component/pages/pagina-metodologias/pagina-metodologias.component';
import { PaginaQuemSomosComponent } from './component/pages/pagina-quem-somos/pagina-quem-somos.component';
import { PaginaPlanosEstudoComponent } from './component/pages/pagina-planos-estudo/pagina-planos-estudo.component';
import { PaginaSimuladosComponent } from './component/pages/pagina-simulados/pagina-simulados.component';
import { PaginaDisciplinasComponent } from './component/pages/pagina-disciplinas/pagina-disciplinas.component';
import { PaginaConteudoDisciplinaComponent } from './component/pages/pagina-conteudo-disciplina/pagina-conteudo-disciplina.component';
import { PaginaLoginComponent } from './component/pages/pagina-login/pagina-login.component';
import { PaginaCadastroComponent } from './component/pages/pagina-cadastro/pagina-cadastro.component';
import { PaginaPlanoEstudoComponent } from './component/pages/pagina-plano-estudo/pagina-plano-estudo.component';
import { PaginaSimuladoComponent } from './component/pages/pagina-simulado/pagina-simulado.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'disciplina/:id', component: PaginaDisciplinaComponent },
    { path: 'disciplinas', component: PaginaDisciplinasComponent},
    { path: 'metodologias', component: PaginaMetodologiasComponent },
    { path: 'quem-somos', component: PaginaQuemSomosComponent },
    { path: 'planos-estudo', component: PaginaPlanosEstudoComponent },
    { path: 'simulados', component: PaginaSimuladosComponent },
    { path: 'conteudo/:id', component: PaginaConteudoDisciplinaComponent },
    { path: 'login', component: PaginaLoginComponent },
    { path: 'cadastro', component: PaginaCadastroComponent },
    { path: 'plano-estudo/:id', component: PaginaPlanoEstudoComponent },
    { path: 'simulado/:id', component: PaginaSimuladoComponent },

];
