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

  static upload(host: string, key: string, path: string, file: File) {
    const SUCCESS = 200;
    var bodyData = new FormData();
    bodyData.append(key, file, file.name);

    const headers = new Headers({
      'X-Access-Token': localStorage.getItem('token')!,
      'Accept': 'application/pdf, image/png, image/jpeg'
    });

    return fetch(
      `${host}${path}`,
      {
        method: 'POST',
        headers: headers,
        body: bodyData
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