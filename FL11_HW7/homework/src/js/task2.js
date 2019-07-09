let game,prizeCurection,userNumber,maxNumber,attempts,prizeTotal , prizeCurect , win , randomNumber,gameCounter;
game =confirm('Do you want to play a game ?');
if(game){
    while(game) {
        win = true;
        maxNumber = 8;
        attempts = 3;
        prizeTotal = 0;
        prizeCurect = 200;
        gameCounter = 1;
        while (game) {
            randomNumber = Math.floor(Math.random() * (maxNumber+1));
            while( Number(userNumber) !== randomNumber) {
                if (attempts === 0) {
                    attempts = 3;
                    prizeCurect = 0;
                    win = false;
                    break;
                }
                prizeCurect = Math.floor(prizeCurect / 2);
                userNumber = prompt(' Enter a number from 0 to ' + maxNumber + '\n Attempts left :'
                    + attempts + '\n Total prize : ' + prizeTotal + '$' + '\n Possible prize on current attempt :'
                    + +prizeCurect.toFixed(0) + '$');
                attempts--;

            }
            prizeCurection = prizeTotal+prizeCurect;
            if(gameCounter === 2){
                game = false;
                win = false;
            }
            if(win){
                game = confirm('Congratulation! Your prize is: '+ prizeCurect + '$.' + 'Do you want to continue?');
                maxNumber = maxNumber +4;
                prizeTotal = prizeCurect;
                prizeCurect = 200 * 2;
                attempts = 3;
                gameCounter++;
            }else {
                game = false;
            }
        }
        alert('Thanks you for a game. Your prize is  :' + prizeCurection +'$');
        game = confirm('Do you want to play a game again ?');
    }
}else {
    alert('You did not become a millionaire, but can');
}