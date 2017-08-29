import { HiperionPage } from './app.po';

describe('hiperion App', () => {
  let page: HiperionPage;

  beforeEach(() => {
    page = new HiperionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
