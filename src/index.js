/**
 *
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 * @param {()=> void} callback
 */

module.exports = function schedule(hours = 0, minutes = 0, seconds = 0, callback) {
    let timeDifference;
    const reminderDate = new Date().setHours(hours, minutes, seconds, 0);
    const callbackWrapper = () => {
        callback();

        setTimeout(callback, 24 * 60 * 60 * 1000); // Every day
    }

    const isEarly = reminder => {
        return reminder > new Date().getTime();
    };

    if (isEarly(reminderDate)) {
        timeDifference = reminderDate - new Date().getTime();
    } else {
        const tomorrowsReminder = new Date().setHours(24 + hours, minutes, seconds, 0);
        timeDifference = tomorrowsReminder - new Date().getTime();
    }
    setTimeout(callbackWrapper, timeDifference);
}