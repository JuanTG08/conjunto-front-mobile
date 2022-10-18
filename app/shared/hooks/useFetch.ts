import axios from "axios";
import { IUseFetchInit } from "../interfaces/useFetch";

export class useFetch {
  constructor(private url: string, private params?: string[]) {
    if (!params) return;
    if (this.url.at(-1) != "/") this.url += "/";
    this.url += this.params.join("/");
  }

  private authToken(): string {
    return "Token";
  }

  private init({ init, body, method }: IUseFetchInit): RequestInit {
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
    return <RequestInit>_init;
  }

  async get(init?: RequestInit) {
    return fetch(this.url, this.init({ init, method: "GET" })).then((res) => res.json);
  }

  post(body?: any, init?: RequestInit) {
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
