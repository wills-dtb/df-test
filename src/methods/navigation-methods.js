const { Selector, t } = require('testcafe');

module.exports = {
    onHomepage: async function (url = 'https://www.directferries.de?dealfinderVersion=A') {
        await t
        .navigateTo(url)
        .click(Selector('[data-cky-tag="accept-button"]', { timeout: 40000 }));
    },
    onMyAccountPage: async function () {
        await t
        .navigateTo('https://account.directferries.com/?culture=en-GB%dealfinderVersion=A');
    }
}
