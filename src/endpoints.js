
import {dobro, somar, cor, cinema, caracter, tabuada, temperatura,media,MaiorNumero} from './services.js'
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

server.get('/somar', (req, resp) =>{
    try {
        const a= Number(req.query.a);
        const b= Number(req.query.b);
        const x= somar(a,b);
        resp.send({
            total:x
        })
    } catch (err) {
        resp.status(404).send({
            error:err.message
        })
    }
})

server.post('/somar', (req, resp) =>{
    
    try {
        const{ valores:{a , b}}= req.body;
        const x=somar(a,b)
    
        resp.send({
            somar:x
        })
    } catch (err) {
        resp.status(404).send({
            error:err.message
        })
    }
})

server.get('/tabuada', (req, resp) => {
    try {
    const a = Number(req.query.n);

    const x = tabuada(a); 

    resp.send({
        tabuada: x
    })
    }
    catch (err) {
        resp.status(404).send({
            err:err.message
        })
    }
})

server.get('/temperatura', (req, resp) =>{
    try{
    const t = Number(req.query.t);

    const x = temperatura(t);
    resp.send({
        febre:x
    })
    }catch(err){
        resp.status(404).send({
            err:err.message
        })
    }
})

server.post('/media', (req,resp) =>{
    try{
    const {notas: {n1, n2, n3}} = req.body;

    const x = media(n1,n2,n3);
    resp.send({
        media: x
    })
    }catch(err){
        resp.status(404).send({
            err:err.message
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

server.get('/dia2/caracter/:texto/:caracter', (req,resp) =>{
    try {
        const a= req.params.texto;
        const b= req.params.caracter;

        const x= caracter(a,b)

        resp.send({
            caracter:x
        })
        
    } catch (err) {
        resp.status(404).send({
            error:err.message
        })
    }
})

server.post('/dia2/numerao', (req, resp) => {
    try{
    const a = req.body;

    const x = MaiorNumero(a);

    resp.send({
        maior: x
    })
    } catch(err) {
        resp.status(404).send({
            err:err.message
        })
    }
})

export default server; 