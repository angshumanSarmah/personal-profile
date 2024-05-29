document.addEventListener('DOMContentLoaded', function() {
    const skillList = [
        'JavaScript', 'TypeScript', 'Angular', 'Vuejs', 'AngularJs', 'HTML', 'CSS', 'SCSS',
        'Bootstrap', 'Angular materials', 'D3.js',
        'Debugging',
        'RxJS', 'Vuex', 'VuexORM',
        'Karma', 'Jasmine', 'mocha', 'Cypress', 'Playwright',
        'Data structure', 'Algorithms',
        'PostgreSQL', 'mongoDB',
        'Gradle', 'Webpack', 'babel',
        'Linux',  'Storybook', 'Git', 'GiHub', 'GitLab', 'Bitbucket',
        'Heroku', 'Jenkins',
        'GraphQL', 'REST',
        'Agile', 'sprint',
        'Ionic', 'Websocket',
        'OWSAP', 'CVE', 'CVSS'
    ];
    const skillContainer = document.querySelector('.skills-list');
    console.log(skillContainer)
    skillList.forEach((el) => {
        const skillDiv = document.createElement('div');
        skillDiv.setAttribute('class', 'skill');
        skillDiv.innerHTML = el;
        skillContainer.appendChild(skillDiv);
    });

    const searchInput = document.querySelector('.skills-search input');
    const skills = document.querySelectorAll('.skill');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        skills.forEach(skill => {
            if (skill.textContent.toLowerCase().includes(query)) {
                skill.style.display = 'block';
            } else {
                skill.style.display = 'none';
            }
        });
    });
});

