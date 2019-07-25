const rootNode = document.getElementById('root');
const addNewEl = document.getElementById('addList');
let sometext = document.getElementById('sometext');
let modifynumb=0;
let number = 1;
function goStart() {
    for(let i =1;i<localStorage.length;i++){
        if(localStorage.getItem('list'+i) === null){

            continue;
        }
        let li = document.createElement('li');
        let span = document.createElement('span');
        let txtLi = document.createTextNode(localStorage.getItem('list'+i));
        span.appendChild(txtLi);
        span.className = 'list'+i;
        span.setAttribute('onclick','modify('+i+')');
        li.appendChild(span);
        addNewEl.appendChild(li);
        let todoImg = document.createElement('img');
        todoImg.setAttribute('src', './assets/img/todo-s.png');
        let checkBtn = document.createElement('button');
        checkBtn.className = 'checkIconBtn';
        let deleteIcon = document.createElement('img');
        deleteIcon.setAttribute('src', './assets/img/remove-s.jpg');
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteIconBtn';
        let check = localStorage.getItem(span.className+'click')
        if(check === 'true'){
            todoImg.src = './assets/img/done-s.png';
            li.style.backgroundColor = 'grey';
            localStorage.setItem(span.className+'click',true);
        }

        checkBtn.appendChild(todoImg);
        deleteBtn.appendChild(deleteIcon);
        li.appendChild(checkBtn);
        li.appendChild(deleteBtn);




        deleteBtn.onclick = () => {
            li.remove();
            console.log(span.className);
            console.log(localStorage.removeItem(span.className));
            console.log(localStorage.removeItem(span.className+'click'));
            console.log(localStorage.removeItem(span.className+'delite'));
        };
        checkBtn.onclick = () => {
            let check = localStorage.getItem(span.className+'click')
            if(check === 'true'){
                todoImg.src = './assets/img/todo-s.png';
                li.style.backgroundColor = 'white';
                localStorage.setItem(span.className+'click',false);
            }else{
                todoImg.src = './assets/img/done-s.png';
                li.style.backgroundColor = 'grey';
                localStorage.setItem(span.className+'click',true);
            }
        };
        console.log(localStorage.getItem('list'+i));
        number++
    }
}

goStart();


let startBlock = document.querySelector('#blogStart');
let addBlock = document.querySelector('#addBlock');
let modifyBlock = document.querySelector('#modify');
addBlock.style.display = 'none';
modifyBlock.style.display = 'none';
location.hash = '';
function addNewElement() {
    startBlock.style.display ='none';
    addBlock.style.display = 'block';
    location.hash = '/add';
}
function cancelExit() {
    addBlock.style.display = 'none';
    modifyBlock.style.display = 'none';
    startBlock.style.display = 'block';
    location.hash = '';
    document.getElementById('addText').value = '';
    document.getElementById('modifyItem').value ='';
}

function saveChange() {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.className = 'list'+number;
    span.setAttribute('onclick','modify('+number+')');
    let inputValue = document.getElementById('addText').value;
    for(let i=0;i<100;i++){
        if(localStorage.getItem('list'+i) === inputValue){
            alert("Error! You can't add already exist item");
            return
        }
    }
    
    let txtLi = document.createTextNode(inputValue);
    span.appendChild(txtLi);
    li.appendChild(span);
    addNewEl.appendChild(li);

    addBlock.style.display = 'none';
    modifyBlock.style.display = 'none';
    sometext.style.display = 'none';
    startBlock.style.display = 'block';
    location.hash = '';


    let todoImg = document.createElement('img');
    todoImg.setAttribute('src', './assets/img/todo-s.png');
    let checkBtn = document.createElement('button');
    checkBtn.className = 'checkIconBtn';
    let deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', './assets/img/remove-s.jpg');
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteIconBtn';
    checkBtn.appendChild(todoImg);
    deleteBtn.appendChild(deleteIcon);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);


    localStorage.setItem('list'+number,inputValue);
    localStorage.setItem('list'+number+'click',false);
    localStorage.setItem('list'+number+'delite','delite');
    document.getElementById('addText').value = '';



    checkBtn.onclick = () => {
        let check = localStorage.getItem(span.className+'click')
        if(check === 'true'){
            todoImg.src = './assets/img/todo-s.png';
            li.style.backgroundColor = 'white';
            localStorage.setItem(span.className+'click',false);
        }else{
            todoImg.src = './assets/img/done-s.png';
            li.style.backgroundColor = 'grey';
            localStorage.setItem(span.className+'click',true);
        }
    };
    deleteBtn.onclick = () => {
        li.remove();
        console.log(localStorage.removeItem(span.className));
        console.log(localStorage.removeItem(span.className+'click'));
        console.log(localStorage.removeItem(span.className+'delite'));
    };
    number++;
}
function modify(numb) {
    modifynumb = numb;
    let check = localStorage.getItem('list'+modifynumb+'click')
    if(check === 'true'){
        alert("Error!You can't edit already done item")
        return
    }
    addBlock.style.display = 'none';
    modifyBlock.style.display = 'block';
    startBlock.style.display = 'none';
    location.hash = '/modify';

    let span = document.getElementsByClassName('list'+modifynumb)[0]
    let inputValue = document.getElementById('modifyItem')
    inputValue.value += span.innerHTML

}

function saveChangeModify() {

    let inputValue = document.getElementById('modifyItem').value;
    const txtLi = document.createTextNode(inputValue);
    for(let i=0;i<100;i++){
        if(localStorage.getItem('list'+i) === inputValue){
            alert("Error! You can't add already exist item");
            return
        }
    }
    console.log(txtLi);
    console.log(modifynumb);
    localStorage.setItem('list'+modifynumb,inputValue);
    let span = document.getElementsByClassName('list'+modifynumb)[0];
    span.innerHTML = inputValue;
    document.getElementById('modifyItem').value ='';
    addBlock.style.display = 'none';
    modifyBlock.style.display = 'none';
    sometext.style.display = 'none';
    startBlock.style.display = 'block';
    location.hash = '';
}
