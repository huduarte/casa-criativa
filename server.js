//usei o express para criar e configurar meu servidor

const express = require('express');
const server = express()

const ideas  = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum numquam voluptatibus consequuntur reiciendis distinctio, fuga minima modi itaque deserunt repudiandae harum provident eaque inventore dignissimos voluptates ab culpa dolorem?",
        url: "http://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum numquam voluptatibus consequuntur reiciendis distinctio, fuga minima modi itaque deserunt repudiandae harum provident eaque inventore dignissimos voluptates ab culpa dolorem?",
        url: "http://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum numquam voluptatibus consequuntur reiciendis distinctio, fuga minima modi itaque deserunt repudiandae harum provident eaque inventore dignissimos voluptates ab culpa dolorem?",
        url: "http://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729076.svg",
        title: "Filme",
        category: "Diversão em família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum numquam voluptatibus consequuntur reiciendis distinctio, fuga minima modi itaque deserunt repudiandae harum provident eaque inventore dignissimos voluptates ab culpa dolorem?",
        url: "http://rocketseat.com.br"
    },
]

// configurar arquivos estáticos (css,scripts, imagens)

server.use(express.static("public"))

//Configuração do nunjucks

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server, 
    noCache: true,
})



//criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function(req, res){

    
    return res.render("index.html", { ideas })
})
server.get("/ideias", function(req, res){
    return res.render("ideias.html")
})

//Liguei meu servidor na porta 3000

server.listen(3000)
