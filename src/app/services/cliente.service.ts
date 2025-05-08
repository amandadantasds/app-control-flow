import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes'; //URL da API

  clientes: Cliente[] = []

  //Injeção de dependência do http
  constructor(private http:HttpClient) {

  }

  list() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl) as Observable<Cliente[]>
  }

 // list(): Cliente[] {
   // return this.clientes;
  //}

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
    const httpHeaders =
    {
      headers: {
        'Content-type': 'application/json',
      },
    };

    return this.http.post(this.apiUrl, cliente, httpHeaders);
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
