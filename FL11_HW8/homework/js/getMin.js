function getMin() {
    let minNumber = arguments[0];
    let index = 1;
    while(index < arguments.length){
        if(minNumber > arguments[index]){
            minNumber=arguments[index];
        }
        index++;
    }
    return(minNumber);
}
getMin(3,0,-3);