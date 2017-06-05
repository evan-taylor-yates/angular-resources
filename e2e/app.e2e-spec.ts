import { MyAppsPage } from './app.po';

describe('my-apps App', () => {
  let page: MyAppsPage;

  beforeEach(() => {
    page = new MyAppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
