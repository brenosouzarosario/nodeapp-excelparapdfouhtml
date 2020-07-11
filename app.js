var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var leitor = new Reader();
var escritor = new Writer();
var PDFWriter = require("./PDFWriter");


async function main() {
    var dados = await leitor.Read("./teste.csv");

    var dadosProcessados = Processor.Process(dados);

    var teste = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(teste);

    escritor.Write(Date.now() + ".html", html);

    PDFWriter.WritePDF(Date.now() + ".PDF", html);

}

main();