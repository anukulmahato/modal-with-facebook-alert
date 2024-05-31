const modal_btn = document.getElementById("modal_btn");
const modal = document.getElementById("modal");
const close_modal = document.getElementById("close_modal");
const alert = document.querySelector('.anu-alert');
const alertClose = document.querySelector('.close');
const alertKeep = document.getElementById('keep');
const alertDiscard = document.getElementById('discard');

//Open Modal
modal_btn.onclick = (e) => {
    e.preventDefault();

    modal.classList.add('active');
}

    
// }
modal.addEventListener('click', function(e){
    if(e.target == this) {
        modal.classList.remove('active');
    }
});


//Close modal
close_modal.onclick = (e) => {
    e.preventDefault();

    // modal.classList.remove('active');
    alert.style.display = 'flex'
}


//Alert Close
alertClose.onclick = (e) => {
    alert.style.display = "none";
}

// Alert keep
alertKeep.onclick = (e)  => {
    e.preventDefault();
    alert.style.display = "none";
};

alertDiscard.onclick = () => {
    alert.style.display = "none";
    modal.classList.remove('active');
};


