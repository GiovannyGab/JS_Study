const cards = document.querySelectorAll('.card');
let hasFlippedCard = false
let firstCard, secondCard;
let delay = false;

function flipcard(){
    if(delay) return;
    if(this === firstCard) return;

    
    this.classList.add('flip');
   if(!hasFlippedCard){
       hasFlippedCard = true
       firstCard= this
       return;
   }
   secondCard = this;
   hasFlippedCard = false
   checkForMath();

}
function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disablecards();
        return
    }
   unflipCards();
}
function disablecards(){
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click' ,flipcard);
}

function unflipCards(){
    delay = true
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        delay= false
    },1500);
}

(function shuffle(){
    cards.forEach((card) =>{
        let randomPosition =  Math.floor(Math.random()* 12);
        card.style.order = randomPosition
        
    })
})();

cards.forEach((card)=> {
    card.addEventListener('click' , flipcard)


    
});