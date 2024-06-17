const nav_bar = document.createElement('nav')

nav_bar.className = "navbar navbar-expand-sm bg-dark navbar-dark fixed-top"

nav_bar.innerHTML = `
    <div class="container-fluid">
    <a class="navbar-brand" href="index.html">Green Garden</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
    <ul class="navbar-nav me-auto">
        <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="produtos.html">Produtos</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="clientes.html">Clientes</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="fale_conosco.html">Fale Conosco</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="joguinho.html">Bônus</a>
        </li>
    </ul>
    </div>
    </div>
`
document.body.prepend(nav_bar)

let ghsvasgh = `
    <div class="container-fluid">
    <div class="navbar-header">
    <a class="navbar-brand" href="index.html">Green Garden</a>
    </div>
    <ul class="nav navbar-nav">
    <li><a href="index.html">Home</a></li>
    <li><a href="produtos.html" >Produtos</a></li>
    <li><a href="clientes.html" >Clientes</a></li>
    <li><a href="fale_conosco.html" >Fale conosco</a></li>
    </ul>
    </div>
`
