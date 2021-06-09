import { Selector, t } from 'testcafe';

export class HomePage {
  puppyList = Selector('.puppy_list');

  async clickPuppyDetails(pupIndex: number) {
    const selector = await this.puppyList.nth(pupIndex).find('input');

    return await t.click(selector);
  }
}
