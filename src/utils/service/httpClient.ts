class HttpClient {
  baseURL = process.env.BASE_URL;

  // 2. 모든 fetch 전에, access_token을 추가한다.
  fetch(url: string, options: any = {}) {
    console.log('token 추가');

    return fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
    });
  }
}

const httpClient = new HttpClient();
export default httpClient;
