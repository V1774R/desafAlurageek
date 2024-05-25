const listAll = async () => {
    try{
        const products = await fetch('https://desafalurageek.onrender.com/produtos');
        const productsJson = await products.json();
        return productsJson;
    }catch(error){
        console.log('Erro ao tentar acessar o servidor. '+error);
    }
}

const inserirProduto = async (produto) => {
    try{
        const configs = {
            method: 'POST',
            headers: {
                'Content-Type':'applications/json'
            },
            body: JSON.stringify(produto)
        }
        const conexao = await fetch('https://desafalurageek.onrender.com/produtos', configs);
        const conexaoConvertida = await conexao.json();
        console.log(conexaoConvertida);
        return conexaoConvertida;
    }catch(error){
        console.log('Erro ao processar sua solicitação: '+error);
    }
}

const deletar = async (id) => {
    try{
        const configs = {
            method: 'DELETE'
        }
        const produto = await fetch(`https://desafalurageek.onrender.com/produtos/${id}`, configs);
        console.log(produto);
        return produto;
    }catch(error){
        console.log('Erro ao processar sua solicitação: '+error);
    }
}

export const conectaApi = {
    listAll,
    inserirProduto,
    deletar
}
