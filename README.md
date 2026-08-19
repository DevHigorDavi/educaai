# EducaAI — Educador Financeiro Inteligente

Aplicação web de planejamento financeiro pessoal desenvolvida com **React, TypeScript e Inteligência Artificial Generativa**.

O EducaAI permite que a pessoa usuária informe sua situação financeira, seus gastos e um objetivo financeiro. A partir dessas informações, a aplicação utiliza Inteligência Artificial para gerar um diagnóstico personalizado, com sugestões e recomendações para auxiliar na organização financeira.

> Projeto desenvolvido como parte do desafio da DIO **"Desenvolvendo Seu Educador Financeiro Inteligente com React e IA Generativa"**.

---

## Sobre o projeto

O objetivo do EducaAI é transformar informações financeiras simples em uma experiência de planejamento mais clara e personalizada.

A aplicação possui um formulário de simulação financeira no qual a pessoa usuária informa dados como:

- Renda mensal;
- Gastos e custos fixos;
- Dívidas ou parcelas;
- Objetivo financeiro;
- Valor necessário para alcançar o objetivo;
- Prazo desejado.

Após o preenchimento, os dados são utilizados para gerar um diagnóstico financeiro através de Inteligência Artificial Generativa.

---

## Funcionalidades

### Simulação financeira

A pessoa usuária pode preencher seus dados financeiros através de um formulário dividido em etapas, tornando o processo mais simples e organizado.

### Diagnóstico com Inteligência Artificial

Os dados preenchidos são transformados em um prompt estruturado e enviados para a API do Gemini.

A IA analisa as informações e gera recomendações personalizadas para o planejamento financeiro.

### Resultado personalizado

Após a análise, a aplicação apresenta um diagnóstico com informações e sugestões relacionadas ao objetivo financeiro informado.

### Histórico de simulações

Como melhoria desenvolvida para este desafio, foi implementada uma página de **Histórico de Simulações**.

Nela, a pessoa usuária pode:

- Visualizar suas simulações anteriores;
- Consultar informações de cada simulação;
- Ver o diagnóstico de uma simulação específica;
- Criar uma nova simulação;
- Excluir uma simulação;
- Manter os registros mesmo após atualizar a página.

Os dados do histórico são armazenados utilizando o **localStorage** do navegador.

### Tema claro e escuro

A aplicação possui suporte a diferentes temas para proporcionar uma experiência mais confortável durante a utilização.

### Estados de carregamento e erro

A aplicação também possui tratamento para situações de carregamento e possíveis erros durante o processo de geração do diagnóstico.

---

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **Lucide React**
- **Google Gemini API**
- **LocalStorage**
- **ESLint**

---

## Estrutura do projeto

A aplicação foi organizada utilizando componentes e páginas reutilizáveis.

```text
src/
├── components/
├── data/
├── hooks/
├── pages/
├── services/
├── utils/
├── App.tsx
├── main.tsx
└── router.tsx
```

A estrutura permite separar responsabilidades e facilita a manutenção e evolução da aplicação.

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/DevHigorDavi/educaai.git
```

### 2. Acesse a pasta

```bash
cd educaai
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a variável da API

Crie um arquivo `.env` na raiz do projeto e configure a chave da API do Gemini conforme a estrutura utilizada pela aplicação.

Exemplo:

```env
VITE_GEMINI_API_KEY=sua_chave_aqui
```

> Nunca compartilhe sua chave da API publicamente ou faça commit do arquivo `.env`.

### 5. Execute o projeto

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

---

## Como testar o fluxo principal

Para testar a aplicação:

1. Acesse a página inicial;
2. Inicie uma nova simulação;
3. Preencha os dados financeiros solicitados;
4. Informe seu objetivo financeiro;
5. Finalize a simulação;
6. Aguarde a geração do diagnóstico pela IA;
7. Consulte as recomendações apresentadas;
8. Acesse a página **Histórico de Simulações**;
9. Verifique se a simulação realizada foi armazenada;
10. Atualize a página e confirme que o registro continua disponível;
11. Utilize **Ver diagnóstico** para consultar novamente o resultado;
12. Teste a exclusão de uma simulação.

---

## Melhoria implementada

### Histórico de Simulações

A principal melhoria desenvolvida para esta versão do projeto foi a criação de uma página dedicada ao histórico das simulações.

No projeto-base, o foco principal estava na criação da simulação e na geração do diagnóstico através da Inteligência Artificial.

Para ampliar a experiência da pessoa usuária, foi implementado um sistema de armazenamento utilizando `localStorage`.

Cada simulação realizada pode ser armazenada e posteriormente consultada na página de histórico.

A funcionalidade permite:

```text
Nova simulação
      ↓
Preenchimento do formulário
      ↓
Geração do diagnóstico
      ↓
Armazenamento da simulação
      ↓
Histórico
      ↓
Consultar / Excluir
```

Essa melhoria permite que a pessoa usuária acompanhe suas simulações sem perder os dados ao atualizar o navegador.

---

## O que aprendi

Durante o desenvolvimento deste projeto, pude praticar e aprofundar conhecimentos em:

- Desenvolvimento de aplicações utilizando React;
- Utilização de TypeScript em projetos Front-End;
- Criação de componentes reutilizáveis;
- Organização de páginas e rotas;
- Utilização de hooks do React;
- Manipulação de dados no `localStorage`;
- Integração de uma aplicação Front-End com Inteligência Artificial Generativa;
- Construção de prompts estruturados;
- Tratamento de estados de carregamento;
- Tratamento de erros;
- Desenvolvimento de interfaces utilizando Tailwind CSS;
- Implementação de uma funcionalidade própria a partir de um projeto-base;
- Utilização do Git e GitHub para versionamento do projeto.

Além do desenvolvimento da aplicação-base, o desafio também permitiu compreender como a Inteligência Artificial pode ser integrada a aplicações Front-End para criar experiências mais personalizadas.

---

## Desafio DIO

Este projeto foi desenvolvido a partir do desafio:

**Desenvolvendo Seu Educador Financeiro Inteligente com React e IA Generativa**

O projeto-base utilizado como referência está disponível no repositório da Digital Innovation One:

https://github.com/digitalinnovationone/planejai

A versão apresentada neste repositório contém uma melhoria própria desenvolvida durante o desafio: **Histórico de Simulações**.

---

## Autor

### Hígor Davi Videira de Souza

Projeto desenvolvido para fins de estudo, prática e construção de portfólio.

GitHub:

https://github.com/DevHigorDavi

---

## Status do projeto

**Concluído**

- [x] Projeto base desenvolvido
- [x] Formulário de simulação
- [x] Integração com IA Generativa
- [x] Diagnóstico financeiro
- [x] Persistência de dados
- [x] Histórico de simulações
- [x] Visualização de diagnósticos anteriores
- [x] Exclusão de simulações
- [x] Testes do fluxo principal
- [x] Build de produção
