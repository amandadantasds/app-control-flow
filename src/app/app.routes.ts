import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { Component } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProduroDetalheComponent } from './produro-detalhe/produro-detalhe.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

export const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'cliente', component: ClienteComponent},
  {path : 'control-flow', component: ControlFlowComponent},
  {path : 'produto/:id', component: ProduroDetalheComponent},
  {path : 'categorias', component: CategoriasComponent},
  {path : '**', component: NotFoundComponent}
];
