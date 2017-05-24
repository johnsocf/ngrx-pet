import { DakotaPage } from './app.po';

describe('dakota App', () => {
  let page: DakotaPage;

  beforeEach(() => {
    page = new DakotaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
