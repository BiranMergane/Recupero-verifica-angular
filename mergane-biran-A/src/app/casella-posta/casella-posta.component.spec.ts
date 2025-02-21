import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasellaPostaComponent } from './casella-posta.component';

describe('CasellaPostaComponent', () => {
  let component: CasellaPostaComponent;
  let fixture: ComponentFixture<CasellaPostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasellaPostaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasellaPostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
