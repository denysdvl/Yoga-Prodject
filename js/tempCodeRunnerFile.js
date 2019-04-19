    let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");


    function hideTabContent(b){
        for(let i = b; i < tabContent.length; i++){
            tabContent[i].classList.contains(".hide");
            tabContent[i].classList.remove(".show");
            tabContent[i].classList.add(".hide");
        }
    }

    hideTabContent(1);