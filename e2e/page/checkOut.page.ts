import { Selector, t } from 'testcafe';
import { InformationField } from '../constants/informationField';
import { PaymentMethod } from '../constants/paymentMethod';

export class CheckOutPage {
  nameField = Selector('#order_name');

  addressField = Selector('#order_address');

  emailField = Selector('#order_email');

  payTypeSelect = Selector('#order_pay_type');
  payOptionSelect = this.payTypeSelect.find('option');

  placeOrderButton = Selector('[type="submit"]');

  async typeInNameField(value: InformationField) {
    return await t.typeText(this.nameField, value);
  }
  async typeInAddressField(value: InformationField) {
    return await t.typeText(this.addressField, value);
  }

  async typeInEmailField(value: InformationField) {
    return await t.typeText(this.emailField, value);
  }

  async clickPayTypeSelect(value: PaymentMethod) {
    return await t
      .click(this.payTypeSelect)
      .click(this.payOptionSelect.withText(value));
  }

  async clickPlaceOrderButton() {
    return await t.click(this.placeOrderButton);
  }
}
