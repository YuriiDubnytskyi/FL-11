let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 19,
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];
//-----------0--------------
function getNumbers(str) {
    let arr = str.split('');
    let del = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            del.push(arr[i]);
        }
    }
    return del;
}
console.log(getNumbers('n1um3ber95'));
//-----------1--------------
function findTypes(...array) {
    let types = {
        'string': 0,
        'number': 0,
        'object': 0,
        'function':0,
        'boolean': 0,
        'undefined': 0
    };
    for (let i = 0; i < array.length; i++) {
        switch (typeof array[i]) {
            case 'function':
                types.string += 1;
                break;
            case 'string':
                types.string += 1;
                break;
            case 'boolean':
                types.boolean += 1;
                break;
            case 'undefined':
                types.undefined += 1;
                break;
            case 'number':
                types.number += 1;
                break;
            case 'object':
                types.object += 1;
                break;
            default:
                break;
        }
    }
    for(let item in types) {
        if(types[item] === 0) {
            delete types[item];
        }
    }
    return types;
}
console.log(findTypes('number',66,null,true,undefined));
//-----------2-------------
function executeforEach(array,func){
    for(let i = 0;i<array.length;i++){
        func(array[i]);
    }
}
executeforEach([1,2,3], function(el){
    console.log(el)
});
//----------3--------------
function mapArray(array,func) {
    let arrayNew =[];
    executeforEach(array,el => arrayNew.push(func(el)));
    return arrayNew;
}
console.log(mapArray([2, 5, 8], function(el) {
    return el + 3
}));
//----------------4-----------
function filterArray(array,func) {
    let arrayNew =[];
    executeforEach(array,el => {
        if(func(el)){
            arrayNew.push(el)
        }
    });
    return arrayNew;
}
console.log(filterArray([2, 5, 8], function(el) {
    return el > 3
}));
//-----------5------
function showFormattedDate(date) {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return 'Date: '+ month[date.getMonth()]+' '+ date.getDate() +' '+ date.getFullYear()
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));
//-----------6------
function canConvertToDate(str) {
    return !isNaN(Date.parse(str));
}
console.log(canConvertToDate('2016-13-18T00:00:00'));
//------------7----------
function daysBetween(date1, date2) {
    let second = 3600;
    let miliSecond = 1000;
    let hour = 24;
    return Math.round(Math.abs(date2 - date1) / (second * miliSecond * hour));
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'),new Date('2016-04-19T00:00:00')));
//-----------8-----------
function getAmountOfAdultPeople(data) {
    let people = 0;
    filterArray(data,function(el) {
        if(el.age > 18){
            people++
        }
    });
    return people;
}
console.log(getAmountOfAdultPeople(data));
//---------------9------------
function keys(obj) {
    let newObj = [];
    for (let key in obj){
        newObj.push(key)
    }
    return newObj
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));
//-----------10------------
function values(obj) {
    let newObj = [];
    for (let key in obj){
        newObj.push(obj[key])
    }
    return newObj
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));