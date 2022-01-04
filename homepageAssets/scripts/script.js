function createAppend(html, container = document.body) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();

    const element = template.content.firstChild;
    container.appendChild(element);
    return element;
}

function createExternLink(faIconName, url) {
    return `<a href="${url}" target="_blank"><i class="fa fa-${faIconName} fa-2x"></i></a>`;
}

const sectionContainer = document.getElementById("section-container");

// prettier-ignore
createAppend(`
    <section class="about-us">
        <h2>We have been producing free and open source software since 2020</h2>
        <a href="https://github.com/nalton-software/" target="_blank">
            <i class="fa fa-github fa-2x"></i>
            <span>View the source code for our projects on GitHub</span>
        </a>
        <p>We use Arch, BTW</p>
    </section>`,
    sectionContainer
);

// projects are from projects.js
projects.forEach((project) => {
    let extraLinks = "";
    if (project.githubUrl) extraLinks += createExternLink("github", project.githubUrl);
    if (project.downloadUrl) extraLinks += createExternLink("download", project.downloadUrl);

    // prettier-ignore
    createAppend(`
        <section>
            <div class="content-container">
                <h2>${project.name}</h2>

                <a href="${project.url}" class="website-link" target="_blank">
                    ${project.url}
                    <i class="fa fa-external-link-alt"></i>
                </a>

                ${extraLinks}

                <div class="description">
                    ${project.description}
                </div>
            </div>

            <img src="homepageAssets/projectImages/${project.imageName}"
                alt="Screenshot of ${project.name}" />
        </section>`,
        sectionContainer
    );
});

new ScrollPrompt();
