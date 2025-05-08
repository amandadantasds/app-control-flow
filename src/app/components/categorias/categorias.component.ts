import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Categoria } from '../../interfaces/Categorias';
import { CategoriasService } from './../../services/categorias.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  categorias: Categoria [] = [];
  categoriaForm : FormGroup = new FormGroup({})
  categoriaIdEdicao:string | null = null


  constructor (private CategoriasService:CategoriasService,
    private formBuilder:FormBuilder){
      this.categoriaForm = formBuilder.group({nome:['', Validators.required], descricao:[''], ativa:['', Validators.required]})
  }

  list():void{
    this.CategoriasService.list().subscribe((resposta) => (this.categorias = resposta))
  }

  //método que executa ao iniciar a página
  ngOnInit():void{
    this.list()
  }

  generateRandomString(length: number): string  {
    const characters = '0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  save(){
    if(this.categoriaForm.valid){
      const formData = this.categoriaForm.value //pega os dados do form

      const  categoriaAdd: Categoria ={
        id: parseInt(this.generateRandomString(6)), //gera o id automaticamente
        nome: formData.nome, //pega o nome do form
        descricao: formData.descricao, //pega o telefone do form
        ativa: formData.ativa
      }
      this.CategoriasService.add(categoriaAdd).subscribe() //Chama o service para inserir
      alert('Cadastro realizado com sucesso') //retorna uma mensagem para o usuário
    }
    else{
      alert('Preencha os campos obrigatórios!')
    }
    this.categoriaForm.reset() //limpa o form
    this.list() //adiciona na lista
  }
}
