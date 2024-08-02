// factory / constructor

/*function LotteryCard(index, isWinning) {
    this.index = index;
    this.isWinning = isWinning;
    LotteryCard.prototype.handleTry = function (attempt, square, squareContainer) {
        if (this.isWinning) {
            alert('Congrats! You have won!');
            square.classList.add('square-correct');

        } else {
            if (attempt === 3) {
                alert('Sorry, it was your last turn(((')
                squareContainer.innerHTML = null;
                return; 
            } 
            alert('Sorry, try one more time!')
            square.classList.add('square-wrong')
        }
    }
}*/

/*LotteryCard.prototype.testValue = 'Some test value';

const card1 = new LotteryCard(1, false)
const card2 = new LotteryCard(2, false)
const card3 = new LotteryCard(3, false)

console.log(card1.__proto__.testValue);
console.log(card2.__proto__.testValue);
console.log(card3.__proto__.testValue);*/

/*const cards = [
    new LotteryCard(7, false),
    new LotteryCard(1, false),
    new LotteryCard(3, false),
    new LotteryCard(4, false),
    new LotteryCard(8, false),
    new LotteryCard(2, true),
    new LotteryCard(5, false),
    new LotteryCard(6, false),
    new LotteryCard(9, false),

]

function renderSquare (squares) {
    let attempt = 0;
    const squareContainer = document.querySelector('.square-container')
    cards.forEach((item) => {
        const square = document.createElement("div");
    const squareIndex = document.createElement("h4");
    squareIndex.innerHTML = item.index;
    square.appendChild(squareIndex);
    square.classList.add("square");
    square.addEventListener('click', () => 
        item.__proto__.handleTry(++attempt, square, squareContainer));
    squareContainer.appendChild(square);
 
    })
}

renderSquare(cards);*/

function User(name, age) {
    this.name = name;
    this.age = age
};

User.prototype.hello = 'hello';

const user1 = new User('Vilatiy', 18);

console.log(user1);
console.log(user1.hello);   