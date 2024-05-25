import { conectaApi } from "./conectaApi.js";

    //Elementos html
    const sessaoProdutos = document.querySelector('.products');

export async function gerarCard(){

    const lista = await conectaApi.listAll();
    sessaoProdutos.innerHTML = '<h2 class="titulo">Meus Produtos</h2>';
    lista.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('products__card');
        sessaoProdutos.appendChild(card);
        card.innerHTML += `
        <img class="products__card__img" src="${produto['url']}" alt="foto do produto exemplo">
        <p class="products__card__nome">${produto['nome']}</p>
        <div class="products__base">
            <p class="products__base__preco">R$ ${produto['valor'].toFixed(2).replace('.', ',')} </p>
            <img src="imgs/deleteIcon.png" alt="incone deletar produto" data-icone id="${produto['id']}" class="del">
        </div>        
        `;
        const btn = document.getElementById(`${produto['id']}`);
        btn.addEventListener('click', async (e)=>{
            //console.log('Deletar elemente de ID: '+e.target.id )
            await conectaApi.deletar(produto['id']);
            await gerarCard();
        })
    });

}

gerarCard();
