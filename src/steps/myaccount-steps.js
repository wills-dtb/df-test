const { Given, When, Then } = require("@cucumber/cucumber");
const myAccount = require("../methods/myaccount-methods.js");
const navigation = require("../methods/navigation-methods.js");

Given('I am on the My Account page', async function () {
    await navigation.onMyAccountPage();
});

When('I enter an incorrect email', async function () {
    await myAccount.enterIncorrectEmail();
});

When('I enter an incorrect booking reference', async function () {
    await myAccount.enterIncorrectBookingRef();
});

When("I click the 'Manage my booking' button", async function () {
    await myAccount.submitBookingDetails();
});

Then('I am presented with a booking reference error message', async function () {
    await myAccount.bookingRefError();
});