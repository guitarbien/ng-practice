import { browser, by, element } from 'protractor';

export class DemoPage {
  navigateTo(): DemoPage {
    browser.get('/');
    return this;
  }

  getButton(): any {
    return element(by.id('btn'));
  }

  getCheckbox(): any {
    return element(by.id('chk'));
  }

  setChecked(): DemoPage {
    element(by.id('chk')).click();
    return this;
  }
}
