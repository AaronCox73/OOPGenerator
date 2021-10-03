function managerCard(manager) {

    return `
<div class="card" style="width: 15rem;">
<div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">${manager.getRole()}</p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item" id="id">ID: ${manager.id}</li>
    <li class="list-group-item" id="email">Email:<a href = 'mailto:${manager.email}'>${manager.email}</a></li>
    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
</ul>

</div>
`

}

module.exports = managerCard;

