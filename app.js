const schedule = require('node-schedule');

module.exports = app => {
    // 定时任务

    // 每小时更新一次天气
    schedule.scheduleJob('00 * * * *', function() {
        console.log('更新天气啦', (new Date()).toLocaleString());
        app.io.emit('initWeather')
    });
    // 每天12点更新下日历
    schedule.scheduleJob('00 00 * * *', function() {
        console.log('更新日历啦', (new Date()).toLocaleString());
        app.io.emit('initCalendar')
    });
};