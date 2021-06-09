import { Selector, t } from 'testcafe';

export class ShoppingCartPage {
  completeAdoptionButton = Selector('[type="submit"]');

  adoptAnotherPuppyButton = Selector(
    '[type="submit"][value="Adopt Another Puppy"]',
  );

  homePuppyHeader = Selector('#notice');
  async clickCompleteAdoptionButton() {
    return await t.click(this.completeAdoptionButton);
  }

  async clickAdoptAnotherPuppyButton() {
    return await t.click(this.adoptAnotherPuppyButton);
  }

  async typeTextHomePuppyHeader(value: String) {
    return t.expect(this.homePuppyHeader);
  }
}
