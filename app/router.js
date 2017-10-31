'use strict';

module.exports = app => {
    app.get('/', app.controller.home.index);

    app.get('/api/weather', app.controller.api.weather);
    app.get('/api/calendar', app.controller.api.calendar);
};