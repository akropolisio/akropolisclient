import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import { bind } from 'decko';

class HttpActions {
  private axios: AxiosInstance;
  private host = __HOST__;

  constructor(baseURL: string) {
    const config: AxiosRequestConfig = {
      baseURL: this.host + baseURL,
      withCredentials: false,
    };

    this.axios = axios.create(config);
  }

  @bind
  public subscribeResponses(
    onFulfilled?: (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>,
    onRejected?: (error: any) => any,
  ): () => void {
    const id = this.axios.interceptors.response.use(onFulfilled, onRejected);
    return () => this.axios.interceptors.response.eject(id);
  }

  public get<T>(url: string, params?: object, options?: AxiosRequestConfig): AxiosPromise<T> {
    const config: AxiosRequestConfig = { params, ...options };
    return this.axios.get(url, config);
  }

  public post<T>(url: string, data?: any, options?: AxiosRequestConfig): AxiosPromise<T> {
    return this.axios.post(url, data, options);
  }

  public patch<T>(url: string, data: any, options: AxiosRequestConfig): AxiosPromise<T> {
    return this.axios.patch(url, data, options);
  }

  public del<T>(url: string, data: any, params: object, options: AxiosRequestConfig): AxiosPromise<T> {
    const config: AxiosRequestConfig = { url, data, params, ...options };
    return this.axios.delete(url, config);
  }

  public put<T>(url: string, data: any, params: object, options: AxiosRequestConfig): AxiosPromise<T> {
    return this.axios.put(url, data, { params, ...options });
  }
}

export default HttpActions;
