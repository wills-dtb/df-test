const { Selector, t } = require('testcafe');

module.exports = {
    enterIncorrectEmail: async function () {
        await t
            .click(Selector('#Email'))
            .typeText(Selector('#Email'), 'w@tg.c')},
    enterIncorrectBookingRef: async function () {
        await t
            .click(Selector('#BookingReference'))
            .typeText(Selector('#BookingReference'), 'abcde34567')},
    submitBookingDetails: async function (){
        await t.click(Selector('#manage-booking-button'))},
    bookingRefError: async function () {
        await t.expect(Selector('#BookingReference-error').exists).ok();
    }
}
