export type Locale = 'en' | 'es' | 'pt';

export type Translation = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  header: {
    headline: string;
    phoneAria: string;
    linkedinAria: string;
    mediumAria: string;
    linkedinLabel: string;
    mediumLabel: string;
    languageSwitchAria: string;
  };
  sections: {
    personalStatement: {
      title: string;
      subtitle: string;
      paragraphs: [string, string, string, string, string];
      achievementsTitle: string;
      achievements: string[];
    };
    experience: {
      title: string;
      subtitle: string;
      items: { role: string; company: string; period: string }[];
    };
    specialty: {
      title: string;
      subtitle: string;
      items: [string, string, string];
    };
    languages: {
      title: string;
      subtitle: string;
      items: { code: string; name: string; level: string; value: number; accent: 'blue' | 'green' }[];
    };
    tools: {
      title: string;
      subtitle: string;
      items: { name: string; category: string; logo: string; url: string }[];
    };
    education: {
      title: string;
      subtitle: string;
      items: { year: string; title: string; org: string; tags: string[]; url?: string }[];
    };
  };
};

const english: Translation = {
  meta: {
    title: 'Ignacio Pérez Roca | Senior Product Manager',
    description:
      'Senior Product Manager specialized in fintech, crypto, digital identity, KYC, onboarding, authentication and product-led growth across LatAm.',
    ogTitle: 'Ignacio Pérez Roca | Senior Product Manager',
    ogDescription:
      'Senior Product Manager specialized in fintech, crypto, digital identity, KYC, onboarding, authentication and product-led growth across LatAm.',
  },
  header: {
    headline: 'Senior Product Manager | Identity, KYC, Authentication & Growth',
    phoneAria: 'Call +54 911 5807 7847',
    linkedinAria: 'Open Ignacio Perez Roca LinkedIn profile',
    mediumAria: 'Open medium.com/@ignacio-perezroca',
    linkedinLabel: 'LinkedIn',
    mediumLabel: 'medium.com/@ignacio-perezroca',
    languageSwitchAria: 'Language switcher',
  },
  sections: {
    personalStatement: {
      title: 'PERSONAL STATEMENT',
      subtitle: 'Human-first product leadership for onboarding, identity, and growth.',
      paragraphs: [
        "I'm a **Senior Product Manager** with **16+ years of experience** building **human-first, scalable onboarding journeys**.",
        "Over the years, I've acquired a wide range of tools, tactics, and experience across various roles and industries. I specialize in **digital identity, KYC, authentication, and product-led growth**. I've led international teams from **0 to 18+** across **Argentina, Brazil, Mexico, Paraguay, and Colombia**, successfully onboarding **over 8 million users** in **fintech, crypto, and Web3**.",
        'Having built products from scratch in various roles, my strength lies in combining **empathy and visual thinking** (**User Experience Design**) with **technical experience** (**8 years as a developer**). This holistic perspective allows me to translate **metrics into meaningful product experiences** that drive **acquisition, retention, and long-term impact**.',
        "When it comes to building, I rely on **data** to surface real problems and opportunities, and I craft products that **simplify people's lives**. I hold a **Certified Scrum Product Owner (CSPO®)**, **Certified Scrum Trainer (CST®)**, and several other certifications from world-class universities.",
        'My mission is to build trust, empower teams, and deliver products that people love.',
      ],
      achievementsTitle: 'Key achievements',
      achievements: [
        "**Boosted Bitso's onboarding conversion by +262%** for over **8M users**.",
        '**Scaled Lemon from 60k to 2M users in 6 months** (**+3200% growth**).',
        '**Built and scaled UNID (Unified Identity)**, unifying **~3M users across 30 companies** within the Grupo Vázquez ecosystem.',
        'Led multi-country onboarding launches across LatAm, acquiring **over 1M users in the first year**.',
        "**Led Bitso's product expansion**, scaling from **4 million to nearly 7 million users** (**+75% annual growth**).",
        'Developed a new home screen for an exchange with **over 8M users**, driving a **35% increase in product activation**.',
        '**Led cross-functional teams from 0 to 18+** across **Argentina, Brazil, Mexico, Paraguay, Colombia and United States**.',
      ],
    },
    experience: {
      title: 'EXPERIENCE',
      subtitle: 'A career focused on fintech, crypto, onboarding, and identity.',
      items: [
        { role: 'Senior Product Manager - Onboarding', company: 'itti', period: 'Sep 2024 – Present · 1 yr 7 mos' },
        { role: 'Senior Product Manager - Onboarding', company: '@Bitso', period: 'Oct 2022 – Sep 2024 · 2 yrs' },
        { role: 'Senior Product Manager - Growth', company: '@Lemoncash', period: 'October 2021 - October 2022' },
        { role: 'Product Manager - Onboarding', company: 'Personal Pay', period: 'July 2020 - October 2021' },
        { role: 'Product Manager - Onboarding', company: 'IUNIGO', period: 'July 2019 - July 2020' },
        { role: 'Product Manager - Onboarding', company: 'Ripio', period: 'September 2017 - July 2019' },
        { role: 'Designer & Frontend Developer', company: 'Personal - Telecom', period: 'March 2015 - September 2017' },
        { role: 'Designer & Frontend Developer', company: 'Thet Studio', period: 'February 2011 - March 2015' },
      ],
    },
    specialty: {
      title: 'SPECIALTY',
      subtitle: 'Core domains where I create the most impact as a Product Manager.',
      items: ['Product', 'Development', 'Product Design'],
    },
    languages: {
      title: 'LANGUAGES',
      subtitle: 'Multilingual communication for international teams.',
      items: [
        { code: 'ES', name: 'Español', level: 'Native', value: 100, accent: 'blue' },
        { code: 'EN', name: 'English', level: 'Advanced', value: 90, accent: 'blue' },
        { code: 'PT', name: 'Portuguese', level: 'Developing', value: 45, accent: 'green' },
      ],
    },
    tools: {
      title: 'TOOLS & SKILLS',
      subtitle: 'AI-native product work, design, delivery, and analytics fluency.',
      items: [
        { name: 'Figma', category: 'Design & Prototyping', logo: 'https://cdn.simpleicons.org/figma', url: 'https://www.figma.com/' },
        { name: 'Miro', category: 'Product Discovery & Workshops', logo: 'https://cdn.simpleicons.org/miro', url: 'https://miro.com/' },
        { name: 'ChatGPT', category: 'AI Copilot & Product Strategy', logo: '/logos/openai.svg', url: 'https://chatgpt.com/' },
        { name: 'Claude', category: 'AI Writing & Analysis', logo: 'https://cdn.simpleicons.org/anthropic', url: 'https://claude.com/' },
        { name: 'Gemini', category: 'AI Research & Productivity', logo: 'https://cdn.simpleicons.org/googlegemini', url: 'https://gemini.google.com/' },
        { name: 'Jira', category: 'Delivery & Roadmapping', logo: 'https://cdn.simpleicons.org/jira', url: 'https://www.atlassian.com/software/jira' },
        { name: 'Confluence', category: 'Documentation', logo: 'https://cdn.simpleicons.org/confluence', url: 'https://www.atlassian.com/software/confluence' },
        { name: 'Notion', category: 'Product Docs & Knowledge Base', logo: 'https://cdn.simpleicons.org/notion', url: 'https://www.notion.so/' },
        { name: 'Slack', category: 'Team Communication', logo: '/logos/slack.svg', url: 'https://slack.com/' },
        { name: 'Amplitude', category: 'Product Analytics', logo: '/logos/amplitude.svg', url: 'https://amplitude.com/' },
        { name: 'Looker', category: 'BI & Data Visualization', logo: 'https://cdn.simpleicons.org/looker', url: 'https://cloud.google.com/looker' },
        { name: 'CleverTap', category: 'Lifecycle & Engagement', logo: '/logos/clevertap.png', url: 'https://clevertap.com/' },
        { name: 'Keycloak', category: 'Identity & Authentication', logo: 'https://cdn.simpleicons.org/keycloak', url: 'https://www.keycloak.org/' },
        { name: 'Firebase', category: 'App Infrastructure', logo: '/logos/firebase.svg', url: 'https://firebase.google.com/' },
        { name: 'Postman', category: 'API Testing', logo: 'https://cdn.simpleicons.org/postman', url: 'https://www.postman.com/' },
        { name: 'GitHub', category: 'Code Collaboration', logo: 'https://cdn.simpleicons.org/github', url: 'https://github.com/' },
        { name: 'Vercel', category: 'Frontend Deployment', logo: 'https://cdn.simpleicons.org/vercel', url: 'https://vercel.com/' },
      ],
    },
    education: {
      title: 'EDUCATION & CERTIFICATIONS',
      subtitle: 'Formal training across product, development, design, agile and growth.',
      items: [
        { year: '2025', title: 'Anthropic Academy', org: 'Anthropic', tags: ['AI Fluency', 'Claude', 'Claude Code', 'MCP'], url: 'https://www.anthropic.com/learn' },
        { year: '2023', title: 'Growth Product Management', org: 'Reforge®', tags: ['Product', 'Growth', 'Strategy'] },
        { year: '2019', title: 'Certified Scrum Product Owner (CSPO®)', org: 'Scrum Alliance. International Certified', tags: ['Agile', 'Product Ownership'] },
        { year: '2016', title: 'Scrum Master Certified (SMC ®)', org: 'Scrum Alliance. International Certified', tags: ['Agile', 'Delivery'] },
        { year: '2015', title: 'Angular', org: 'Udemy. International Certified', tags: ['Frontend', 'Frameworks'] },
        { year: '2012', title: 'Frontend Developer', org: 'Coderhouse, Buenos Aires. Argentina', tags: ['Frontend', 'Web'] },
        { year: '2012', title: 'Web development', org: 'Code Academy. International Certified', tags: ['HTML', 'CSS', 'JavaScript'] },
        { year: '2009', title: 'Bachelor in Graphic Design', org: 'Universidad de Buenos Aires. Argentina', tags: ['Design', 'UX', 'Visual Systems'] },
      ],
    },
  },
};

