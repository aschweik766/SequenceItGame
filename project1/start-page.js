const openInstructions = document.getElementById('howToPlayModal');
const strtModal = document.getElementById('startModal');
const closeInstructions = document.getElementById('closeStartModal');

const openModal = () => { strtModal.style.display = 'block';}
const closeModal = () => { strtModal.style.display = 'none';}

openInstructions.addEventListener('click', openModal);
closeInstructions.addEventListener('click', closeModal);