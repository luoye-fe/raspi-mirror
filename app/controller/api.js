'use strict';
const axios = require('axios');
const cheerio = require('cheerio');

const HttpInstance = axios.create();

function getCurrentDay() {
    const now = new Date().toLocaleString('en');
    const curArray = now.split(',')[0].split('/');
    return `${curArray[2]}-${curArray[0]}-${curArray[1]}`;
}


module.exports = app => {
    class ApiController extends app.Controller {
        async weather() {
            const res = await HttpInstance.get('http://tianqi.moji.com/weather/china/zhejiang/hangzhou');
            const $ = cheerio.load(res.data);

            $('.wea_info .left .info_uptime').remove()
            $('.wea_info .left .wea_tips').remove()
            $('.forecast .g_title').remove()
            
            this.ctx.body = {
                a: $('.wea_info .left').html(),
                b: $('.forecast').html()
            };
        }
        async calendar() {
        	const res = await HttpInstance.get('https://wannianrili.51240.com/');
            const $ = cheerio.load(res.data);

            const currentData = $(`#wnrl_k_you_id_${(new Date()).getDate() - 1}`);

            const now = new Date();

            const listYi = currentData.find('.wnrl_k_you_id_wnrl_yi_neirong a');
            const almanacYi = [];
            listYi.map(item => {
                almanacYi.push($(listYi[item]).html());
            })

            const listJi = currentData.find('.wnrl_k_you_id_wnrl_ji_neirong a');
            const almanacJi = [];
            listJi.map(item => {
                almanacJi.push($(listJi[item]).html());
            })

            const result = {
                a: `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`, // 日期
                b: (currentData.find('.wnrl_k_you_id_biaoti').html()).split(';').splice(-4).join(';').replace(')', ''), // 星期
                c: `农历 ${currentData.find('.wnrl_k_you_id_wnrl_nongli').html()}`, // 农历日期
                d: currentData.find('.wnrl_k_you_id_wnrl_nongli_ganzhi').html(), // 天干地支
                // e: currentData.find('.wnrl_k_you_id_wnrl_jieri_neirong').html().split(' '), // 节日
                // f: almanacYi, // 黄历 宜
                // g: almanacJi // 黄历 忌
            };

            this.ctx.body = result;
        }
    }
    return ApiController;
};