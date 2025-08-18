fetch("/navr.html")
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar2");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
});

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

loadScript("/script/rgi");