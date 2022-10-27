import axios from "axios";

export class useFetch {
  url = "";
  constructor(url, params = false) {
    this.url = url;
    if (!params) return;
    if (this.url.at(-1) != "/") this.url += "/";
    this.url += this.params.join("/");
  }

  authToken() {
    return "Token";
  }

  init({ init, body, method }) {
    if (init) return init;
    let _init = {
      method,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "application_type": "application/mobile",
        "authorization": this.authToken(),
      },
    };
    if (body) _init["body"] = JSON.stringify(body);
    return _init;
  }

  async get(init = null) {
    return fetch(this.url, this.init({ init, method: "GET" })).then((res) => res.json);
  }

  post(body = null, init = null) {
    return axios.post(this.url, body, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "application_type": "application/mobile",
        "authorization": this.authToken(),
      }
    }).then((res) => res.data);
  }
}
