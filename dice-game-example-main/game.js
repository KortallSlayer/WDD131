// click on button
document.querySelector('#rollButton').addEventListener("click", e => {
    // animate the die
    document.querySelectorAll('#gameboard img').forEach(image => {
        // change image src to the animated gif
        setDieImages("assets/die_rolling.gif");
    });
    // land on a random new number
    setTimeout(() => {
        //this function will run after the timeout duration
        document.querySelectorAll('#gameboard img').forEach(image => {
            const randomNumber = Math.ceil(Math.random() * 6 );
            image.src = `assets/white_dice_${randomNumber}.gif`;
        });
        //math.random
        //0 - 1, 0.357 
    }, 1000);
})

function setDieImages(imagePath) {
    document.querySelectorAll('#gameboard img').forEach(image => {
        image.src = imagePath;
    });
}