
import { DemoPage } from './app.po';

describe(`Homework03 驗收測試`, () => {
  let page: DemoPage;

  beforeEach(() => {
    page = new DemoPage();
  });

  it(`應該要有一個按鈕和一個checkbox`, () => {
    page.navigateTo();

    expect(page.getButton().isPresent()).toBe(true);
    expect(page.getCheckbox().isPresent()).toBe(true);
  });

  it(`按鈕預設是disabled`, () => {
    page.navigateTo();
    expect(page.getButton().isEnabled()).toBe(false);
  });

  it(`checkbox預設沒打勾`, () => {
    page.navigateTo();
    expect(page.getCheckbox().isSelected()).toBe(false);
  });

  it(`checkbox打勾後按鈕變為enable`, () => {
    page.navigateTo()
      .setChecked();

    expect(page.getCheckbox().isSelected()).toBe(true);
    expect(page.getButton().isEnabled()).toBe(true);
  });
});
