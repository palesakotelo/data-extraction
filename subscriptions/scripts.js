// Icons
lucide.createIcons();

// Chart
new Chart(document.getElementById("chart"), {
    type: 'pie',
    data: {
        labels: ['Basic', 'Standard', 'Enterprise'],
        datasets: [{
            data: [80, 120, 45],
            backgroundColor: ['#6c63ff', '#ff6b6b', '#4ecdc4']
        }]
    }
});

function navigate(url) {
    window.location.href = url;
  }