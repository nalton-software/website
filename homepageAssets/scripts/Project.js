class Project extends PageSection {
    constructor(project) {
        /*
        project is an object containing these properties:
        - name: name of project show as a h1 (string)
        - githubUrl: url of the github repo (string, optional)
        - url: url of the project where you can run/download it (string)
        - description: description of the project in html markup (string)
        - imageName: name of the image next to project
            (maps to image in homepageAssets/projectImages/) (string)
        */
        super();
        this.project = project;
    }

    createExternLink(faIconName, url) {
        return `<a href="${url}" target="_blank">
            <i class="fab fa-${faIconName} fa-2x"></i>
            &emsp;View source on GitHub</a>`
    }

    drawContent(rowTheme) {
        var extraLinks = "";
        if (this.project.githubUrl) {
            extraLinks += this.createExternLink("github", this.project.githubLink);
        }
        
        return utils.htmlToElements(`
            <div class="content-container">
                <h2>${this.project.name}</h2>

                <br />

                <a href="${this.project.url}" class="website-link" target="_blank">
                    ${this.project.url}
                    <i class="fas fa-external-link-alt"></i>
                </a>

                <br />

                ${extraLinks}

                <div class="description">
                    ${this.project.description}
                </div>
            </div>

            <img src="${"homepageAssets/projectImages/" + this.project.imageName}"
                alt="Screenshot of ${this.project.name}" />
        `);
    }
}