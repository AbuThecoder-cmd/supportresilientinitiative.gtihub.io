document.getElementById("loanForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Basic validation check for agreement
    if (!document.getElementById("agreement").checked) {
      alert("Please agree to the terms and conditions.");
      return;
    }
  
    // Form data collection
    const fullName = document.getElementById("fullName").value;
    const nationalId = document.getElementById("nationalId").value;
    const loanAmount = document.getElementById("loanAmount").value;
    
    // Check if essential fields are filled
    if (fullName === "" || nationalId === "" || loanAmount === "") {
      alert("Please fill out all required fields.");
      return;
    }
  
    // Get the file input (image)
    const assetImage = document.getElementById("assetImage").files[0];
    if (!assetImage) {
      alert("Please upload an image of the security asset.");
      return;
    }
  
    alert("Form submitted successfully!");
    document.getElementById("loanForm").reset();
    document.getElementById("imagePreview").src = ""; // Clear image preview after submission
  });
  
  // Image Preview functionality
  document.getElementById("assetImage").addEventListener("change", function () {
    const file = this.files[0];
    const preview = document.getElementById("imagePreview");
  
    // Validate that the file is an image
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result; // Display the uploaded image
      };
      reader.readAsDataURL(file);
    } else {
      preview.src = ""; // Clear the preview if the file is not valid
      alert("Please upload a valid image file.");
    }
  });
  