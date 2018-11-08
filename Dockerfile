FROM l8g1m5el.mirror.aliyuncs.com/library/node:10.12.0 as build

RUN mkdir -p /home/service

WORKDIR /home/service

COPY . /home/service

RUN npm install --registry=https://registry.npm.taobao.org

FROM l8g1m5el.mirror.aliyuncs.com/library/node:10.12.0-alpine

COPY --from=build /home/service /

EXPOSE 8123

CMD npm run start
