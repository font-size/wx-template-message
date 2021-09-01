// 需要填写的地方已经标出
// 一共4个地方 appID、appsecret、模板ID、微信用户的openid
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const axiosPost = function (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
const axiosGet = function (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

async function getToken() {
  const params = {
    grant_type: 'client_credential',
    appid: '', // 你的appid  1
    secret: '', // 你的secret 2
  };
  let res = await axiosGet('https://api.weixin.qq.com/cgi-bin/token', params);
  return res.data.access_token;
}

async function templateMessageSend() {
  const token = await getToken();
  const url = 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=' + token;
  const params = {
    touser: '', // 用户openid 3
    template_id: '', // 模板id 4
    url: 'http://www.baidu.com',
    topcolor: '#FF0000',
    data: {
      msg: {
        value: 'hello！',
        color: '#173177',
      },
    },
  };
  let res = await axiosPost(url, params);
  console.log('res: ', res.data);
}
templateMessageSend();
