class ScrollPrompt {
    size = 50;
    imageSource = "homepageAssets/downarrow.svg";
    fadeOutScrollAmount = 150; // fade out completely at this scroll amount

    constructor() {
        const html = `
            <img src="${this.imageSource}" style="
                width: ${this.size}px;
                height: ${this.size}px;
                position: fixed;
                margin-auto;
                left: 50vw;
                transform: translate(-50%,-50%);
                bottom: 10px;
            ">
        `;
        this.imageElement = utils.htmlToElement(html);
        document.body.appendChild(this.imageElement);

        this.imageElement.addEventListener("click", e => {
            window.scrollBy(0, window.innerHeight - window.scrollY);
        });

        document.addEventListener("scroll", e => {
            this.imageElement.style.opacity =
                Math.max(0, 1 - (window.scrollY / this.fadeOutScrollAmount));
        });
    }

    htmlToElement(html) {
        const template = document.createElement("template");
        template.innerHTML = html.trim();
        return template.content.firstChild;
    }
}