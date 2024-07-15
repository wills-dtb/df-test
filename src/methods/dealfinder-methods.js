const { Selector, t } = require('testcafe');
function getRoutePicker(leg) {
    if (leg === "return") {
      return Selector('.routes_return').find('li').nth(0);
    }
    return Selector('.routes_outbound').find('li').nth(0);
  }
  
async function getRoute(leg) {
    if (leg === "return") {
        return Selector("#route_return", { timeout: 20000 })
    }
    return Selector('#route_outbound', { timeout: 20000 })
}
module.exports = {

    selectRoute: async function (leg, route) {
        await t
            .typeText(await getRoute(leg), " ")
            .typeText(await getRoute(leg), route)
            .click(await getRoute(leg))
        await t
            .expect(Selector(".route_list h5").exists).ok('Routes drop down not loaded', { timeout: 10000 })
            .expect(getRoutePicker(leg).exists).ok('Correct route not loaded', { timeout: 10000 })
            .expect(getRoutePicker(leg).exists).ok('Routes haven\'t loaded', { timeout: 10000 })
            .click(getRoutePicker(leg), { speed: 0.01 }) //slow down click to ensure it is registered
    },
    clickSearch: async function () {
        await t.click(Selector(".df_submit"));
    }
}