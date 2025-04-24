import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente';
import { ReactiveFormsModule, FormBuilder,Validator, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clienteForm : FormGroup = new FormGroup({})
  cliente: Cliente [] = []

  constructor (
    private ClienteService:ClienteService,
    private formBuilder:FormBuilder){
      this.clienteForm = formBuilder.group({nome:['', Validators.required]})
  }

  list():void{
    this.cliente= this.ClienteService.list()
  }
}
