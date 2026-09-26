# Bucket List de Viagens — JavaScript (P1 / 2026-2)

Projeto desenvolvido para a avaliação **P1** da disciplina de JavaScript (Fatec Lins), com o objetivo de aplicar manipulação do DOM, eventos, condicionais e funções em uma aplicação front-end funcional.

## 📋 Sobre a atividade

O ponto de partida foi uma estrutura HTML pronta (fornecida pelo professor), com IDs e classes já definidos. O trabalho consistiu em desenvolver **somente o arquivo `index.js`**, sem alterar a estrutura, os IDs ou as classes do HTML, implementando toda a lógica da aplicação: um CRUD (cadastrar, exibir, editar e excluir) de viagens desejadas ou já realizadas.

### Restrições do enunciado

- Desenvolver apenas o `index.js`.
- Não alterar IDs, classes ou a estrutura principal do HTML.
- Não era necessário utilizar arrays, banco de dados, API, `localStorage`, frameworks ou bibliotecas externas — a proposta era manipular o DOM diretamente.

## ✅ Funcionalidades implementadas

| Funcionalidade | Descrição |
|---|---|
| **Cadastrar viagem** | Ao clicar em "Adicionar viagem", uma nova linha (`<tr class="viagem-item">`) é criada na tabela com os dados do formulário. |
| **Exibir dados** | Cada linha mostra foto, país/destino, data prevista e descrição. |
| **Status da viagem** | O checkbox "Já fui para este destino" define se o status exibido é "Já fui" ou "Quero ir". |
| **Limpar formulário** | Após cadastrar, todos os campos voltam ao estado vazio/desmarcado. |
| **Editar viagem** | Cada linha tem um botão "Editar" que traz os dados de volta ao formulário; ao salvar, a linha original é atualizada — nenhuma linha nova é criada. |
| **Excluir viagem** | Cada linha tem um botão "Excluir" que remove apenas aquele item da tabela. |
| **Validação de campos** | Não é possível cadastrar com país, foto, data ou descrição vazios; uma mensagem de erro é exibida nesse caso. |
| **Atualização da interface** | Um contador mostra a quantidade de viagens cadastradas, e uma mensagem de "lista vazia" aparece/desaparece automaticamente. |

## 🧠 Como foi resolvido

Como o exercício não exige (nem pede) o uso de arrays, os dados de cada viagem **vivem diretamente no DOM**, dentro da própria linha `<tr>` da tabela — sem uma estrutura de dados paralela em JavaScript. As principais técnicas usadas:

- **Seleção de elementos** com `document.querySelector`.
- **Criação de elementos** com `createElement` e `innerHTML`, seguindo o modelo de linha comentado no HTML original.
- **Delegação de eventos**: um único `addEventListener` no corpo da tabela captura os cliques em "Editar" e "Excluir" de qualquer linha, atual ou futura, usando `.closest(".viagem-item")` para identificar a linha correta.
- **Edição sem duplicar linhas**: uma variável guarda a referência (`linhaEditando`) da `<tr>` em edição; ao salvar, o código decide entre criar uma linha nova ou atualizar os dados da linha já existente.
- **Funções puras e reutilizáveis** para validar campos, montar uma linha, limpar o formulário e atualizar contador/mensagem de lista vazia.

## 🗂️ Estrutura do projeto

```
├── index.html   # Estrutura fornecida pelo professor (não alterada)
└── index.js     # Lógica da aplicação (desenvolvida para a P1)
```

## ▶️ Como executar

1. Clone o repositório.
2. Abra o `index.html` em um navegador (recomenda-se usar a extensão **Live Server** do VS Code para evitar restrições de segurança do navegador com arquivos locais).

## 🛠️ Tecnologias

- HTML5
- JavaScript (Vanilla JS, sem frameworks ou bibliotecas)

---

Projeto acadêmico desenvolvido para fins de estudo e avaliação — Fatec Lins, disciplina de JavaScript.
