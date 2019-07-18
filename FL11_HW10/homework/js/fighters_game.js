function Fighter(object){
    let name=object.name;
    let damage=object.damage;
    let hp=object.hp;
    let agility=object.agility;
    let win = 0;
    let lose = 0;
    return {
        getName:() => {
            return name
        },
        getDamage:() => {
            return damage
        },
        getAgility:() => {
            return agility
        },
        getHealth:() => {
            return hp
        },
        logCombatHistory:() => {
            let text = 'Name : ' + name + ', Wins: ' + win + ', Losses: ' + lose;
            console.log(text)
        },
        heal:(numb) => {
            hp += numb
        },
        dealDamage(numb) {
            hp -= numb;
            if (hp < 0) {
                hp = 0
            }
        },
        addWin:() => {
            win++
        },
        addLoss:() => {
            lose++
        },
        attack:(object) => {
            let randon = Math.floor(Math.random() * 101);
            if (randon <= 100 - object.getAgility()) {
                object.dealDamage(damage);
                console.log(name + ' make ' + damage + ' damage to ' + object.getName())
            } else {
                console.log(name + ' attack missed')
            }
        }
    }
}
function battle(man1,man2){
    console.log(man1.getHealth());
    let man1H=man1.getHealth();
    let man2H=man2.getHealth();
    if(man1H === 0){
        return console.log(man1.getName()+" is dead and can't fight.")
    }else if(man2H === 0){
        return console.log(man2.getName()+" is dead and can't fight.")
    }
    console.log(man2.getHealth());
    while(man1H !== 0 || man2H !== 0){
        man1.attack(man2);
        if(man2H === 0){
            break
        }
        man2.attack(man1);
        if(man1H === 0){
            break
        }
        man1H=man1.getHealth();
        man2H=man2.getHealth();
    }
}