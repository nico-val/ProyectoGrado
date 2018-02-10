import { ClienteFrontendPage } from './app.po';

describe('cliente-frontend App', () => {
  let page: ClienteFrontendPage;

  beforeEach(() => {
    page = new ClienteFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
