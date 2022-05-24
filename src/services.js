 

export function dobro(n) {
    return n * 2;
}

export function somar(a,b){
    return a+b;
}

export function cor(cor){
    let a = "";
    if (cor == 'azul'|| cor == 'amarelo'|| cor == 'vermelho')
    {
        a=true
    }
    else
    {
        a=false
    }
    return a;
}

export function cinema(inteira, meia, dia, nacionalidade){
    let a = inteira * 28.5;
    let b = (meia * 28.5) /2;
    let c = inteira * 5;
    let d = meia * 5;

    if (nacionalidade == 'brasileira')
    {
        return c+d;
    }
    else if(dia=='quarta')
    {
        return b;
    }
    else
    {
        return a+b;
    }

}

export function cara(texto, cr){
    let o = 0;
    for(let letter of texto)
    {
        if(letter==cr)
        {
            o++
        }
    }
    return o;
}