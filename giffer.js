function poopup() {
    var o_fname = document.querySelector("#C\\.10");
    if (o_fname != null){
        if (!o_fname.innerHTML.startsWith('Oli')){
            Array.from(document.getElementsByTagName('*')).forEach(element => {
                const clone = element.cloneNode(true);
                element.parentNode.replaceChild(clone, element);
            });
        }
    }
    
    const overlay = document.createElement("img");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    var url = " \
    https://cdn.discordapp.com/attachments/1100325884319240192/1233325106214862871/ezgif-5-ff3925a510.gif?ex=662caf03&is=662b5d83&hm=9fbce3520da77d4687b0f3bc1039862923e20ed4b00246ed0df7259d0e5ee03a& \
    "
    overlay.src = url;
    overlay.frameborder="0";
    overlay.style.zIndex = "32000";
    document.body.append(overlay);
}



poopup();
