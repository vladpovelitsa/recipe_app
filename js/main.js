import {Request} from "./modules/Request.js";
import {RecipeCard} from "./modules/RecipeCard.js";

if(document.querySelector('.search-form')) {
    let form = document.querySelector('.search-form')
    form.addEventListener('submit', async function(){
        event.preventDefault()
        let query = this.elements.query.value
        let recipes = await new Request(query).sendRequest()
        let resultNode = document.querySelector('.result')
        for(let i = 0; i < recipes.length; i++ ){
            resultNode.appendChild(new RecipeCard(recipes[i]).renderCard())
        }
        this.reset()
    })
}