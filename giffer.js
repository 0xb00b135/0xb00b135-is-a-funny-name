
var b00bz = document.querySelectorAll('[title="Rediger spørgeskemaet"]'); 
if (b00bz.length > 0){
    b00b = b00bz[0].parentNode;
    const clone = b00b.cloneNode(true);
    b00b.parentNode.replaceChild(clone, b00b);
}

function poopup() {
    const overlay = document.createElement("iframe");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    document.body.append(overlay);
}



poopup();
