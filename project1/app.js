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
let selectedNumberId;
let selectedDropZoneId;
const canDragCardElements = document.querySelectorAll('.draggable-cards, .draggable-drop-img div');
let matchingCardScore = 0;//test match, count match total


//function event listener click hint button, image description clue appears, timeout 5 seconds
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
        selectedNumberId = event.target.id
        console.log('start')
        event.currentTarget.style.border = 'dashed';
        event.dataTransfer.setData('text/plain', event.target.id);
        // console.log(event.target.id);
       
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

function dragLeaveHandler() {
    this.classList.remove('hover');

}

function dragDropHandler(event) {
    selectedDropZoneId = event.target.id;
    console.log('drop');
//     event.currentTarget.classList.remove('hover');
//     event.target.style.background = "yellow";

    let targetData = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(targetData));
    console.log(targetData);

        if(testCardMatch(selectedNumberId === selectedDropZoneId)){
            document.getElementById(selectedNumberId).style.display = "none";
            document.getElementById(selectedDropZoneId).style.background = "yellow";
            matchingCardScore ++;
        }

        if (testCardMatch === 5) {
            alert('you win');
        }
}


function testCardMatch(event) {
        if (selectedNumberId === 'num1' && selectedDropZoneId === 'img1'){
            console.log('match');
            console.log(selectedDropZoneId);
            alert('match');
            return true

        } else if (selectedNumberId === 'num2' && selectedDropZoneId === 'img2'){
            console.log('match');
            alert('match');
            return true

        } else if (selectedNumberId === 'num3' && selectedDropZoneId === 'img3'){
            console.log('match');
            alert('match');
            return true

        } else if (selectedNumberId === 'num4' && selectedDropZoneId === 'img4'){
            console.log('match');
            alert('match');
            return true

        } else if (selectedNumberId === 'num5' && selectedDropZoneId === 'img5'){
            console.log('match');
            alert('match');
            return true
            
        } else {
            console.log('no match');
            alert('try the hint button');
            return false;
            
        }
    } 





// function dragEnd() {
//     console.log('end')
// }
// //function for testing card matches and create object for matches





