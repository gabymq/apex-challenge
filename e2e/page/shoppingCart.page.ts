import { Selector, t } from 'testcafe';

export class ShoppingCartPage {
  completeAdoptionButton = Selector('[type="submit"]');

  async clickCompleteAdoptionButton() {
    return await t.click(this.completeAdoptionButton);
  }
}
