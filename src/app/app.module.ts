import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { LoginComponent } from './componentes/login/login.component';
import { InfoRegistroComponent } from './componentes/info-registro/info-registro.component';
import { FormRegistroComponent } from './componentes/form-registro/form-registro.component';
import { SeguimientoPedidoComponent } from './componentes/seguimiento-pedido/seguimiento-pedido.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { MiCuentaComponent } from './componentes/mi-cuenta/mi-cuenta.component';
import { CarroCompraComponent } from './componentes/carro-compra/carro-compra.component';
import { ProductoCardComponent } from './componentes/producto-card/producto-card.component';
import { ProductosCarroComponent } from './componentes/productos-carro/productos-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    PiePaginaComponent,
    LoginComponent,
    InfoRegistroComponent,
    FormRegistroComponent,
    SeguimientoPedidoComponent,
    ProductoComponent,
    NotFoundComponent,
    MiCuentaComponent,
    CarroCompraComponent,
    ProductoCardComponent,
    ProductosCarroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
