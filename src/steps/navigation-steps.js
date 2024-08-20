const { Given, When, Then } = require("@cucumber/cucumber");
const navigation = require("../methods/navigation-methods.js");

Given('I am on the {string} homepage', async function (t, [url]) {
    await navigation.onHomepage(url);
});

Given('I am on the Homepage', async function () {
    await navigation.onHomepage();
});


