// TODO: add code here
window.addEventListener('load', () => {
  const container = document.getElementById('container');
  fetch(
    'https://handlers.education.launchcode.org/static/astronauts.json'
  ).then((response) => {
    response.json().then((json) => {
      console.log(json);
      json.forEach((astronaut) => {
        container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
        `;
      });
    });
  });
});
