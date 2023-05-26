var Reader = require('./Reader')
var Processor = require('./Processor')
var Table = require('./Table')
var HtmlParser = require('./HtmlParser')
var Writer = require('./Writer')

var leitor = new Reader
var escritor = new Writer()

async function main() {

    
    var dados = await leitor.Reade('./users.csv')
    //console.log('dados crus:',dados)
    var dadosProcessados = Processor.Process(dados)
    //console.log('dados processados:', dadosProcessados)
    var usuarios = new Table(dadosProcessados)
    //usuarios.rows.push(['joao', 'formacao nodejs', 'php', 5])
    var html = await HtmlParser.Parse(usuarios) //construo o html, mas não gero ainda
    var gerarHtml = await escritor.WriteHtml(Date.now()+'.html', html) // aqui eu gero o arquivo html atraves do proprio html
    if(gerarHtml == true) {
        console.log('arquivo html foi gerado')
    }
    escritor.WritePdf(Date.now()+'.PDF', html) // aqui gero o arquivo pdf atraves do html
    //console.log(result) // se result == true então o html foi gerado

}

main()