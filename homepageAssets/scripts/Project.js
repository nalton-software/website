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
        return `<a class="fab fa-${faIconName} fa-2x" href="${url}" target="_blank"></a>`
    }

    drawContent(rowTheme) {
        var extraLinks = "";
        if (this.project.githubUrl) {
            extraLinks += this.createExternLink("github", this.project.githubLink);
        }
        
        return utils.htmlToElements(`
            <div class="content-container">
                <h2>${this.project.name}</h2>

                ${extraLinks}

                <a href="${this.project.url}" class="website-link" target="_blank">
                    ${this.project.url}
                    <i class="fas fa-external-link-alt"></i>
                </a>

                <div class="description">
                    ${this.project.description}
                </div>
            </div>

            <img src="${"homepageAssets/projectImages/" + this.project.imageName}"
                alt="Screenshot of ${this.project.name}" />
        `);
    }
}