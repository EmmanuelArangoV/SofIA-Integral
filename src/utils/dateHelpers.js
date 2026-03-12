const COLOMBIA_OFFSET_HOURS = -5

function getColombiaHour(){
    const now = new Date();
    const utcHour = now.getUTCHours();
    return ((utcHour + COLOMBIA_OFFSET_HOURS) + 24) % 24;
}

module.exports = { getColombiaHour };