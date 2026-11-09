# Portal SINDADOS-BA — React + Bootstrap

Atividade acadêmica com três componentes integrados: navbar com estado do usuário, carrossel de notícias e tabela de pisos salariais com filtro e modal. Notícias, cargos e valores são fictícios.

## Arquivos e tecnologias

- `src/App.jsx`: componente principal; guarda os dados e os repassa por props.
- `src/components/HeaderNavbar.jsx`: `Navbar` responsiva com login/logout simulado (`isLoggedIn`, `userProfile` via `useState`).
- `src/components/NewsCarousel.jsx`: `Carousel` com indicadores e controles, alimentado pela prop `noticias`.
- `src/components/SalaryTable.jsx`: `Table` responsiva, filtro em tempo real com `Form.Control` e `Modal` de detalhes.
- `public/img/`: imagens dos slides.

React 19 + Vite, `bootstrap` 5.3.8 e `react-bootstrap` 2.10. O login é apenas uma simulação: nenhum dado é enviado ou armazenado.

## Executar no GitHub Codespaces

1. Abra o repositório no GitHub e selecione **Code → Codespaces → Create codespace on main**, ou use [Abrir no Codespaces](https://codespaces.new/whsmumu/react-boot).
2. No terminal, na raiz do projeto, execute:

   ```sh
   npm install
   npm run dev
   ```

3. Abra a porta 5173 na aba **Ports**. Mantenha a visibilidade da porta privada.
4. Encerre o servidor com `Ctrl+C`.

Verificações: `npm run lint` e `npm run build`.
