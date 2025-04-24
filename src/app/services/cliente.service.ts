import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  clientes: Cliente[] = [
    {
      id: 'abc',
      nome: 'Amanda',
      telefone: '12',
    },
    { id: 'adc', nome: 'Maria' },
  ];

  constructor() {}

  list(): Cliente[] {
    return this.clientes;
  }

  remove(id: String) {
    const cliente = this.clientes.find(
      (c) => c.id == id //busca clientes na lista
    );

    if (cliente) {
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);
    }
  }

  add(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  update(id: string, cliente: Cliente) {
    const index = this.clientes.findIndex((c) => c.id == id);

    if (index !== -1) {
      this.clientes[index] = {
        ...this.clientes[index],
        ...cliente,
      };
    }
  }
}
