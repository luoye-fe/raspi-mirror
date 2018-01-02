# raspi-mirror

树莓派魔镜，用于简单的展示天气与时间

[DEMO](http://raspi-mirror.luoyefe.com/)

推荐自己部署

![](https://s10.mogucdn.com/mlcdn/c45406/180102_066e39hbjj5ke53l03a47k8b6d6bg_1920x1080.png)

## 说明

* 使用 `egg.js` 开发

* 天气抓取 [墨迹天气](https://www.moji.com/) 的数据

* 天气每整点更新一次

* 日历抓取 [便民查询](https://wannianrili.51240.com/) 的数据

* 日历每天 0 点更新

## 部署

* clone 本项目

* 安装 `node`

* `npm install` 安装依赖

* `npm run dev` 开发

* `npm run start` 运行

## 天气配置

* 找到所在地天气在墨迹的地址

* 如杭州天气在墨迹的地址为：`http://tianqi.moji.com/weather/china/zhejiang/hangzhou`

* 点击页面左下角设置

* 填入地址
