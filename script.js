window.addEventListener('load', () => {
  const container = document.getElementById('container');
  const title = document.getElementById('title');

  fetch(
    'https://handlers.education.launchcode.org/static/astronauts.json'
  ).then((response) => {
    response.json().then((json) => {
      title.innerHTML += `: ${json.length}`;

      json = json.sort((a, b) => (a.hoursInSpace < b.hoursInSpace ? 1 : -1));

      json.forEach((astronaut, index) => {
        container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li id="activeStatus${index + 1}">Active: ${
          astronaut.active
        }</li>
                        <li>Skills: ${astronaut.skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
        `;
        const activeStatus = document.getElementById(
          `activeStatus${index + 1}`
        );
        if (astronaut.active) {
          activeStatus.style.color = 'green';
        }
      });
    });
  });
});
