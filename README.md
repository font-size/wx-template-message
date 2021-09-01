# 用微信给自己发送消息

## 申请公众测试账号

[url](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)

1. 在[测试号二维码]中扫描关注公众号，需要获得微信号（即 openid）
2. 在[模板消息接口]中新增测试模板，需要获得模板 ID

## 发送模板消息

用[测试号信息]里的 appID 和 appsecret，加上上述的信息，即可以用接口方式给自己微信号发送模板消息了

## 运行

npm i

node ./main.js
