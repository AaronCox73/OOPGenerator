function internCard(intern) {

    return `
<div class="card" style="width: 15rem;">
<div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text">${intern.getRole()}</p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item" id="id">ID: ${intern.id}</li>
    <li class="list-group-item" id="email">Email:<a href = 'mailto:${intern.email}'>${intern.email}</a></li>
    <li class="list-group-item">Intern's School: ${intern.school}</li>
</ul>

</div>
`

}

module.exports = internCard;