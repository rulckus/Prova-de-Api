 

export function dobro(n) {
    return n * 2;
}

export function somar(num1,num2){
    return num1+num2;
}

export function temperatura (temp){
    let a = false
    if(temp > 38){
        a = true
    }

    return a;
}

export function tabuada (num) {
    let a = [11];
    for (let i = 0; i<=10; i++) {
        a[i] = num * i;
    }
    return a;
}

export function media (n1, n2, n3){
    return (n1 + n2 + n3) / 3;
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

export function caracter(texto, cr){
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

export function MaiorNumero(numeros)
{
    let maior = -1;
    for(let item of numeros)
    {
        if(item > maior)
        {
            maior = item;
        }
    }
    return maior;
}


