let ab=+prompt('Side AB');
let bc=+prompt('Side BC');
let ac=+prompt('Side AC');
if(ab<bc+ac && bc<ac+ab && ac<ab+bc){
    if(ab === bc && ab === ac && bc === ab && bc === ac && ac === bc && ac === ab){
        console.log('Equivalent triangle')
    }else if(ab === bc || bc === ac||ab === ac){
        console.log('Isosceles triangle')
    }else{
        console.log('Normal triangle')
    }
}else{
    console.log('Triangle doesn’t exist')
}
