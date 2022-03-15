
let selectedNumberId;
let selectedDropZoneId;

const dropZoneBackground = document.querySelectorAll('.dropZone');
const resetButton = document.querySelector('.reset');
const canDragCardItems = document.querySelectorAll('.dropZone'  );
let matchingCardScore = 0;//test match, count match total


function addEventListener(){
   canDragCardItems.forEach(items => {
        items.addEventListener('dragstart', dragStartHandler);
        items.addEventListener('dragover', dragOverHandler);
        items.addEventListener('dragenter', dragEnterHandler);
        items.addEventListener('dragdrop', dragDropHandler);
        items.addEventListener('dragleave', dragLeaveHandler);
        items.addEventListener('dragend', dragEndHandler);
    })
}

function dragStartHandler(event) {
        selectedNumberId = event.target.id
        console.log('start')
        event.currentTarget.style.border = 'dashed';
        event.dataTransfer.setData('text/plain', event.target.id);
        console.log(event.target.id);
}

function dragOverHandler(event) {
    selectedDropZoneId = event.target.id;  
    console.log('over');
    if (testCardMatch(selectedDropZoneId === selectedNumberId)) {
        event.preventDefault();
        event.currentTarget.classList.add('hover');
        event.target.style.background = 'yellow'; 
        document.getElementById(selectedDropZoneId).style.background = "green";
        document.getElementById(selectedNumberId).style.display = "block";
        console.log('match');
        return true;
        
    } else {
    console.log('no match try the hint');
    document.getElementById(selectedDropZoneId).style.background = "red";
    document.getElementById(selectedNumberId).style.display = "block";
    return false;
    }
}
function dragEnterHandler(event) {
    console.log(event.target.id);
    
}

function dragLeaveHandler(event) {
    event.currentTarget.classList.remove('hover');
}

function dragDropHandler(event) {
    selectedDropZoneId = event.target.id;
    console.log('drop');
    event.currentTarget.classList.remove('hover');
    let targetData = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(targetData));
    console.log(dropZoneBackground);
        if(testCardMatch(selectedNumberId === selectedDropZoneId)){
            // alert('match');
            matchingCardScore ++;
            console.log(selectedDropZoneId);
            console.log(selectedNumberId);
        } else {

        }
         if (matchingCardScore === 5) {
            // alert('you win!'); 
            winGameModal();
        }
 }

function testCardMatch() {
    if (selectedNumberId === 'num1' && selectedDropZoneId === 'img1'){
        console.log('match');
        console.log(selectedDropZoneId);
        return true

    } else if (selectedNumberId === 'num2' && selectedDropZoneId === 'img2'){
        console.log('match');
        return true

    } else if (selectedNumberId === 'num3' && selectedDropZoneId === 'img3'){
        console.log('match');
        return true

    } else if (selectedNumberId === 'num4' && selectedDropZoneId === 'img4'){
        console.log('match');
        return true

    } else if (selectedNumberId === 'num5' && selectedDropZoneId === 'img5'){
        console.log('match');
        return true

    } else {
        return false;
    }
}


const openCardButn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeCardButn = document.getElementById('closeModal');

const openCardButn2 = document.getElementById('openModal2');
const modal2 = document.getElementById('modal2');
const closeCardButn2 = document.getElementById('closeModal2');

const openCardButn3 = document.getElementById('openModal3');
const modal3 = document.getElementById('modal3');
const closeCardButn3 = document.getElementById('closeModal3');

const openCardButn4 = document.getElementById('openModal4');
const modal4 = document.getElementById('modal4');
const closeCardButn4 = document.getElementById('closeModal4');

const openCardButn5 = document.getElementById('openModal5');
const modal5 = document.getElementById('modal5');
const closeCardButn5 = document.getElementById('closeModal5');


const winModal = document.getElementById('winModal');
const playAgainButn = document.getElementById('closeWinModal');

const openModal = () => { modal.style.display = 'block';}
const closeModal = () => { modal.style.display = 'none';}

const openModal2 = () => { modal2.style.display = 'block';}
const closeModal2 = () => { modal2.style.display = 'none';}

const openModal3 = () => { modal3.style.display = 'block';}
const closeModal3 = () => { modal3.style.display = 'none';}

const openModal4 = () => { modal4.style.display = 'block';}
const closeModal4 = () => { modal4.style.display = 'none';}

const openModal5 = () => { modal5.style.display = 'block';}
const closeModal5 = () => { modal5.style.display = 'none';}

const winGameModal = () => {
    if (matchingCardScore === 5) {
        winModal.style.display = 'block'; 
        console.log('open winModal'); 
    }
}
const playAgainClick = () => {window.location.reload();}

playAgainButn.addEventListener('click', playAgainClick);
openCardButn.addEventListener('click', openModal);
closeCardButn.addEventListener('click', closeModal);

openCardButn2.addEventListener('click', openModal2);
closeCardButn2.addEventListener('click', closeModal2);

openCardButn3.addEventListener('click', openModal3);
closeCardButn3.addEventListener('click', closeModal3);

openCardButn4.addEventListener('click', openModal4);
closeCardButn4.addEventListener('click', closeModal4);

openCardButn5.addEventListener('click', openModal5);
closeCardButn5.addEventListener('click', closeModal5);
    
