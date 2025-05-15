// assets/js/app.js

document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.getElementById("login-page");
    const app = document.getElementById("app");
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      loginPage.classList.add("hidden");
      app.classList.remove("hidden");
    });
  
    const toggleSidebar = document.getElementById("toggle-sidebar");
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
  
    toggleSidebar.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      if (sidebar.classList.contains("collapsed")) {
        content.classList.add("ml-20");
        content.classList.remove("ml-64");
      } else {
        content.classList.add("ml-64");
        content.classList.remove("ml-20");
      }
    });
  
    const salesChart = document.getElementById("salesChart");
    if (salesChart) {
      new Chart(salesChart, {
        type: "line",
        data: {
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
          datasets: [{
            label: "Vendas",
            data: [1200, 1900, 3000, 500, 2000, 3000],
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            fill: true,
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "top" },
          }
        }
      });
    }
  });
  