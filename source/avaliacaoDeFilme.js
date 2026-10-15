
export const avaliacaoDeFilmes = (filmes) => {
    return filmes.map((filme) => {

        const quantidadePessoas = filme.avaliacoes.length;

        const somaNotas = filme.avaliacoes.reduce(
            (total, nota) => total + nota,
            0
        );

        const media = quantidadePessoas > 0
            ? somaNotas / quantidadePessoas
            : 0;

        let classificacao;

        if (media >= 4) {
            classificacao = 'Filme recomendado';
        } else if (media >= 3) {
            classificacao = 'Filme razoável';
        } else {
            classificacao = 'Filme ruim';
        }

        return {
            nome: filme.nome,
            quantidadePessoas,
            media,
            classificacao
        };
    });
};
