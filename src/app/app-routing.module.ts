import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoRegistroComponent } from './componentes/info-registro/info-registro.component';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormRegistroComponent } from './componentes/form-registro/form-registro.component';
import { SeguimientoPedidoComponent } from './componentes/seguimiento-pedido/seguimiento-pedido.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { MiCuentaComponent } from './componentes/mi-cuenta/mi-cuenta.component';
import { CarroCompraComponent } from './componentes/carro-compra/carro-compra.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full',
  },
  {
    path: 'InfoRegistro',
    component: InfoRegistroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path:'formRegistro',
    component: FormRegistroComponent,
    pathMatch: 'full'
  },
  {
    path: 'seguimientoPedido',
    component: SeguimientoPedidoComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'MiCuenta',
    component: MiCuentaComponent
  },
  {
    path: 'carrocompra',
    component:CarroCompraComponent,
    pathMatch: 'full'
  }
]; 

imports: [
  BrowserModule
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
