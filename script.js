document.addEventListener('DOMContentLoaded', function() {
    const skillList = ['JavaScript', 'TypeScript', 'Angular', 'Vuejs', 'AngularJs', 'HTML', 'CSS', 'SCSS',
        'RxJS', 'GraphQL', 'Heroku', 'Vuex', 'VuexORM', 'Jenkins', 'Karma', 'Jasmine', 'Agile', 'Data structure', 'PostgreSQL',
        'Cypress', 'Playwright', 'Bootstrap', 'Algorithms', 'Gradle', 'Webpack', 'babel', 'Websocket', 'Ionic', 'OWSAP',
        'Linux', 'CVE', 'CVSS', 'Storybook', 'Angular materials', 'Git', 'GiHub', 'GitLab', 'Bitbucket'
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

