document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("cvModal");
  var btn = document.getElementById("cvButton");
  var span = document.getElementsByClassName("close")[0];

  // Open the modal when the button is clicked
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // Close the modal when the 'X' (span) is clicked
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Close the modal when clicking outside the modal content
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});



// Function to flip the order of image and text
function flipImageText(sectionId) {
  // Select the container of the section based on the ID passed
  const container = document.querySelector(`#${sectionId} .features-container`);

  // Check if container exists and has two children (text and image divs)
  if (container && container.children.length === 2) {
    const firstChild = container.children[0];
    const secondChild = container.children[1];

    // Swap the order by using insertBefore
    container.insertBefore(secondChild, firstChild);
  }
}

// Flip the order for main features and additional features
flipImageText('main-features'); // This will flip the main-features section
flipImageText('additional-features'); // This will flip the additional-featu


<button onclick="flipImageText('main-features'); flipImageText('additional-features');">
  Flip Image and Text
</button>