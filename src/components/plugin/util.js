//插件开发
export default {
  install(Vue, options) {
    Date.prototype.Format = function (fmt) {
      let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    };
    Vue.prototype.rebackToLogin = function () {
      if (window) {
        window.location.href = "/";
      }
    };
    Vue.prototype.Constants = function () {
      let LOGIN_CLOUD_USERNAME = "LOGIN_CLOUD_USERNAME",
        LOGIN_CLOUD_TOKEN = "LOGIN_CLOUD_TOKEN",
        LOGIN_CLOUD_UID = "LOGIN_CLOUD_UID",
        LOGIN_COULD_TYPE = "LOGIN_COULD_TYPE";
      //dev
        let BASE_URL = "http://localhost:9000";
        let PROXY_URL = "/api";
      // let BASE_URL = "http://park.chinahtiot.com";
      // let PROXY_URL = "/api";
        return {
          BASE_URL: BASE_URL,
          PROXY_URL: PROXY_URL,

          ORDER_LIST :BASE_URL+PROXY_URL+"/r/baby/order",
          ORDER_ITEM :BASE_URL+PROXY_URL+"/r/baby/order/",
          ORDER_SAVE :BASE_URL+PROXY_URL+"/r/baby/order/save",
          ORDER_DELETE :BASE_URL+PROXY_URL+"/r/baby/order/delete",

          USER_LIST :BASE_URL+PROXY_URL+"/r/baby/users",
          USER_ITEM :BASE_URL+PROXY_URL+"/r/baby/users/",
          USER_SAVE :BASE_URL+PROXY_URL+"/r/baby/users/save",
          USER_DELETE :BASE_URL+PROXY_URL+"/r/baby/users/delete",

          ART_LIST :BASE_URL+PROXY_URL+"/r/baby/art",
          ART_ITEM :BASE_URL+PROXY_URL+"/r/baby/art/",
          ART_SAVE :BASE_URL+PROXY_URL+"/r/baby/art/save",
          ART_DELETE :BASE_URL+PROXY_URL+"/r/baby/art/delete",

          GOODS_LIST :BASE_URL+PROXY_URL+"/r/baby/goods",
          GOODS_ITEM :BASE_URL+PROXY_URL+"/r/baby/goods/",
          GOODS_SAVE :BASE_URL+PROXY_URL+"/r/baby/goods/save",
          GOODS_DELETE :BASE_URL+PROXY_URL+"/r/baby/goods/delete",
        }
    }
  }

}
