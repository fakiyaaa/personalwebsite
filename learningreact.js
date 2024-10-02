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