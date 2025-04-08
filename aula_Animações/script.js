let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function desenhar(){
    ctx.strokeStyle = this.cor;
    ctx.strokeRect(this.x, this.y, this.largura, this.altura)
}

let ret_1 = {
    x: 100,
    y: 100,
    largura: 10,
    altura: 10,
    cor: 'red',
    desenha: desenhar
}

let ret_2 = {
    x: 200,
    y: 200,
    largura: 10,
    altura: 10,
    cor: 'blue',
    desenha: desenhar
}

let ret_3 = {
    x: 250,
    y: 250,
    largura: 10,
    altura: 10,
    cor: 'green',
    desenha: desenhar
}

retalgulos = [ret_1,ret_2,ret_3]

 