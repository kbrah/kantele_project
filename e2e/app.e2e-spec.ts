import { KanteleProjectPage } from './app.po';

describe('kantele-project App', function() {
  let page: KanteleProjectPage;

  beforeEach(() => {
    page = new KanteleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
