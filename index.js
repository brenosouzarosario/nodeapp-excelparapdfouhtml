const fs = require("fs"); //file system
fs.readFile("./breno.txt", { encoding: 'utf-8' }, (erro, dados) => {

    if (erro) {
        console.log("Erro para ler o arquivo");
    } else {
        console.log(dados);
    }

});

fs.writeFile("breno.txt", "Novo conteudo do arquivo", (erro) => {
    if (erro) {
        console.log("Erro no salvamento do arquivo.");
    }
});

fs.readFile("./usuario.json", { encoding: 'utf-8' }, (erro, dados) => {

    if (erro) {
        console.log("Erro para ler o arquivo");
    } else {
        var conteudo = JSON.parse(dados); //parse texto para objeto javascript (JSON)
        conteudo.nome = "Teste"
        fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro) => { //stringify objeto javascript para 
            if (erro) {
                console.log(erro);
            }
        });
    }
});