function engineerCard(engineer) {

    return `
<div class="card" style="width: 15rem;">
<div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">${engineer.getRole()}</p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item" id="id">ID: ${engineer.id}</li>
    <li class="list-group-item" id="email">Email: <a href = 'mailto:${engineer.email}'>${engineer.email}</a></li>
    <li class="list-group-item">Engineer's Github: <a href='https://github.com/${engineer.github}'>${engineer.github}</a></li>
</ul>

</div>

`

}

module.exports = engineerCard;