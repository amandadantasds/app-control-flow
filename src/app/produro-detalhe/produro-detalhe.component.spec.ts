import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduroDetalheComponent } from './produro-detalhe.component';

describe('ProduroDetalheComponent', () => {
  let component: ProduroDetalheComponent;
  let fixture: ComponentFixture<ProduroDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduroDetalheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduroDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
