
document.addEventListener("DOMContentLoaded", function() {
  
  // Delete Offers Functionality
  
  var deleteButton = document.getElementById("delete");
  deleteButton.addEventListener("click", function() {
	  
    var checkboxes = document.querySelectorAll(".offers-list input[type='checkbox']");
    var selectedOffers = Array.from(checkboxes).filter(checkbox => checkbox.checked);

    if (selectedOffers.length === 0) {
      alert("Please select at least one offer");
    } 
	
	else {
      var confirmDelete = confirm("Are you sure you want to delete the selected offers?");
      if (confirmDelete) {
        selectedOffers.forEach(checkbox => {
          checkbox.closest(".offer-item").remove();
        });
      }
    }
  });

  // Add Offer Form Validation
  
  const addOfferButton = document.querySelector(".add-offer");
  addOfferButton.addEventListener("click", function(event) {
    event.preventDefault();

    var title = document.getElementById("title").value.trim();
    var description = document.getElementById("description").value.trim();
    var fileUpload = document.getElementById("photo-upload");

    if (!title || !description || !fileUpload.files.length) {
      alert("Please fill in all fields.");
    } else {
		
  // Add new offer to the list
	  
      var offersList = document.getElementById("list");

      var newOffer = document.createElement("div");
      newOffer.classList.add("offer-item");

      newOffer.innerHTML = `
        <img src="${URL.createObjectURL(fileUpload.files[0])}" alt="Offer image">
        <label class="title">${title}</label>
        <label><br>${description}</label>
        <input type="checkbox">
      `;

      offersList.appendChild(newOffer);

  // Clear form fields
	  
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
      document.getElementById("photo-upload").value = "";
    }
  });
});