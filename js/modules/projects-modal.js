export function projectModal() {
    const detailsBtn = document.querySelectorAll('.details-btn');
    const modalContainer = document.getElementById('modal-container');
    const closeBtn = document.getElementById('close-btn');

    const modalData = [
        {
            title: "Amigurumis da Vovó | Projeto Pessoal",
            description: "E-commerce de amigurumis desenvolvido com arquitetura modular, focando em performance mobile e escalabilidade através de dados dinâmicos.",
            techDescription: "Implementei uma arquitetura orientada a objetos para gerenciar o catálogo de produtos, consumindo dados de uma estrutura JSON que simula uma API. Priorizei a manipulação eficiente do DOM e o uso de componentes reutilizáveis, garantindo que a interface seja fluida, acessível (A11y) e fácil de manter.",
            learningDescription: "Aprimorei a modelagem de dados e a aplicação rigorosa da metodologia mobile-first. Consolidei práticas de organização de código focada em escalabilidade e tomei decisões técnicas fundamentadas em performance.",
            techs: ["HTML5", "CSS3", "JavaScript"]
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

