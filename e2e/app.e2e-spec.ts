import { CorevaluesappPage } from './app.po';

describe('corevaluesapp App', function() {
  let page: CorevaluesappPage;

  beforeEach(() => {
    page = new CorevaluesappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
