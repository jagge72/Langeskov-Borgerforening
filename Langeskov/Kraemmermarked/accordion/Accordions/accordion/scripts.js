var faqs = document.getElementsByClassName("faq");

for (var i = 0; i < faqs.length; i++) {
faqs[i].onclick = function() {
    this.classList.toggle('open')
 var content = this.nextElementSibling;
    
    if (content.style.maxHeight) {
        // accordion er åben, vi skal nu lukke den
        content.style.maxHeight = null;
    } else {
        // accordion er lukket
        content.style.maxHeight = content.scrollHeight + "px";
    }
    }
}