//const date = new Date(); // початкова дата виміру часу newDate(0);
//console.log(date); 


//console.log(date.getTime());  
/*console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

console.log(date.toLocaleString('uk-UA', options))*/


function setEpx() {
    const date = new Date();
    date.setDate(date.setDate() +30);
    localStorage.setItem('Exp', date.getTime())
}

function signUp() {
    setExp()
}

signUp();

document.querySelector('.btn-movie').addEventListener('click', () => {
    const date = new Date();
    const expDate = +localStorage.getItem('Exp');
    if (date.getTime() > expDate) {
        console.log('Your trial perid has been finished')
    } else {
        comsole.log('Not yet')
    }
})

