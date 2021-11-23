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
        url: "https://calbabreaker.github.io/piano/",
        githubUrl: "https://github.com/Calbabreaker/piano",
        description: `
            <p>
                Play a fully function piano that has support for midi files and
                stuff which is pretty cool. 
            </p>
            <p>You can also play over the internet with other people by joining a multiplayer room.
        `,
        imageName: "piano.png",
    }),
    new Project({
        name: "Minesweeper",
        url: "https://naltonsoftware.com/minesweeper/",
        githubUrl: "https://github.com/that-cool-coder/minesweeper",
        description: `
            <p>
                A modern lightweight JavaScript recreation of the classic minesweeper game. 
            </p>
            <p>It is not fully finished but it's still playable</p>
        `,
        imageName: "minesweeper.png",
    }),
    new Project({
        name: "Boids simulation",
        url: "https://naltonsoftware.com/boids/",
        githubUrl: "https://github.com/that-cool-coder/boids",
        description: `
            <p>
                A 2D boids simulation. It's highly configurable through a config file and in future we hope to add a visual configuration so users can experiment with the parameters in real time.
            </p>
        `,
        imageName: "boids.png",
    }),
    new Project({
        name: "Snake game",
        url: "https://naltonsoftware.com/snake/",
        githubUrl: "https://github.com/that-cool-coder/snake",
        description: `
            <p>
                A very simple snake game that's fun to play, and quicker to load and less fiddly than using other implementations online. Coded with wrk.js (now replaced with spnr.js) and p5.js.
            </p>
            <p>Currently it only has the basic game mode but in future more may be added.</p>
        `,
        imageName: "snake.png",
    }),
]

pageSections.forEach(drawPageSection);
new ScrollPrompt();