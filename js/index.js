const accordingBtns = document.querySelectorAll(".btn_detalhe")

accordingBtns.forEach((according) => {
    according.onclick = function(){
        this.classList.toggle("is-open")
        
        let content = this.nextElementSibling
        console.log(content)
        
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight +"px"
            console.log(content.style.maxHeight)
        }
    }
})