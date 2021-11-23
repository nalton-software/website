const projectsContainer = document.getElementById("projects-container");

function drawPageSection(pageSection, index) {
    const rowTheme = index % 2 == 0 ? PageSection.RowTheme.Light : PageSection.RowTheme.Dark;

    projectsContainer.appendChild(pageSection.draw(rowTheme));
}

const pageSections = [
    new AboutUsPageSection(),
    new Project({
        name: "Is It Rick?",
        url: "https://naltonsoftware.com/is-it-rick",
        githubUrl: "https://github.com/That-Cool-Coder/is-it-rick",
        description: `
            <p>
                Rick roll detector that is very nice write some more stuff here. This
                detects rick rolls and stuff which is cool I guess. It was made using
                technology created by people yes. Works with magical essence of the many
                seas.
            </p>
            <p>Seas are many and seas cannot be seens.</p>
        `,
        imageName: "is-it-rick.png",
    }),
    new Project({
        name: "Piano",
        url: "https://naltonsoftware.com/piano",
        githubUrl: "https://github.com/Calbabreaker/piano",
        description: `
            <p>
                Play a fully function piano that has support for midi files and
                stuff which is pretty cool. 
            </p>
            <p>You can also play with others using multiplayer stuff.</p>
        `,
        imageName: "piano.png",
    }),
    new Project({
        name: "Minesweeper",
        url: "minesweeper/",
        githubUrl: "https://github.com/that-cool-coder/minesweeper",
        description: `
            <p>
                A modern lightweight JavaScript recreation of the classic minesweeper game. 
            </p>
            <p>It is not fully finished but it's still playable</p>
        `,
        imageName: "minesweeper.png",
    })
]

pageSections.forEach(drawPageSection);
new ScrollPrompt();