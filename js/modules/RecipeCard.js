export class RecipeCard {
    static recipePage = 'recipe.html'
    constructor(params){
        this.info = params
    }
    createCard(){
        let card = document.createElement('article')
        card.classList.add('result__item')
        return card
    }
    addImageToCard(){
        let img = document.createElement('img')
        img.setAttribute('src', this.info.recipe.image)
        img.classList.add('result__img')
        return img
    }
    addTitleToCard() {
        let h2 = document.createElement('h2')
        h2.classList.add('result__title')
        h2.innerText = this.info.recipe.label
        return h2
    }
    addLinkToCard() {
        let a = document.createElement('a')
        a.classList.add('result__link')
        a.innerText = 'Show more'
        a.href = RecipeCard.recipePage + "?id=" + this.info.recipe.uri.slice(this.info.recipe.uri.indexOf('#') + 1);
        return a
    }
    renderCard(){
        let card = this.createCard()
        card.appendChild(this.addImageToCard())
        card.appendChild(this.addTitleToCard())
        card.appendChild(this.addLinkToCard())
        return card
    }
}