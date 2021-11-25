class ScrollPrompt {
    svgSource = "homepageAssets/downarrow.svg";
    fadeOutScrollAmount = 150; // fade out completely at this scroll amount

    constructor() {
        const html = `<object data="${this.svgSource}"></object>`;
        this.objectSVG = utils.htmlToElement(html);
        this.objectSVG.onload = () => this.onload();
        document.body.appendChild(this.objectSVG);
    }

    onload() {
        this.svg = this.objectSVG.contentDocument.documentElement;
        this.objectSVG.parentElement.replaceChild(this.svg, this.objectSVG);
        this.svg.classList.add("scroll-prompt");

        this.svg.addEventListener("click", () => {
            window.scroll({
                top: 1000,
                behavior: "smooth",
            });
        });

        document.addEventListener("scroll", () => {
            this.svg.style.opacity = Math.max(0, 1 - window.scrollY / this.fadeOutScrollAmount);
        });
    }
}

