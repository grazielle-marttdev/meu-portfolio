export function projectModal() {
    const detailsBtn = document.querySelectorAll('.details-btn');
    const modalContainer = document.getElementById('modal-container');
    const closeBtn = document.getElementById('close-btn');

    const modalData = [
        {
            title: "MarttDev log_ | Projeto Pessoal",
            description: "Um diário público de desenvolvimento web projetado para registrar a evolução técnica constante, focado em simplicidade, performance e total controle sobre o código.",
            techDescription: "Implementei um feed dinâmico utilizando JavaScript Vanilla e Fetch API para consumir dados de uma estrutura JSON. Desenvolvi um sistema de busca inteligente em tempo real e filtros por tags (chips), garantindo uma interface reativa sem o uso de frameworks. A estrutura foi construída com HTML5 semântico e CSS3 modularizado.",
            learningDescription: "Aprofundei conhecimentos em manipulação avançada de DOM, lógica de filtragem de dados e organização de projetos sem dependências externas. Pratiquei a criação de interfaces focadas em legibilidade e experiência de usuário (UX).",
            techs: ["HTML5", "CSS3", "JavaScript", "JSON"]
        },

        {
            title: "Amigurumis da Vovó | Projeto Pessoal",
            description: "E-commerce artesanal full-stack para divulgação e venda de amigurumis, com API REST própria, banco de dados PostgreSQL e front-end modular focado em acessibilidade e experiência mobile-first.",
            techDescription: "Construí uma API REST com Node.js e Express que serve dados de um banco PostgreSQL, utilizando Pool de conexões, queries parametrizadas contra SQL Injection e um formato de resposta padronizado. No front-end, implementei uma arquitetura orientada a objetos com ES Modules para renderizar dinamicamente os produtos consumidos da API, com CSS organizado em camadas (reset, variáveis, base, componentes, utilitários) e conformidade com WCAG 2.1 nível AA.",
            learningDescription: "Consolidei a transição de dados estáticos para uma arquitetura cliente-servidor real, aprendendo a modelar schemas SQL, versionar a estrutura do banco e integrar front e back-end via fetch assíncrono com tratamento robusto de erros. Aprimorei práticas de acessibilidade, segurança de API e organização de código escalável.",
            techs: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "PostgreSQL"]
        },

        {
            title: "Visualizador de Perfil do GitHub | DevQuest",
            description: "Aplicação interativa que utiliza a Fetch API para conectar-se ao ecossistema do GitHub, entregando dados de usuários em tempo real.",
            techDescription: "Desenvolvi o consumo da API do GitHub utilizando Async/Await para garantir um fluxo de código limpo e legível. Estruturei uma lógica resiliente de tratamento de erros para mitigar falhas de rede e garantir que estados vazios ou usuários inexistentes sejam comunicados de forma clara, priorizando a experiência do usuário (UX).",
            learningDescription: "Otimizei o gerenciamento de estados assíncronos e a separação de responsabilidades entre lógica de serviço e interface. Reforcei a importância de uma aplicação robusta frente a comportamentos inesperados de APIs externas.",
            techs: ["HTML5", "CSS3", "JavaScript"]
        },
        
        {
            title: "SyntaxWear E-commerce | DevQuest",
            description: "Plataforma de e-commerce focada em alta fidelidade visual e consistência de layout entre múltiplos dispositivos.",
            techDescription: "Projetei um sistema de layout híbrido utilizando CSS Grid para a estrutura macro e Flexbox para o alinhamento refinado de componentes. Apliquei estratégias de responsividade para manter a harmonia visual em diversas resoluções, desde telas ultrawide até dispositivos móveis compactos, utilizando HTML5 semântico.",
            learningDescription: "Dominei o uso complementar de Grid e Flexbox para resolver desafios complexos de design responsivo. Validei na prática como uma estrutura semântica sólida e um fluxo de trabalho profissional com Git facilitam a manutenção e o SEO do projeto.",
            techs: ["HTML5", "CSS3"]
        }
    ]

    detailsBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Pega os dados correspondentes ao botão clicado usando o índice
            const data = modalData[index];
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';

            // Atualiza o estado de aria-expanded para refletir a abertura do modal
            btn.setAttribute('aria-expanded', !isExpanded);

            modalContainer.classList.remove('hide');
            document.body.style.overflow = 'hidden';

            // Pegando os ids dos elementos do modelo do modal já pronto no html
            const modalTitle = document.getElementById('title');
            const modalDescription = document.getElementById('description');
            const modalTechDescription = document.getElementById('tech-description');
            const modalLearningDescription = document.getElementById('learning-description');
            const modalTechs = document.getElementById('techs');

            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            modalTechDescription.textContent = data.techDescription;
            modalLearningDescription.textContent = data.learningDescription;
            modalTechs.innerHTML = data.techs.map(tech => `<li>${tech}</li>`).join('');
        });
    });

    closeBtn.addEventListener('click', () => {
        modalContainer.classList.add('hide');
        document.body.style.overflow = ''; 

        // Reseta o estado de aria-expanded para todos os botões ao fechar o modal
        detailsBtn.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
    })
}

