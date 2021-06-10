import { Selector, t } from 'testcafe';

export class ShoppingCartPage {
  completeAdoptionButton = Selector('[type="submit"]');

  adoptAnotherPuppyButton = Selector(
    '[type="submit"][value="Adopt Another Puppy"]',
  );

  changeYourMindButton = Selector('[type="submit"][value="Change your mind"]');

  homePuppyHeader = Selector('#notice');
  homeEmptyShoppingCart = Selector('#notice');

  async clickCompleteAdoptionButton() {
    return await t.click(this.completeAdoptionButton);
  }

  async clickAdoptAnotherPuppyButton() {
    return await t.click(this.adoptAnotherPuppyButton);
  }

  async clickChangeYourMindButton() {
    return await t.click(this.changeYourMindButton);
  }

  async typeTextHomePuppyHeader() {
    return t.expect(this.homePuppyHeader);
  }

  async typeTextHomeEmptyShoppingCart() {
    return t.expect(this.homeEmptyShoppingCart);
  }
}
