FROM l8g1m5el.mirror.aliyuncs.com/library/node:10.12.0

RUN mkdir -p /home/service

WORKDIR /home/service

COPY package.json /home/service/package.json

RUN npm install --registry=https://registry.npm.taobao.org

COPY . /home/service

EXPOSE 7001

CMD npm run start
