function getComputerChoice (){
    //generate a random number bewteen 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    //put the random number to 'Rock', 'Paper', or 'Scissors'
    switch (randomNumber){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors'

    }
}
//lets test if the logic works
console.log(getComputerChoice());