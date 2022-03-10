//code for game// level 1 MVP
//5 steps image cards with matching ordinal cards to sequence 1st -to - Last//
//use dragEvents
//use DOM styling hidden/appear
//use alert/prompt for user
//keep score 5/5
//dissapear ordinal card as it is dragged over correct card
    //or if incorrect, return to original placing/won't work
        //prompt user incorrect use hint
//use hint if errored
// const dragNumberCards = document.querySelectorAll('.drag-cards')
// const dropZoneImage = document.querySelectorAll('.drop-img');
const canDragCardElements = document.getElementsByClassName('.cards');
// const canDragCardElements = document.querySelectorAll('.drag-cards .cards');
let matchingCardScore;//test match, count match total
let targetId;
let dropTargetId; 

//function event listener click hint button, image description clue appears, timeout 5 seconds

//DRAGGING-DROPPING FUNCTIONALITY//
//function addEventListener 
// dragNumberCards.forEach(element => {
    // element.addEventListener('dragstart', dragStartHandler);
// })
// dropZoneImage.forEach(element => {
function addEventListener(){
   canDragCardElements.forEach(element => {
        element.addEventListener('dragstart', dragStartHandler);
            
        element.addEventListener('dragover', dragOverHandler)

        element.addEventListener('dragenter', dragEnterHandler);

        element.addEventListener('dragdrop', dragDropHandler);

        element.addEventListener('dragleave', dragLeaveHandler);

        element.addEventListener('dragend', dragEndHandler);
    })
}


function dragStartHandler(event) {
        console.log('start')
        event.currentTarget.style.border = 'dashed';
        event.dataTransfer.setData('text/plain', event.target.id);
        // event.dataTransfer.setData('text', event.target.getAttribute('data-source-id'));
        console.log(event.target.id);
}

function dragOverHandler(event) {
    event.preventDefault();
    console.log('over');
    // console.log(event.target.id);
}

function dragEnterHandler(event) {
    event.currentTarget.classList.add('hover');
    console.log(event.target.id);
    // console.log(event.target.id);
}

function dragDropHandler(event) {
    event.preventDefault();
    console.log('drop');
    event.currentTarget.classList.remove('hover');
    event.currentTarget.style.background = "yellow";

    let targetData = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(targetData))
    console.log(targetData);
        if(testCardMatch(targetId, dropTargetId) = true){
            document.getElementById(targetId).style.display = "none";
            matchingCardScore ++;
        }


    function testCardMatch(targetId, dropTargetId) {
        if (targetId === 'num1' && dropTargetId === 'img1'){
            console.log('match');
            alert('match');
        } else {
                console.log('no match');
                alert('try the hint button');
        }
    } 
}


// function dragLeaveHandler() {
//     this.classList.remove('hover');

// };

// function dragEnd() {
//     console.log('end')
// }
// //function for testing card matches and create object for matches





