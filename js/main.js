import {Request} from "./modules/Request.js";
import {RecipeCard} from "./modules/RecipeCard.js";

if(document.querySelector('.search-form')) {
    let form = document.querySelector('.search-form')
    form.addEventListener('submit', async function(){
        event.preventDefault()
        let query = this.elements.query.value
        let recipes = await new Request(query,'q').sendRequest().then((data) => data.hits)
        let resultNode = document.querySelector('.result')
        for(let i = 0; i < recipes.length; i++ ){
            resultNode.appendChild(new RecipeCard(recipes[i]).renderCard())
        }
        this.reset()
    })
}

let id = new URLSearchParams(window.location.search).get('id')
if(id){
    let recipeInfo = await new Request(id).sendRequest().then(data => data.recipe)
    console.log(recipeInfo)
    document.querySelector('.single-recipe__title').innerText = recipeInfo.label
    document.querySelector('.single-recipe__img').src = recipeInfo.image
    document.querySelector('.single-recipe__text').innerText = 'Calories: ' + Math.round(recipeInfo.calories)
}

