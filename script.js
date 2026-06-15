// Translations
const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.contact": "Contact",
        "hero.greeting": "Hello, I am",
        "hero.role": "Software Engineer",
        "hero.bio": "Transforming ideas into innovative digital experiences with clean code and modern design.",
        "hero.cta-experience": "View Experience",
        "hero.cta-contact": "Contact",
        "about.title": "About Me",
        "about.p1": "I am a Software Engineer specializing in .NET Core and ReactJS, with solid experience in microservices architectures and AWS. I transform complex problems into scalable solutions that generate real business impact.",
        "about.achievements_title": "💡 Key achievements:",
        "about.achievements_item1": "• Optimized logistics routes, achieving a 40% efficiency gain.",
        "about.achievements_item2": "• Reduced execution time of complex SQL queries by up to 70%.",
        "about.achievements_item3": "• Modernized legacy systems to microservices-based architectures.",
        "about.achievements_item4": "• Developed serverless services (AWS Lambda) and REST APIs for new financial products.",
        "about.stack": "🛠️ Main Stack: C#, .NET Core, ReactJS, NextJS, JavaScript/TypeScript, NodeJS, AWS Lambda, SQL Server, PostgreSQL, Docker, and RESTful APIs.",
        "about.p2": "I have worked as a technical consultant on highly complex projects for corporate clients in the banking, real estate, and logistics sectors. I value clear communication with stakeholders and collaborative work in international agile teams.",
        "about.p3": "Let's talk about how I can contribute to your upcoming projects? Get in touch!",
        "about.education": "Education",
        "about.degree": "Bachelor's Degree in Computer Science",
        "about.university": "Federal University of Alfenas",
        "projects.title": "Featured Projects",
        "projects.p1.title": "Gerenciador Maçônico",
        "projects.p1.desc": "The complete and modern solution for managing your Lodge. Simplify the administration of the Treasury and Chancellery, track brothers' attendance, manage payments, and keep all Masonic history secure and accessible in one place.",
        "projects.p2.title": "THF-3D",
        "projects.p2.desc": "THF was born tied to creation, digital fabrication, and 3D printing. We evolved beyond manufacturing to develop complete solutions for financial management, keeping the pillars of strength, resilience, constant work, and reliability present since our origins.",
        "projects.p3.title": "Band Way",
        "projects.p3.desc": "Manage your band with harmony. Organize rehearsals, centralize repertoires, track finances, and plan your shows in a single place, without distractions.",
        "projects.link.access": "Access",
        "skills.title": "Technical Skills",
        "skills.languages": "Programming Languages",
        "skills.frameworks": "Frameworks & Libraries",
        "skills.devops": "Cloud & DevOps",
        "skills.database": "Databases",
        "skills.architecture": "Architecture & Additional Technologies",
        "skills.microservices": "Microservices",
        "experience.title": "Professional Experience",
        "exp.fullstack": "Full Stack Developer",
        "exp.se": "Software Engineer",
        "exp.web": "Web Developer",
        "exp.web.fullstack": "Full Stack Web Developer",
        "exp.frontend": "Front End Developer",
        "exp.deal.period": "September 2021 – May 2026",
        "exp.deal.bmp.title": "BMP (Jun/2025 - Apr/2026):",
        "exp.deal.bmp.item1": "Development of serverless services (AWS Lambda) and REST APIs for structuring the architecture of new Credit Card services.",
        "exp.deal.bmp.item2": "Implementation and integration of anti-fraud systems focused on critical Cashin operations.",
        "exp.deal.vertem1.title": "Vertem (Jan/2025 - May/2025):",
        "exp.deal.vertem1.item1": "Critical role in infrastructure migration from Microsoft Azure to AWS environments, ensuring stability of loyalty and cashback management products.",
        "exp.deal.vertem1.item2": "System support and development of new features using the .NET Core and ReactJS stack.",
        "exp.deal.ouribank.title": "Banco Ouribank (May/2024 - Dec/2024):",
        "exp.deal.ouribank.item1": "System modernization acting in the migration of legacy monolithic applications (VB.Net) to scalable microservices architecture based on AWS Lambda for eFX operations.",
        "exp.deal.ouribank.item2": "Creation and continuous maintenance of Workers and Cloud APIs.",
        "exp.deal.rioapps.title": "RioAPPS (Mar/2024 - Apr/2024):",
        "exp.deal.rioapps.item1": "Development of API integrations for synchronizing Microsoft Outlook calendars on legal management platforms (offices and courts).",
        "exp.deal.rioapps.item2": "Daily collaboration in a global environment, conducting technical alignments with teams from North America and India.",
        "exp.deal.vertem2.title": "Vertem (Sep/2023 - Feb/2024):",
        "exp.deal.vertem2.item1": "Maintenance, refactoring of internal code bases and creation of features for loyalty platforms using .NET Core, ReactJS and SQL Server.",
        "exp.deal.bs2.title": "BS2 (Jul/2022 - Aug/2023):",
        "exp.deal.bs2.item1": "Work on banking core, covering products for payment methods, issuing boletos, remittances and compliance flows.",
        "exp.deal.bs2.item2": "Full Stack Development (.NET Framework/Core, SQL Server, Razor) with CI/CD pipelines via Azure DevOps.",
        "exp.deal.vertem3.title": "Vertem (Sep/2021 - Jul/2022):",
        "exp.deal.vertem3.item1": "Maintenance, refactoring of internal code bases and creation of features for loyalty platforms using .NET Core, ReactJS and SQL Server.",
        "exp.brasil-risk.period": "April 2019 – August 2021",
        "exp.brasil-risk.item1": "End-to-end development of solutions for advanced logistics monitoring, using C# ASP.NET (Backend) and JavaScript, jQuery, HTML5/CSS3 (Frontend).",
        "exp.brasil-risk.item2": "Significant performance optimization: Reduction of approximately 70% in the execution time of complex database queries in SQL.",
        "exp.brasil-risk.item3": "Modernization of corporate systems through refactoring of legacy code and applying UX-focused improvements.",
        "exp.freelance.title": "Freelance Consultant",
        "exp.freelance.period": "April 2018 – April 2019",
        "exp.freelance.item1": "Construction of customized high-impact applications for clients in the banking and real estate sectors using C# (.NET Core), JavaScript and PHP.",
        "exp.freelance.item2": "Technical leadership in feature planning, UX analysis and complete restructuring of legacy systems.",
        "exp.meanas.period": "September 2018 – December 2018",
        "exp.meanas.item1": "Creation of mobile applications and backend services using the JavaScript ecosystem (React Native and NodeJS).",
        "exp.meanas.item2": "Provision of specialized consulting for project architecture in .NET Core and integration with AngularJS.",
        "exp.concrelongo.period": "May 2018 – August 2018",
        "exp.concrelongo.item1": "Complete development of the Concrete Management System (SGC), managing the complete software lifecycle.",
        "exp.concrelongo.item2": "Implementation of algorithms focused on logistics route optimization, generating operational efficiency gains of approximately 40%.",
        "exp.unidesk.period": "October 2017 – March 2018",
        "exp.unidesk.item1": "Frontend development focused on highly interactive WebMapping interfaces.",
        "exp.unidesk.item2": "Structural support in backend architecture design aimed at supporting high product scalability.",
        "exp.searchonmath.period": "June 2017 – October 2017",
        "exp.searchonmath.item1": "Construction of the 3rd version of the web application interface, focusing strongly on responsiveness and usability aimed at the scientific and academic audience.",
        "exp.ufal.period": "January 2016 – April 2016",
        "exp.ufal.item1": "Technical support, preventive maintenance and development of new modules for the institution's internal academic and administrative management systems.",
        "contact.title": "Contact",
        "contact.subtitle": "Get in touch using the links below:",
        "footer.copyright": "© 2026 Adenir Teixeira de Souza. All rights reserved."
    },
    pt: {
        "nav.home": "Início",
        "nav.about": "Sobre",
        "nav.projects": "Projetos",
        "nav.skills": "Habilidades",
        "nav.experience": "Experiência",
        "nav.contact": "Contato",
        "hero.greeting": "Olá, eu sou",
        "hero.role": "Engenheiro de Software",
        "hero.bio": "Transformando ideias em experiências digitais inovadoras com código limpo e design moderno.",
        "hero.cta-experience": "Ver Experiência",
        "hero.cta-contact": "Contato",
        "about.title": "Sobre Mim",
        "about.p1": "Sou um Engenheiro de Software especializado em .NET Core e ReactJS, com sólida experiência em arquiteturas de microsserviços e AWS. Transformo problemas complexos em soluções escaláveis que geram impacto real nos negócios.",
        "about.achievements_title": "💡 Principais conquistas:",
        "about.achievements_item1": "• Otimização de rotas logísticas, alcançando um ganho de eficiência de 40%.",
        "about.achievements_item2": "• Redução do tempo de execução de consultas SQL complexas em até 70%.",
        "about.achievements_item3": "• Modernização de sistemas legados para arquiteturas baseadas em microsserviços.",
        "about.achievements_item4": "• Desenvolvimento de serviços serverless (AWS Lambda) e APIs REST para novos produtos financeiros.",
        "about.stack": "🛠️ Stack Principal: C#, .NET Core, ReactJS, NextJS, JavaScript/TypeScript, NodeJS, AWS Lambda, SQL Server, PostgreSQL, Docker e APIs RESTful.",
        "about.p2": "Trabalhei como consultor técnico em projetos de alta complexidade para clientes corporativos nos setores bancário, imobiliário e logístico. Valorizo a comunicação clara com as partes interessadas e o trabalho colaborativo em equipes ágeis internacionais.",
        "about.p3": "Vamos conversar sobre como posso contribuir para seus próximos projetos? Entre em contato!",
        "about.education": "Formação",
        "about.degree": "Bacharel em Ciência da Computação",
        "about.university": "Universidade Federal de Alfenas",
        "projects.title": "Projetos em Destaque",
        "projects.p1.title": "Gerenciador Maçônico",
        "projects.p1.desc": "A solução completa e moderna para a gestão da sua Loja. Simplifique a administração da Tesouraria e Chancelaria, acompanhe a frequência dos irmãos, gerencie pagamentos e tenha todo o histórico maçônico de forma segura e acessível em um só lugar.",
        "projects.p2.title": "THF-3D",
        "projects.p2.desc": "A THF nasceu ligada à criação, fabricação digital e impressão 3D. Evoluímos para além da manufatura, passando a desenvolver soluções completas para a gestão financeira, mantendo os pilares de força, resistência, trabalho constante e confiabilidade presentes desde a nossa origem.",
        "projects.p3.title": "Band Way",
        "projects.p3.desc": "Gerencie sua banda com harmonia. Organize ensaios, centralize repertórios, controle finanças e planeje seus shows em um único lugar, sem distrações.",
        "projects.link.access": "Acessar",
        "skills.title": "Habilidades Técnicas",
        "skills.languages": "Linguagens de Programação",
        "skills.frameworks": "Frameworks & Bibliotecas",
        "skills.devops": "Cloud & DevOps",
        "skills.database": "Banco de Dados",
        "skills.architecture": "Arquitetura & Tecnologias Adicionais",
        "skills.microservices": "Microsserviços",
        "experience.title": "Experiência Profissional",
        "exp.fullstack": "Desenvolvedor Full Stack",
        "exp.se": "Engenheiro de Software",
        "exp.web": "Desenvolvedor Web",
        "exp.web.fullstack": "Desenvolvedor Web Full Stack",
        "exp.frontend": "Desenvolvedor Front End",
        "exp.deal.period": "Setembro 2021 – Maio 2026",
        "exp.deal.bmp.title": "BMP (Jun/2025 - Abr/2026):",
        "exp.deal.bmp.item1": "Desenvolvimento de serviços serverless (AWS Lambda) e APIs REST para estruturação da arquitetura de novos serviços de Cartão de Crédito.",
        "exp.deal.bmp.item2": "Implementação e integração de sistemas antifraude voltados para operações críticas de Cashin.",
        "exp.deal.vertem1.title": "Vertem (Jan/2025 - Mai/2025):",
        "exp.deal.vertem1.item1": "Atuação crítica na migração de infraestrutura de ambientes Microsoft Azure para AWS, garantindo a estabilidade dos produtos de fidelidade e gestão de cashback.",
        "exp.deal.vertem1.item2": "Sustentação de sistemas e desenvolvimento de novas funcionalidades utilizando a stack .NET Core e ReactJS.",
        "exp.deal.ouribank.title": "Banco Ouribank (Mai/2024 - Dez/2024):",
        "exp.deal.ouribank.item1": "Modernização de sistemas atuando na migração de aplicações monolíticas legadas (VB.Net) para arquitetura escalável de microsserviços baseada em AWS Lambda para operações de eFX.",
        "exp.deal.ouribank.item2": "Criação e manutenção contínua de Workers e APIs em nuvem.",
        "exp.deal.rioapps.title": "RioAPPS (Mar/2024 - Abr/2024):",
        "exp.deal.rioapps.item1": "Desenvolvimento de integrações via API para sincronização de agendas do Microsoft Outlook em plataformas de gestão jurídica (escritórios e cortes).",
        "exp.deal.rioapps.item2": "Colaboração diária em ambiente global, conduzindo alinhamentos técnicos com equipes da América do Norte e Índia.",
        "exp.deal.vertem2.title": "Vertem (Set/2023 - Fev/2024):",
        "exp.deal.vertem2.item1": "Manutenção, refatoração de bases de código interno e criação de features para plataformas de fidelidade utilizando .NET Core, ReactJS e SQL Server.",
        "exp.deal.bs2.title": "BS2 (Jul/2022 - Ago/2023):",
        "exp.deal.bs2.item1": "Atuação no core bancário, abrangendo produtos de meios de pagamento, emissão de boletos, remessas e fluxos de compliance.",
        "exp.deal.bs2.item2": "Desenvolvimento Full Stack (.NET Framework/Core, SQL Server, Razor) com esteiras de CI/CD via Azure DevOps.",
        "exp.deal.vertem3.title": "Vertem (Set/2021 - Jul/2022):",
        "exp.deal.vertem3.item1": "Manutenção, refatoração de bases de código interno e criação de features para plataformas de fidelidade utilizando .NET Core, ReactJS e SQL Server.",
        "exp.brasil-risk.period": "Abril 2019 – Agosto 2021",
        "exp.brasil-risk.item1": "Desenvolvimento ponta a ponta de soluções para monitoramento logístico avançado, utilizando C# ASP.NET (Backend) e JavaScript, jQuery, HTML5/CSS3 (Frontend).",
        "exp.brasil-risk.item2": "Otimização expressiva de performance: Redução de aproximadamente 70% no tempo de execução de consultas complexas em banco de dados SQL.",
        "exp.brasil-risk.item3": "Modernização de sistemas corporativos mediante refatoração de código legado e aplicação de melhorias focadas em UX.",
        "exp.freelance.title": "Consultor Autônomo",
        "exp.freelance.period": "Abril 2018 – Abril 2019",
        "exp.freelance.item1": "Construção de aplicações personalizadas de alto impacto para clientes dos setores bancário e imobiliário utilizando C# (.NET Core), JavaScript e PHP.",
        "exp.freelance.item2": "Liderança técnica no planejamento de funcionalidades, análises de UX e reestruturação completa de sistemas antigos.",
        "exp.meanas.period": "Setembro 2018 – Dezembro 2018",
        "exp.meanas.item1": "Criação de aplicações móveis e serviços de backend utilizando o ecossistema JavaScript (React Native e NodeJS).",
        "exp.meanas.item2": "Prestação de consultoria especializada para arquitetura de projetos em .NET Core e integração com AngularJS.",
        "exp.concrelongo.period": "Maio 2018 – Agosto 2018",
        "exp.concrelongo.item1": "Desenvolvimento integral do Sistema de Gestão de Concreto (SGC), gerenciando o ciclo de vida completo do software.",
        "exp.concrelongo.item2": "Implementação de algoritmos focados em otimização de rotas logísticas, gerando ganhos operacionais de eficiência de cerca de 40%.",
        "exp.unidesk.period": "Outubro 2017 – Março 2018",
        "exp.unidesk.item1": "Desenvolvimento frontend focado em interfaces de WebMapping altamente interativas.",
        "exp.unidesk.item2": "Apoio estrutural no design da arquitetura de backend visando suportar alta escalabilidade do produto.",
        "exp.searchonmath.period": "Junho 2017 – Outubro 2017",
        "exp.searchonmath.item1": "Construção da 3ª versão da interface web da aplicação, focando fortemente em responsividade e usabilidade voltada para o público científico e acadêmico.",
        "exp.ufal.period": "Janeiro 2016 – Abril 2016",
        "exp.ufal.item1": "Sustentação técnica, manutenção preventiva e desenvolvimento de novos módulos para os sistemas internos de gestão acadêmica e administrativa da instituição.",
        "contact.title": "Contato",
        "contact.subtitle": "Entre em contato utilizando os links abaixo:",
        "footer.copyright": "© 2026 Adenir Teixeira de Souza. Todos os direitos reservados."
    }
};

// Current language (default: English)
let currentLang = 'en';

// Function to translate page
function translatePage(lang) {
    currentLang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Language button event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Check if there's a saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    translatePage(savedLang);
    
    // Add click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            translatePage(lang);
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.9)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.7)';
        navbar.style.boxShadow = 'none';
    }
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjust the offset for better triggering
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// Scroll Reveal Animation using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Optional: stop observing once shown if you only want it to animate once
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add 'hidden' class to all elements that should animate in, then observe them
document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.section-title, .about-text, .stat-item, .skill-card, .project-card, .contact p, .social-btn');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});
