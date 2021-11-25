class PageSection {
    static RowTheme = {
        Light: 0,
        Dark: 1,
    };

    constructor() {
        this.RowTheme = PageSection.RowTheme;
    }

    draw(rowTheme) {
        var elem = utils.htmlToElement(`
            <article class="project ${
                rowTheme == this.RowTheme.Light ? "light-right" : "dark-left"
            }">
            </article>
        `);
        utils.appendChildrenToNode(elem, this.drawContent(rowTheme));
        return elem;
    }

    drawContent(rowTheme) {
        // override this. Returns an array of html elements that is inserted into parent
        return utils.htmlToElements("<p>Empty page section</p>");
    }
}

