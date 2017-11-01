'use strict';

module.exports = appInfo => {
    const config = exports = {};

    config.keys = appInfo.name + '_1506696451751_956';

    config.view = {
        mapping: {
            '.ejs': 'ejs',
        }
    };

    config.ejs = {};

    config.io = {
        init: {}, // passed to engine.io
        namespace: {
            '/': {
                connectionMiddleware: [],
                packetMiddleware: [],
            },
        }
    };

    return config;
};