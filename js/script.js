var dropdown = false;

function navDropdown(){
    if(dropdown == false){
        dropdown = true;

        document.getElementById("nav-Dropdown").style.display = "block";
    }else{
        dropdown = false;

        document.getElementById("nav-Dropdown").style.display = "none";
    }
}

var pos = 0;

function carouselBack(){
    var carouselImages = document.getElementById("carouselImages");
    
    pos += 100;
    carouselImages.style.marginLeft = pos+"%";
    
    if(pos == -200){
        document.getElementById("navCarouselPrev").style.display = "block";
        document.getElementById("navCarouselNext").style.display = "none";
    }else if(pos == 0){
        document.getElementById("navCarouselPrev").style.display = "none";
        document.getElementById("navCarouselNext").style.display = "block";
    }else{
        document.getElementById("navCarouselNext").style.display = "block";
        document.getElementById("navCarouselPrev").style.display = "block";
    }
}

function carouselAuto(){
    var carouselImages = document.getElementById("carouselImages");

    if(pos == -300){
        pos = 0
    }

    if(pos == -200){
        document.getElementById("navCarouselPrev").style.display = "block";
        document.getElementById("navCarouselNext").style.display = "none";
    }else if(pos == 0){
        document.getElementById("navCarouselPrev").style.display = "none";
        document.getElementById("navCarouselNext").style.display = "block";
    }else{
        document.getElementById("navCarouselNext").style.display = "block";
        document.getElementById("navCarouselPrev").style.display = "block";
    }
    
    carouselImages.style.marginLeft = pos+"%";
    pos -= 100;
}

function previewProduct(imageNum) {
    var currPreview = document.getElementById("curr-preview");
    var targetImg = document.getElementById("next-preview"+imageNum);

    //Mengubah gambar preview sesuai gambar yang diclick di bawah
    currPreview.src = targetImg.src;

    //Inisialisasi style default
    for(var i = 1; i <= 5; i++){
        document.getElementById("next-preview"+i).style.border = "none";
    }

    //style sesuai gambar yang di click
    targetImg.style.border = "3px solid black";
}

function sizeOpt(size){
    var sizeCurr = document.getElementById("sizeCurr");
    var buttonSize = document.getElementsByClassName("size-opt");
    var addCartButton = document.getElementById("addCartButton");

    //Inisialisasi style default
    for(var i = 0; i < buttonSize.length; i++){
        buttonSize[i].style.background = "transparent";
        buttonSize[i].style.color = "black";
        buttonSize[i].style.border = "1px solid var(--secondary)";
    }

    //Style sesuai option yang di click
    if(size == 1){
        sizeCurr.innerText = "M";
        buttonSize[0].style.color = "white";
        buttonSize[0].style.background = "black";
        addCartButton.className = "cart";
    }else if(size == 2){
        sizeCurr.innerText = "L";
        buttonSize[1].style.color = "white";
        buttonSize[1].style.background = "black";
        addCartButton.className = "cart";
    }else if(size == 3){
        sizeCurr.innerText = "XL";
        buttonSize[2].style.color = "white";
        buttonSize[2].style.background = "black";
        addCartButton.className = "cart";
    }else if(size == 4){
        sizeCurr.innerText = "XXL";
        buttonSize[3].style.color = "white";
        buttonSize[3].style.background = "black";
        addCartButton.className = "cart";
    }
}

function tabDesc(num){

    if(num == 1){
        document.getElementById("desc"+1).style.display = "block";
        document.getElementById("desc"+2).style.display = "none";

        document.getElementById("tabDesc"+1).classList.add("tab-active");
        document.getElementById("tabDesc"+2).classList.remove("tab-active");
    }else{
        document.getElementById("desc"+1).style.display = "none";
        document.getElementById("desc"+2).style.display = "block";

        document.getElementById("tabDesc"+2).classList.add("tab-active");
        document.getElementById("tabDesc"+1).classList.remove("tab-active");
    }
}

var voucherModalState = 0;

function voucherModal(){

    var voucher = document.getElementById("voucher");

    if(voucherModalState == 0){
        voucherModalState = 1;

        voucher.style.display = "flex";
    }else{
        voucherModalState = 0;

        voucher.style.display = "none";
    }
}

var loginState = 0;

function loginAction(){
    const beforeLog = document.getElementById('beforeLogin');
    const afterLog = document.getElementById('afterLogin');

    if(loginState == 0){
        loginState = 1;

        beforeLog.style.display = "none";
        afterLog.style.display = "dispay";
    }else{
        loginState = 0;

        beforeLog.style.display = "display";
        afterLog.style.display = "none";
    }
}

function selectAll(source){
    for(var i = 1; i <= 2; i++){
        document.getElementById("selectItem"+i).checked = source.checked;
    }
}

var voucherState = false;

function useVoucher(){
    var voucherButton = document.getElementById("voucherButton");
    var voucherUsed = document.getElementById("voucherUsed");

    if(voucherState == false){
        voucherState = true;

        voucherButton.style.display = "none";
        voucherUsed.style.display = "block";
    }else{
        voucherState = false;

        voucherButton.style.display = "block";
        voucherUsed.style.display = "none";
    }
}

var fav = 0;

function clickFav(){
    
    var fav_btn = document.getElementById("fav-btn");

    if(fav == 0){
        fav_btn.style.color = "red";
        fav_btn.style.fill = "red";
        fav = 1;
    }else{
        fav_btn.style.color = "var(--primary)";
        fav_btn.style.fill = "none";
        fav = 0;
    }
}