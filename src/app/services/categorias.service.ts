import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/Categorias';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

    private apiUrl = 'http://localhost:3000/categorias'; //URL da API

    categorias: Categoria[] = []

    //Injeção de dependência do http
    constructor(private http:HttpClient) {

    }

    list() : Observable<Categoria[]>{
      return this.http.get<Categoria[]>(this.apiUrl) as Observable<Categoria[]>
    }

    add(categoria: Categoria) {
      const httpHeaders =
      {
        headers: {
          'Content-type': 'application/json',
        },
      };

      return this.http.post(this.apiUrl, categoria, httpHeaders);
    }
}
