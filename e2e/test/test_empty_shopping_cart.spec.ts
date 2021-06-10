import { Selector } from 'testcafe';
import { BaseUrl } from '../constants/page';
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

test.only('Empty Shopping cart', async t => {
  let windowLocation = await getWindowLocation();

  await t.expect(windowLocation).eql(BaseUrl);
  await t.maximizeWindow();

  await homePage.clickPuppyDetails(1);
  await puppyDetailsPage.clickAdoptMeButton();

  await shoppingCartPage.clickAdoptAnotherPuppyButton();
  windowLocation = await getWindowLocation();

  await homePage.clickPuppyDetails(3);
  await puppyDetailsPage.clickAdoptMeButton();

  await shoppingCartPage.clickAdoptAnotherPuppyButton();
  windowLocation = await getWindowLocation();

  await homePage.clickPuppyDetails(2);
  await puppyDetailsPage.clickAdoptMeButton();

  await shoppingCartPage.clickChangeYourMindButton();

  await t.setNativeDialogHandler(() => true);
  windowLocation = await getWindowLocation();

  await t
    .expect(shoppingCartPage.homeEmptyShoppingCart.innerText)
    .contains('Your car is currently empty');

  await t.expect(windowLocation).eql(BaseUrl);
});
