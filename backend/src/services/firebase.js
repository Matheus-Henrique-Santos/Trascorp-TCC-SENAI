
var admin = require("firebase-admin");

var serviceAccount = require("../config/firebase-key.json");

const BUCKET = "transcorp-937d3.appspot.com"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});
//instanciar o bucket
const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
    if(!req.file) return next();

    //criar nome
    const imagem = req.file;

    //split separa o nome do arquivo da extensão então vamos mudar o nome do arquivo
    //e concatenar com a extensão do arquivo após o ponto
    //como poderiam ter mais pontos no originalname, vamos usar o pop para pegar sempre a ultima
    //parte da string depois do ultimo ponto
    const nomeArquivo = Date.now() + "." + imagem.originalname.split(".").pop();

    //criar arquivo no bucket
    const file = bucket.file(nomeArquivo);

    //tipo do arquivo
    //enviar via stream
    //criar um stream de escrita
    const stream = file.createWriteStream({
        metadata: {
            contentType: imagem.mimetype,
        },
    });

    //ouvir os eventos
    //quando acontecer algo ...
    stream.on("error", (e) => {
        console.error(e);
    });

    //para quando terminar a função
    stream.on("finish", async() => {
        //tonar o arquivo publico
        await file.makePublic();
        //obter a url publica
        req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;

        next();
    });
    
  stream.end(imagem.buffer);
};

module.exports = uploadImage;