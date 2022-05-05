var MaiorNumero = function(num1, num2, num3)
{
    var Maior = Math.max(num1, num2, num3);
    return console.log("O maior número é: " + Maior);
}

MaiorNumero(3,15,10);

var NumerosOrdenados = function(num1, num2, num3)
{  
    var numeros = [num1,num2,num3];
    var ordem = numeros.sort(function(a,b){
        return a - b;
    });
    console.log("Ordem dos numeros ordenados: " + ordem[0] + " | " + ordem[1] + " | " + ordem[2]);
}

NumerosOrdenados(10,8,2);