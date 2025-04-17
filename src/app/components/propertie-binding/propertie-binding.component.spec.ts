import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertieBindingComponent } from './propertie-binding.component';

describe('PropertieBindingComponent', () => {
  let component: PropertieBindingComponent;
  let fixture: ComponentFixture<PropertieBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertieBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertieBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
