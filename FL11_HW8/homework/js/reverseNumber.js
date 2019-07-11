function reverseNumber(n) {
    let str;
    if(n < 0){
        str='-';
        n = Math.abs(n);
    }else {
        str='';
    }
    n = n + '';
    return str + n.split('').reverse().join('');
}
reverseNumber(123);