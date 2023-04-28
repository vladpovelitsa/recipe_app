export class Request {
    static BASE_URL = 'https://api.edamam.com/api/recipes/v2';
    static APP_ID = '245e6f9e';
    static APP_KEY = 'fa92e2d5e8a3ba23e1c675a425407911';
    static GET_PARAMS = `?type=public&app_id=${Request.APP_ID}&app_key=${Request.APP_KEY}`
    constructor(query,type) {
        this.query = type ? `${type}=${query}` : query
    }
    async sendRequest() {
        let endPoint;
        if(this.query.startsWith('q')) {
            endPoint = `${Request.BASE_URL}${Request.GET_PARAMS}&${this.query}`
        } else {
            endPoint = `${Request.BASE_URL}/${this.query}${Request.GET_PARAMS}`
        }
        return await fetch(endPoint).then((response) => response.json())
    }
}