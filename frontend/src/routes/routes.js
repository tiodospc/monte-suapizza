import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Inicio from '../pages/Inicio'
import AdicionarIngredientes from '../pages/AdicionarIngredientes'
import FinalizarPedido from '../pages/FinalizarPedido'
import PedidoFinalizado from '../pages/PedidoFinalizado'

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Inicio} exact />
          <Route path="/adicionar-ingredientes" component={AdicionarIngredientes} exact />
          <Route path="/finalizar-pedido" component={FinalizarPedido} exact/>
          <Route path="/pedido-finalizado" component={PedidoFinalizado} exact/>
        </Switch>
      </BrowserRouter>
    );
  }