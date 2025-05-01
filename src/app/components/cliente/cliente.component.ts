import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clienteForm : FormGroup = new FormGroup({})
  cliente: Cliente [] = [];
  clienteIdEdicao:string | null = null

  constructor (
    private ClienteService:ClienteService,
    private formBuilder:FormBuilder){
      this.clienteForm = formBuilder.group({nome:['', Validators.required], telefone:['']})
  }

  list():void{
    this.cliente= this.ClienteService.list()
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

  save(){
    if(this.clienteForm.valid){
      const formData = this.clienteForm.value //pega os dados do form

      if(this.clienteIdEdicao){
        const clienteUpdate:Cliente = {
          id: this.clienteIdEdicao,
          nome:formData.nome,
          telefone: formData.telefone
        }
        this.ClienteService.update(this.clienteIdEdicao, clienteUpdate);
        this.clienteIdEdicao = null
        alert('Cliente atualizado com sucesso')
      }
      else{
      const clienteAdd: Cliente ={
        id: this.generateRandomString(6), //gera o id automaticamente
        nome: formData.nome, //pega o nome do form
        telefone: formData.telefone //pega o telefone do form
      }
      this.ClienteService.add(clienteAdd) //Chama o service para inserir
      alert('Cadastro realizado com sucesso') //retorna uma mensagem para o usuário
      this.list() //adiciona na lista
    }
  }
    else{
      alert('Preencha os campos obrigatórios!')
    }
    this.clienteForm.reset() //limpa o form
  }

  editar(id:string):void{

    //busca cliente pelo id informado
    const cliente = this.ClienteService.list().find(c => c.id == id)

    if(cliente){
      this.clienteIdEdicao = cliente.id
      this.clienteForm.patchValue(
        {
          nome: cliente.nome,
          telefone: cliente.telefone
        }
      )
    }
  }

}
