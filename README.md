# bootcamp2-chrome-ext-lui618

# Bootcamp Helper - Destacador de Links

**Bootcamp Helper** é uma extensão simples para Google Chrome que permite destacar todos os links (`<a>`) de uma página com apenas um clique, facilitando a visualização e verificação de links em sites. Você também pode remover o destaque facilmente.

---

## Funcionalidades

- **Destacar links:** Realça todos os links da página com um contorno rosa (`#ec0089`).
- **Remover destaque:** Remove todos os contornos aplicados anteriormente.
- **Interface simples:** Dois botões claros: "Destacar Links" e "Remover Destaque".

---

## Instalação (Modo Desenvolvedor)

1. Clone este repositório ou baixe o ZIP.
2. Abra o Google Chrome e vá para `chrome://extensions/`.
3. Ative o **Modo Desenvolvedor** no canto superior direito.
4. Clique em **Carregar sem compactação** e selecione a pasta do projeto.
5. A extensão será adicionada à barra de ferramentas do Chrome.

---

## Uso

1. Clique no ícone da extensão na barra de ferramentas do Chrome.
2. Use o botão **Destacar Links** para realçar todos os links da página.
3. Use o botão **Remover Destaque** para limpar o realce.

---

## Estrutura do Projeto

├─ src/
│  ├─ popup/
│  │  ├─ popup.html
│  │  ├─ popup.js
│  │  └─ popup.css
│  ├─ content/
│  │  └─ content.js
│  ├─ background/
│  │  └─ service-worker.js
│  ├─ assets/
│  │  └─ logo.svg
│  └─ styles/
│     └─ global.css
├─ icons/
│  ├─ icon.png
├─ docs/              ← GitHub Pages (opção A: Pages from /docs)
│  └─ index.html
├─ manifest.json
├─ README.md
└─ LICENSE


---

## Tecnologias

- HTML, CSS, JavaScript
- Google Chrome Extensions API (Manifest V3)

---

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias e novas funcionalidades.

---

## Licença

Este projeto está licenciado sob a MIT License.