const spanish: Translation = {
  meta: {
    title: 'Ignacio Pérez Roca | Senior Product Manager',
    description:
      'Senior Product Manager especializado en fintech, crypto, digital identity, KYC, onboarding, authentication y product-led growth en LatAm.',
    ogTitle: 'Ignacio Pérez Roca | Senior Product Manager',
    ogDescription:
      'Senior Product Manager especializado en fintech, crypto, digital identity, KYC, onboarding, authentication y product-led growth en LatAm.',
  },
  header: {
    headline: 'Senior Product Manager | Identity, KYC, Authentication & Growth',
    phoneAria: 'Llamar al +54 911 5807 7847',
    linkedinAria: 'Abrir el perfil de LinkedIn de Ignacio Perez Roca',
    mediumAria: 'Abrir medium.com/@ignacio-perezroca',
    linkedinLabel: 'LinkedIn',
    mediumLabel: 'medium.com/@ignacio-perezroca',
    languageSwitchAria: 'Selector de idioma',
  },
  sections: {
    personalStatement: {
      title: 'PERFIL PROFESIONAL',
      subtitle: 'Liderazgo product-first para onboarding, identity y growth escalable.',
      paragraphs: [
        'Soy **Senior Product Manager** con **16+ años de experiencia** construyendo **onboarding journeys human-first y escalables**.',
        'A lo largo de mi carrera fui sumando herramientas, tácticas y experiencia en distintos roles e industrias. Me especializo en **digital identity, KYC, authentication y product-led growth**. Lideré equipos internacionales de **0 a 18+** en **Argentina, Brasil, México, Paraguay y Colombia**, logrando onboarding de **más de 8 millones de usuarios** en **fintech, crypto y Web3**.',
        'Haber construido productos desde cero en distintos roles me dio una mirada integral: combino **empathy y visual thinking** (**User Experience Design**) con **technical experience** (**8 años como developer**). Esa perspectiva me permite traducir **métricas en product experiences** que mueven **acquisition, retention y long-term impact**.',
        'Cuando construyo, me apoyo en **data** para detectar problemas reales y oportunidades, y diseño productos que **simplifican la vida de las personas**. Cuento con **Certified Scrum Product Owner (CSPO®)**, **Certified Scrum Trainer (CST®)** y otras certificaciones de universidades de primer nivel.',
        'Mi misión es generar confianza, potenciar equipos y entregar productos que la gente valore.',
      ],
      achievementsTitle: 'Logros clave',
      achievements: [
        'Impulsé la conversión de onboarding de Bitso en **+262%** para **más de 8M de usuarios**.',
        'Escalé Lemon de **60k a 2M de usuarios en 6 meses** (**+3200% growth**).',
        'Construí y escalé **UNID (Unified Identity)**, unificando **~3M de usuarios en 30 compañías** del ecosistema Grupo Vázquez.',
        'Lideré lanzamientos de onboarding en varios países de LatAm, sumando **más de 1M de usuarios en el primer año**.',
        'Lideré la expansión de producto de Bitso, pasando de **4 millones a casi 7 millones de usuarios** (**+75% annual growth**).',
        'Desarrollé una nueva home screen para un exchange con **más de 8M de usuarios**, logrando un aumento de **35% en product activation**.',
        'Lideré equipos cross-functional de **0 a 18+** en **Argentina, Brasil, México, Paraguay, Colombia y Estados Unidos**.',
      ],
    },
    experience: {
      title: 'EXPERIENCIA',
      subtitle: 'Una carrera enfocada en fintech, crypto, onboarding e identity.',
      items: [
        { role: 'Senior Product Manager - Onboarding', company: 'itti', period: 'Sep 2024 – Presente · 1 año 7 meses' },
        { role: 'Senior Product Manager - Onboarding', company: '@Bitso', period: 'Oct 2022 – Sep 2024 · 2 años' },
        { role: 'Senior Product Manager - Growth', company: '@Lemoncash', period: 'Octubre 2021 - Octubre 2022' },
        { role: 'Product Manager - Onboarding', company: 'Personal Pay', period: 'Julio 2020 - Octubre 2021' },
        { role: 'Product Manager - Onboarding', company: 'IUNIGO', period: 'Julio 2019 - Julio 2020' },
        { role: 'Product Manager - Onboarding', company: 'Ripio', period: 'Septiembre 2017 - Julio 2019' },
        { role: 'Diseñador & Frontend Developer', company: 'Personal - Telecom', period: 'Marzo 2015 - Septiembre 2017' },
        { role: 'Diseñador & Frontend Developer', company: 'Thet Studio', period: 'Febrero 2011 - Marzo 2015' },
      ],
    },
    specialty: {
      title: 'ESPECIALIDAD',
      subtitle: 'Los dominios donde genero mayor impacto como Product Manager.',
      items: ['Producto', 'Desarrollo', 'Diseño de Producto'],
    },
    languages: {
      title: 'IDIOMAS',
      subtitle: 'Comunicación multilingüe para equipos internacionales.',
      items: [
        { code: 'ES', name: 'Español', level: 'Nativo', value: 100, accent: 'blue' },
        { code: 'EN', name: 'Inglés', level: 'Avanzado', value: 90, accent: 'blue' },
        { code: 'PT', name: 'Portugués', level: 'En desarrollo', value: 45, accent: 'green' },
      ],
    },
    tools: {
      title: 'HERRAMIENTAS Y COMPETENCIAS',
      subtitle: 'Trabajo de producto con IA, diseño, delivery y analytics.',
      items: [
        { name: 'Figma', category: 'Diseño y prototipado', logo: 'https://cdn.simpleicons.org/figma', url: 'https://www.figma.com/' },
        { name: 'Miro', category: 'Descubrimiento de producto y workshops', logo: 'https://cdn.simpleicons.org/miro', url: 'https://miro.com/' },
        { name: 'ChatGPT', category: 'Copilot de IA y estrategia de producto', logo: '/logos/openai.svg', url: 'https://chatgpt.com/' },
        { name: 'Claude', category: 'Escritura y análisis con IA', logo: 'https://cdn.simpleicons.org/anthropic', url: 'https://claude.com/' },
        { name: 'Gemini', category: 'Research y productividad con IA', logo: 'https://cdn.simpleicons.org/googlegemini', url: 'https://gemini.google.com/' },
        { name: 'Jira', category: 'Delivery y roadmapping', logo: 'https://cdn.simpleicons.org/jira', url: 'https://www.atlassian.com/software/jira' },
        { name: 'Confluence', category: 'Documentación', logo: 'https://cdn.simpleicons.org/confluence', url: 'https://www.atlassian.com/software/confluence' },
        { name: 'Notion', category: 'Documentación de producto y base de conocimiento', logo: 'https://cdn.simpleicons.org/notion', url: 'https://www.notion.so/' },
        { name: 'Slack', category: 'Comunicación del equipo', logo: '/logos/slack.svg', url: 'https://slack.com/' },
        { name: 'Amplitude', category: 'Analítica de producto', logo: '/logos/amplitude.svg', url: 'https://amplitude.com/' },
        { name: 'Looker', category: 'BI y visualización de datos', logo: 'https://cdn.simpleicons.org/looker', url: 'https://cloud.google.com/looker' },
        { name: 'CleverTap', category: 'Lifecycle y engagement', logo: '/logos/clevertap.png', url: 'https://clevertap.com/' },
        { name: 'Keycloak', category: 'Identidad y autenticación', logo: 'https://cdn.simpleicons.org/keycloak', url: 'https://www.keycloak.org/' },
        { name: 'Firebase', category: 'Infraestructura de apps', logo: '/logos/firebase.svg', url: 'https://firebase.google.com/' },
        { name: 'Postman', category: 'Testing de APIs', logo: 'https://cdn.simpleicons.org/postman', url: 'https://www.postman.com/' },
        { name: 'GitHub', category: 'Colaboración de código', logo: 'https://cdn.simpleicons.org/github', url: 'https://github.com/' },
        { name: 'Vercel', category: 'Deploy de frontend', logo: 'https://cdn.simpleicons.org/vercel', url: 'https://vercel.com/' },
      ],
    },
    education: {
      title: 'EDUCACIÓN Y CERTIFICACIONES',
      subtitle: 'Formación formal en producto, desarrollo, diseño, agile y growth.',
      items: [
        { year: '2025', title: 'Anthropic Academy', org: 'Anthropic', tags: ['Fluidez en IA', 'Claude', 'Claude Code', 'MCP'], url: 'https://www.anthropic.com/learn' },
        { year: '2023', title: 'Growth Product Management', org: 'Reforge®', tags: ['Producto', 'Growth', 'Estrategia'] },
        { year: '2019', title: 'Certified Scrum Product Owner (CSPO®)', org: 'Scrum Alliance. International Certified', tags: ['Agile', 'Product Ownership'] },
        { year: '2016', title: 'Scrum Master Certified (SMC ®)', org: 'Scrum Alliance. International Certified', tags: ['Agile', 'Delivery'] },
        { year: '2015', title: 'Angular', org: 'Udemy. International Certified', tags: ['Frontend', 'Frameworks'] },
        { year: '2012', title: 'Desarrollador Frontend', org: 'Coderhouse, Buenos Aires. Argentina', tags: ['Frontend', 'Web'] },
        { year: '2012', title: 'Desarrollo Web', org: 'Code Academy. International Certified', tags: ['HTML', 'CSS', 'JavaScript'] },
        { year: '2009', title: 'Licenciatura en Diseño Gráfico', org: 'Universidad de Buenos Aires. Argentina', tags: ['Diseño', 'UX', 'Visual Systems'] },
      ],
    },
  },
};

