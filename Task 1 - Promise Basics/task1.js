/* Task 1: 
My friend Kayo promises to make a cake for my birthday in two weeks (2000ms).
If everything goes well and Kayo doesn't get sick, we'll have 2 cakes. Otherwise, if Kayo gets sick, we'll have no cakes.
Either way, we're still going to have a party.
*/

const onMyBirthday = (isKayoSick) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(!isKayoSick) {
                resolve(2)
            } else {
                reject(new Error('I am sad'));
            }
        }, 2000);
    });
};

onMyBirthday(false)
    .then((result) => {
        console.log(`I have ${result} cakes`)
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('Party')
    })