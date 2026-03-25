export function projectModal() {
    const detailsBtn = document.querySelectorAll('.details-btn');
    const modalContainer = document.getElementById('modal-container');
    const closeBtn = document.getElementById('close-btn');

    const modalData = [
        {
            title: "Amigurumis da Vovó | Projeto Pessoal",
            description: "Protótipo de e-commerce para venda de amigurumis, desenvolvido com foco em organização de código, geração dinâmica de produtos e abordagem mobile-first.",
            techDescription: "Implementei a geração dinâmica de produtos com JavaScript orientado a objetos, utilizando classes para estruturar a criação de componentes. Organizei os dados em arquivos JSON e desenvolvi a renderização dinâmica do catálogo via manipulação do DOM. Estruturei o projeto de forma modular, separando responsabilidades para melhorar a escalabilidade e manutenção do código.",
            learningDescription: "Evoluí na modelagem de dados orientada a objetos e na aplicação prática do conceito mobile-first. Desenvolvi maior clareza na organização estrutural do projeto e na tomada de decisões técnicas fundamentadas.",
            techs: ["HTML5", "CSS3", "JavaScript"]
        },

        {
            title: "Visualizador de Perfil do GitHub | DevQuest",
            description: "Aplicação web que consome a API pública do GitHub para exibir dados dinâmicos de usuários e repositórios.",
            techDescription: "Implementei requisições HTTP com JavaScript, organizando a lógica para separar consumo de API e renderização. Trabalhei com manipulação de dados assíncronos e atualização dinâmica do DOM.",
            learningDescription: "Consolidei o entendimento sobre fluxo assíncrono, tratamento de erros e organização de código voltada à clareza e manutenção.",
            techs: ["HTML5", "CSS3", "JavaScript"]
        },
        
        {
            title: "SyntaxWear E-commerce | DevQuest",
            description: "Projeto de e-commerce responsivo desenvolvido com foco em estruturação semântica, organização de layout e adaptação para diferentes dispositivos.",
            techDescription: "Estruturei o projeto com HTML5 semântico e desenvolvi o layout utilizando CSS3 com Flexbox e Grid. Apliquei Media Queries para garantir responsividade e mantive organização de arquivos e commits convencionais para versionamento consistente.",
            learningDescription: "Aprimorei a construção de layouts responsivos utilizando Grid e Flexbox de forma complementar. Compreendi na prática como uma boa estrutura semântica e um versionamento organizado facilitam manutenção e escalabilidade.",
            techs: ["HTML5", "CSS3"]
        }
    ]

    detailsBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Pega os dados correspondentes ao botão clicado usando o índice
            const data = modalData[index];
            
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
    })
}

