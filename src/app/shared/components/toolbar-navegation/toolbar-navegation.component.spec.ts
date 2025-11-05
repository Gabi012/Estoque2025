import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarNavegationComponent } from './toolbar-navegation.component';

describe('ToolbarNavegationComponent', () => {
  let component: ToolbarNavegationComponent;
  let fixture: ComponentFixture<ToolbarNavegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarNavegationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
