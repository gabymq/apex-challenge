import { Selector, t } from 'testcafe';

export class PuppyDetailsPage {
  adoptMeButton = Selector('[type="submit"]');

  async clickAdoptMeButton() {
    return await t.click(this.adoptMeButton);
  }
}
