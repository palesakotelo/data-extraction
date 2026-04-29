lucide.createIcons();

    function navigate(url) {
      window.location.href = url;
    }

    function triggerUpload(box){
            
    box.querySelector(".file-input").click();
            
    }
            
    function handleFileSelect(input){
            
    if(input.files && input.files[0]){
            
    const span = input.parentElement.querySelector("span");
            
    span.textContent = "Selected: " + input.files[0].name;
            
    }
            
}

function goToCompanies() {
    window.location.href = "../companies/index.html"; 
}

