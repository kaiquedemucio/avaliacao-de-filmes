import assert from 'node:assert';
import { avaliacaoDeFilmes } from '../source/avaliacaoDeFilme.js';

describe('Testes de Avaliação de Filmes', () => {
    // TESTES POSITIVOS
    describe('Testes Positivos', () => {
        it('CT01 - Deve retornar a quantidade de pessoas', () => {
            const filmes = [
                {
                    nome: 'Minha mãe é uma peça',
                    avaliacoes: [5, 4, 4, 4, 5]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'Minha mãe é uma peça',
                    quantidadePessoas: 5,
                    media: 4.4,
                    classificacao: 'Filme recomendado'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });

        it('CT02 - Deve calcular corretamente a média', () => {
            const filmes = [
                {
                    nome: 'Saneamento Básico',
                    avaliacoes: [3, 4, 2, 3, 4]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'Saneamento Básico',
                    quantidadePessoas: 5,
                    media: 3.2,
                    classificacao: 'Filme razoável'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });

        it('CT03 - Deve processar múltiplos filmes', () => {
            const filmes = [
                {
                    nome: '8 Mile',
                    avaliacoes: [5, 5, 4, 4]
                },
                {
                    nome: 'Se eu fosse você',
                    avaliacoes: [3, 3, 4, 4]
                },
                {
                    nome: 'Lagoa Azul',
                    avaliacoes: [1, 2, 2, 3]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: '8 Mile',
                    quantidadePessoas: 4,
                    media: 4.5,
                    classificacao: 'Filme recomendado'
                },
                {
                    nome: 'Se eu fosse você',
                    quantidadePessoas: 4,
                    media: 3.5,
                    classificacao: 'Filme razoável'
                },
                {
                    nome: 'Lagoa Azul',
                    quantidadePessoas: 4,
                    media: 2,
                    classificacao: 'Filme ruim'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });
    });

    // PARTIÇÃO DE EQUIVALÊNCIA
    describe('Partição de Equivalência', () => {
        it('CT04 - Deve classificar 8 Mile como recomendado', () => {
            const filmes = [
                {
                    nome: '8 Mile',
                    avaliacoes: [5, 4, 5, 4, 4]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: '8 Mile',
                    quantidadePessoas: 5,
                    media: 4.4,
                    classificacao: 'Filme recomendado'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });

        it('CT05 - Deve classificar Se eu fosse você como razoável', () => {
            const filmes = [
                {
                    nome: 'Se eu fosse você',
                    avaliacoes: [3, 4]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'Se eu fosse você',
                    quantidadePessoas: 2,
                    media: 3.5,
                    classificacao: 'Filme razoável'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });

        it('CT06 - Deve classificar Lagoa Azul como ruim', () => {
            const filmes = [
                {
                    nome: 'Lagoa Azul',
                    avaliacoes: [1, 2, 3]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'Lagoa Azul',
                    quantidadePessoas: 3,
                    media: 2,
                    classificacao: 'Filme ruim'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });
    });

    // ANÁLISE DE VALOR-LIMITE
    describe('Análise de Valor-Limite', () => {
        it('CT07 - Deve classificar média exatamente 4 como recomendado', () => {
            const filmes = [
                {
                    nome: 'Até o último Homem',
                    avaliacoes: [4, 4]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'Até o último Homem',
                    quantidadePessoas: 2,
                    media: 4,
                    classificacao: 'Filme recomendado'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });

        it('CT08 - Deve classificar média 3.5 como razoável', () => {
            const filmes = [
                {
                    nome: 'Saneamento Básico',
                    avaliacoes: [3, 4]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'Saneamento Básico',
                    quantidadePessoas: 2,
                    media: 3.5,
                    classificacao: 'Filme razoável'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });

        it('CT09 - Deve classificar média exatamente 3 como razoável', () => {
            const filmes = [
                {
                    nome: 'As Branquelas',
                    avaliacoes: [3, 3]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'As Branquelas',
                    quantidadePessoas: 2,
                    media: 3,
                    classificacao: 'Filme razoável'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });

        it('CT10 - Deve classificar média 2.5 como ruim', () => {
            const filmes = [
                {
                    nome: 'Crepúsculo',
                    avaliacoes: [2, 3]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'Crepúsculo',
                    quantidadePessoas: 2,
                    media: 2.5,
                    classificacao: 'Filme ruim'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });
    });

    // TESTES NEGATIVOS E CASOS EXCEPCIONAIS
    describe('Testes Negativos', () => {
        it('CT11 - Deve tratar filme sem avaliações', () => {
            const filmes = [
                {
                    nome: 'Lagoa Azul',
                    avaliacoes: []
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'Lagoa Azul',
                    quantidadePessoas: 0,
                    media: 0,
                    classificacao: 'Filme ruim'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });

        it('CT12 - Deve retornar array vazio quando não houver filmes', () => {
            const filmes = [];
            const resultadoEsperado = [];
            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });
    });

    // VALIDAÇÃO DAS REGRAS DE CLASSIFICAÇÃO
    describe('Regras de Classificação', () => {
        it('CT13 - Média >= 4 deve retornar Filme recomendado', () => {
            const filmes = [
                {
                    nome: 'Se beber não case',
                    avaliacoes: [5, 4, 5, 4]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'Se beber não case',
                    quantidadePessoas: 4,
                    media: 4.5,
                    classificacao: 'Filme recomendado'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });

        it('CT14 - Média >= 3 e < 4 deve retornar Filme razoável', () => {
            const filmes = [
                {
                    nome: 'Saneamento Básico',
                    avaliacoes: [3, 4, 3, 4]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'Saneamento Básico',
                    quantidadePessoas: 4,
                    media: 3.5,
                    classificacao: 'Filme razoável'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });

        it('CT15 - Média < 3 deve retornar Filme ruim', () => {
            const filmes = [
                {
                    nome: 'Lagoa Azul',
                    avaliacoes: [2, 2, 3, 2]
                }
            ];

            const resultadoEsperado = [
                {
                    nome: 'Lagoa Azul',
                    quantidadePessoas: 4,
                    media: 2.25,
                    classificacao: 'Filme ruim'
                }
            ];

            const resultado = avaliacaoDeFilmes(filmes);
            assert.deepStrictEqual(resultado, resultadoEsperado);
        });
    });
});