const portuguese: Translation = {
  meta: {
    title: 'Ignacio Pérez Roca | Senior Product Manager',
    description:
      'Senior Product Manager especializado em fintech, crypto, digital identity, KYC, onboarding, authentication e product-led growth na LatAm.',
    ogTitle: 'Ignacio Pérez Roca | Senior Product Manager',
    ogDescription:
      'Senior Product Manager especializado em fintech, crypto, digital identity, KYC, onboarding, authentication e product-led growth na LatAm.',
  },
  header: {
    headline: 'Senior Product Manager | Identity, KYC, Authentication & Growth',
    phoneAria: 'Ligar para +54 911 5807 7847',
    linkedinAria: 'Abrir o perfil do LinkedIn de Ignacio Perez Roca',
    mediumAria: 'Abrir medium.com/@ignacio-perezroca',
    linkedinLabel: 'LinkedIn',
    mediumLabel: 'medium.com/@ignacio-perezroca',
    languageSwitchAria: 'Seletor de idioma',
  },
  sections: {
    personalStatement: {
      title: 'PERFIL PROFISSIONAL',
      subtitle: 'Liderança product-first para onboarding, identity e growth escalável.',
      paragraphs: [
        'Sou **Senior Product Manager** com **16+ anos de experiência** construindo **onboarding journeys human-first e escaláveis**.',
        'Ao longo da minha trajetória, fui acumulando ferramentas, táticas e experiência em diferentes funções e indústrias. Me especializo em **digital identity, KYC, authentication e product-led growth**. Liderei equipes internacionais de **0 a 18+** na **Argentina, Brasil, México, Paraguai e Colômbia**, com onboarding de **mais de 8 milhões de usuários** em **fintech, crypto e Web3**.',
        'Ter construído produtos do zero em várias funções me deu uma visão completa: combino **empatia e visual thinking** (**User Experience Design**) com **technical experience** (**8 anos como developer**). Essa perspectiva me permite traduzir **métricas em product experiences** que impulsionam **acquisition, retention e long-term impact**.',
        'Quando construo, me apoio em **data** para enxergar problemas reais e oportunidades, e crio produtos que **simplificam a vida das pessoas**. Sou **Certified Scrum Product Owner (CSPO®)**, **Certified Scrum Trainer (CST®)** e tenho outras certificações de universidades de referência.',
        'Minha missão é construir confiança, fortalecer times e entregar produtos que as pessoas amem.',
      ],
      achievementsTitle: 'Principais conquistas',
      achievements: [
        '**Aumentei a conversão de onboarding da Bitso em +262%** para mais de **8M de usuários**.',
        '**Escalei a Lemon de 60k para 2M de usuários em 6 meses** (**+3200% growth**).',
        '**Construí e escalei o UNID (Unified Identity)**, unificando **~3M de usuários em 30 empresas** dentro do ecossistema Grupo Vázquez.',
        'Liderei lançamentos de onboarding em vários países da LatAm, conquistando **mais de 1M de usuários no primeiro ano**.',
        '**Liderei a expansão de produto da Bitso**, saindo de **4 milhões para quase 7 milhões de usuários** (**+75% annual growth**).',
        'Desenvolvi uma nova home screen para uma exchange com **mais de 8M de usuários**, gerando **35% de aumento em product activation**.',
        '**Liderei times cross-functional de 0 a 18+** na **Argentina, Brasil, México, Paraguai, Colômbia e Estados Unidos**.',
      ],
    },
    experience: {
      title: 'EXPERIÊNCIA',
      subtitle: 'Uma carreira focada em fintech, crypto, onboarding e identity.',
      items: [
        { role: 'Senior Product Manager - Onboarding', company: 'itti', period: 'Set 2024 – Atual · 1 ano 7 meses' },
        { role: 'Senior Product Manager - Onboarding', company: '@Bitso', period: 'Out 2022 – Set 2024 · 2 anos' },
        { role: 'Senior Product Manager - Growth', company: '@Lemoncash', period: 'Outubro 2021 - Outubro 2022' },
        { role: 'Product Manager - Onboarding', company: 'Personal Pay', period: 'Julho 2020 - Outubro 2021' },
        { role: 'Product Manager - Onboarding', company: 'IUNIGO', period: 'Julho 2019 - Julho 2020' },
        { role: 'Product Manager - Onboarding', company: 'Ripio', period: 'Setembro 2017 - Julho 2019' },
        { role: 'Designer & Frontend Developer', company: 'Personal - Telecom', period: 'Março 2015 - Setembro 2017' },
        { role: 'Designer & Frontend Developer', company: 'Thet Studio', period: 'Fevereiro 2011 - Março 2015' },
      ],
    },
    specialty: {
      title: 'ESPECIALIDADE',
      subtitle: 'Os domínios onde gero mais impacto como Product Manager.',
      items: ['Produto', 'Desenvolvimento', 'Product Design'],
    },
    languages: {
      title: 'IDIOMAS',
      subtitle: 'Comunicação multilíngue para equipes internacionais.',
      items: [
        { code: 'ES', name: 'Español', level: 'Nativo', value: 100, accent: 'blue' },
        { code: 'EN', name: 'Inglês', level: 'Avançado', value: 90, accent: 'blue' },
        { code: 'PT', name: 'Português', level: 'Desenvolvimento', value: 45, accent: 'green' },
      ],
    },
    tools: {
      title: 'FERRAMENTAS E COMPETÊNCIAS',
      subtitle: 'Trabalho de produto com IA, design, delivery e analytics.',
      items: [
        { name: 'Figma', category: 'Design e prototipação', logo: 'https://cdn.simpleicons.org/figma', url: 'https://www.figma.com/' },
        { name: 'Miro', category: 'Descoberta de produto e workshops', logo: 'https://cdn.simpleicons.org/miro', url: 'https://miro.com/' },
        { name: 'ChatGPT', category: 'Copilot de IA e estratégia de produto', logo: '/logos/openai.svg', url: 'https://chatgpt.com/' },
        { name: 'Claude', category: 'Escrita e análise com IA', logo: 'https://cdn.simpleicons.org/anthropic', url: 'https://claude.com/' },
        { name: 'Gemini', category: 'Pesquisa e produtividade com IA', logo: 'https://cdn.simpleicons.org/googlegemini', url: 'https://gemini.google.com/' },
        { name: 'Jira', category: 'Delivery e roadmapping', logo: 'https://cdn.simpleicons.org/jira', url: 'https://www.atlassian.com/software/jira' },
        { name: 'Confluence', category: 'Documentação', logo: 'https://cdn.simpleicons.org/confluence', url: 'https://www.atlassian.com/software/confluence' },
        { name: 'Notion', category: 'Docs de produto e base de conhecimento', logo: 'https://cdn.simpleicons.org/notion', url: 'https://www.notion.so/' },
        { name: 'Slack', category: 'Comunicação do time', logo: '/logos/slack.svg', url: 'https://slack.com/' },
        { name: 'Amplitude', category: 'Analytics de produto', logo: '/logos/amplitude.svg', url: 'https://amplitude.com/' },
        { name: 'Looker', category: 'BI e visualização de dados', logo: 'https://cdn.simpleicons.org/looker', url: 'https://cloud.google.com/looker' },
        { name: 'CleverTap', category: 'Lifecycle e engajamento', logo: '/logos/clevertap.png', url: 'https://clevertap.com/' },
        { name: 'Keycloak', category: 'Identidade e authentication', logo: 'https://cdn.simpleicons.org/keycloak', url: 'https://www.keycloak.org/' },
        { name: 'Firebase', category: 'Infraestrutura de app', logo: '/logos/firebase.svg', url: 'https://firebase.google.com/' },
        { name: 'Postman', category: 'Testing de APIs', logo: 'https://cdn.simpleicons.org/postman', url: 'https://www.postman.com/' },
        { name: 'GitHub', category: 'Colaboração de código', logo: 'https://cdn.simpleicons.org/github', url: 'https://github.com/' },
        { name: 'Vercel', category: 'Deploy de frontend', logo: 'https://cdn.simpleicons.org/vercel', url: 'https://vercel.com/' },
      ],
    },
    education: {
      title: 'EDUCAÇÃO E CERTIFICAÇÕES',
      subtitle: 'Formação formal em produto, development, design, agile e growth.',
      items: [
        { year: '2025', title: 'Anthropic Academy', org: 'Anthropic', tags: ['AI Fluency', 'Claude', 'Claude Code', 'MCP'], url: 'https://www.anthropic.com/learn' },
        { year: '2023', title: 'Growth Product Management', org: 'Reforge®', tags: ['Product', 'Growth', 'Strategy'] },
        { year: '2019', title: 'Certified Scrum Product Owner (CSPO®)', org: 'Scrum Alliance. International Certified', tags: ['Agile', 'Product Ownership'] },
        { year: '2016', title: 'Scrum Master Certified (SMC ®)', org: 'Scrum Alliance. International Certified', tags: ['Agile', 'Delivery'] },
        { year: '2015', title: 'Angular', org: 'Udemy. International Certified', tags: ['Frontend', 'Frameworks'] },
        { year: '2012', title: 'Frontend Developer', org: 'Coderhouse, Buenos Aires. Argentina', tags: ['Frontend', 'Web'] },
        { year: '2012', title: 'Web development', org: 'Code Academy. International Certified', tags: ['HTML', 'CSS', 'JavaScript'] },
        { year: '2009', title: 'Bachelor in Graphic Design', org: 'Universidad de Buenos Aires. Argentina', tags: ['Design', 'UX', 'Visual Systems'] },
      ],
    },
  },
};

export const translations: Record<Locale, Translation> = {
  en: english,
  es: spanish,
  pt: portuguese,
};

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname.startsWith('/es')) return 'es';
  if (pathname.startsWith('/pt')) return 'pt';
  return 'en';
}

export function getPathForLocale(locale: Locale): string {
  if (locale === 'es') return '/es';
  if (locale === 'pt') return '/pt';
  return '/';
}
