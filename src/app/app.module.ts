import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire' ;
import {AngularFireAuthModule} from '@angular/fire/auth' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PantallaPrincipalScreenComponent } from './screens/pantalla-principal-screen/pantalla-principal-screen.component';
import { CuentaScreenComponent } from './screens/cuenta-screen/cuenta-screen.component';

import { DcScreenComponent } from './screens/dc-screen/dc-screen.component';
import { MarvelScreenComponent } from './screens/marvel-screen/marvel-screen.component';
import { AnimeScreenComponent } from './screens/anime-screen/anime-screen.component';
import { ComicsScreenComponent } from './screens/comics-screen/comics-screen.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { DetalleFiguraScreenComponent } from './screens/detalle-figura-screen/detalle-figura-screen.component';
import { ComentarioProductoComponent } from './components/comentario-producto/comentario-producto.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PantallaPrincipalScreenComponent,
    CuentaScreenComponent,
    DcScreenComponent,
    MarvelScreenComponent,
    AnimeScreenComponent,
    ComicsScreenComponent,
    ProductoCardComponent,
    DetalleFiguraScreenComponent,
    ComentarioProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
