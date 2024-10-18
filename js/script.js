document.addEventListener("DOMContentLoaded", function () {
  // Toggle sidebar
  document.getElementById("sidebarCollapse").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
  });

  // Attendance Pie Chart
  const ctxPie = document.getElementById("attendanceChart").getContext("2d");
  new Chart(ctxPie, {
    type: "doughnut",
    data: {
      labels: ["Present", "Absent", "Late"],
      datasets: [
        {
          data: [230, 15, 5],
          backgroundColor: ["#28a745", "#dc3545", "#ffc107"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
      cutout: "70%",
    },
  });

  // Weekly Trend Line Chart
  const ctxLine = document.getElementById("weeklyTrendChart").getContext("2d");
  new Chart(ctxLine, {
    type: "line",
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Attendance Rate",
          data: [95, 93, 97, 94, 96],
          borderColor: "#007bff",
          backgroundColor: "rgba(0, 123, 255, 0.1)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          min: 90,
          max: 100,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
