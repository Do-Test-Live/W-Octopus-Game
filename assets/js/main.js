// Initialize the score
let score = 9586321; // Start from the existing score in the HTML

document.querySelector('.op-coin-btn').addEventListener('click', function(event) {
    // Get the position of the click relative to the button
    const buttonRect = event.target.getBoundingClientRect();
    const clickX = event.clientX - buttonRect.left;
    const clickY = event.clientY - buttonRect.top;

    // Create a GIF element
    const gif = document.createElement('img');
    gif.src = 'assets/images/bubble-v3.gif'; // Specify the path to the GIF
    gif.classList.add('gif-container');

    // Position the GIF at the click location
    gif.style.left = clickX - 50 + 'px'; // Adjust position based on GIF size
    gif.style.top = clickY - 50 + 'px';

    // Append the GIF to the button
    event.target.appendChild(gif);

    // Remove the GIF after it has finished playing (assuming 2 seconds for GIF duration)
    setTimeout(function() {
        gif.remove();
    }, 1000); // Adjust this to the length of your GIF

    // Increment the score by a certain value (e.g., 100 points per click)
    score += 10;

    // Format the score with commas and update the displayed value
    document.querySelector('.op-score').textContent = score.toLocaleString();
});

