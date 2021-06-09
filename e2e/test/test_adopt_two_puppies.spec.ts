import { Selector } from 'testcafe';
import { InformationField } from '../constants/informationField';
import { BaseUrl, CartsUrl, CheckoutUrlComplete } from '../constants/page';
import { PaymentMethod } from '../constants/paymentMethod';
import { CheckOutPage } from '../page/checkOut.page';
import { HomePage } from '../page/home.page';
import { PuppyDetailsPage } from '../page/puppy-details.page';
import { ShoppingCartPage } from '../page/shoppingCart.page';
import { getWindowLocation } from '../utils/get-window-location.util';

let homePage: HomePage = null;
let puppyDetailsPage: PuppyDetailsPage = null;
let shoppingCartPage: ShoppingCartPage = null;
let checkOutPage: CheckOutPage = null;

fixture`Getting Started`.page`${BaseUrl}`.beforeEach(async t => {
  homePage = new HomePage();
  puppyDetailsPage = new PuppyDetailsPage();
  shoppingCartPage = new ShoppingCartPage();
  checkOutPage = new CheckOutPage();

  return t;
});

test('Adopt two puppies', async t => {
  let windowLocation = await getWindowLocation();

  await t.expect(windowLocation).eql(BaseUrl);
  await t.maximizeWindow();

  await homePage.clickPuppyDetails(1);
  await puppyDetailsPage.clickAdoptMeButton();

  await shoppingCartPage.clickAdoptAnotherPuppyButton();
  windowLocation = await getWindowLocation();

  await homePage.clickPuppyDetails(3);
  await puppyDetailsPage.clickAdoptMeButton();

  await shoppingCartPage.clickCompleteAdoptionButton();

  await checkOutPage.typeInNameField(InformationField.order_name);

  await checkOutPage.typeInAddressField(InformationField.order_address);

  await checkOutPage.typeInEmailField(InformationField.order_email);

  await checkOutPage.clickPayTypeSelect(PaymentMethod.creditCard);

  await checkOutPage.clickPlaceOrderButton();
  windowLocation = await getWindowLocation();
  await t
    .expect(shoppingCartPage.homePuppyHeader.innerText)
    .contains('Thank you for adopting a puppy!');

  await t.expect(windowLocation).eql(BaseUrl);
});
