export default class APIService {
  constructor(base_api_url) {
    this.base_api_url = base_api_url || "https://jsonplaceholder.typicode.com";
  }
  async loginIntoApp(username, userpass) {
    const formData = {
      USER_NAME: username,
      USER_PASS: userpass,
    };
    // const result = await this.fetchAPIData("/posts", "", "GET")
    //   .then((res) => {
    //     return res;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    return formData;
  }
  fetchAPIData(
    apiPath,
    params = "",
    method = "POST",
    fupld = false,
    apiType = "Internal"
  ) {
    if (apiType === "Internal") {
      apiPath = this.base_api_url + apiPath;
    }
    var apipara = {};

    return new Promise(function(resolve) {
      if (method === "POST" && fupld === false) {
        apipara = {
          method: method,
          redirect: "manual",
          mode: "cors",
          body: JSON.stringify(params),
          headers: {
            "Content-Type": "application/json",
          },
        };
      }
      if (method === "POST" && fupld === true) {
        apipara = {
          method: method,
          redirect: "manual",
          mode: "cors",
          body: JSON.stringify(params),
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
      }
      if (method === "GET") {
        apipara = {
          method: method,
          redirect: "manual",
          mode: "cors",
        };
      }
      fetch(apiPath, apipara)
        .then(function(response) {
          if (response.status === 200) {
            response.json().then(function(json) {
              resolve(json);
            });
          } else if (response.status === 400) {
            response.json().then(function(json) {
              window.onerror(JSON.stringify(json));
              resolve(json);
            });
          } else {
            window.onerror(JSON.stringify(response));
            resolve(response);
          }
        })
        .catch((err) => {
          console.warn(err);
        });
    });
  }
}
