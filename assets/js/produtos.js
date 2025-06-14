/**
 * Supply.Ind - Produtos Magnéticos
 * -----------------------------------------------------------------------------
 * Estrutura de dados e funções para renderização dinâmica das categorias,
 * produtos e detalhes na página de produtos da Supply.Ind.
 * -----------------------------------------------------------------------------
 * Organização:
 * 1. Estrutura de dados das categorias e produtos
 * 2. Funções de renderização (sidebar e produto)
 * 3. Controle de abas (tabs) e seleção de produtos
 * 4. Inicialização e controle do menu hamburguer (mobile)
 * -----------------------------------------------------------------------------
 */

/* ============================================================================
   1. ESTRUTURA DE DADOS DAS CATEGORIAS E PRODUTOS
   ========================================================================== */
/**
 * Objeto central que organiza todas as categorias e produtos do catálogo.
 * Cada categoria contém um array de produtos, e cada produto possui:
 *  - nome, imagens, descrição, benefícios, aplicações, diferenciais, especificações, contato e link.
 *  - Alguns produtos possuem campos opcionais como funcionamento ou detalhes.
 */

const categorias = {
  "linha-magnetica": {
    titulo: "Linha Magnética",
    produtos: [
      {
        nome: "Duto Magnético com Grade Tipo Gaveta",
        imgs: [
          "catalogo/DutoMagGradeTipoGaveta.png",
          "catalogo/DutoMagGradeTipoGaveta2.png",
          "catalogo/DutoMagGradeTipoGaveta3.png",
          "catalogo/DutoMagGradeTipoGaveta4.png",
          "catalogo/DutoMagGradeTipoGaveta5.png",
        ],
        descricao: "O Duto Magnético com Grade Tipo Gaveta é uma solução de alta performance para remoção de contaminantes ferrosos em processos industriais. Utiliza ímãs de terras raras para garantir pureza, segurança e eficiência na separação magnética.",
        beneficios: [
          "Alta eficiência na remoção de contaminantes metálicos.",
          "Protege e aumenta a vida útil de equipamentos industriais.",
          "Reduz custos com manutenção e paradas de produção.",
          "Melhora a qualidade do produto final.",
          "Atende às normas de segurança e qualidade."
        ],
        aplicacoes: [
          "Indústria alimentícia: farinhas, sal, temperos e ingredientes em geral.",
          "Plásticos: produção e reciclagem.",
          "Cerâmica: purificação de argilas e materiais cerâmicos.",
          "Mineração: remoção de ferro em minérios e concentrados.",
          "Indústria química e farmacêutica: proteção de produtos sensíveis."
        ],
        diferenciais: [
          "Engenharia personalizada conforme a necessidade do cliente.",
          "Ímãs de alta performance (Neodímio, Samário Cobalto, Ferrite).",
          "Estrutura robusta em aço inox 304/316 ou aço carbono.",
          "Fácil instalação e manutenção.",
          "Construção ideal para ambientes industriais exigentes."
        ],
        especificacoes: {
          estrutura: "Aço inox 304 / 316 ou Aço carbono",
          flange: "Entrada e saída com flange",
          regimeTrabalho: "Contínuo",
          tipoImas: "Neodímio, Samário Cobalto ou Ferrite",
          forcaMagnetica: "2.500 a 13.500 Gauss",
          temperaturaTrabalho: "Até 80°C (Neodímio) / até 150°C (Ferrite)",
          acabamento: "Jateado, Polido ou Escovado",
          solda: "Solda TIG",
          cicloLimpeza: "De acordo com a aplicação",
          dimensoes: "Sob medida",
          capacidade: "Sob medida"
        },
        contato: {
          email: "vendas@supply.ind.br",
          telefones: [
            "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
          ]
        },
        link: "#"
      },
      {
        nome: "Grades Magnéticas de Limpeza Manual",
        imgs: [
          "catalogo/GradeMagLimpezaManual.avif",
          "catalogo/GradeMagLimpezaManual2.avif.png",
          "catalogo/GradeMagLimpezaManual3.avif.png",
          "catalogo/GradeMagLimpezaManual4.avif.png",
        ],
        descricao: "A Grade Magnética de Limpeza Manual Supply.Ind garante alta eficiência na captura de partículas ferrosas, mesmo as submilimétricas, utilizando ímãs permanentes de alta intensidade. Ideal para aplicações que exigem pureza e segurança no processo.",
        beneficios: [
          "Alta eficiência na remoção de contaminantes metálicos.",
          "Protege e aumenta a vida útil de equipamentos industriais.",
          "Reduz custos com manutenção e paradas de produção.",
          "Melhora a qualidade do produto final.",
          "Atende às normas de segurança e qualidade."
        ],
        aplicacoes: [
          "Indústria alimentícia: grãos, farinhas, açúcares, temperos e ingredientes.",
          "Rações: remoção de partículas metálicas em rações para animais.",
          "Plásticos e reciclagem: limpeza de grânulos antes da extrusão.",
          "Mineração: separação de partículas ferrosas em minérios.",
          "Indústria metalúrgica: proteção de produtos em pó.",
          "Química e farmacêutica: purificação de insumos sensíveis."
        ],
        diferenciais: [
          "Projeto personalizado conforme a necessidade do cliente.",
          "Ímãs sob medida: Neodímio, Ferrite ou Samário-Cobalto.",
          "Robustez e longa vida útil, mesmo em ambientes agressivos.",
          "Instalação simples e operação intuitiva.",
          "Conformidade com normas ISO 9001 e FSSC 22000."
        ],
        funcionamento: [
          "O material passa pelas barras magnéticas.",
          "As partículas ferrosas são atraídas e retidas.",
          "A limpeza é feita manualmente, com inspeção visual."
        ],
        contato: {
          email: "vendas@supply.ind.br",
          telefones: [
           "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
          ]
        },
        link: "#"
      },
      {
        nome: "Grade Magnética Automática",
        imgs: [
          "catalogo/GRADEMAGNÉTICAAUTOMÁTICA5.avif",
          "catalogo/GRADEMAGNÉTICAAUTOMÁTICA.avif",
          "catalogo/GRADEMAGNÉTICAAUTOMÁTICA2.avif",
          "catalogo/GRADEMAGNÉTICAAUTOMÁTICA3.avif",
          "catalogo/GRADEMAGNÉTICAAUTOMÁTICA4.avif",
          

        ],
        descricao: "A Grade Magnética Automática é uma solução inovadora para a remoção de contaminantes metálicos em processos industriais. Com acionamento automático, garante eficiência e praticidade na separação magnética.",
        beneficios: [
          "Alta eficiência na remoção de contaminantes metálicos.",
          "Protege e aumenta a vida útil de equipamentos industriais.",
          "Reduz custos com manutenção e paradas de produção.",
          "Melhora a qualidade do produto final.",
          "Atende às normas de segurança e qualidade."
        ],
        aplicacoes: [
          "Indústria alimentícia: farinhas, sal, temperos e ingredientes em geral.",
          "Plásticos: produção e reciclagem.",
          "Cerâmica: purificação de argilas e materiais cerâmicos.",
          "Mineração: remoção de ferro em minérios e concentrados.",
          "Indústria química e farmacêutica: proteção de produtos sensíveis."
        ],
        diferenciais: [
          "Engenharia personalizada conforme a necessidade do cliente.",
          "Ímãs de alta performance (Neodímio, Samário Cobalto, Ferrite).",
          "Estrutura robusta em aço inox 304/316 ou aço carbono.",
          "Fácil instalação e manutenção.",
          "Construção ideal para ambientes industriais exigentes."
        ],
        especificacoes: {
          estrutura: "Aço inox 304 / 316 ou Aço carbono",
          flange: "Entrada e saída com flange",
          regimeTrabalho: "Contínuo",
          tipoImas: "Neodímio, Samário Cobalto ou Ferrite",
          forcaMagnetica: "2.500 a 13.500 Gauss",
          temperaturaTrabalho: "Até 80°C (Neodímio) / até 150°C (Ferrite)",
          acabamento: "Jateado, Polido ou Escovado",
          solda: "Solda TIG",
          cicloLimpeza: "De acordo com a aplicação",
          dimensoes: "Sob medida",
          capacidade: "Sob medida"
        },
        contato: {
          email: "vendas@supply.ind.br",
          telefones: [
            "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
          ]
        },
        link: "#"
      },
      
        {
  nome: "Grade Magnética Semi-Automática",
  imgs: [
    "catalogo/GRADESEMIAUTOMATICA.1.png",
    "catalogo/GRADESEMIAUTOMATICA2.png",
    "catalogo/GRADESEMIAUTOMATICA3.png",
  ],
  descricao: "A Grade Magnética de Limpeza Semi-Automática Supply.Ind é a solução ideal para indústrias que exigem alta pureza em seus processos. Utiliza ímãs permanentes de terras raras de alta intensidade e sistema de limpeza semi-automático com raspadores, garantindo remoção eficiente de partículas ferrosas mesmo as menores, sem comprometer a qualidade do produto.",

  funcionamento: [ "O material processado passa por barras magnéticas que capturam partículas ferrosas com alta intensidade magnética. A limpeza semi-automática é realizada por raspadores, que removem as partículas capturadas para um depósito coletor, facilitando a manutenção e aumentando a eficiência."

  ],

  beneficios: [
    "Alta eficiência na remoção de contaminantes metálicos, mesmo em altas concentrações.",
    "Limpeza rápida e precisa com sistema semi-automático.",
    "Flexibilidade para ajustar intensidade magnética e frequência de limpeza.",
    "Durabilidade e baixa necessidade de manutenção.",
    "Conformidade com normas ISO 9001 e FSSC 22000."
  ],
  aplicacoes: [
    "Indústria alimentícia: farinhas, açúcares, sal, temperos e ingredientes em geral.",
    "Plásticos: reciclagem e produção de plásticos.",
    "Cerâmica: purificação de argilas e materiais cerâmicos.",
    "Mineração: remoção de ferro em minérios e concentrados.",
    "Indústria química e farmacêutica: proteção de produtos sensíveis."
  ],
  diferenciais: [
    "Engenharia personalizada para atender às necessidades específicas.",
    "Ímãs de terras raras (Neodímio, Samário Cobalto) de alta performance.",
    "Construção robusta com aço inox 304/316 ou aço carbono.",
    "Fácil operação e manutenção do sistema semi-automático.",
    "Projetada para ambientes industriais severos."
  ],
  especificacoes: {
    estrutura: "Aço inox 304 / 316 ou Aço carbono",
    flange: "Entrada e saída com flange",
    regimeTrabalho: "Contínuo",
    tipoImas: "Ferrite, Neodímio, Samário Cobalto",
    forcaMagnetica: "2.500 a 13.500 Gauss",
    temperaturaTrabalho: "Até 150 °C",
    acabamento: "Jateado, Polido ou Escovado",
    solda: "Solda TIG",
    cicloLimpeza: "Ajustável conforme aplicação",
    dimensoes: "Sob medida",
    capacidade: "Sob medida"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
},
      {
        nome: "Extrator Magnético de Limpeza Automática",
         imgs: [
    // Você pode adicionar imagens aqui, exemplo:
    "catalogo/ExtratorMagneticoAutomático6.png",
    "catalogo/ExtratorMagneticoAutomático2.png",
    "catalogo/ExtratorMagneticoAutomático3.png",
    "catalogo/ExtratorMagneticoAutomático4.png",
    "catalogo/ExtratorMagneticoAutomático5.png",
  ],
         descricao: "O Extrator Magnético Automático Supply.Ind realiza a separação contínua de contaminantes ferrosos em materiais secos, granulados ou em pó, sem necessidade de limpeza manual, garantindo alta eficiência e produtividade.",
        
         beneficios: [
    "Separação contínua e eficiente sem intervenção manual.",
    "Redução de custos com mão de obra e manutenção.",
    "Proteção prolongada para equipamentos industriais.",
    "Projetos personalizados para diversas aplicações.",
    "Construção robusta e durável, com fabricação nacional."
  ],
       aplicacoes: [
    "Mineração: proteção de britadores, moinhos e equipamentos.",
    "Reciclagem: separação contínua em sucata, plástico, madeira e outros.",
    "Indústria de cimento: proteção de moinhos contra partículas metálicas.",
    "Indústria siderúrgica: remoção de impurezas ferrosas.",
    "Indústria alimentícia e de ração animal em linhas de alta vazão."
  ],
  diferencais: [
    "Fabricado no Brasil com controle rigoroso de qualidade.",
    "Suporte técnico especializado e ágil.",
    "Disponibilidade facilitada de peças de reposição.",
    "Menor prazo de entrega e preços competitivos.",
    "Contribui para a economia nacional."
  ],
  especificacoes: {
    Descricao:"Quais os tipos de ímãs utilizados nos Extratores Magnéticos Automáticos?",
    tipoImas: "Ferrite, Neodímio (Terras Raras), Samário Cobalto",
    regimeTrabalho: "Contínuo",
    aplicacao: "Materiais secos, granulados ou em pó",
    limpeza: "Automática, por esteira ou correia transportadora",
    personalizacao: "Projetos sob medida conforme necessidade",
    durabilidade: "Construção robusta para ambientes industriais severos"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
     "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
},
      {
  nome: "Extrator Magnético de Limpeza Manual",
  imgs: [
    "catalogo/ExtratorMagLimpManual1.png",
    "catalogo/ExtratorMagLimpManual2.png",
    "catalogo/ExtratorMagLimpManual3.png",
    "catalogo/ExtratorMagLimpManual4.png",
    "catalogo/ExtratorMagLimpManual5.png",
  ],
  descricao: "O Extrator Magnético de Limpeza Manual Supply.Ind remove contaminantes ferrosos de materiais secos, granulados ou em pó, com operação simples e eficiente. A limpeza dos ímãs é realizada manualmente.",
  beneficios: [
    "Alta eficiência na remoção de partículas ferrosas.",
    "Fácil instalação e manutenção, sem necessidade de ferramentas especiais.",
    "Baixo custo operacional, sem consumo de energia.",
    "Melhora a qualidade do produto final, garantindo pureza.",
    "Protege equipamentos e reduz custos com manutenção e paradas."
  ],
  aplicacoes: [
    "Esteiras transportadoras: em moinhos, peneiras, empacotadores.",
    "Calhas de escoamento: interceptam o fluxo para reter impurezas.",
    "Alimentadores vibratórios: garantem pureza do material.",
    "Saídas de silos e moegas: protegem equipamentos subsequentes.",
    "Indústrias de reciclagem, plásticos, madeira e metais.",
    "Alimentos, grãos, rações e fertilizantes: garante segurança e qualidade."
  ],
  diferencais: [
    "Alta eficiência magnética para partículas pequenas.",
    "Não requer energia elétrica para funcionamento.",
    "Projetos personalizados conforme a aplicação.",
    "Baixo custo de aquisição e operação.",
    "Construção robusta e nacional, com suporte técnico especializado."
  ],
  especificacoes: {
    tipoImas: "Ímãs permanentes de alta intensidade",
    regimeTrabalho: "Manual",
    aplicacao: "Materiais secos, granulados ou em pó",
    limpeza: "Manual, por remoção direta dos contaminantes",
    personalizacao: "Projetos sob medida conforme a aplicação",
    durabilidade: "Alta, com manutenção simples"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
     "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}
,
     {
  nome: "Placa Magnética com Abas",
  imgs: [
    "catalogo/PlacaComAba.avif",
  ],
  descricao: "A Placa Magnética com Abas Supply.Ind é projetada para remover contaminantes ferrosos de materiais em fluxo contínuo. Com estrutura robusta e ímãs permanentes de alta intensidade, garante eficiência na separação e pode ser personalizada conforme a aplicação.",
  
  beneficios: [
    "Remoção eficiente de partículas metálicas, até mesmo finas.",
    "Disponível com ímãs de Ferrite, Neodímio ou Samário Cobalto.",
    "Alta resistência a ambientes industriais severos.",
    "Personalização completa conforme tipo de material e processo.",
    "Redução de falhas em equipamentos e melhoria da qualidade final."
  ],
  aplicacoes: [
    "Calhas de escoamento: retêm partículas metálicas no fluxo.",
    "Dutos de transporte: removem contaminantes antes de outras etapas.",
    "Alimentadores vibratórios: garantem pureza do material enviado.",
    "Entradas de moinhos: protegem contra danos e garantem qualidade.",
    "Setores industriais que lidam com grãos, pós, plásticos ou resíduos."
  ],
  diferencais: [
    "Engenharia personalizada para cada aplicação.",
    "Construção robusta em aço inoxidável com alta durabilidade.",
    "Disposição estratégica de ímãs para máxima força magnética.",
    "Opções com ímãs para diferentes condições (temperatura, corrosão).",
    "Suporte técnico especializado do projeto à instalação."
  ],
  especificacoes: {
    tipoImas: "Ferrite, Neodímio (Terras Raras) ou Samário Cobalto",
    aplicacao: "Materiais em fluxo contínuo sobre esteiras, calhas, dutos ou alimentadores",
    instalacao: "Fixação por abas laterais para máxima estabilidade",
    personalizacao: "Dimensões, tipo de ímã e design sob medida",
    durabilidade: "Alta resistência mecânica e à corrosão",
    limpeza: "Manual, por remoção direta das partículas retidas"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}
,
      {
  nome: "Tubo Magnético",
  imgs: [
    
    "catalogo/TuboMagnetico1.avif",
    "catalogo/TuboMagnetico2.avif.png",
    "catalogo/TuboMagnetico3.avif.png",
  ],
  descricao: "O Tubo Magnético da Supply.Ind é um dispositivo de separação magnética que remove contaminantes ferrosos de materiais diversos. Construído com aço inoxidável e ímãs permanentes de alta intensidade, é ideal para aplicações industriais que exigem eficiência, durabilidade e segurança no processo.",
  beneficios: [
    "Alta eficiência na separação de partículas ferrosas, inclusive finas.",
    "Construção robusta em aço inoxidável com longa vida útil.",
    "Projetos personalizados sob medida para cada processo.",
    "Curto prazo de entrega e suporte técnico ágil.",
    "Fabricação nacional com padrão de qualidade internacional."
  ],
  aplicacoes: [
    "Calhas de escoamento: intercepta e retém partículas ferrosas no transporte.",
    "Tubulações e dutos: instalado em sistemas pneumáticos ou gravitacionais.",
    "Equipamentos de processamento: protege moinhos, misturadores, peneiras, etc.",
    "Sistemas de descarga de silos e moegas: garante pureza antes da próxima etapa.",
    "Esteiras transportadoras: atua na remoção de partículas metálicas no trajeto."
  ],
  diferencais: [
    "Disponibilidade com ímãs de Ferrite, Neodímio ou Samário Cobalto.",
    "Personalização da força magnética conforme a aplicação.",
    "Alta resistência a temperaturas e ambientes corrosivos.",
    "Facilidade de manutenção com peças de reposição nacionais.",
    "Suporte técnico desde o projeto até a instalação."
  ],
  especificacoes: {
    tipoImas: "Ferrite, Neodímio (Terras Raras) ou Samário Cobalto",
    aplicacao: "Grãos, pós, líquidos, reciclados, plásticos, farmacêuticos, cerâmicos",
    instalacao: "Calhas, dutos, esteiras e equipamentos industriais",
    personalizacao: "Força magnética, diâmetro, comprimento e invólucro sob medida",
    durabilidade: "Construção em aço inox com proteção anticorrosiva",
    limpeza: "Manual, por remoção direta dos contaminantes retidos"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
     "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}
,
      {
  nome: "Tambor Magnético com Caixa",
  imgs: [
   
    "catalogo/TamborMagnetico0.avif",
    "catalogo/TamborMagnetico.avif",
    "catalogo/TamborMagnetico2.avif",
    "catalogo/TamborMagnetico3.avif",
  ],
  descricao: "O Tambor Magnético Ultra Force Supply.Ind é essencial em processos industriais para a separação eficiente de materiais ferrosos. Com ímãs de alta performance, promove máxima eficiência, redução de custos e aumento da produtividade, sendo ideal para diversas aplicações e condições extremas.",
  beneficios: [
    "Máxima eficiência na separação de contaminantes ferrosos.",
    "Proteção de equipamentos industriais e redução de custos de manutenção.",
    "Aumento da produtividade com fluxo contínuo do processo.",
    "Soluções sob medida para cada tipo de aplicação industrial.",
    "Produto nacional com qualidade internacional e suporte técnico ágil."
  ],
  aplicacoes: [
    "Reciclagem de sucata: separação de ferro e aço de materiais não magnéticos.",
    "Mineração: remoção de contaminantes ferrosos de granulometria grossa.",
    "Alimentícia e farmacêutica: separação de partículas metálicas finas.",
    "Plásticos e eletrônicos: proteção de equipamentos e recuperação de materiais.",
    "Ambientes de alta temperatura ou corrosivos, como siderurgia e indústria química."
  ],
  diferencais: [
    "Ímãs de Ferrite: ideal para grandes volumes e partículas grosseiras.",
    "Ímãs de Neodímio: alta intensidade para separação de partículas finas.",
    "Ímãs de Samário Cobalto: excelente desempenho térmico e anticorrosivo.",
    "Projetos personalizados conforme a aplicação específica do cliente.",
    "Fabricação nacional com menor prazo de entrega e manutenção facilitada."
  ],
  especificacoes: {
    tipoImas: "Ferrite, Neodímio (NdFeB), Samário Cobalto (SmCo)",
    aplicacao: "Sucata, minérios, plásticos, alimentos, farmacêuticos, eletrônicos",
    funcionamento: "Tambor rotativo com campo magnético interno fixo",
    limpeza: "Contínua, com separação automática dos contaminantes",
    personalizacao: "Dimensões e intensidade magnética sob medida",
    durabilidade: "Alta resistência térmica e à corrosão"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}
,{
  nome: "Levantador Magnético",
  imgs: [
   
    "catalogo/LevantadorMagnetico1.avif",
    "catalogo/LevantadorMagnetico2.avif"
  ],
  descricao: "Dispositivo utilizado para içar e movimentar objetos ferromagnéticos com segurança e eficiência. Os modelos permanentes não requerem energia elétrica, sendo ideais para ambientes industriais que exigem confiabilidade no manuseio de cargas pesadas.",
  beneficios: [
    "Içamento rápido e seguro de peças metálicas.",
    "Redução do esforço manual e risco de acidentes.",
    "Não requer energia elétrica (modelos permanentes).",
    "Fácil operação com alavanca Liga/Desliga.",
    "Alta durabilidade e baixo custo de manutenção."
  ],
  aplicacoes: [
    "Metalurgia e siderurgia: chapas, bobinas e barras de aço.",
    "Construção civil: estruturas metálicas e vergalhões.",
    "Indústria automotiva: peças em linhas de montagem.",
    "Indústria naval: movimentação de chapas na construção e reparo.",
    "Centros logísticos: carga e descarga de caminhões.",
    "Reciclagem: separação de metais ferrosos."
  ],
  diferencais: [
    "Sistema magnético confiável com ímãs permanentes de alta potência.",
    "Fator de segurança 3:5 para maior confiabilidade nas operações.",
    "Design robusto e compacto, com alça para fácil manuseio.",
    "Diversos tamanhos e capacidades disponíveis.",
    "Totalmente nacional, com suporte técnico direto da Supply.Ind."
  ],
  especificacoes: {
    tipo: "Magnético permanente",
    operacao: "Manual com alavanca Liga/Desliga",
    capacidade: "Variável conforme o modelo (ver tabela técnica)",
    seguranca: "Fator 3:5 para operação segura",
    observacao: "Capacidade pode variar de acordo com o formato e superfície da peça"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
     "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}
,{
  nome: "Filtro Magnético",
  imgs: [
      "catalogo/FiltroMagnetico1.png",
      "catalogo/FiltroMagnetico2.png",
      "catalogo/FiltroMagnetico3.png",
      "catalogo/FiltroMagnetico4.png",
      "catalogo/FiltroMagnetico5.png",
    ],
    descricao: "Os Filtros Magnéticos Supply.Ind são projetados para realizar a separação magnética de partículas ferrosas em líquidos e fluídos que percorrem tubulações industriais. Utilizam ímãs de neodímio de alto desempenho, garantindo a pureza do produto e a proteção dos equipamentos.",
    funcionamento: [
      "O líquido contaminado entra pela tubulação.",
      "Passa por barras magnéticas de neodímio de 7.500 a 10.000 Gauss.",
      "As partículas ferrosas são retidas.",
      "O líquido purificado segue o fluxo da linha."
    ],
    beneficios: [
      "Alta eficiência na retenção de contaminantes ferrosos.",
      "Redução de paradas para manutenção.",
      "Proteção de bombas e equipamentos sensíveis.",
      "Melhoria na qualidade do produto final.",
      "Fácil limpeza e manutenção."
    ],
    aplicacoes: [
      "Indústria alimentícia (chocolates, sucos, refrigerantes).",
      "Indústria química e farmacêutica.",
      "Linhas de aditivos e combustíveis como Arla32.",
      "Separação de micropartículas metálicas em fluidos industriais."
    ],
    diferenciais: [
      "Construção em aço inox 304 ou 316 conforme a necessidade.",
      "Ímãs de neodímio de alta intensidade magnética.",
      "Projetado sob medida para cada cliente.",
      "Opções para líquidos frios ou aquecidos.",
      "Conexões por flange ou clamp."
    ],
    especificacoes: {
      material: "Inox 304 ou 316",
      intensidadeMagnetica: "7.500 a 10.000 Gauss",
      diametroTubulacoes: "1\" a 6\"",
      conexoes: "Clamp ou flange",
      temperatura: "Ambientes com líquidos frios ou quentes"
    },
    contato: {
    email: "vendas@supply.ind.br",
    telefones: [
     "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
    },
    link: "#"
  },



      {
  nome: "Laudo de Equipamento Magnético",
  imgs: [
    
    "catalogo/LaudoMagnetico1.avif"
  ],
  descricao: "Documento técnico que atesta as condições de funcionamento de equipamentos magnéticos, por meio de avaliações realizadas por profissionais especializados. Garante confiabilidade, segurança e conformidade com normas técnicas e regulatórias.",
  beneficios: [
    "Medição precisa da intensidade e distribuição do campo magnético.",
    "Verificação da integridade física e eficiência de separação magnética.",
    "Avaliação da conformidade com normas de segurança e qualidade.",
    "Diagnóstico técnico detalhado com recomendações de manutenção.",
    "Criação de histórico técnico para planejamento de ações preventivas."
  ],
  aplicacoes: [
    "Indústrias alimentícias (conformidade com RDC 14, FSSC 22000, ISO 22000).",
    "Metalúrgicas e empresas que utilizam separadores magnéticos.",
    "Ambientes industriais que demandam inspeção periódica de segurança.",
    "Setores com exigência de rastreabilidade e controle de contaminantes.",
    "Qualificação de equipamentos magnéticos para auditorias e certificações."
  ],
  diferencais: [
    "Laudos emitidos por técnicos especializados em equipamentos magnéticos.",
    "Instrumentos de medição calibrados e certificados.",
    "Avaliação completa: estrutura física, força magnética e normas aplicáveis.",
    "Relatórios com recomendações claras e embasamento técnico.",
    "Fortalecimento da imagem da empresa perante clientes e auditorias."
  ],
  especificacoes: {
    tipo: "Serviço técnico especializado",
    escopo: "Inspeção física, medições magnéticas, conformidade normativa",
    normas_relacionadas: [
      "RDC 14/2014 (ANVISA)",
      "FSSC 22000 e ISO/TS 22002-1",
      "ISO 22000, IFS Food, BRCGS"
    ],
    objetivo: "Garantir segurança, conformidade e desempenho dos equipamentos",
    observacao: "Essencial para indústrias alimentícias e ambientes regulados"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}

    ]
  },
  "fixacao": {
    titulo: "Fixação",
    produtos: [
      {
  nome: "Placa Eletropermanente",
  imgs: [
    "catalogo/PlacaEletropermanente1.png",
    "catalogo/PlacaEletropermanente2.png",
    "catalogo/PlacaEletropermanente3.png",
],
  descricao: "Uma Placa Eletropermanente da Supply.Ind combina o princípio dos ímãs permanentes com a conveniência do controle elétrico. Utiliza um pulso elétrico curto para magnetizar ou desmagnetizar um conjunto de ímãs permanentes de alta performance, mantendo a força de fixação sem consumir energia contínua. Destaque para a engenharia de projeto, qualidade dos materiais e personalização para atender às necessidades específicas de cada cliente.",
  especificacoes: {
    alturaAproximada: "90 mm",
    forcaAtracao: "13Kgf por cm²",
    estrutura: "Aço Carbono",
    tamanhoPolos: "Sob medida",
    sistema: "Magnético",
    tipoImas: "Neodímio e Alnício",
    disposicaoPolos: "Quadripolar",
    acionamento: "Acionamento por alavanca",
    acabamento: "Retificado"
  },
  aplicacoes: [
    "Máquinas de usinagem: fresadoras, retíficas, eletroerosão, centros de usinagem, tornos e outras máquinas-ferramenta.",
    "Prensas e injetoras: fixação de moldes em prensas de estampagem, injeção de plástico, borracha e outros materiais.",
    "Dispositivos de fixação e montagem: criação de dispositivos personalizados para fixação de peças em linhas de montagem e outros processos produtivos."
  ],
  funcionamento: [
    "Ímãs permanentes de alta coercitividade (Neodímio e Alnício) geram campo magnético constante.",
    "Bobinas elétricas aplicam pulso curto para magnetizar ou desmagnetizar os ímãs permanentes.",
    "O campo magnético é direcionado e concentrado na superfície da placa para fixação segura.",
    "Pulso elétrico magnetiza (ativa) ou desmagnetiza (desativa) a placa conforme necessidade."
  ],
  vantagens: [
    "Fixação magnética sem consumo contínuo de energia, aumentando a segurança.",
    "Economia de energia, pois o consumo ocorre apenas durante os pulsos elétricos.",
    "Alta precisão na fixação para operações de usinagem e montagem.",
    "Redução do tempo de setup das máquinas.",
    "Versatilidade para adaptação em diversos tipos de máquinas e aplicações.",
    "Tecnologia avançada, alta performance e confiabilidade.",
    "Suporte técnico ágil e especializado com equipe local.",
    "Disponibilidade facilitada de peças de reposição e serviços de manutenção.",
    "Prazos de entrega mais curtos em comparação a produtos importados."
  ],
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}
,
      {
  nome: "Placa Eletromagnética",
  imgs: [
    "catalogo/PlacaEletromagnetica1.png",
    "catalogo/PlacaEletromagnetica2.png",
    "catalogo/PlacaEletromagnetica3.png"
  ],
  descricao: "Uma Placa Eletromagnética da Supply.Ind é um dispositivo de fixação que utiliza um campo magnético gerado pela passagem de corrente elétrica através de bobinas. Diferentemente das placas magnéticas permanentes, que possuem campo magnético constante, as placas eletromagnéticas oferecem a vantagem de ligar e desligar o magnetismo sob demanda, proporcionando maior controle e versatilidade. Destaque para construção robusta, precisão no dimensionamento das bobinas e capacidade de personalização.",
  aplicacoes: [
    "Usinagem: fixação de peças em máquinas operatrizes como fresadoras, retíficas, tornos e plainas, proporcionando estabilidade e precisão.",
    "Retífica: fixação para retificação plana, cilíndrica e de perfis, garantindo alta precisão dimensional e acabamento.",
    "Automação industrial: integração em sistemas automatizados para pick and place, soldagem e outras operações de fixação rápida e precisa.",
    "Fixação de moldes: fixação temporária em prensas e injetoras, agilizando o setup."
  ],
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}

    ]
  },
  "imas": {
    titulo: "Imãs",
    produtos: [
      {
  nome: "Ímãs de Alnico",
  imgs: [
    "catalogo/ImaAlnico1.avif",
    
  ],
  descricao: "Os ímãs de Alnico são produzidos a partir de uma liga de alumínio, níquel, cobalto e ferro (AlNiCo). Possuem excelentes propriedades magnéticas e físicas, além de alta resistência a temperaturas elevadas e boa estabilidade térmica.",
  detalhes: [
    "Resistência química a ácidos, solventes e boa resistência à oxidação.",
    "Produzidos por fundição (para ímãs maiores e formatos simples) ou sinterização (para ímãs menores e formatos complexos com alta precisão dimensional).",
    "A liga Alnico 2 é isotrópica, sem orientação magnética específica.",
    "As ligas anisotrópicas Alnico 5, 6 e 8 são orientadas por tratamento térmico com resfriamento sob campo magnético, otimizando o fluxo magnético em uma direção específica.",
    "Amplamente usados em aplicações industriais que exigem estabilidade magnética em altas temperaturas e resistência química."
  ],
  especificacoes: {
    composicao: "Liga de Alumínio, Níquel, Cobalto e Ferro (AlNiCo)",
    processosFabricacao: ["Fundição", "Sinterização"],
    tiposLigas: {
      Alnico2: "Isotrópico, não orientado magneticamente",
      Alnico5: "Anisotrópico, orientado para maior fluxo magnético",
      Alnico6: "Anisotrópico, alta performance magnética",
      Alnico8: "Anisotrópico, fluxo magnético otimizado"
    },
    resistenciaTemperatura: "Excelente estabilidade em altas temperaturas",
    resistenciaQuimica: "Alta resistência a ácidos, solventes e oxidação"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
     "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
},
      {
  nome: "Ímãs de Neodímio",
  imgs: [
    "catalogo/ImaNeodimio1.avif",
  ],
  descricao: "Os ímãs de neodímio (NdFeB), também conhecidos como super ímãs, fazem parte do grupo das terras raras e representam a última geração de materiais magnéticos. São os ímãs mais fortes do mercado, com revestimento de 3 camadas (níquel/cobre/níquel) e fabricados pelo processo de sinterização, que utiliza metalurgia do pó.",
  detalhes: [
    "Extremamente fortes, com desempenho de tração superior a outros materiais com o mesmo volume.",
    "Disponíveis em variados formatos, medidas e forças magnéticas nos graus N35, N42, N48, N50 e N52.",
    "Sensíveis a impactos devido à fragilidade do processo de sinterização, exigindo manuseio cuidadoso.",
    "Excelente custo-benefício por energia e desempenho.",
    "Ampla faixa de temperaturas de trabalho, amplamente usados no setor industrial."
  ],
  especificacoes: {
    revestimento: "Níquel / Cobre / Níquel (3 camadas)",
    processoFabricacao: "Sinterização (metalurgia do pó)",
    grausMagneticos: ["N35", "N42", "N48", "N50", "N52"],
    fragilidade: "Frágeis e sensíveis a impactos",
    aplicacoes: "Diversos setores industriais que demandam alta performance magnética"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}
,
      {
  nome: "Ímãs de Ferrite",
  imgs: [
    "catalogo/ImaFerrite1.avif",
  ],
  descricao: "Os ímãs de ferrite, também conhecidos como ímãs cerâmicos, são ímãs permanentes econômicos e amplamente utilizados. Apesar da energia magnética menor comparada a outros ímãs, possuem excelente resistência à corrosão e uma ampla faixa de temperatura, possibilitando muitas aplicações industriais.",
  detalhes: [
    "Produzidos a partir de pós de óxido de ferro e carbonato de estrôncio, que são misturados, moídos e prensados sob campo magnético para orientação (no caso dos ímãs anisotrópicos).",
    "São ímãs relativamente duros e quebradiços, exigindo manuseio cuidadoso para evitar lascamentos e quebras.",
    "Não enferrujam, não necessitam de camada protetora adicional e apresentam alta resistência à corrosão.",
    "Podem operar em temperaturas de até 250°C sem perda significativa do campo magnético."
  ],
  especificacoes: {
    composicao: "Óxido de Ferro e Carbonato de Estrôncio",
    processoFabricacao: "Mistura, moagem, prensagem sob campo magnético",
    caracteristicasFisicas: "Ímãs cerâmicos, duros e quebradiços",
    resistenciaCorrosao: "Alta, não enferrujam",
    temperaturaTrabalho: "Até 250°C",
    energiaMagnetica: "Menor que ímãs de neodímio e Alnico, mas adequada para muitas aplicações"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}
,
     {
  nome: "Ímãs Nd Bonded",
  imgs: [
    "catalogo/ImaNdBonded.avif",
    
  ],
  descricao: "Os ímãs Nd Bonded são formados por partículas de NdFeB ligadas a uma matriz de termoplásticos, ideais para aplicações que exigem formas complexas e magnetização multipolar. São isotrópicos, podendo ser magnetizados em qualquer direção, o que amplia sua versatilidade industrial.",
  detalhes: [
    "Disponíveis em dois processos de fabricação: compressão e injeção, dependendo da complexidade da geometria da peça.",
    "Processo por compressão oferece maior densidade magnética e utiliza base de epóxi, ideal para geometrias simples e resistência a solventes industriais.",
    "Processo por injeção permite a criação de peças complexas com base em nylon, poliamida ou PPS, possibilitando integração de eixos e formatos detalhados como engrenagens ou segmentos de anel.",
    "Boa resistência à corrosão, ao lascamento e possibilidade de revestimentos adicionais como epóxi e parylene.",
    "Suportam magnetização multipolar e localizada, ideal para sensores e motores de alta precisão."
  ],
  especificacoes: {
    composicao: "Partículas de NdFeB com matriz termoplástica (epóxi, nylon, poliamida ou PPS)",
    processosFabricacao: [
      "Compressão (maior energia magnética, geometria simples)",
      "Injeção (formas complexas, integração de componentes)"
    ],
    tipoMagnetizacao: "Isotrópico, com magnetização multipolar ou localizada",
    resistenciaCorrosao: "Boa, com possibilidade de revestimento em epóxi ou parylene",
    resistenciaMecanica: "Boa resistência ao lascamento e impacto",
    aplicacoes: "Sensores, motores, atuadores, engrenagens magnéticas e peças com geometrias personalizadas"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}

    ]
  },
  "acessorios": {
    titulo: "Acessórios",
    produtos: [
     {
  nome: "Vassoura Magnética",
  imgs: [
    "catalogo/VassouraMagnetica1.avif"
  ],
  descricao: "A Vassoura Magnética Supply.Ind é uma solução prática e eficiente para a limpeza de resíduos ferrosos. Ideal para ambientes industriais, proporciona agilidade, segurança e economia ao processo de captação de materiais metálicos como pregos, parafusos, cavacos e limalhas.",
  detalhes: [
    "Circuito magnético com ímãs de ferrite, oferecendo grande poder de atração até 100 mm de distância.",
    "Temperatura de trabalho de até 200°C, ideal para ambientes industriais exigentes.",
    "Alta produtividade: limpa áreas amplas rapidamente, reduzindo o tempo de trabalho manual.",
    "Segurança: evita contato direto com resíduos ferrosos e reduz risco de acidentes.",
    "Protege pneus de empilhadeiras, veículos e carrinhos contra furos em áreas industriais.",
    "Aplicável em setores como usinagem, fundição, estamparia, corte de chapas, centros logísticos, pátios e corredores industriais."
  ],
  especificacoes: {
    tipoImas: "Ferrite",
    distanciaCaptacao: "Até 100 mm",
    temperaturaTrabalho: "Até 200°C",
    estrutura: "Construção robusta com alavanca ou gatilho para liberação dos resíduos",
    aplicacoes: "Indústrias de usinagem, fundição, estamparia, corte de chapas, embalagens, pátios e áreas externas com circulação de veículos"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}
,{
  nome: "Pega Chapa Magnético Manual",
  imgs: [
    "catalogo/PegaChapaManual1.avif",
  ],
  descricao: "O Pega Chapa Magnético Manual Supply.Ind é ideal para movimentar peças e chapas metálicas de maneira rápida, segura e sem esforço. Com design ergonômico e força magnética potente, é uma solução prática para operações de manuseio de materiais ferrosos leves.",
  detalhes: [
    "Força magnética aproximada de 150 kg, adequada para chapas leves e médias.",
    "Leve e portátil: pesa cerca de 2 kg, facilitando o transporte e manuseio.",
    "Acionamento simples e seguro por alça pivotante, garantindo firmeza e praticidade.",
    "Indicado para chapas com rebarbas, quentes ou com superfícies irregulares.",
    "Reduz o risco de acidentes e o contato direto com peças cortantes ou aquecidas.",
    "Ideal para ambientes industriais, oficinas metalúrgicas e operações logísticas com chapas ferrosas."
  ],
  especificacoes: {
    tipoImas: "Ímãs permanentes de alta potência",
    capacidade: "Aproximadamente 150 kg de força de atração",
    pesoEquipamento: "Aprox. 2 kg",
    modoAcionamento: "Manual com alça pivotante",
    aplicacoes: "Movimentação de chapas, peças metálicas planas e materiais ferrosos em curtas distâncias"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}
,
     {
  nome: "Pegador Magnético",
  imgs: [
    "catalogo/PegadorMagnetico1.avif",
  ],
  descricao: "O Pegador Magnético Supply.Ind é uma ferramenta prática, segura e eficiente para coleta e separação de pequenos componentes ferrosos em ambientes industriais, oficinas e linhas de montagem.",
  detalhes: [
    "Coleta rápida e segura de pregos, parafusos, porcas, grampos, arruelas, cavacos e limalhas.",
    "Ideal para uso em bancadas, áreas de montagem e equipamentos de usinagem.",
    "Equipado com circuito magnético eficiente para alta capacidade de captação.",
    "Sistema de liberação fácil por manopla que interrompe o campo magnético.",
    "Aumenta a produtividade e reduz o risco de acidentes com pequenos objetos metálicos.",
    "Corpo leve, resistente e ergonômico, fácil de operar com uma só mão."
  ],
  especificacoes: {
    tipoImas: "Ímãs permanentes de alta eficiência",
    materialCorpo: "Estrutura metálica resistente com cabo ergonômico",
    liberacao: "Mecanismo manual com haste e manopla",
    aplicacoes: "Coleta de componentes ferrosos em áreas industriais, oficinas, usinagem e montagem",
    operacao: "Manual, com acionamento simples para soltar os materiais"
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}
,
      {
  nome: "Embuchados Magnéticos",
  imgs: [
    "catalogo/EmbuchadosMagnetico1.avif",
  ],
  descricao: "Os Embuchados Magnéticos Supply.Ind são dispositivos de alta força magnética utilizados para sustentação e fixação de peças ferrosas em ambientes industriais, com destaque para sua versatilidade e resistência.",
  detalhes: [
    "Fixação precisa de moldes e peças ferrosas em diversos processos industriais.",
    "Força de reação superior em relação a ímãs convencionais com mesma dimensão.",
    "Podem ser fixados por parafusos, embutidos ou colados, inclusive sobre superfícies metálicas.",
    "Não exigem isolamento, o que facilita sua substituição em sistemas tradicionais de fixação.",
    "Construção robusta para suportar ambientes agressivos e operações contínuas.",
    "Modelos disponíveis para aplicações em altas temperaturas."
  ],
  especificacoes: {
    aplicacoes: "Fixação de moldes, ferramentas, peças em montagem, usinagem, pintura, solda e transporte.",
    montagem: "Parafusado, colado ou embutido — direto sobre superfícies metálicas.",
    diferenciais: "Alta força magnética, versatilidade de instalação, resistência ao desgaste.",
    compatibilidade: "Pode substituir sistemas tradicionais sem adaptações.",
    opcional: "Versão especial para altas temperaturas disponível sob consulta."
  },
  contato: {
    email: "vendas@supply.ind.br",
    telefones: [
      "+55 16 99161-8943",
            "+55 11 94590-1460",
            "+55 11 95473-3498",            
            "+55 11 2379-1987"
    ]
  },
  link: "#"
}

    ]
  }
};
/* ============================================================================
   2. FUNÇÕES DE RENDERIZAÇÃO DE SIDEBAR E PRODUTO
   ========================================================================== */

/**
 * Renderiza a lista de produtos (sidebar) para a categoria selecionada.
 * @param {string} categoria - Chave da categoria.
 * @param {number} selecionado - Índice do produto selecionado.
 */

function renderSidebar(categoria, selecionado = 0) {
  const cat = categorias[categoria];
  document.getElementById('sidebar-title').textContent = cat.titulo;
  const ul = document.getElementById('produtos-lista');
  ul.innerHTML = '';
  cat.produtos.forEach((prod, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <button class="produto-link${i === selecionado ? " selected" : ""}" data-prod="${i}">
        ${prod.nome}
      </button>
    `;
    ul.appendChild(li);
  });
}

/*
 * Renderiza o detalhe do produto selecionado, incluindo imagens e informações técnicas.
 * @param {string} categoria - Chave da categoria.
 * @param {number} idx - Índice do produto na categoria.
 */

function renderProduto(categoria, idx) {
  const prod = categorias[categoria].produtos[idx];

  const beneficios = prod.beneficios?.length
    ? `<h2>Principais Benefícios</h2>
      <ul class="produto-beneficios">
        ${prod.beneficios.map(b => `<li>${b}</li>`).join('')}
      </ul>`
    : "";

  const aplicacoes = prod.aplicacoes?.length
    ? `<h2>Aplicações</h2>
      <ul class="produto-aplicacoes">
        ${prod.aplicacoes.map(a => `<li>${a}</li>`).join('')}
      </ul>`
    : "";

  const diferenciais = prod.diferenciais?.length
    ? `<h2>Diferenciais</h2>
      <ul class="produto-diferenciais">
        ${prod.diferenciais.map(d => `<li>${d}</li>`).join('')}
      </ul>`
    : "";

  const funcionamento = prod.funcionamento?.length
    ? `<h2>Funcionamento</h2>
      <ul class="produto-funcionamento">
        ${prod.funcionamento.map(f => `<li>${f}</li>`).join('')}
      </ul>`
    : "";

  const especificacoes = prod.especificacoes
    ? `<h2>Especificações Técnicas</h2>
      <ul class="produto-especificacoes">
        ${Object.entries(prod.especificacoes).map(([key, val]) => `
          <li><strong>${key.replace(/([A-Z])/g, ' $1')}: </strong>${val}</li>
        `).join('')}
      </ul>`
    : "";

  const contato = prod.contato
    ? `<h2>Contato</h2>
      <p><strong>Email:</strong> <a href="mailto:${prod.contato.email}">${prod.contato.email}</a></p>
      <p><strong>Telefones:</strong></p>
      <ul>
        ${prod.contato.telefones.map(tel => `<li>${tel}</li>`).join('')}
      </ul>`
    : "";

  // Adiciona todas as imagens em coluna
  const imagensHtml = Array.isArray(prod.imgs)
    ? prod.imgs.map(src => `<img src="${src}" alt="${prod.nome}">`).join('')
    : prod.img
      ? `<img src="${prod.img}" alt="${prod.nome}">`
      : '';

  document.getElementById('produto-destaque').innerHTML = `
  <div class="produto-info">
    <h1>${prod.nome}</h1>
    <div class="produto-descricao">${prod.descricao}</div>
    ${beneficios}
    ${aplicacoes}
    ${diferenciais}
    ${funcionamento}
    ${especificacoes}
    ${contato}
    <div class="produto-cta">
      <a 
        class="btn-saiba-mais" 
         href="https://wa.me/5516991618943?text=Olá! Tenho interesse no produto: ${encodeURIComponent(prod.nome)}" 
        target="_blank" 
        rel="noopener noreferrer"
      >Saiba mais</a>
    </div>
  </div>
  <div class="produto-img">
    ${imagensHtml}
  </div>
`;
}

/* ============================================================================
   3. CONTROLE DE ABAS (TABS) E PRODUTOS SELECIONADOS
   ========================================================================== */
// Controle de abas e produtos
let categoriaAtual = "linha-magnetica";
let idxAtual = 0;

function selectCategoria(categoria) {
  categoriaAtual = categoria;
  idxAtual = 0;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.categoria === categoria);
  });
  renderSidebar(categoriaAtual, idxAtual);
  renderProduto(categoriaAtual, idxAtual);
}

/* ============================================================================
   4. INICIALIZAÇÃO E EVENTOS (DOMContentLoaded)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  selectCategoria(categoriaAtual);
  document.getElementById('tabs-categorias').addEventListener('click', e => {
    if (e.target.classList.contains('tab-btn')) {
      selectCategoria(e.target.dataset.categoria);
    }
  });
  document.getElementById('produtos-lista').addEventListener('click', e => {
    if (e.target.classList.contains('produto-link')) {
      idxAtual = Number(e.target.getAttribute('data-prod'));
      renderSidebar(categoriaAtual, idxAtual);
      renderProduto(categoriaAtual, idxAtual);
    }
  });
});

// Controle do menu hamburguer
document.addEventListener('DOMContentLoaded', function() {
  const hamburguer = document.getElementById('headerHamburguer');
  const menu = document.getElementById('headerMenu');
  
  hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});
