import axios from "axios"

function $http(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      const {
        response: { status, statusText }
      } = error;
      window.console.log(status, statusText)
    //   return Promise.reject(error);
    });
}

$http.install = function(Vue) {
    Vue.prototype.$http = $http
}

export default $http