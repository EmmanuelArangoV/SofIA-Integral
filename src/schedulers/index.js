const { getColombiaHour } = require('../utils/dateHelpers');

const cron = require('node-cron');
const TIMEZONE = 'America/Bogota';

function getTimeslotNow() {
    const hour = getColombiaHour();
    if (hour >= 7 && hour < 12) return 'morning';
    if (hour >= 13 && hour < 18) return 'afternoon';
    if (hour >= 19 && hour < 21) return 'night';
    return null;
}