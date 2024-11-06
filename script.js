// JavaScript for handling the form submission and displaying the order summary
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to server
  
    // Get form data
    const flowerType = document.querySelector('input[name="flowerType"]:checked').value;
    const quantity = document.getElementById("quantity").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    // Calculate the total cost based on flower type and quantity
    let pricePerFlower = 0;
    switch (flowerType) {
      case "rose":
        pricePerFlower = 10; // Price per rose
        break;
      case "tulip":
        pricePerFlower = 8; // Price per tulip
        break;
      case "lily":
        pricePerFlower = 12; // Price per lily
        break;
      case "sunflower":
        pricePerFlower = 6; // Price per sunflower
        break;
    }
  
    const totalCost = pricePerFlower * quantity;
  
    // Display the order summary
    const summaryText = `
      <strong>Customer Information:</strong><br>
      Name: ${name}<br>
      Email: ${email}<br><br>
      <strong>Order Details:</strong><br>
      Flower Type: ${flowerType.charAt(0).toUpperCase() + flowerType.slice(1)}<br>
      Quantity: ${quantity}<br>
      Total Cost: $${totalCost}
    `;
    
    document.getElementById("summaryText").innerHTML = summaryText;
  
    // Show the order summary and hide the form
    document.getElementById("orderForm").reset(); // Reset the form fields
    document.getElementById("orderSummary").style.display = "block";
  });
  
  // Function to update the flower image preview when the user selects a flower
  document.querySelectorAll('input[name="flowerType"]').forEach((input) => {
    input.addEventListener("change", function() {
      const flowerType = this.value;
      const flowerImagePreview = document.getElementById("flowerImagePreview");
  
      // Image sources for each flower
      let imageSource = "";
      switch (flowerType) {
        case "rose":
          imageSource = "images/rose.jpg"; // Path to rose image
          break;
        case "tulip":
          imageSource = "images/tulip.jpg"; // Path to tulip image
          break;
        case "lily":
          imageSource = "images/lily.jpg"; // Path to lily image
          break;
        case "sunflower":
          imageSource = "images/sunflower.jpg"; // Path to sunflower image
          break;
      }
  
      // Update the preview image based on selection
      flowerImagePreview.src = imageSource;
      flowerImagePreview.style.display = "block"; // Show the image
    });
  });
  