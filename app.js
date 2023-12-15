document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray=[
        {
            name: 'adinkra1',
            img: 'images/adinkrafrontcard1.png'
        },
        {
            name: 'adinkra1',
            img: 'images/adinkrafrontcard1.png'
        },
        {
            name: 'adinkra2',
            img: 'images/adinkrafrontcard2.png'
        },
        {
            name: 'adinkra2',
            img: 'images/adinkrafrontcard2.png'
        },
        {
            name: 'adinkra3',
            img: 'images/adinkrafrontcard3.png'
        },
        {
            name: 'adinkra3',
            img: 'images/adinkrafrontcard3.png'
        },
        {
            name: 'adinkra4',
            img: 'images/adinkrafrontcard4.png'
        },
        {
            name: 'adinkra4',
            img: 'images/adinkrafrontcard4.png'
        },
        {
            name: 'adinkra5',
            img: 'images/adinkrafrontcard5.png'
        },
        {
            name: 'adinkra5',
            img: 'images/adinkrafrontcard5.png'
        },
        {
            name: 'adinkra6',
            img: 'images/adinkrafrontcard6.png'
        },
        {
            name: 'adinkra6',
            img: 'images/adinkrafrontcard6.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#total');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];



    function createBoard(){
        for(let i=0; i<cardArray.length; i++){
            var card=document.createElement('img');
            card.setAttribute('src', 'images/adinkrabackcard.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]){
            alert('Match Found');
            cards[optionOneId].setAttribute('src', 'images/adinkrafrontcard8.png');
            cards[optionTwoId].setAttribute('src', 'images/adinkrafrontcard8.png');
            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneId].setAttribute('src', 'images/adinkrabackcard.png');
            cards[optionTwoId].setAttribute('src', 'images/adinkrabackcard.png');
            alert('Try Again');
        }
        cardsChosen =[];
        cardsChosenId =[];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent = 'GAME COMPLETE!';
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});