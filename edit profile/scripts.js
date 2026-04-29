document.querySelector(".upload-btn").addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
  
    input.onchange = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function () {
        const wrapper = document.querySelector(".avatar-wrapper");
  
        wrapper.innerHTML = `
        <img src="${reader.result}" class="avatar-img">
      `;
    };
  
      reader.readAsDataURL(file);
    };
  
    input.click();
  });