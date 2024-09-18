// Initialize the score
let score = 9586321; // Start from the existing score in the HTML

// Function to handle a single click event and display the GIF
function handleCoinClick(event) {
    // Get the position of the click relative to the page (instead of just the button)
    const clickX = event.clientX;
    const clickY = event.clientY;

    // Create a GIF element
    const gif = document.createElement('img');
    gif.src = 'assets/images/bubble-v3.gif'; // Specify the path to the GIF
    gif.classList.add('gif-container');

    // Position the GIF at the click location relative to the entire page
    gif.style.left = clickX - 50 + 'px'; // Adjust position based on GIF size
    gif.style.top = clickY - 50 + 'px';

    // Append the GIF to the body, so it can overlap other elements freely
    document.body.appendChild(gif);

    // Remove the GIF after it has finished playing (assuming 500ms for GIF duration)
    setTimeout(function() {
        gif.remove();
    }, 500); // Adjust this to the length of your GIF

    // Increment the score by a certain value (e.g., 10 points per click)
    score += 10;

    // Format the score with commas and update the displayed value
    document.querySelector('.op-score').textContent = score.toLocaleString();
}

// Attach a pointerdown event to the button to allow for multi-touch interactions
document.querySelector('.op-coin-btn').addEventListener('pointerdown', function(event) {
    // Handle each pointer click (multi-finger or single-finger)
    handleCoinClick(event);
});

// Simulate loading progress
let progress = 0;
const progressBar = document.querySelector('.progress-bar');
const interval = setInterval(() => {
    progress += 1;
    progressBar.style.width = progress + '%';
    if (progress >= 100) {
        clearInterval(interval);
        // Hide preloader once loading is complete
        document.querySelector('.preloader').style.display = 'none';
    }
}, 30); // Adjust this interval to simulate loading time
