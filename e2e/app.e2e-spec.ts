import { GridiumTestPage } from './app.po';

describe('gridium-test App', () => {
  let page: GridiumTestPage;

  beforeEach(() => {
    page = new GridiumTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
