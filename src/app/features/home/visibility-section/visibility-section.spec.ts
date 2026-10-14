import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisibilitySection } from './visibility-section';

describe('VisibilitySection', () => {
  let component: VisibilitySection;
  let fixture: ComponentFixture<VisibilitySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisibilitySection],
    }).compileComponents();

    fixture = TestBed.createComponent(VisibilitySection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
