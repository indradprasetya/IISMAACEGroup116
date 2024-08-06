// Load the navbar from the external file
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
  });

// Load the tab content from the external file
fetch('tab-content.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('tab-content-container').innerHTML = data;
  });

// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('activeTab')?.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Switch to Ongoing tab
    document.getElementById('activeTab').classList.add('active');
    document.getElementById('finishedTab').classList.remove('active');
    document.getElementById('activeContent').classList.add('active');
    document.getElementById('finishedContent').classList.remove('active');
  });

  document.getElementById('finishedTab')?.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Switch to Finished tab
    document.getElementById('finishedTab').classList.add('active');
    document.getElementById('activeTab').classList.remove('active');
    document.getElementById('finishedContent').classList.add('active');
    document.getElementById('activeContent').classList.remove('active');
  });
});
