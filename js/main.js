const team = [
    {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
    },
    {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
    },
    {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
    },
    {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
    },
    {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// BONUS 1
// for (let i=0; i <team.length; i++){
//     document.getElementById('card').innerHTML += `<img src="img/${team[i].image}" class="picture" alt="">` + `<br>` + team[i].name + "" + " " + `<em>${team[i].role}</em>`;
// }

//BONUS 2

for (let i=0; i <team.length; i++){
    
    document.getElementById('cards').innerHTML += `<div class="p-5 mt-3 d-inline-block">
    <div class="card">
        <img src="img/${team[i].image}" class="card-img-top" alt="...">
            <div class="card-body bg-light">
                <h5 class="card-title">${team[i].name}</h5>
                <p class="card-text fst-italic text-muted">${team[i].role}</p>
            </div>
        </div>
        </div>
</div>`;
}
