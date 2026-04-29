lucide.createIcons();
function navigate(url) {
    window.location.href = url;
  }

function editUser(button){

    const row = button.closest("tr");
    
    const id = row.cells[1].innerText;
    const name = row.cells[2].innerText;
    const phone = row.cells[3].innerText;
    
    alert(
    "Edit Staff Member\n\n" +
    "ID: " + id + "\n" +
    "Name: " + name + "\n" +
    "Phone: " + phone
    );
    
    }
    
    function deleteUser(button){
    
    const row = button.closest("tr");
    
    if(confirm("Are you sure you want to delete this staff member?")){
    row.remove();
    }
    
    }