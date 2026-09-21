

# Meu Portfólio

Portfólio pessoal desenvolvido em HTML, CSS e JavaScript para mostrar habilidades, projetos e contato profissional.

## Descrição

Website one-page com foco em apresentação pessoal como freelancer front-end, estudos de caso e contato profissional.
O projeto é um portfólio responsivo que usa navegação acessível, modal dinâmico de projetos, formulário de contato funcional via EmailJS, efeitos visuais refinados e estrutura modular de JavaScript com ES Modules.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- Font Awesome
- EmailJS
- JustValidate

## Funcionalidades

- **Navegação inteligente**: Menu mobile toggle com suporte a tecla ESC e highlight ativo dinâmico via IntersectionObserver
- **Seções semânticas**: Início, Sobre, Projetos e Contato com acessibilidade ARIA
- **Modal dinâmico**: Detalhes dos projetos com conteúdo renderizado em tempo real
- **Formulário de contato**: Envio de mensagens diretamente pelo site via integração com EmailJS e validação client-side com JustValidate
- **Design visual aprimorado**: Gradientes, efeitos hover, animações suaves, foto polaroid e backgrounds customizados por seção
- **Links externos**: GitHub, LinkedIn e WhatsApp com ícones Font Awesome
- **Layout responsivo**: Desktop, tablet e dispositivos móveis com breakpoints otimizados
- **SEO e Open Graph**: Meta tags descritivas e tags OG para compartilhamento em redes sociais

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
|       |__ favicon.ico
|       |__ logo-light.webp
|       |__ avatar-grazi.webp
|       |__ print-portfolio.webp
|       |__ amigurumis-da-vovo.webp
|       |__ buscar-perfil-github.webp
|       |__ sintaxwear.webp
|       |__ contact-bg.webp
|       |__ sobre-bg.webp
|__ js/
    |__ main.js
    |__ modules/
        |__ menu.js
        |__ navigation.js
        |__ projects-modal.js
        |__ contact-form.js
```

## Como executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/grazielle-marttdev/meu-portfolio.git
   ```
2. Abra o arquivo `index.html` no navegador.

> Para uma experiência local melhor, utilize uma extensão como Live Server ou qualquer servidor estático.

## Possíveis melhorias futuras

- Aprimorar o feedback visual da navegação por teclado (foco na acessibilidade)
- Reformular as descrições dos projetos: foco visual e nos resultados/benefícios para o usuário final (menos linguagem técnica)
- Migração para React para componentização avançada
- Testes automatizados e workflow CI/CD
- Implementação de dark/light mode toggle
- Animações com Framer Motion ou similar

## Contato

- Email: gzm8martins@gmail.com
- WhatsApp: https://wa.me/5561992017308
- LinkedIn: https://www.linkedin.com/in/grazielle-martins-557b61334/
- GitHub: https://github.com/grazielle-marttdev
