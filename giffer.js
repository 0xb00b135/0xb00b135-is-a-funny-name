function poopup() {
    Array.from(document.getElementsByTagName('*')).forEach(element => {
        const clone = element.cloneNode(true);
        element.parentNode.replaceChild(clone, element);
    });
    
    const overlay = document.createElement("iframe");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    document.body.append(overlay);
}

poopup();
