class AboutUsPageSection extends PageSection {
    constructor() {
        super();
    }

    drawContent() {
        return utils.htmlToElements(`
            <div class="about-us">
                <h2>We have been producing free and open source software since 2020</h2>
                <br />
                <br />
                <a href="https://github.com/nalton-software/">
                <i class="fa fa-github fa-2x"></i>
                &emsp;View the source code for our projects on GitHub
                </a>
                <br />
                <br />
                <br />
                <p>We use Arch, BTW</p>
                
            </div>
        `);
    }
}

