class ScrollPrompt {
    svgSource = "homepageAssets/downarrow.svg";
    fadeOutScrollAmount = 150; // fade out completely at this scroll amount

    constructor() {
        this.objectSVG = createAppend(`<object data="${this.svgSource}"></object>`);
        this.objectSVG.onload = () => this.onload();
    }

    onload() {
        this.svg = this.objectSVG.contentDocument.documentElement;
        this.objectSVG.parentElement.replaceChild(this.svg, this.objectSVG);
        this.svg.classList.add("scroll-prompt");

        this.svg.addEventListener("click", () => {
            window.scroll({
                top: window.innerHeight,
                behavior: "smooth",
            });
        });

        document.addEventListener("scroll", () => this.calcFade());
        this.calcFade();
    }

    calcFade() {
        this.svg.style.opacity = Math.max(0, 1 - window.scrollY / this.fadeOutScrollAmount);
    }
}
