# Meu Portfólio

Portfólio pessoal desenvolvido em HTML, CSS e JavaScript para mostrar habilidades, projetos e contato profissional.

## Descrição

Website one-page com foco em apresentação pessoal, estudos de caso e contato profissional.
O projeto é um portfólio responsivo que usa navegação acessível, modal dinâmico de projetos, efeitos visuais refinados e estrutura modular de JavaScript com ES Modules.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- Font Awesome

## Funcionalidades

- **Navegação inteligente**: Menu mobile toggle com suporte a tecla ESC e highlight ativo dinâmico via IntersectionObserver
- **Seções semânticas**: Início, Sobre, Projetos e Contato com acessibilidade ARIA
- **Modal dinâmico**: Detalhes dos projetos com conteúdo renderizado em tempo real
- **Design visual aprimorado**: Gradientes, efeitos hover, animações suaves e padrão grid de background
- **Links externos**: GitHub e LinkedIn com ícones Font Awesome
- **Layout responsivo**: Desktop, tablet e dispositivos móveis com breakpoints otimizados

## Estrutura do projeto

```
meu-portfolio/
|__ index.html
|__ css/
|   |__ reset.css
|   |__ variables.css
|   |__ base.css
|   |__ components/
|       |__ about.css
|       |__ contact.css
|       |__ footer.css
|       |__ hero.css
|       |__ nav.css
|       |__ projects.css
|   |__ components.css
|__ assets/
|   |__ images/
|       |__ marttdev-log.webp
|       |__ amigurumis-da-vovo.webp
|       |__ buscar-perfil-github.webp
|       |__ sintaxwear.webp
|__ js/
    |__ main.js
    |__ modules/
        |__ menu.js
        |__ navigation.js
        |__ projects-modal.js
```

## Como executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/grazielle-marttdev/meu-portfolio.git
   ```
2. Abra o arquivo `index.html` no navegador.

> Para uma experiência local melhor, utilize uma extensão como Live Server ou qualquer servidor estático.

## Possíveis melhorias futuras

- Integração com formulários de contato (backend)
- Migração para React para componentização avançada
- Testes automatizados e workflow CI/CD
- Implementação de dark/light mode toggle
- Animações com Framer Motion ou similar
- Adicionar testes e automação de build

## Contato

- Email: gzm8martins@gmail.com
- LinkedIn: https://www.linkedin.com/in/grazielle-martins-557b61334/
- GitHub: https://github.com/grazielle-marttdev
