const { Given, When, Then } = require("@cucumber/cucumber");
const navigation = require("../methods/dealfinder-methods.js");

Given('I have selected route {string}', async function (t, [route]) {
    await navigation.selectRoute('single', route);
});

Given('I click Search on the dealfinder', async function (t) {
    await navigation.clickSearch();
});

