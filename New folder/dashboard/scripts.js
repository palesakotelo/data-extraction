function navigate(page) {
    window.location.href = page;
}

lucide.createIcons();

const regCtx = document.getElementById('regChart').getContext('2d');

new Chart(regCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            data: [100, 150, 120, 160, 220, 250],
            borderColor: '#7c3aed',
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#7c3aed'
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, grid: { color: '#f0f0f0' } },
            x: { grid: { display: false } }
        }
    }
});

const subCtx = document.getElementById('subChart').getContext('2d');

new Chart(subCtx, {
    type: 'doughnut',
    data: {
        labels: ['Basic', 'Standard', 'Enterprise'],
        datasets: [{
            data: [65, 15, 20],
            backgroundColor: ['#3b82f6', '#9333ea', '#ef4444'],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'left',
                labels: { usePointStyle: true, boxWidth: 10 }
            }
        },
        cutout: '70%'
    }
});