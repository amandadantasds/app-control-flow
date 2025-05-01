import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produro-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './produro-detalhe.component.html',
  styleUrl: './produro-detalhe.component.css'
})
export class ProduroDetalheComponent {
  id:number = 0
  constructor(private route: ActivatedRoute){
    this.getProdutoById();
  }

  getProdutoById():void{
    const idParametro = this.route.snapshot.paramMap.get('id')
      this.id = idParametro ? parseInt(idParametro) : 0
  }

}
