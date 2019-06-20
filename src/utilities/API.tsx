export class API {
  static get(host: string, path: string) {
    const SUCCESS = 200;
    const headers = new Headers({
      'X-Access-Token': localStorage.getItem('token')!
    });

    return fetch(
      `${host}${path}`,
      {
        method: 'GET',
        headers: headers,
      }
    )
    .then(response => {
      if (response.status === SUCCESS) {
        return response.json();
      } else {
        return response.status;
      }
    });
  }
}