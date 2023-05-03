const team =[
    {
        name: 'Wayne Barnett', role: 'Founder & CEO',  image: 'walter-barnett-founder-ceo.jpg', 
    },
    {   
        name: 'Angela Carrol', role: 'Chief editor',  image: 'angela-caroll-chief-editor.jpg', 
    },
    {
        name: 'Walter Gordon', role: 'Office Manager',  image: 'walter-gordon-office-manager.jpg', 
    },
    {
        name: 'Angela Lopez', role: 'Social Media Manager',  image: 'angela-lopez-social-media-manager.jpg', 
    },
    {
        name: 'Scott Estrada', role: 'Developer',  image: 'scott-estrada-developer.jpg', 
    },
    {
        name: 'Barbara Ramos', role: 'Graphic Designer',  image: 'barbara-ramos-graphic-designer.jpg', 
    },
];

console.log("Array team",team);

for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    console.log(teamMember);
    
    const element = document.getElementById("teamContent");
    const contentElement = `<div>Il membro ${teamMember.name} lavora come ${teamMember['role']}, immagine: ${teamMember.image}</div>`;

    element.innerHTML = contentElement;
}