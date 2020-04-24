import { TestherokuPage } from './app.po';

describe('testheroku App', function() {
  let page: TestherokuPage;

  beforeEach(() => {
    page = new TestherokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
