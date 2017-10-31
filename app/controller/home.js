'use strict';

module.exports = app => {
    class HomeController extends app.Controller {
        async index() {
        	// 从 墨迹 获取天气
        	// 从 百度 获取日历
        	// 从 硬件 获取温湿度
        	// 
            const { ctx, app } = this;

            await ctx.render('home.ejs');
        }
    }
    return HomeController;
};
