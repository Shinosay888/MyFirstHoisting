// Recurtion

/*function countDown(number) {
    for (let i = number; i > 0; i--) {
        console.log(i)
    }
}

function countDownRecurtion(number) {
    if (number <= 0){
   console.log('Count Down done!');
    return;
    }
    console.log(number)
    countDownRecurtion(number - 1)
}

countDownRecurtion(45)
countDown(10);*/

const array = [1,1,[2,2],[[3,[4,5,[0]],3],2]];

function concatArrRecursively(items) {
    const flattened = [];

    items.forEach((item) => {
        if (Array.isArray(item)) {
            flattened.push(...concatArrRecursively(item));
        } else {
            flattened.push(item);
        }
    })

    return flattened;
}