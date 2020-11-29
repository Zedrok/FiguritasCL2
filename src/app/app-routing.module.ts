import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeScreenComponent } from './screens/anime-screen/anime-screen.component';
import { ComicsScreenComponent } from './screens/comics-screen/comics-screen.component';
import { CuentaScreenComponent } from './screens/cuenta-screen/cuenta-screen.component';
import { DcScreenComponent } from './screens/dc-screen/dc-screen.component';
import { DetalleFiguraScreenComponent } from './screens/detalle-figura-screen/detalle-figura-screen.component';
import { MarvelScreenComponent } from './screens/marvel-screen/marvel-screen.component';
import { PantallaPrincipalScreenComponent } from './screens/pantalla-principal-screen/pantalla-principal-screen.component';
import { CarroComprasScreenComponent } from './screens/carro-compras-screen/carro-compras-screen.component';




const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  /*{ path: '**', redirectTo: '/inicio', pathMatch: 'full' },*/
  { path: 'inicio', component: PantallaPrincipalScreenComponent },
  { path: 'dc', component: DcScreenComponent },
  { path: 'marvel', component: MarvelScreenComponent },
  { path: 'cuenta', component: CuentaScreenComponent },
  { path: 'carrito', component: CarroComprasScreenComponent },
  { path: 'anime', component: AnimeScreenComponent },
  { path: 'comics', component: ComicsScreenComponent },
  { path: 'detalleFigurita/:id', component: DetalleFiguraScreenComponent },
  { path: 'Login', loadChildren: () => import('./modules/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'Register', loadChildren: () => import('./modules/auth/register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

