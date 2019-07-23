let rootNode = document.getElementById('root');
let hea1 = document.createElement('h1');
let txt_h1 = document.createTextNode('TODO Cat List');
hea1.appendChild(txt_h1);
//-----------------
let input = document.createElement('input');
input.setAttribute('placeholder' ,'Add New Action');
input.setAttribute('type' ,'text');
input.setAttribute('id','inputValue1');
//-----------------
let buttonAdd = document.createElement('button');
let txtButtonAdd = document.createTextNode('add_box');
buttonAdd.className = 'material-icons add';
buttonAdd.setAttribute('onclick','addNewItem()');
buttonAdd.style.backgroundColor = 'white';
buttonAdd.appendChild(txtButtonAdd);
//--------------------
let hr = document.createElement('hr');
let ul = document.createElement('ul');
//--------------------
const ten = 10;
//--------------------
let img = document.createElement('img');


let dragSrcEl;
function dragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}
function dragEnter() {
    this.classList.add('over');
}
function dragLeave(e) {
    e.stopPropagation();
    this.classList.remove('over');
}
function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}
function dragDrop(e) {
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}
function dragEnd() {
    let listItens = document.querySelectorAll('.draggable');
    [].forEach.call(listItens, function(item) {
        item.classList.remove('over');
    });
    this.style.opacity = '1';
}
function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
}

let listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
    addEventsDragAndDrop(item);
});

function addNewItem() {
    let newItem = document.getElementById('inputValue1').value;
    let item = document.getElementsByClassName('draggable');
    if(newItem === ''){
        alert('You must write something!');
    }else if(item.length === ten){
        alert('Maximum item per list are created');
    }else if (newItem !== '') {
        document.getElementById('inputValue1').value = '';
        addLi(newItem);
    }
}
function addSave(el){
    let newItem = document.getElementById('editValue').value;
    el.remove();
    addLi(newItem)
}
function addEdit(tex) {
    let text = tex.childNodes[3].nodeValue;
    tex.remove();
    let attr = document.createAttribute('value');
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let input = document.createElement('input');
    let buttonSave = document.createElement('button');
    buttonSave.setAttribute('onclick', 'addSave(this.parentElement)');
    input.setAttribute('id', 'editValue');
    let txt = document.createTextNode('save');
    buttonSave.className = 'material-icons save';
    buttonSave.appendChild(txt);
    attr.value = text;
    input.setAttributeNode(attr);
    li.appendChild(input);
    li.appendChild(buttonSave);
    ul.appendChild(li);
}
function addClose(el){
    el.remove()
}
function addClick(el) {
    console.log(el.parentElement);
    let li = el.parentElement;
    el.style.display = 'none';
    let buttonClick = document.createElement('button');
    let txtClick = document.createTextNode('check_box');
    buttonClick.appendChild(txtClick);
    buttonClick.className = 'material-icons add';
    li.appendChild(buttonClick);
}
function addLi(text){
    let li = document.createElement('li');
    let attr = document.createAttribute('draggable');
    let ul = document.querySelector('ul');
    let buttonClose = document.createElement('button');
    let txt = document.createTextNode('delete');
    buttonClose.className = 'material-icons close';
    buttonClose.setAttribute('onclick','addClose(this.parentElement)');
    let span = document.createElement('span');
    let buttonClick = document.createElement('button');
    let txtClick = document.createTextNode('crop_din');
    let buttonEdit = document.createElement('button');
    buttonEdit.setAttribute('onclick','addEdit(this.parentElement)');
    let txtEdit = document.createTextNode('create');
    buttonClick.setAttribute('onclick','addClick(this)');
    buttonEdit.appendChild(txtEdit);
    buttonEdit.className='material-icons edit';
    buttonClick.appendChild(txtClick);
    buttonClick.className = 'material-icons add';
    buttonClose.appendChild(txt);
    li.appendChild(buttonClose);
    li.appendChild(span);
    li.appendChild(buttonEdit);
    rootNode.appendChild(li);
    li.className = 'draggable';
    attr.value = 'true';
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
    li.appendChild(buttonClick);
    addEventsDragAndDrop(li);

}


rootNode.appendChild(hea1/* Append your list item node*/);
rootNode.appendChild(input/* Append your list item node*/);
rootNode.appendChild(buttonAdd/* Append your list item node*/);
rootNode.appendChild(hr/* Append your list item node*/);
rootNode.appendChild(img/* Append your list item node*/);
rootNode.appendChild(ul/* Append your list item node*/);