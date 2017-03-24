import { MegapotekPage } from './app.po';

describe('megapotek App', () => {
  let page: MegapotekPage;

  beforeEach(() => {
    page = new MegapotekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
