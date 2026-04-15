function go(page){
    window.location.href = page;
}

function setActive(){
    const current = document.body.dataset.page;
    document.querySelectorAll(".sidebar-item").forEach(item=>{
        item.classList.toggle("active", item.dataset.page === current);
    });
}

setActive();