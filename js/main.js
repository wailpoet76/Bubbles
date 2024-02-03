function createBubble() {
    const section = document.querySelector("section");
    const createElement = document.createElement('span');
    var bubbleSize = Math.random() * 60;

    createElement.style.width = 20 + bubbleSize + 'px';
    createElement.style.height = 20 + bubbleSize + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);
    console.log("Create");
    setTimeout(() => {
        createElement.remove();
        console.log("remove");
    }, 4000);
}
setInterval(createBubble, 500);