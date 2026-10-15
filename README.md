# 🎬 Avaliação de Filmes — Testes Automatizados com JavaScript

![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?logo=javascript&logoColor=000)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?logo=nodedotjs&logoColor=fff)
![Mocha](https://img.shields.io/badge/Mocha-12.0.3-8D6748?logo=mocha&logoColor=fff)
![Testes](https://img.shields.io/badge/Casos%20de%20teste-15-blue)

## 📖 Sobre o projeto

Projeto desenvolvido como parte do **Desafio 5 — Exercício 5**, das aulas de **Lógica de Programação com Matheus Leão**, na **Mentoria em Testes de Software do Júlio de Lima**.

O objetivo é praticar lógica de programação em **JavaScript** e aplicar conceitos de **qualidade de software** por meio de testes automatizados. A aplicação recebe uma lista de filmes com avaliações numéricas, calcula a quantidade de pessoas que avaliaram cada filme, obtém a média das notas e retorna uma classificação.

O projeto conta com **15 casos de teste (CT01 a CT15)**, organizados por técnicas e objetivos de validação.

> **Nota:** as avaliações atribuídas aos filmes são dados fictícios criados para fins didáticos; não representam notas reais de público ou crítica.

## 🎯 Objetivos

- Trabalhar com **arrays, objetos, funções, Arrow Functions e estruturas condicionais**.
- Percorrer coleções com `map()` e somar notas com `reduce()`.
- Calcular médias aritméticas e aplicar regras de classificação.
- Desenvolver testes automatizados com **Mocha** e o módulo nativo **`node:assert`**.
- Aplicar **testes positivos, partição de equivalência, análise de valor-limite e testes de casos excepcionais**.
- Comparar saídas completas por meio de `assert.deepStrictEqual()`.
- Organizar um projeto Node.js para versionamento e execução pelo GitHub.

## 🛠️ Tecnologias e ferramentas

| Tecnologia | Utilização |
|---|---|
| **JavaScript** | Implementação da lógica de avaliação e dos testes. |
| **Node.js** | Ambiente de execução do JavaScript fora do navegador. |
| **Mocha `12.0.3`** | Framework de testes, responsável por `describe()`, `it()` e execução dos cenários. |
| **`node:assert`** | Módulo nativo do Node.js usado nas asserções, sem dependência do Chai. |
| **npm** | Gerenciamento de dependências e scripts. |
| **Visual Studio Code** | Ambiente de desenvolvimento. |
| **Git e GitHub** | Versionamento e publicação do exercício. |

O `package.json` utiliza **`"type": "module"`**, permitindo trabalhar com `import` e `export` (módulos ECMAScript). Conforme a configuração do projeto, **Mocha é a dependência de desenvolvimento**; `node:assert` já acompanha o Node.js e não precisa ser instalado.

## 📁 Estrutura do projeto

```text
avaliacaoDeFilme/
├── source/
│   └── avaliacaoDeFilme.js       # Lógica da aplicação
├── test/
│   └── avaliacaoDeFilme.test.js  # 15 casos de teste automatizados
├── .gitignore                    # Arquivos e pastas ignorados pelo Git
├── package.json                 # Configuração e scripts do projeto
├── package-lock.json            # Registro das versões das dependências
└── README.md                    # Documentação do projeto
```

A pasta `node_modules/` é criada localmente após a instalação das dependências e **não deve ser versionada**.

## 📥 Dados de entrada

A função `avaliacaoDeFilmes(filmes)` recebe um array de objetos. Cada objeto contém:

- `nome`: nome do filme (texto);
- `avaliacoes`: array de notas numéricas atribuídas por usuários.

Exemplo:

```javascript
const filmes = [
    { nome: 'Minha mãe é uma peça', avaliacoes: [5, 4, 4, 4, 5] },
    { nome: 'Saneamento Básico', avaliacoes: [3, 4, 2, 3, 4] },
    { nome: 'Lagoa Azul', avaliacoes: [1, 2, 3] }
];
```

## ⚙️ Regras de negócio

Para cada filme, a aplicação:

1. Conta quantas avaliações foram recebidas (`quantidadePessoas`).
2. Soma todas as notas.
3. Divide a soma pela quantidade de avaliações para calcular a média.
4. Determina a classificação a partir da média.
5. Retorna um objeto com `nome`, `quantidadePessoas`, `media` e `classificacao`.

### Faixas de classificação

| Média calculada | Classificação |
|---|---|
| **Maior ou igual a 4** (`media >= 4`) | `Filme recomendado` |
| **Maior ou igual a 3 e menor que 4** (`3 <= media < 4`) | `Filme razoável` |
| **Menor que 3** (`media < 3`) | `Filme ruim` |

**Exemplo de saída:**

```javascript
[
    {
        nome: 'Minha mãe é uma peça',
        quantidadePessoas: 5,
        media: 4.4,
        classificacao: 'Filme recomendado'
    },
    {
        nome: 'Saneamento Básico',
        quantidadePessoas: 5,
        media: 3.2,
        classificacao: 'Filme razoável'
    },
    {
        nome: 'Lagoa Azul',
        quantidadePessoas: 3,
        media: 2,
        classificacao: 'Filme ruim'
    }
]
```

### Casos excepcionais contemplados

- **Filme sem avaliações:** retorna `quantidadePessoas: 0` e `media: 0`. Pela lógica atual, a classificação será `Filme ruim`.
- **Lista de filmes vazia:** retorna `[]`.

> Essas respostas descrevem o **comportamento implementado**, não uma regra universal de avaliação de filmes. Em um sistema real, seria importante discutir se filmes sem votos deveriam receber a classificação `Sem avaliações`.

## 🧪 Estratégia de testes

Os testes foram organizados com `describe()` e `it()` do Mocha. Cada cenário prepara os dados de entrada, define um **`resultadoEsperado`**, executa `avaliacaoDeFilmes(filmes)` e compara os objetos completos com `assert.deepStrictEqual()`.

```javascript
const filmes = [
    { nome: '8 Mile', avaliacoes: [5, 4, 5, 4, 4] }
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
```

Dessa forma, os testes verificam **nome, quantidade de pessoas, média e classificação**, em vez de validar somente um atributo.

### 1. Testes positivos — CT01 a CT03

| CT | Cenário | Resultado esperado |
|---|---|---|
| **CT01** | Contar as avaliações de *Minha mãe é uma peça* | 5 pessoas, média 4,4, recomendado. |
| **CT02** | Calcular a média de *Saneamento Básico* | 5 pessoas, média 3,2, razoável. |
| **CT03** | Processar *8 Mile*, *Se eu fosse você* e *Lagoa Azul* em conjunto | Três resultados, com médias 4,5; 3,5; e 2, respectivamente. |

Esses cenários verificam operações válidas e o processamento de um ou mais filmes.

### 2. Partição de equivalência — CT04 a CT06

A técnica divide o domínio de médias em **classes com o mesmo comportamento esperado**, selecionando representantes de cada faixa.

| CT | Filme | Notas | Média | Resultado esperado |
|---|---|---|---|---|
| **CT04** | 8 Mile | `[5, 4, 5, 4, 4]` | 4,4 | Filme recomendado |
| **CT05** | Se eu fosse você | `[3, 4]` | 3,5 | Filme razoável |
| **CT06** | Lagoa Azul | `[1, 2, 3]` | 2 | Filme ruim |

### 3. Análise de valor-limite — CT07 a CT10

A análise de valor-limite busca defeitos nas **fronteiras entre as faixas de classificação**, especialmente nos pontos 3 e 4.

| CT | Filme | Notas | Média | Resultado esperado |
|---|---|---|---|---|
| **CT07** | Até o último Homem | `[4, 4]` | 4 | Filme recomendado |
| **CT08** | Saneamento Básico | `[3, 4]` | 3,5 | Filme razoável |
| **CT09** | As Branquelas | `[3, 3]` | 3 | Filme razoável |
| **CT10** | Crepúsculo | `[2, 3]` | 2,5 | Filme ruim |

**Observação técnica:** CT07 e CT09 verificam **limites exatos**. CT08 e CT10 verificam valores do lado inferior dessas fronteiras, mas não são os valores imediatamente adjacentes. Para aprofundar a técnica, podem ser adicionadas médias como 3,9 e 2,9 (conforme a precisão adotada) e valores logo acima dos limites.

### 4. Testes negativos e casos excepcionais — CT11 e CT12

| CT | Cenário | Resultado esperado |
|---|---|---|
| **CT11** | Filme *Lagoa Azul* com `avaliacoes: []` | 0 pessoas, média 0, `Filme ruim`, conforme a implementação atual. |
| **CT12** | Array de filmes vazio (`[]`) | Retorna um array vazio. |

Esses casos verificam **ausência de dados**, mas ainda não cobrem rejeição de entradas inválidas (por exemplo, nota negativa, nota acima de 5, texto em vez de número ou `null`). Esses cenários dependeriam da definição de regras de validação.

### 5. Validação das regras de classificação — CT13 a CT15

| CT | Filme | Média | Regra verificada | Resultado esperado |
|---|---|---|---|---|
| **CT13** | Se beber não case | 4,5 | `media >= 4` | Filme recomendado |
| **CT14** | Saneamento Básico | 3,5 | `media >= 3 && media < 4` | Filme razoável |
| **CT15** | Lagoa Azul | 2,25 | `media < 3` | Filme ruim |

### Resumo da suíte

| Grupo | Quantidade |
|---|---:|
| Testes positivos | 3 |
| Partição de equivalência | 3 |
| Análise de valor-limite | 4 |
| Testes negativos e casos excepcionais | 2 |
| Validação das regras de classificação | 3 |
| **Total** | **15** |

## 🚀 Como executar o projeto

### Pré-requisitos

- **Node.js** instalado, com npm disponível.
- **Git**, caso deseje clonar o repositório.

### 1. Obter o código

Clone o repositório pelo endereço exibido no GitHub ou abra a pasta do projeto no VS Code.

### 2. Instalar as dependências

No terminal, dentro da raiz do projeto:

```bash
npm install
```

O npm instalará o Mocha conforme o `package.json` e o `package-lock.json`.

### 3. Executar todos os testes

```bash
npx mocha
```

Também é possível executar pelo script configurado no `package.json`:

```bash
npm test
```

### 4. Executar apenas o arquivo de testes

```bash
npx mocha test/avaliacaoDeFilme.test.js
```

### Resultado esperado

Se o código-fonte e os cenários estiverem conforme documentado, a execução deverá apresentar:

```text
15 passing
```

> **Importante:** `15 passing` é o **resultado esperado**, não um registro de execução de CI. Confirme o resultado no seu terminal antes de declarar que os testes foram executados com sucesso.

## 📦 Configuração do `package.json`

O projeto utiliza a seguinte configuração de scripts e dependências de desenvolvimento:

```json
{
    "name": "avaliacaodefilme",
    "version": "1.0.0",
    "scripts": {
        "test": "mocha"
    },
    "type": "module",
    "devDependencies": {
        "mocha": "^12.0.3"
    }
}
```

O exemplo apresenta os campos principais para execução dos testes. O `package.json` do repositório é a fonte oficial da configuração completa.

## 🧹 `.gitignore`

```gitignore
node_modules/
.DS_Store
coverage/
```

- `node_modules/`: dependências instaladas localmente.
- `.DS_Store`: arquivos de metadados criados pelo macOS.
- `coverage/`: relatórios de cobertura, caso sejam gerados futuramente.

Os arquivos `package.json` e `package-lock.json` **devem ser versionados**.

## 📚 Aprendizados e competências exercitadas

- Organização de código JavaScript em módulos.
- Manipulação de arrays e objetos.
- Uso de Arrow Functions, `map()`, `reduce()` e condicionais.
- Cálculo de média aritmética.
- Estruturação de suítes e casos de teste com Mocha.
- Asserções com `node:assert` e `assert.deepStrictEqual()`.
- Aplicação de técnicas de teste de caixa-preta.
- Definição de dados de entrada e resultados esperados.
- Documentação e versionamento de um exercício de automação de testes.

## 🔭 Possíveis melhorias futuras

- Validar notas fora do intervalo permitido, valores não numéricos e estruturas inválidas.
- Definir uma classificação específica para filmes sem avaliações.
- Ampliar os testes de valores-limite com maior precisão.
- Adicionar métricas de cobertura de código.
- Configurar execução automática dos testes em um pipeline de integração contínua.

## 👨‍💻 Autor

**Kaique Demucio**  
QA Engineer | Test Automation Engineer

- **GitHub:** [github.com/kaiquedemucio](https://github.com/kaiquedemucio)
- **LinkedIn:** [linkedin.com/in/kaiquedemucio](https://www.linkedin.com/in/kaiquedemucio/)
- **Portfólio:** [kaiquedemucio.github.io](https://kaiquedemucio.github.io/)s