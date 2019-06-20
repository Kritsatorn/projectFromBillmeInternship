export class API {

  static post(host: string, path: string, options?: {isRequiredToken?: boolean, body: object}) {
    const isRequiredToken = options ? options.isRequiredToken : true;
    const body = options ? options.body : '';
    const SUCCESS = 200;

    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    if (isRequiredToken) {
      headers.append('X-Access-Token', localStorage.getItem('token')!);
    }

    return fetch(
      `${host}${path}`,
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
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

  static put(host: string, path: string, options?: {isRequiredToken?: boolean, body: object}) {
    const isRequiredToken = options ? options.isRequiredToken : true;
    const body = options ? options.body : '';
    const SUCCESS = 200;

    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    if (isRequiredToken) {
      headers.append('X-Access-Token', localStorage.getItem('token')!);
    }

    return fetch(
      `${host}${path}`,
      {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body)
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

  static delete(host: string, path: string, options?: {isRequiredToken?: boolean, body: object}) {
    const isRequiredToken = options ? options.isRequiredToken : true;
    const body = options ? options.body : '';
    const SUCCESS = 200;

    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    if (isRequiredToken) {
      headers.append('X-Access-Token', localStorage.getItem('token')!);
    }

    return fetch(
      `${host}${path}`,
      {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(body)
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

  static getReport(host: string, path: string) {
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
      const name = response.headers.get('content-disposition')!.split('filename=').pop()!.replace(/"/g, '');

      response.blob()
      .then(result => {
        var url = window.URL.createObjectURL(result);
        var a = document.createElement('a');
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
      });

      return name;
    })
    .catch(() => {
      return false;
    });
  }

  static uploadRequireDocument(host: string, path: string, file: File) {
    const SUCCESS = 200;
    var bodyData = new FormData();
    bodyData.append('required_document', file, file.name);

    const headers = new Headers({
      'X-Access-Token': localStorage.getItem('token')!
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