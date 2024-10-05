const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const filterSelect = document.getElementById('filterSelect');

// Load images for different filters
const filters = {
    none: null,
    sunglasses: new Image(),
    hat: new Image()
};

filters.sunglasses.src = 'sunglasses.png';  // Add a sunglasses PNG image with a transparent background
filters.hat.src = 'hat.png';  // Add a hat PNG image with a transparent background

// Access the device's camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
      drawToCanvas();  // Start the real-time rendering once the video is ready
    };
  })
  .catch(err => {
    console.error("Camera access denied: ", err.name);
    alert(`Error: ${err.name}. Please allow camera access in your browser settings.`);
  });

// Draw video and filters onto the canvas in real-time
function drawToCanvas() {
    // Set canvas dimensions to match video feed
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    if (video.videoWidth > 0 && video.videoHeight > 0) {
        // Clear previous frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the video feed on the canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Apply selected filter based on the dropdown
        const selectedFilter = filterSelect.value;

        if (filters[selectedFilter]) {
            const filterImage = filters[selectedFilter];
            // Adjust filter position and size
            const filterWidth = canvas.width / 2;
            const filterHeight = canvas.height / 4;

            ctx.drawImage(filterImage, canvas.width / 2 - filterWidth / 2, canvas.height / 3, filterWidth, filterHeight);
        }
    }

    // Continuously request new frames for the video
    requestAnimationFrame(drawToCanvas);
}

// Add event listener to filter select dropdown
filterSelect.addEventListener('change', () => {
    // Reset canvas when filter changes
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
