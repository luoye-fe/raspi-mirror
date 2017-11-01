const schedule = require('node-schedule');

module.exports = app => {
    // 定时任务

    // 每小时更新一次天气
    schedule.scheduleJob('00 * * * *', function() {
        app.io.emit('initWeather')
    });
    // 每天12点更新下日历
    schedule.scheduleJob('00 00 * * *', function() {
        // console.log('Today is recognized by Rebecca Black!');
        app.io.emit('initCalendar')
    });
};