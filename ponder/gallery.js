// 1. grab our HTML elemnts
let gallerySection = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector("img");
let closeButton = modal.querySelector('.close-viewer');
// 2. add an event listner, when image clicked open the modal
gallerySection.addEventListener('click', (event) => {
    console.log(event.target.src);
    if(event.target.src !== undefined)
    {
        // display modal
    modal.showModal();
    // set the source img of modal
    modalImg.src = event.target.src.replace("-sm", "-full");
    }
    
    
});
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// 3.