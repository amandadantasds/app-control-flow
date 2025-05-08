import { Categoria } from '../../interfaces/Categorias';
import { CategoriasService } from './../../services/categorias.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  categorias: Categoria [] = [];

  constructor (private CategoriasService:CategoriasService){}

  list():void{
    this.CategoriasService.list().subscribe((resposta) => (this.categorias = resposta))
  }

  //método que executa ao iniciar a página
  ngOnInit():void{
    this.list()
  }

  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
