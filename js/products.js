// js/products.js

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://sheetdb.io/api/v1/9ydjw5fuqdv9z")
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById("productContainer");
  
        if (!data || data.length === 0) {
          container.innerHTML = "<p>No artworks available yet.</p>";
          return;
        }
  
        data.forEach(item => {
          const card = document.createElement("div");
          card.classList.add("product-card");
  
          card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="art-img"/>
            <h3>${item.title}</h3>
            <p><strong>Artist:</strong> ${item.name}</p>
            <p><strong>Price:</strong> ₹${item.price}</p>
            <p>${item.description}</p>
            <button onclick="copyUPI('${item.upi}')">Pay UPI: ${item.upi}</button>
          `;
  
          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error("Error fetching artworks:", error);
      });
  });
  
  function copyUPI(upi) {
    navigator.clipboard.writeText(upi).then(() => {
      alert("UPI ID copied: " + upi);
    });
  }
  