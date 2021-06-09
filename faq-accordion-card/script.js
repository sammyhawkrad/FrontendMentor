const faq = document.getElementsByClassName("question");


for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const answer = this.nextElementSibling;
        const arrow = this.firstElementChild;
        if (answer.style.display === "block") {
            answer.style.display = "none";
            arrow.style.rotate = "none"
        } else {
            answer.style.display = "block";
            arrow.style.rotate = "180deg"
        }        
    });
    
}
