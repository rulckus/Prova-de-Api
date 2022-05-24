
import {dobro, somar, cor, cinema} from './services.js'
import {Router} from "express";

const server = Router();



server.get ('/dobro/:numero', (req, resp) => {
    
    try{let numero = Number (req.params.numero);
    let x = dobro(numero);
    resp.send({
        dobro:x

    });
}

catch(err) {
    resp.status(404).send({
        error:err.message
    })

}
})

server.get('/dia2/corprimaria/:cor', (req, resp) =>{

    try{
    let afds = String (req.params.cor);
    let x= cor(afds)

    resp.send({
        primaria:x
    })
}
    catch(err) {
        resp.status(404).send({
            error:err.message
        })
}
})


server.post ('/dia2/ingressocinema',(req, resp) => {
    try{
        const{int,meia,dia,nac}=req.body;
        const x= cinema(int,meia,dia,nac)

        resp.send({
            total:x
        })
    }
    catch(err){
        resp.status(404).send({
        error:err.message
        })
    }
})  

server.get('/dia2/freqcara/:texto/:caracter', (req,resp)=>{
    try {
        
        
    } catch (err) {
        
    }
})


export default server;