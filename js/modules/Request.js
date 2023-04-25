export class Request {
    static BASE_URL = 'https://api.edamam.com/api/recipes/v2';
    static APP_ID = '245e6f9e';
    static APP_KEY = 'fa92e2d5e8a3ba23e1c675a425407911';

    constructor(query) {
        this.query = query
    }

    async sendRequest() {
        let endPoint = `${Request.BASE_URL}?type=public&q=${this.query}&app_id=${Request.APP_ID}&app_key=${Request.APP_KEY}`
        return await fetch(endPoint).then((response) => response.json().then((data) => data.hits))
    }
}