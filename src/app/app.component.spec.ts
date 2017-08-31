import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { isUndefined } from 'util';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let target: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  });

  describe(`homework03 整合測試`, () => {
    it(`isChecked 改變 checkbox 也會改變 (ngModel)`, () => {
      fixture.detectChanges();
      htmlElement = debugElement.query(By.css('#chk')).nativeElement;

      (<HTMLInputElement>htmlElement).click();

      expect(component.isChecked).toBe(true);
    });

    it(`按鈕的狀態是依據 isChecked field`, () => {
      component.isChecked = true;

      fixture.detectChanges();
      htmlElement = debugElement.query(By.css('#btn')).nativeElement;

      expect((<HTMLButtonElement>htmlElement).disabled).toBe(false);
    });
  });
});
