// 1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos 
// descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
// ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: `Sua Lace custa R$3900,00
// e você pagará em 10x de R$390,00`


// função que simula busca num banco que retorna o preço do produto:



 function buscarPreco(produto) {
   return new Promise ((resolve, reject) => {
    setTimeout(() => {
       if (produto === "hormonios") {
         return resolve ({
          nome: "Hormônios",
          preco: 99.00
        });
       } else if (produto === "unhas gel") {
        return resolve ({
          nome: "Unhas em Gel",
          preco: 190.00
        });
      } else if (produto === "lace"){
        return resolve({
           nome: "Lace",
          preco: 3900.00
        });
     } else {
         return "Produto não encontrado"
     }
    }, 2000)
    })
    }


   function calcularParcela(preco) {
     return new Promise((resolve) => {
    let parcelasDesejadas = 10;
    setTimeout(() => {
    return resolve(
    preco /parcelasDesejadas
     )
     }, 2000);
   })
  }

  //Tentativa com Promises

// const encontrarPreco = buscarPreco("lace")
// encontrarPreco.then((produto)=> {
//   const produtoNome = produto.nome;
//   const produtoPreco = produto.preco

//   const encontrarParcela = calcularParcela(produtoPreco, produtoNome);
//   encontrarParcela.then((valorParcela)=> {
//     const parcelas = valorParcela;
//     const quantidadeParcelas = produtoPreco / valorParcela;

//     console.log(`SUA ${produtoNome} custa R$${produtoPreco.tofixed(2).replace(".",".",)}e voce pagara em $(quantidadeParcelas)`)})

//   }).catch((error) => {
//     console.error("Erro encontrado", err);
//   })


// Tentativa com async/await

async function fazerCompras(produto){
  try {
    const mercadoria = await buscarPreco(produto);
    const valorParcela = await calcularParcela(mercadoria.preco);
    const quantidadeParcelas = mercadoria.preco / valorParcela;
    return console.log(`Sua ${mercadoria.nome} custa R$${mercadoria.preco.toFixed(2).replace(".",",")} e voce pagara em ${quantidadeParcelas} x de R$ ${valorParcela.toFixed(2).replace(".",",")}`)
  } catch( error){
    console.error(error)
  }
  }
  
  



fazerCompras("lace");


// Esta atividade foi feita com muito sacrifio e ajuda das outras meninas do grupo, pois nao consegui 
//entender o conteudo, mesmo assistindo as aulas por varias e varias vezes.