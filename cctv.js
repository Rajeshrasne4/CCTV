 document.addEventListener('DOMContentLoaded', function() {
            var draggableImage = document.querySelector('.draggable-image');
            var isDragging = false;
            var startX, startY;
            var offsetX = 0, offsetY = 0;

            // Add event listeners for mouse/touch events
            draggableImage.addEventListener('mousedown', startDragging);
            draggableImage.addEventListener('touchstart', startDragging);

            document.addEventListener('mousemove', dragImage);
            document.addEventListener('touchmove', dragImage);

            document.addEventListener('mouseup', stopDragging);
            document.addEventListener('touchend', stopDragging);

            // Function to start dragging
            function startDragging(e) {
                e.preventDefault();
                isDragging = true;

                // Get initial position and offset
                if (e.type === 'mousedown') {
                    startX = e.clientX;
                    startY = e.clientY;
                } else if (e.type === 'touchstart') {
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                }

                offsetX = startX - draggableImage.offsetLeft;
                offsetY = startY - draggableImage.offsetTop;
            }

            // Function to drag the image
            function dragImage(e) {
                if (!isDragging) return;
                e.preventDefault();

                // Calculate the new position
                var moveX, moveY;
                if (e.type === 'mousemove') {
                    moveX = e.clientX - offsetX;
                    moveY = e.clientY - offsetY;
                } else if (e.type === 'touchmove') {
                    moveX = e.touches[0].clientX - offsetX;
                    moveY = e.touches[0].clientY - offsetY;
                }

                // Update the position of the image
                draggableImage.style.left = moveX + 'px';
                draggableImage.style.top = moveY + 'px';
            }

            // Function to stop dragging
            function stopDragging() {
                isDragging = false;
            }
        });
    
  // Get the paragraph element
  var paragraph = document.getElementById("name");

  // Define an array of colors
  var colors = ["White","Yellow","Green","Cyan","Magenta"];

  // Function to change the color randomly
  function changeColor() {
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * colors.length);
    
    // Get the random color from the array
    var randomColor = colors[randomIndex];
    
    // Change the color of the paragraph
    paragraph.style.color = randomColor;
  }

  // Call the changeColor function initially
  changeColor();

  // Call the changeColor function every 2 seconds (example)
  setInterval(changeColor, 1000);


  document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.getElementById("read-more");
    const secondParagraph = document.getElementById("second-paragraph");

    // Add a click event listener to the "Read More" button
    readMoreButton.addEventListener("click", function () {
        if (secondParagraph.style.display === "none" || secondParagraph.style.display === "") {
            // If the second paragraph is hidden, show it
            secondParagraph.style.display = "block";
            readMoreButton.textContent = "Read Less...";
            
        } else {
            // If the second paragraph is visible, hide it
            secondParagraph.style.display = "none";
            readMoreButton.textContent = "Read More...";
            
        }
    });
});




new WOW().init();


$(function() {
    $('.product-thumb').matchHeight();
});