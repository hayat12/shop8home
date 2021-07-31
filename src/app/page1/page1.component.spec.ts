import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Page1 } from './page1.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Page1
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Page1);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'landing-page'`, () => {
    const fixture = TestBed.createComponent(Page1);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('landing-page');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Page1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('landing-page app is running!');
  });
});
