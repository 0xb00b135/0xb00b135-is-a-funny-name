function poopup() {
    var c = document.cookie;
    if (!c.includes("bypass")){
        Array.from(document.getElementsByTagName('*')).forEach(element => {
            const clone = element.cloneNode(true);
            element.parentNode.replaceChild(clone, element);
        });
    
        const overlay = document.createElement("img");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        var url = " \
       https://cdn.discordapp.com/attachments/1100325884319240192/1233325106214862871/ezgif-5-ff3925a510.gif?ex=6630a383&is=662f5203&hm=b9a312368a0359061b3e702f99ec0fc0cf21a859e6e1f718e7e38ddbd74b620e& "
        overlay.src = url;
        overlay.frameborder="0";
        overlay.style.zIndex = "32000";
        document.body.append(overlay);
    }
}
poopup();
