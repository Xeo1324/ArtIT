// js/upload.js
document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const upi = document.getElementById("upi").value;
    const imageInput = document.getElementById("image");
    const file = imageInput.files[0];
  
    if (!file) {
      alert("Please select an image to upload.");
      return;
    }
  
    const reader = new FileReader();
    reader.onloadend = function () {
      const base64Image = reader.result;
  
      // Store image and data to SheetDB (or a Firebase call here)
      fetch("https://sheetdb.io/api/v1/9ydjw5fuqdv9z", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              title: title,
              price: price,
              upi: upi,
              image: base64Image,
            },
          ],
        }),
      })
        .then((res) => res.json())
        .then(() => {
          alert("Artwork uploaded successfully!");
          document.getElementById("uploadForm").reset();
          localStorage.setItem("upi", upi);
        })
        .catch((err) => {
          console.error("Error uploading artwork:", err);
          alert("Something went wrong.");
        });
    };
  
    reader.readAsDataURL(file);
  });
  