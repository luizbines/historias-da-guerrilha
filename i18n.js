/**
 * i18n.js - Antigravity i18n module for Historias da Guerrilha
 */
(function () {
  const translations = {
    pt: {
      // Header Navigation
      "nav.home": "INÍCIO",
      "nav.project": "O PROJETO",
      "nav.commission": "A COMISSÃO",
      "nav.others": "OS OUTROS",

      // Index Page
      "video.loading": "Vídeo carregando...",
      "index.title": "HISTÓRIAS DA GUERRILHA",
      "index.subtitle": "VIDAS PERDIDAS NA DITADURA CIVIL MILITAR BRASILEIRA",
      "index.quote": "“Era filho do Rocha, velho militante comunista e seu referencial de vida; mas sempre apegado à mãe, Annette, que segurava as barras da família: dez filhos, um marido militante e sempre muito serviço na casa cheia para os almoços domingueiros, regados a discussão política e cerveja.”",
      "index.quote_author": "Texto de Iara Xavier para Comissão Nacional da Verdade",
      "index.dedication": "Projeto dedicado à família Rocha e a todas as famílias que ficaram.",
      "index.motto": "ORDEM E PROGRESSO",

      // Footer
      "footer.title": "HISTÓRIAS DA GUERRILHA",
      "footer.subtitle": "VIDAS PERDIDAS NA DITADURA CIVIL MILITAR BRASILEIRA",
      "footer.developed": "Projeto desenvolvido por Maria Eduarda Rocha",
      "footer.orientation": "Orientação Barbara Castro",
      "footer.institution": "Escola Superior de Desenho Industrial - ESDI, UERJ",

      // Projeto Page
      "project.title": "SOBRE O PROJETO",
      "project.p1": "Este projeto foi desenvolvido como trabalho de conclusão do curso de Design na ESDI/UERJ por Maria Eduarda Rocha, sob orientação da professora doutora Bárbara Castro. A iniciativa é motivada por Arnaldo Cardoso Rocha, tio-avô da autora, envolvido na guerrilha e assassinado em 1972, episódio que marcou profundamente sua família e que evidencia a necessidade de preservar e divulgar as narrativas de cidadãos assassinados pela ditadura civil-militar. Assim, o projeto dedica-se à transmissão de memória da vida das vítimas do Estado brasileiro.",
      "project.p2": "Os textos foram elaborados com base no terceiro volume do Relatório Final da Comissão Nacional da Verdade, bem como nos dossiês encaminhados à Comissão Especial sobre Mortos e Desaparecidos Políticos.",
      "project.p3": "A base de dados utilizada foi produzida por Luiz Bines, a partir das informações disponibilizadas no Relatório Final da Comissão Nacional da Verdade.",

      // Comissão Page
      "commission.title": "COMISSÃO NACIONAL DA VERDADE",
      "commission.p1": "A Comissão Nacional da Verdade (CNV) foi instituída em maio de 2012, com o objetivo de investigar e esclarecer as graves violações de direitos humanos cometidas durante a ditadura civil-militar (1964-1985) e o período de 1946 a 1988.",
      "commission.p2": "Em seu mandato de dois anos e sete meses, a CNV realizou investigações, coletou depoimentos e apurou responsabilidades, focando no direito à memória e à verdade.",
      "commission.report_intro": "O Relatório Final da CNV, entregue em dezembro de 2014, foi organizado em três volumes principais:",
      "commission.vol1": "<strong>Volume I:</strong> Panorama histórico das estruturas de repressão e métodos de violação.",
      "commission.vol2": "<strong>Volume II:</strong> Investigações temáticas sobre grupos específicos e padrões de violência estatal.",
      "commission.vol3": "<strong>Volume III:</strong> Registro dos casos de 434 pessoas mortas ou desaparecidas identificadas.",
      "commission.recommendations": "O relatório finalizou com 29 recomendações ao Estado brasileiro para evitar a repetição de abusos e consolidar a democracia.",
      "commission.caption": "Assinatura do Relatório Final pela então presidenta, Dilma Rousseff.",

      // Os Outros Page
      "others.title": "QUEM NÃO PERTENCE À BANDEIRA",
      "others.p1": "Embora o Segundo Volume dedique um capítulo à morte de trabalhadores, camponeses e indígenas, a Comissão apresenta lacunas na identificação dessas pessoas, que, em sua maioria, permanecem sem nome, rosto ou história.",
      "others.p2": "Moradores de favelas e periferias foram especialmente afetados por remoções em massa de suas casas; um exemplo disso é a destruição da Favela da Catacumba em 1968. A população negra também se destacou como alvo das ações repressivas das polícias políticas estaduais. Embora algumas comissões da verdade estaduais tenham buscado preencher essas lacunas, muitas dessas vítimas continuam ausentes no Terceiro Relatório.",
      "others.p3": "A maior parte das vítimas identificadas no Terceiro Volume do Relatório Final da CNV corresponde a um perfil específico das vítimas da ditadura.",
      "others.p4": "Nesse sentido, o relatório final narra as histórias das vítimas fatais da ditadura, ao mesmo tempo em que inscreve em seu texto, através de lacunas e silêncios, uma série de biografias faltantes. Nomeia, reconhece e publiciza graves violações de direitos humanos, ao mesmo tempo em que oculta, e exclui violências e vítimas.",
      "others.quote": "“Fomos tirados dessas comunidades [Favela da Praia do Pinto, Ilha das Dragas e Ilha dos Caiçaras] como animais. Na época, a COMLURB tinha caminhões com janelinhas iguais as dos trens. O governo, a Polícia Militar e a COMLURB iam botando nossas coisas pra cima dos caminhões de lixo, metendo pé de cabra e marreta nos barracos, derrubando. Não respeitavam as crianças, não respeitavam os mais velhos e não é diferente hoje. A mesma coisa que acontecia na época da ditadura, acontece hoje.”",
      "others.quote_author": "Andrea Schettini, para a Revista Histórias Públicas, 2023.<br />Altair Guimarães para Comissão da Verdade do Rio de Janeiro",
      "others.back_btn": "← VOLTAR PARA A BANDEIRA",

      // Arnaldo Perfil
      "arnaldo.meta": "28/04/1949 - 1972<br>Militante PCB e ALN",
      "arnaldo.hero_caption": "Foto de Arnaldo disponível no Arquivo Nacional",
      "arnaldo.hero_text": "Arnaldo nasceu em 28 de março de 1949, em <span class=\"highlight-bold\">Belo Horizonte, Minas Gerais</span>. Filho de Annette Cardoso Rocha e João de Deus Rocha, cresceu no bairro do Carmo, em uma casa sempre movimentada, ao lado de seus nove irmãos.",
      "arnaldo.quote1_1": "“Era filho do Rocha, velho militante comunista e seu referencial de vida; mas sempre apegado à mãe, Anette, que segurava as barras da família: dez filhos, um marido militante e sempre muito serviço na casa cheia para os almoços domingueiros, regados a discussão política e cerveja.”",
      "arnaldo.quote1_2": "“Arnaldo era um garoto como muitos de sua idade, só não amava os Beatles e os Rolling Stones e sim o samba e a bossa nova. Adorava dançar, namorar e conversar com os amigos.”",
      "arnaldo.quote1_author": "Texto de Iara Xavier para a Comissão Nacional da Verdade.",
      "arnaldo.photo1_caption": "Foto de acervo pessoal. Arnaldo Cardoso Rocha com 10 anos de idade.",
      "arnaldo.content1_p1": "Muito cedo ouviu e atendeu ao chamado da luta revolucionária, dando seus primeiros passos no setor secundarista do <span class=\"highlight-bold\">Partido Comunista Brasileiro</span>, onde seu pai (<span class=\"highlight-bold\">João de Deus Rocha</span>) já era dirigente. Não chegou a finalizar o segundo grau em decorrência do seu envolvimento com o movimento estudantil a partir do golpe de Estado de 1964.",
      "arnaldo.content1_p2": "Deixou o PCB no quadro de dissidências do período, formando em conjunto a outros jovens a <span class=\"highlight-bold\">Corrente Revolucionária de Minas Gerais</span>, que posteriormente se integrou à <span class=\"highlight-bold\">Ação Libertadora Nacional (ALN)</span>, sob o comando de <span class=\"highlight-bg\">Carlos Marighella</span>.",
      "arnaldo.photo2_caption": "Foto de acervo pessoal. Annette Cardoso Rocha e João de Deus Rocha, 1943.",
      "arnaldo.photo3_caption": "Identidade falsa de Arnaldo Cardoso Rocha.",
      "arnaldo.content2_p1": "Em 1969, passou a atuar na clandestinidade, utilizando os codinomes <strong>José Carlos Líbano, Pedro Luís Witaker Vidigal e José Carmo Spinelli</strong> e pelos apelidos: <strong>Giba, Jibóia, Flávio e Roberto</strong>.",
      "arnaldo.content2_p2": "Arnaldo foi gradualmente assumindo papéis mais importantes na organização, até que, por volta de 1971, passou a integrar o Comando Nacional da <span class=\"highlight-bold\">ALN</span>.",
      "arnaldo.quote2": "“As normas de segurança, o manejo das armas, os combates de rua, as fugas aos cercos, a tensão do dia-a-dia da luta. Nada disso o embruteceu. Arnaldo continuava com aquele jeito mineiro de ser, de fala mansa, andar pausado e olhar para além dos belos horizontes. Mesmo nos piores momentos da luta, Arnaldo mantinha um cotidiano de vida familiar: junto com Iara Xavier, faziam a feira aos domingos, assavam o peixe, liam os jornais, ouviam músicas e ele embalava o sonho de ter um filho. Um não, vários. Adorava criança”",
      "arnaldo.content3_p1": "Com o aumento da repressão, decidiu deixar o país e seguir para o exterior. No entanto, sua permanência foi breve, pois logo retornou ao <span class=\"highlight-bold\">Brasil</span>.",
      "arnaldo.content3_p2": "Em 1972, recebeu a notícia do assassinato de seu cunhado e comandante, <span class=\"highlight-bg\">Iuri Xavier</span>. Apesar das ordens expressas do comando no <span class=\"highlight-bold\">Brasil</span> para que permanecesse fora, comunicou sua decisão de voltar.",
      "arnaldo.content3_p3": "De volta ao país, permaneceu algum tempo no Nordeste, onde participou do assalto à <span class=\"highlight-bold\">Coletoria de Impostos de Bodocó</span>, em <span class=\"highlight-bold\">Pernambuco</span>. Pouco depois, retornou a São Paulo, em 14 de junho de 1972.",
      "arnaldo.photo4_caption": "Foto de identidade de Arnaldo.",
      "arnaldo.assassination_note": "Arnaldo Cardoso Rocha foi assassinado no dia 15 de março de 1973 na cidade de <span class=\"highlight-bold\">São Paulo</span>.",
      "arnaldo.newspaper_caption": "Divulgação de morte de Francisco Emmanuel Penteado, Francisco Seiko Okama e Arnaldo Cardoso Rocha pelo Jornal Folha da Tarde.",
      "arnaldo.official_ver": "Segundo a versão oficial divulgada em 16 de março de 1973 no Jornal Folha da Tarde, Arnaldo Cardoso Rocha, <span class=\"highlight-bg\">Francisco Emmanuel Penteado, Francisco Seiko Okama</span> foram vistos no bairro da <span class=\"highlight-bold\">Penha, São Paulo</span>, por um carro da polícia que patrulhava a região. Ao receberem voz de prisão, segundo a versão oficial, teriam reagido com tiros.",
      "arnaldo.contested_ver": "Essa narrativa foi contestada na década de 80, quando Iara Xavier Pereira e Suzana Keniger Lisbôa iniciaram buscas por informações sobre o caso.",
      "arnaldo.banner_caption": "Reportagem da Revista Veja, 1992",
      "arnaldo.banner_p1": "Em 1992, a Revista Veja publicou uma entrevista com o agente do DOI-CODI/SP, Marival Dias Chaves do Canto, na qual ele relatou a história de <span class=\"highlight-black-bg\">João Henrique de Carvalho</span>, conhecido como \"Jota\". Segundo Marival:",
      "arnaldo.banner_quote": "\"Ele deu o tiro de misericórdia na ALN. Por seu trabalho, Jota era citado pela antiga Escola Nacional de Informações como modelo de infiltrado. A delação dele permitiu a eliminação de pelo menos vinte pessoas. A partir de 1973, Jota delatou todos os comandos da ALN.\"",
      "arnaldo.banner_p2": "No dia de sua morte, Arnaldo estava em contato com \"Jota\".",
      "arnaldo.investigation_p1": "Através da investigação da sua companheira, Iara Xavier, foi descoberto que Arnaldo foi levado vivo para o DOI-CODI/SP, onde teria sido torturado.",
      "arnaldo.investigation_p2": "Sua família soube de sua morte pela televisão. Ao viajar para São Paulo, conseguiu resgatar o corpo e levá-lo para sepultamento no <span class=\"highlight-bold\">Cemitério Parque da Colina</span>, em Belo Horizonte. Por determinação das autoridades, o caixão chegou lacrado, e o sepultamento foi realizado sem que pudesse ser aberto.",
      "arnaldo.quote3": "“Arnaldo viveu com toda intensidade cada minuto de sua curta vida, não vacilou, não hesitou em dar sua vida, deixou um grito de alerta e uma prova de amor e confiança em um Brasil melhor. Assim como ousou enfrentar os militares, ousou sonhar, ser feliz, ter um filho que não chegou a conhecer. Arnaldo deixou, de forma inequívoca, a lição de que vale a pena lutar pela liberdade.”",
      "arnaldo.agents_intro": "Os principais agentes mencionados no caso são:",
      "arnaldo.agent1": "<span class=\"highlight-black-bg\">Carlos Alberto Brilhante Ustra</span>, apontado como responsável por seu sequestro e tortura;",
      "arnaldo.agent2": "<span class=\"highlight-black-bg\">João Henrique de Carvalho</span>, identificado como delator;",
      "arnaldo.agent3": "<span class=\"highlight-black-bg\">Isaac Abramovich</span> e <span class=\"highlight-black-bg\">Orlando Brandão</span>, responsáveis pela falsificação do laudo necroscópico;",
      "arnaldo.mandate": "Arnaldo morreu durante o mandato de <span class=\"highlight-black-bg\">Emílio Garrastazu Médici</span>.",
      "arnaldo.cert_note": "Apenas em 25 de agosto de 2025, houve a entrega da sua certidão de óbito retificada aos seus familiares.",
      "arnaldo.source": "Texto baseado no <span class=\"highlight-bold\">Terceiro Volume do Relatório da Comissão Nacional da Verdade</span> e no Requerimento de Iara Xavier para a Comissão de Mortos e Desaparecidos.",


      // Soledad Perfil
      "soledad.meta": "06/01/1945 - 1973<br />Militante VPR",
      "soledad.hero_caption": "Foto de Soledad disponível no Arquivo Nacional",
      "soledad.hero_text": "Soledad nasceu no <span class=\"highlight-bold\">Paraguai</span> e teve a sua vida muito conturbada desde criança, uma vez que seus pais (<span class=\"highlight-bold\">Deolinda Viedma Ortiz</span> e <span class=\"highlight-bold\">Alex Rafael Barrett</span>) e seu avô (<span class=\"highlight-bold\">Rafael Barrett</span>) eram militantes de esquerda e constantemente tinham que mudar de país por questões de segurança.<br><br>Em razão das perseguições sofridas, a família fugiu do Paraguai para a <span class=\"highlight-bold\">Argentina</span> quando Soledad tinha apenas três meses de idade, e lá permaneceu por quatro anos.",
      "soledad.quote_text1": "Regressaram então para o <span class=\"highlight-bold\">Paraguai</span>, mas voltaram a se exilar, dessa vez no Uruguai, para escapar da ditadura de Stroessner.",
      "soledad.quote_text2": "Desde a adolescência, Soledad militava no movimento estudantil e se dedicava a atividades artísticas como dançarina folclórica.",
      "soledad.quote_text3": "Enquanto vivia em <span class=\"highlight-bold\">Montevidéu</span>, em 1962, com 17 anos, Soledad foi raptada por um grupo neonazista que tentou obrigá-la a gritar palavras de ordem em exaltação a Hitler e contrárias à Revolução Cubana. Como Soledad resistiu, gravaram em sua pele uma cruz gamada.",
      "soledad.photo2_caption": "Reportagem do Jornal Época de 1962",
      "soledad.content1_p1": "A partir de então, Soledad passou a ser perseguida e resolveu seguir para <span class=\"highlight-bold\">Cuba</span> onde recebeu treinamento de guerrilha e conheceu <span class=\"highlight-bg\">José Maria de Araújo</span>, militante da Vanguarda Popular Revolucionária (VPR) que tinha sido banido do Brasil por ter participado da mobilização dos marinheiros quando era um jovem oficial.",
      "soledad.content2_p1": "Soledad e José Maria se casaram e tiveram uma filha, a quem deram o nome de Ñasaindy de Araújo Barrett.",
      "soledad.content2_p2": "Em 1970, José Maria retornou ao <span class=\"highlight-bold\">Brasil</span> para atuar na resistência contra a ditadura e, um ano depois, veio Soledad. Quando chegou ao país, descobriu que José Maria tinha sido morto no <span class=\"highlight-bold\">DOI-CODI/SP</span>.",
      "soledad.photo3_caption": "Foto de Soledad com o seu companheiro, José Maria de Araújo.",
      "soledad.content3_p1": "Soledad se estabeleceu em <span class=\"highlight-bold\">Pernambuco</span> no contexto de reorganização da <span class=\"highlight-bold\">VPR</span> no Nordeste e passou a ter um relacionamento afetivo com o <span class=\"highlight-black-bg\">“Cabo Anselmo”</span>, com quem vivia em <span class=\"highlight-bold\">Rio Doce</span>.",
      "soledad.content3_p2": "Soledad foi uma das vítimas do episódio conhecido como <span class=\"highlight-bold\">Massacre da Chácara São Bento</span>, em operação articulada a partir da atuação do “Cabo Anselmo” como agente infiltrado.",
      "soledad.content3_p3": "Suspeita-se que, quando foi morta, Soledad esperava um filho de Anselmo.",
      "soledad.agents_intro": "Os principais agentes mencionados no caso são:",
      "soledad.agent1": "<span class=\"highlight-black-bg\">Sérgio Paranhos Fleury</span>, comandou a operação que capturou e matou sob tortura militantes da VPR;",
      "soledad.agent2": "<span class=\"highlight-black-bg\">João Henrique de Carvalho</span>, na condição de agente duplo, delatou os militantes e participou da operação de captura;",
      "soledad.agent3": "<span class=\"highlight-black-bg\">Carlos Alberto Augusto</span>, participou da operação que capturou os militantes da VPR.",
      "soledad.mandate": "Soledad morreu durante o mandato de <span class=\"highlight-black-bg\">Emílio Garrastazu Médici</span>.",
      "soledad.source": "Texto baseado no <span class=\"highlight-bold\">Terceiro Volume do Relatório Final da Comissão Nacional da Verdade (CNV)</span>.",

      // Massacre Perfil
      "massacre.title": "Massacre da Chácara São Bento",
      "massacre.p1": "O massacre da Chácara São Bento foi um episódio violento ocorrido em 1973, em Pernambuco. Ele resultou na morte de seis militantes de esquerda que integravam o Partido Comunista Revolucionário (PCR) — um grupo que lutava contra o regime militar.",
      "massacre.back_btn": "&larr; VOLTAR",

      // Bandeira Page
      "flag.search_title": "ORDEM E PROGRESSO",
      "flag.search_placeholder": "Buscar vítima...",
      "flag.search_btn_title": "Buscar Vítima",
      "flag.filters_title": "Filtros",
      "flag.close_filters": "Fechar Filtros",
      "flag.close_card": "Fechar Card",
      "flag.loc_header": "LOCALIDADE",
      "flag.loc_norte": "Norte",
      "flag.loc_nordeste": "Nordeste",
      "flag.loc_sudeste": "Sudeste",
      "flag.loc_sul": "Sul",
      "flag.loc_centro_oeste": "Centro-Oeste",
      "flag.loc_fora": "Fora do Brasil",
      "flag.loc_na": "Não Identificado",
      "flag.period_header": "PERÍODO",
      "flag.desc_header": "DESCRIÇÃO",
      "flag.desc_jovem": "Jovens",
      "flag.desc_mulher": "Mulheres",
      "flag.desc_homem": "Homens",
      "flag.desc_desaparecidos": "Desaparecidos",
      "flag.desc_mortos": "Mortos",
      "flag.clear_filters": "LIMPAR SELEÇÃO",
      "flag.select_all": "SELECIONAR TUDO",
      "flag.profile_not_found": "Perfil não encontrado.",
      "flag.error_loading_card": "Erro ao carregar card:",
      "flag.legend_title": "LEGENDA",
      "flag.legend_disappeared": "Desaparecidos",
      "flag.legend_deceased": "Mortos",
      "flag.legend_young": "Jovens",
      "flag.legend_women": "Mulheres",
      "flag.cnv_footnote": "*Dados da Comissão Nacional da Verdade"
    },

    en: {
      // Header Navigation
      "nav.home": "HOME",
      "nav.project": "THE PROJECT",
      "nav.commission": "THE COMMISSION",
      "nav.others": "THE OTHERS",

      // Index Page
      "video.loading": "Video loading...",
      "index.title": "STORIES OF THE GUERRILLA",
      "index.subtitle": "LIVES LOST IN THE BRAZILIAN CIVIL-MILITARY DICTATORSHIP",
      "index.quote": "“He was the son of Rocha, an old communist militant and his role model in life; but always attached to his mother, Annette, who held the family together: ten children, a militant husband, and always plenty of work in the full house for Sunday lunches, filled with political discussions and beer.”",
      "index.quote_author": "Text by Iara Xavier for the National Truth Commission",
      "index.dedication": "Project dedicated to the Rocha family and to all the families left behind.",
      "index.motto": "ORDER AND PROGRESS",

      // Footer
      "footer.title": "STORIES OF THE GUERRILLA",
      "footer.subtitle": "LIVES LOST IN THE BRAZILIAN CIVIL-MILITARY DICTATORSHIP",
      "footer.developed": "Project developed by Maria Eduarda Rocha",
      "footer.orientation": "Advised by Barbara Castro",
      "footer.institution": "Higher School of Industrial Design - ESDI, UERJ",

      // Projeto Page
      "project.title": "ABOUT THE PROJECT",
      "project.p1": "This project was developed as a graduation thesis for the Design course at ESDI/UERJ by Maria Eduarda Rocha, under the guidance of Professor Dr. Bárbara Castro. The initiative is inspired by Arnaldo Cardoso Rocha, the author's great-uncle, involved in the guerrilla movement and murdered in 1972—an event that deeply affected her family and highlights the need to preserve and share the stories of citizens killed by the civil-military dictatorship. Thus, the project is dedicated to conveying the memory of the lives of the victims of the Brazilian State.",
      "project.p2": "The texts were prepared based on the third volume of the Final Report of the National Truth Commission, as well as dossiers submitted to the Special Commission on Political Deaths and Disappearances.",
      "project.p3": "The database used was produced by Luiz Bines, based on information made available in the Final Report of the National Truth Commission.",

      // Comissão Page
      "commission.title": "NATIONAL TRUTH COMMISSION",
      "commission.p1": "The National Truth Commission (CNV) was established in May 2012 to investigate and clarify grave human rights violations committed during the civil-military dictatorship (1964-1985) and the period from 1946 to 1988.",
      "commission.p2": "During its mandate of two years and seven months, the CNV conducted investigations, gathered testimonies, and determined responsibilities, focusing on the right to memory and truth.",
      "commission.report_intro": "The Final Report of the CNV, delivered in December 2014, was organized into three main volumes:",
      "commission.vol1": "<strong>Volume I:</strong> Historical overview of repression structures and violation methods.",
      "commission.vol2": "<strong>Volume II:</strong> Thematic investigations into specific groups and patterns of state violence.",
      "commission.vol3": "<strong>Volume III:</strong> Record of the cases of 434 identified deceased or disappeared persons.",
      "commission.recommendations": "The report concluded with 29 recommendations to the Brazilian State to prevent the recurrence of abuses and consolidate democracy.",
      "commission.caption": "Signing of the Final Report by then-President Dilma Rousseff.",

      // Os Outros Page
      "others.title": "THOSE WHO DO NOT BELONG TO THE FLAG",
      "others.p1": "Although the Second Volume dedicates a chapter to the deaths of workers, peasants, and indigenous peoples, the Commission has gaps in identifying these individuals, who mostly remain without a name, face, or story.",
      "others.p2": "Residents of favelas and peripheries were especially affected by mass evictions; an example of this is the destruction of the Catacumba Favela in 1968. The Black population was also a primary target of repressive actions by state political police. Although some state truth commissions sought to address these gaps, many of these victims remain absent from the Third Report.",
      "others.p3": "The majority of victims identified in the Third Volume of the CNV Final Report correspond to a specific profile of dictatorship victims.",
      "others.p4": "In this sense, the final report tells the stories of the fatal victims of the dictatorship, while simultaneously inscribing in its text, through gaps and silences, a series of missing biographies. It names, recognizes, and publicizes serious human rights violations, while concealing and excluding violence and victims.",
      "others.quote": "“We were removed from those communities [Favela da Praia do Pinto, Ilha das Dragas, and Ilha dos Caiçaras] like animals. At the time, COMLURB had trucks with small windows like trains. The government, the Military Police, and COMLURB threw our belongings into garbage trucks, taking crowbars and sledgehammers to our shacks, knocking them down. They did not respect children, they did not respect the elderly, and it is no different today. The same thing that happened during the dictatorship happens today.”",
      "others.quote_author": "Andrea Schettini, for Revista Histórias Públicas, 2023.<br />Altair Guimarães for the Rio de Janeiro Truth Commission",
      "others.back_btn": "← BACK TO THE FLAG",

      // Arnaldo Perfil
      "arnaldo.meta": "04/28/1949 - 1972<br>PCB and ALN Militant",
      "arnaldo.hero_caption": "Photo of Arnaldo available in the National Archives",
      "arnaldo.hero_text": "Arnaldo was born on March 28, 1949, in <span class=\"highlight-bold\">Belo Horizonte, Minas Gerais</span>. Son of Annette Cardoso Rocha and João de Deus Rocha, he grew up in the Carmo neighborhood in a lively house alongside his nine siblings.",
      "arnaldo.quote1_1": "“He was the son of Rocha, an old communist militant and his role model in life; but always attached to his mother, Annette, who held the family together: ten children, a militant husband, and always plenty of work in the full house for Sunday lunches, filled with political discussions and beer.”",
      "arnaldo.quote1_2": "“Arnaldo was a kid like many his age, except he didn't love the Beatles and Rolling Stones, but rather samba and bossa nova. He loved dancing, dating, and talking with friends.”",
      "arnaldo.quote1_author": "Text by Iara Xavier for the National Truth Commission.",
      "arnaldo.photo1_caption": "Personal archive photo. Arnaldo Cardoso Rocha at 10 years old.",
      "arnaldo.content1_p1": "At a very young age he heard and answered the call of the revolutionary struggle, taking his first steps in the high school sector of the <span class=\"highlight-bold\">Brazilian Communist Party</span> (PCB), where his father (<span class=\"highlight-bold\">João de Deus Rocha</span>) was already a leader. He did not finish high school due to his involvement in the student movement following the 1964 coup d'état.",
      "arnaldo.content1_p2": "He left the PCB amid the dissidence of the period, joining other young people to form the <span class=\"highlight-bold\">Revolutionary Current of Minas Gerais</span>, which later joined the <span class=\"highlight-bold\">National Liberation Action (ALN)</span>, commanded by <span class=\"highlight-bg\">Carlos Marighella</span>.",
      "arnaldo.photo2_caption": "Personal archive photo. Annette Cardoso Rocha and João de Deus Rocha, 1943.",
      "arnaldo.photo3_caption": "Fake ID of Arnaldo Cardoso Rocha.",
      "arnaldo.content2_p1": "In 1969, he began operating underground, using the code names <strong>José Carlos Líbano, Pedro Luís Witaker Vidigal, and José Carmo Spinelli</strong> and the nicknames: <strong>Giba, Jibóia, Flávio, and Roberto</strong>.",
      "arnaldo.content2_p2": "Arnaldo gradually took on more important roles in the organization until, around 1971, he joined the National Command of the <span class=\"highlight-bold\">ALN</span>.",
      "arnaldo.quote2": "“Safety rules, weapons handling, street fighting, escaping blockades, the daily tension of struggle. None of this hardened him. Arnaldo retained his gentle Mineiro demeanor, soft-spoken, slow-paced, looking beyond the beautiful horizons. Even in the worst moments, Arnaldo maintained a daily family routine: together with Iara Xavier, they went to the Sunday market, baked fish, read newspapers, listened to music, and harbored the dream of having a child. Not one, several. He adored children.”",
      "arnaldo.content3_p1": "With increasing repression, he decided to leave the country and go abroad. However, his stay was brief, as he soon returned to <span class=\"highlight-bold\">Brazil</span>.",
      "arnaldo.content3_p2": "In 1972, he received news of the murder of his brother-in-law and commander, <span class=\"highlight-bg\">Iuri Xavier</span>. Despite express orders from command in <span class=\"highlight-bold\">Brazil</span> to stay abroad, he announced his decision to return.",
      "arnaldo.content3_p3": "Back in the country, he stayed for a while in the Northeast, participating in the raid on the <span class=\"highlight-bold\">Bodocó Tax Collector's Office</span> in <span class=\"highlight-bold\">Pernambuco</span>. Shortly after, he returned to São Paulo on June 14, 1972.",
      "arnaldo.photo4_caption": "ID photo of Arnaldo.",
      "arnaldo.assassination_note": "Arnaldo Cardoso Rocha was murdered on March 15, 1973, in the city of <span class=\"highlight-bold\">São Paulo</span>.",
      "arnaldo.newspaper_caption": "Notice of the deaths of Francisco Emmanuel Penteado, Francisco Seiko Okama, and Arnaldo Cardoso Rocha by the Folha da Tarde newspaper.",
      "arnaldo.official_ver": "According to the official version published on March 16, 1973, in the Folha da Tarde newspaper, Arnaldo Cardoso Rocha, <span class=\"highlight-bg\">Francisco Emmanuel Penteado, and Francisco Seiko Okama</span> were spotted in the Penha neighborhood of São Paulo by a police patrol car. Upon receiving orders of arrest, according to the official version, they allegedly opened fire.",
      "arnaldo.contested_ver": "This narrative was contested in the 1980s when Iara Xavier Pereira and Suzana Keniger Lisbôa began searching for information about the case.",
      "arnaldo.banner_caption": "Veja Magazine report, 1992",
      "arnaldo.banner_p1": "In 1992, Veja Magazine published an interview with DOI-CODI/SP agent Marival Dias Chaves do Canto, in which he recounted the story of <span class=\"highlight-black-bg\">João Henrique de Carvalho</span>, known as \"Jota\". According to Marival:",
      "arnaldo.banner_quote": "\"He dealt the death blow to ALN. For his work, Jota was cited by the former National Information School as a model infiltrator. His snitching enabled the elimination of at least twenty people. From 1973 onward, Jota informed on all ALN commands.\"",
      "arnaldo.banner_p2": "On the day of his death, Arnaldo was in contact with \"Jota\".",
      "arnaldo.investigation_p1": "Through the investigation by his partner, Iara Xavier, it was discovered that Arnaldo was taken alive to DOI-CODI/SP, where he was tortured.",
      "arnaldo.investigation_p2": "His family learned of his death on television. Traveling to São Paulo, they managed to recover his body and take it for burial at the <span class=\"highlight-bold\">Parque da Colina Cemetery</span> in Belo Horizonte. By order of the authorities, the coffin arrived sealed, and the burial took place without it being opened.",
      "arnaldo.quote3": "“Arnaldo lived every minute of his short life with total intensity, he didn't waver, he didn't hesitate to give his life, he left a cry of warning and proof of love and trust in a better Brazil. Just as he dared to face the military, he dared to dream, to be happy, to have a child he never got to meet. Arnaldo unequivocally left the lesson that freedom is worth fighting for.”",
      "arnaldo.agents_intro": "The main agents mentioned in the case are:",
      "arnaldo.agent1": "<span class=\"highlight-black-bg\">Carlos Alberto Brilhante Ustra</span>, identified as responsible for his kidnapping and torture;",
      "arnaldo.agent2": "<span class=\"highlight-black-bg\">João Henrique de Carvalho</span>, identified as the informant;",
      "arnaldo.agent3": "<span class=\"highlight-black-bg\">Isaac Abramovich</span> and <span class=\"highlight-black-bg\">Orlando Brandão</span>, responsible for falsifying the autopsy report;",
      "arnaldo.mandate": "Arnaldo died during the presidency of <span class=\"highlight-black-bg\">Emílio Garrastazu Médici</span>.",
      "arnaldo.cert_note": "Only on August 25, 2025, was his rectified death certificate handed over to his family.",
      "arnaldo.source": "Text based on the <span class=\"highlight-bold\">Third Volume of the Report of the National Truth Commission</span> and Iara Xavier's Application to the Commission on Deceased and Disappeared.",


      // Soledad Perfil
      "soledad.meta": "01/06/1945 - 1973<br />VPR Militant",
      "soledad.hero_caption": "Photo of Soledad available in the National Archives",
      "soledad.hero_text": "Soledad was born in <span class=\"highlight-bold\">Paraguay</span> and had a turbulent life from childhood, as her parents (<span class=\"highlight-bold\">Deolinda Viedma Ortiz</span> and <span class=\"highlight-bold\">Alex Rafael Barrett</span>) and her grandfather (<span class=\"highlight-bold\">Rafael Barrett</span>) were left-wing militants who constantly had to relocate countries for safety reasons.<br><br>Due to persecution, the family fled Paraguay for <span class=\"highlight-bold\">Argentina</span> when Soledad was just three months old, remaining there for four years.",
      "soledad.quote_text1": "They then returned to <span class=\"highlight-bold\">Paraguay</span>, but went into exile again, this time in Uruguay, to escape the Stroessner dictatorship.",
      "soledad.quote_text2": "From her teenage years, Soledad was active in the student movement and dedicated herself to artistic activities as a folk dancer.",
      "soledad.quote_text3": "While living in <span class=\"highlight-bold\">Montevideo</span> in 1962, at age 17, Soledad was kidnapped by a neo-Nazi group that tried to force her to shout slogans praising Hitler and opposing the Cuban Revolution. When Soledad resisted, they carved a swastika into her skin.",
      "soledad.photo2_caption": "Época Newspaper report from 1962",
      "soledad.content1_p1": "From then on, Soledad faced constant persecution and decided to go to <span class=\"highlight-bold\">Cuba</span>, where she received guerrilla training and met <span class=\"highlight-bg\">José Maria de Araújo</span>, a militant of the People's Revolutionary Vanguard (VPR) who had been banished from Brazil for participating in the sailors' mobilization as a young officer.",
      "soledad.content2_p1": "Soledad and José Maria married and had a daughter, whom they named Ñasaindy de Araújo Barrett.",
      "soledad.content2_p2": "In 1970, José Maria returned to <span class=\"highlight-bold\">Brazil</span> to work in the resistance against the dictatorship, and Soledad followed a year later. When she arrived in the country, she discovered that José Maria had been killed at <span class=\"highlight-bold\">DOI-CODI/SP</span>.",
      "soledad.photo3_caption": "Photo of Soledad with her partner, José Maria de Araújo.",
      "soledad.content3_p1": "Soledad settled in <span class=\"highlight-bold\">Pernambuco</span> amid the reorganization of the <span class=\"highlight-bold\">VPR</span> in the Northeast and entered a relationship with <span class=\"highlight-black-bg\">“Cabo Anselmo”</span>, with whom she lived in <span class=\"highlight-bold\">Rio Doce</span>.",
      "soledad.content3_p2": "Soledad was one of the victims of the episode known as the <span class=\"highlight-bold\">Chácara São Bento Massacre</span>, an operation orchestrated through “Cabo Anselmo” acting as an infiltrated agent.",
      "soledad.content3_p3": "It is suspected that when she was killed, Soledad was pregnant with Anselmo's child.",
      "soledad.agents_intro": "The main agents mentioned in the case are:",
      "soledad.agent1": "<span class=\"highlight-black-bg\">Sérgio Paranhos Fleury</span>, commanded the operation that captured and killed VPR militants under torture;",
      "soledad.agent2": "<span class=\"highlight-black-bg\">João Henrique de Carvalho</span>, acting as a double agent, informed on the militants and participated in the capture operation;",
      "soledad.agent3": "<span class=\"highlight-black-bg\">Carlos Alberto Augusto</span>, participated in the operation that captured the VPR militants.",
      "soledad.mandate": "Soledad died during the presidency of <span class=\"highlight-black-bg\">Emílio Garrastazu Médici</span>.",
      "soledad.source": "Text based on the <span class=\"highlight-bold\">Third Volume of the Final Report of the National Truth Commission (CNV)</span>.",

      // Massacre Perfil
      "massacre.title": "Chácara São Bento Massacre",
      "massacre.p1": "The Chácara São Bento massacre was a violent event in 1973 in Pernambuco. It resulted in the deaths of six left-wing militants belonging to the Revolutionary Communist Party (PCR)—a group fighting against the military regime.",
      "massacre.back_btn": "&larr; BACK",

      // Bandeira Page
      "flag.search_title": "ORDER AND PROGRESS",
      "flag.search_placeholder": "Search victim...",
      "flag.search_btn_title": "Search Victim",
      "flag.filters_title": "Filters",
      "flag.close_filters": "Close Filters",
      "flag.close_card": "Close Card",
      "flag.loc_header": "LOCATION",
      "flag.loc_norte": "North",
      "flag.loc_nordeste": "Northeast",
      "flag.loc_sudeste": "Southeast",
      "flag.loc_sul": "South",
      "flag.loc_centro_oeste": "Central-West",
      "flag.loc_fora": "Outside Brazil",
      "flag.loc_na": "Unidentified",
      "flag.period_header": "PERIOD",
      "flag.desc_header": "DESCRIPTION",
      "flag.desc_jovem": "Young",
      "flag.desc_mulher": "Women",
      "flag.desc_homem": "Men",
      "flag.desc_desaparecidos": "Disappeared",
      "flag.desc_mortos": "Deceased",
      "flag.clear_filters": "CLEAR SELECTION",
      "flag.select_all": "SELECT ALL",
      "flag.profile_not_found": "Profile not found.",
      "flag.error_loading_card": "Error loading card:",
      "flag.legend_title": "LEGEND",
      "flag.legend_disappeared": "Disappeared",
      "flag.legend_deceased": "Deceased",
      "flag.legend_young": "Young",
      "flag.legend_women": "Women",
      "flag.cnv_footnote": "*Data from the National Truth Commission"
    },
    es: {
      "nav.home": "INICIO",
      "nav.project": "EL PROYECTO",
      "nav.commission": "LA COMISIÓN",
      "nav.others": "LOS OTROS",

      "video.loading": "Cargando video...",
      "index.title": "HISTORIAS DE LA GUERRILLA",
      "index.subtitle": "VIDAS PERDIDAS EN LA DICTADURA CIVIL MILITAR BRASILEÑA",
      "index.quote": "“Era hijo de Rocha, un viejo militante comunista y su referente de vida; pero siempre apegado a su madre, Annette, quien sostenía la familia: diez hijos, un marido militante y siempre mucho trabajo en la casa llena para los almuerzos de domingo, llenos de discusión política y cerveza.”",
      "index.quote_author": "Texto de Iara Xavier para la Comisión Nacional de la Verdad",
      "index.dedication": "Proyecto dedicado a la familia Rocha y a todas las familias que quedaron atrás.",
      "index.motto": "ORDEN Y PROGRESO",

      "footer.title": "HISTORIAS DE LA GUERRILLA",
      "footer.subtitle": "VIDAS PERDIDAS EN LA DICTADURA CIVIL MILITAR BRASILEÑA",
      "footer.developed": "Proyecto desarrollado por Maria Eduarda Rocha",
      "footer.orientation": "Orientación de Barbara Castro",
      "footer.institution": "Escuela Superior de Diseño Industrial - ESDI, UERJ",

      "project.title": "SOBRE EL PROYECTO",
      "project.p1": "Este proyecto fue desarrollado como Trabajo de Conclusión del Curso de Diseño en la ESDI/UERJ por Maria Eduarda Rocha, bajo la orientación de la profesora Dra. Bárbara Castro. La iniciativa está inspirada en Arnaldo Cardoso Rocha, tío abuelo de la autora, involucrado en la guerrilla y asesinado en 1972, un evento que afectó profundamente a su familia y resalta la necesidad de preservar y compartir las historias de los ciudadanos asesinados por la dictadura civil-militar. Así, el proyecto se dedica a transmitir la memoria de las vidas de las víctimas del Estado brasileño.",
      "project.p2": "Los textos fueron elaborados a partir del tercer volumen del Informe Final de la Comisión Nacional de la Verdad, así como de los expedientes enviados a la Comisión Especial sobre Muertos y Desaparecidos Políticos.",
      "project.p3": "La base de datos utilizada fue producida por Luiz Bines, a partir de la información disponible en el Informe Final de la Comisión Nacional de la Verdad.",

      "commission.title": "COMISIÓN NACIONAL DE LA VERDAD",
      "commission.p1": "La Comisión Nacional de la Verdad (CNV) fue creada en mayo de 2012 para investigar y esclarecer las graves violaciones de derechos humanos cometidas durante la dictadura civil-militar (1964-1985) y el período de 1946 a 1988.",
      "commission.p2": "Durante sus dos años y siete meses de mandato, la CNV llevó a cabo investigaciones, recogió testimonios y determinó responsabilidades, enfocándose en el derecho a la memoria y la verdad.",
      "commission.report_intro": "El Informe Final de la CNV, entregado en diciembre de 2014, se organizó en tres volúmenes principales:",
      "commission.vol1": "<strong>Volumen I:</strong> Contexto histórico de las estructuras de represión y métodos de violación.",
      "commission.vol2": "<strong>Volumen II:</strong> Investigaciones temáticas sobre grupos específicos y patrones de violencia estatal.",
      "commission.vol3": "<strong>Volumen III:</strong> Registro de los casos de 434 muertos o desaparecidos identificados.",
      "commission.recommendations": "El informe concluyó con 29 recomendaciones al Estado brasileño para prevenir la repetición de los abusos y consolidar la democracia.",
      "commission.caption": "Firma del Informe Final por la entonces presidenta Dilma Rousseff.",

      "others.title": "LOS QUE NO PERTENECEN A LA BANDERA",
      "others.p1": "Aunque el Segundo Volumen dedica un capítulo a las muertes de trabajadores, campesinos e indígenas, la Comisión tiene lagunas en la identificación de estas personas, que en su mayoría siguen sin nombre, rostro o historia.",
      "others.p2": "Los residentes de favelas y periferias se vieron especialmente afectados por los desalojos forzosos masivos; un ejemplo de esto fue la destrucción de la Favela da Catacumba en 1968. La población negra también fue un objetivo prioritario de las acciones represivas de la policía política estatal. Aunque algunas comisiones estatales de la verdad trataron de abordar estas lagunas, muchas de estas víctimas siguen ausentes del Tercer Informe.",
      "others.p3": "La mayoría de las víctimas identificadas en el Tercer Volumen del Informe Final de la CNV corresponden a un perfil específico de víctimas de la dictadura.",
      "others.p4": "En este sentido, el informe final cuenta las historias de las víctimas fatales de la dictadura, mientras inscribe simultáneamente en su texto, a través de vacíos y silencios, una serie de biografías desaparecidas. Nombra, reconoce y divulga violaciones graves a los derechos humanos, al tiempo que oculta y excluye otras violencias y víctimas.",
      "others.quote": "“Fuimos sacados de esas comunidades [Favela da Praia do Pinto, Ilha das Dragas e Ilha dos Caiçaras] como animales. En ese momento, COMLURB tenía camiones con ventanas pequeñas como las de los trenes. El gobierno, la Policía Militar y COMLURB tiraban nuestras cosas en camiones de basura, tomando barras de hierro y mazos contra nuestras casas, derribándolas. No respetaban a los niños, no respetaban a los ancianos, y hoy no es diferente. Lo mismo que sucedió durante la dictadura sucede hoy.”",
      "others.quote_author": "Andrea Schettini, para la Revista Histórias Públicas, 2023.<br />Altair Guimarães para la Comisión de la Verdad de Río de Janeiro",
      "others.back_btn": "← VOLVER A LA BANDERA",

      "arnaldo.meta": "28/04/1949 - 1972<br>Militante del PCB y ALN",
      "arnaldo.hero_caption": "Foto de Arnaldo disponible en el Archivo Nacional",
      "arnaldo.hero_text": "Arnaldo nació el 28 de marzo de 1949, en <span class=\"highlight-bold\">Belo Horizonte, Minas Gerais</span>. Hijo de Annette Cardoso Rocha y João de Deus Rocha, creció en el barrio Carmo en una casa animada junto a sus nueve hermanos.",
      "arnaldo.quote1_1": "“Era hijo de Rocha, un viejo militante comunista y su referente de vida; pero siempre apegado a su madre, Annette, quien sostenía la familia: diez hijos, un marido militante y siempre mucho trabajo en la casa llena para los almuerzos de domingo, llenos de discusión política y cerveza.”",
      "arnaldo.quote1_2": "“Arnaldo era un muchacho como muchos de su edad, solo que no amaba a los Beatles y los Rolling Stones, sino el samba y la bossa nova. Le encantaba bailar, salir en citas y conversar con amigos.”",
      "arnaldo.quote1_author": "Texto de Iara Xavier para la Comisión Nacional de la Verdad.",
      "arnaldo.photo1_caption": "Foto del archivo personal. Arnaldo Cardoso Rocha a los 10 años.",
      "arnaldo.content1_p1": "Desde muy joven escuchó y respondió al llamado de la lucha revolucionaria, dando sus primeros pasos en el sector estudiantil del <span class=\"highlight-bold\">Partido Comunista Brasileño</span> (PCB), donde su padre (<span class=\"highlight-bold\">João de Deus Rocha</span>) ya era líder. No terminó la escuela secundaria debido a su involucramiento en el movimiento estudiantil después del golpe de Estado de 1964.",
      "arnaldo.content1_p2": "Dejó el PCB en medio de las disidencias de la época, uniéndose a otros jóvenes para formar la <span class=\"highlight-bold\">Corriente Revolucionaria de Minas Gerais</span>, que luego se integró a la <span class=\"highlight-bold\">Acción Libertadora Nacional (ALN)</span>, comandada por <span class=\"highlight-bg\">Carlos Marighella</span>.",
      "arnaldo.photo2_caption": "Foto del archivo personal. Annette Cardoso Rocha y João de Deus Rocha, 1943.",
      "arnaldo.photo3_caption": "Identificación falsa de Arnaldo Cardoso Rocha.",
      "arnaldo.content2_p1": "En 1969, pasó a la clandestinidad usando los nombres falsos <strong>José Carlos Líbano, Pedro Luís Witaker Vidigal y José Carmo Spinelli</strong> y los apodos: <strong>Giba, Jibóia, Flávio y Roberto</strong>.",
      "arnaldo.content2_p2": "Arnaldo fue asumiendo gradualmente roles más importantes en la organización hasta que, alrededor de 1971, integró el Comando Nacional de la <span class=\"highlight-bold\">ALN</span>.",
      "arnaldo.quote2": "“Reglas de seguridad, manejo de armas, lucha callejera, escapar de bloqueos, la tensión diaria de la lucha. Nada de esto lo endureció. Arnaldo conservó su carácter afable de Minas, de hablar suave, sin prisa, mirando siempre los bellos horizontes. Incluso en los peores momentos, Arnaldo mantuvo su rutina familiar: junto a Iara Xavier iban a la feria el domingo, horneaban pescado, leían los periódicos, escuchaban música y soñaban con tener un hijo. No uno, varios. Adoraba a los niños.”",
      "arnaldo.content3_p1": "Con la creciente represión, decidió salir del país y dirigirse al extranjero. Sin embargo, su estadía fue breve, ya que pronto regresó a <span class=\"highlight-bold\">Brasil</span>.",
      "arnaldo.content3_p2": "En 1972, recibió la noticia del asesinato de su cuñado y comandante, <span class=\"highlight-bg\">Iuri Xavier</span>. A pesar de las órdenes expresas del comando en <span class=\"highlight-bold\">Brasil</span> de permanecer en el extranjero, anunció su decisión de regresar.",
      "arnaldo.content3_p3": "De vuelta en el país, permaneció un tiempo en el Nordeste, participando en el ataque a la <span class=\"highlight-bold\">Agencia de Recaudación de Bodocó</span> en <span class=\"highlight-bold\">Pernambuco</span>. Poco después, regresó a São Paulo el 14 de junio de 1972.",
      "arnaldo.photo4_caption": "Foto de identificación de Arnaldo.",
      "arnaldo.assassination_note": "Arnaldo Cardoso Rocha fue asesinado el 15 de marzo de 1973, en la ciudad de <span class=\"highlight-bold\">São Paulo</span>.",
      "arnaldo.newspaper_caption": "Noticia de las muertes de Francisco Emmanuel Penteado, Francisco Seiko Okama y Arnaldo Cardoso Rocha por el diario Folha da Tarde.",
      "arnaldo.official_ver": "Según la versión oficial publicada el 16 de marzo de 1973 en el diario Folha da Tarde, Arnaldo Cardoso Rocha, <span class=\"highlight-bg\">Francisco Emmanuel Penteado y Francisco Seiko Okama</span> fueron vistos en el barrio Penha de São Paulo por un coche patrulla. Al recibir la orden de detención, según la versión oficial, supuestamente abrieron fuego.",
      "arnaldo.contested_ver": "Esta narrativa fue contestada en la década de 1980 cuando Iara Xavier Pereira y Suzana Keniger Lisbôa comenzaron a buscar información sobre el caso.",
      "arnaldo.banner_caption": "Reportaje de la revista Veja, 1992",
      "arnaldo.banner_p1": "En 1992, la Revista Veja publicó una entrevista con el agente del DOI-CODI/SP Marival Dias Chaves do Canto, en la que contó la historia de <span class=\"highlight-black-bg\">João Henrique de Carvalho</span>, conocido como \"Jota\". Según Marival:",
      "arnaldo.banner_quote": "\"Él asestó el golpe mortal a la ALN. Por su trabajo, Jota fue citado por la extinta Escuela Nacional de Información como un infiltrado modelo. Su delación permitió la eliminación de al menos veinte personas. A partir de 1973, Jota informó sobre todos los comandos de la ALN.\"",
      "arnaldo.banner_p2": "El día de su muerte, Arnaldo estaba en contacto con \"Jota\".",
      "arnaldo.investigation_p1": "A través de la investigación de su compañera, Iara Xavier, se descubrió que Arnaldo fue llevado vivo al DOI-CODI/SP, donde fue torturado.",
      "arnaldo.investigation_p2": "Su familia se enteró de su muerte por televisión. Viajando a São Paulo, lograron recuperar su cuerpo y llevarlo para ser enterrado en el <span class=\"highlight-bold\">Cementerio Parque da Colina</span> en Belo Horizonte. Por orden de las autoridades, el ataúd llegó sellado y el entierro se llevó a cabo sin abrirlo.",
      "arnaldo.quote3": "“Arnaldo vivió cada minuto de su corta vida con total intensidad, no dudó, no vaciló en dar su vida, dejó un grito de advertencia y una prueba de amor y confianza en un Brasil mejor. Así como se atrevió a enfrentarse a los militares, se atrevió a soñar, a ser feliz, a tener un hijo que nunca conoció. Arnaldo dejó de manera inequívoca la lección de que vale la pena luchar por la libertad.”",
      "arnaldo.agents_intro": "Los principales agentes mencionados en el caso son:",
      "arnaldo.agent1": "<span class=\"highlight-black-bg\">Carlos Alberto Brilhante Ustra</span>, señalado como responsable de su secuestro y tortura;",
      "arnaldo.agent2": "<span class=\"highlight-black-bg\">João Henrique de Carvalho</span>, señalado como el informante;",
      "arnaldo.agent3": "<span class=\"highlight-black-bg\">Isaac Abramovich</span> y <span class=\"highlight-black-bg\">Orlando Brandão</span>, responsables de falsificar el informe de la autopsia;",
      "arnaldo.mandate": "Arnaldo murió durante la presidencia de <span class=\"highlight-black-bg\">Emílio Garrastazu Médici</span>.",
      "arnaldo.cert_note": "Apenas el 25 de agosto de 2025 su certificado de defunción rectificado fue entregado a su familia.",
      "arnaldo.source": "Texto basado en el <span class=\"highlight-bold\">Tercer Volumen del Informe de la Comisión Nacional de la Verdad</span> y la Solicitud de Iara Xavier a la Comisión de Muertos y Desaparecidos.",

      "soledad.meta": "06/01/1945 - 1973<br />Militante VPR",
      "soledad.hero_caption": "Foto de Soledad disponible en el Archivo Nacional",
      "soledad.hero_text": "Soledad nació en <span class=\"highlight-bold\">Paraguay</span> y tuvo una vida turbulenta desde su niñez, ya que sus padres (<span class=\"highlight-bold\">Deolinda Viedma Ortiz</span> y <span class=\"highlight-bold\">Alex Rafael Barrett</span>) y su abuelo (<span class=\"highlight-bold\">Rafael Barrett</span>) eran militantes de izquierda que constantemente debían cambiar de país por razones de seguridad.<br><br>Debido a la persecución, la familia huyó de Paraguay hacia <span class=\"highlight-bold\">Argentina</span> cuando Soledad tenía solo tres meses, permaneciendo allí por cuatro años.",
      "soledad.quote_text1": "Luego regresaron a <span class=\"highlight-bold\">Paraguay</span>, pero volvieron a exiliarse, esta vez en Uruguay, para escapar de la dictadura de Stroessner.",
      "soledad.quote_text2": "Desde su adolescencia, Soledad fue activa en el movimiento estudiantil y se dedicó a actividades artísticas como bailarina de danza folclórica.",
      "soledad.quote_text3": "Mientras vivía en <span class=\"highlight-bold\">Montevideo</span> en 1962, a los 17 años, Soledad fue secuestrada por un grupo neonazi que intentó obligarla a gritar consignas a favor de Hitler y en contra de la Revolución Cubana. Cuando Soledad se resistió, le tallaron una esvástica en la piel.",
      "soledad.photo2_caption": "Reportaje del Diario Época de 1962",
      "soledad.content1_p1": "A partir de entonces, Soledad enfrentó persecución constante y decidió ir a <span class=\"highlight-bold\">Cuba</span>, donde recibió entrenamiento guerrillero y conoció a <span class=\"highlight-bg\">José Maria de Araújo</span>, un militante de la Vanguardia Popular Revolucionaria (VPR) que había sido desterrado de Brasil por participar en la movilización de marineros cuando era joven oficial.",
      "soledad.content2_p1": "Soledad y José Maria se casaron y tuvieron una hija, a la que llamaron Ñasaindy de Araújo Barrett.",
      "soledad.content2_p2": "En 1970, José Maria regresó a <span class=\"highlight-bold\">Brasil</span> para trabajar en la resistencia contra la dictadura, y Soledad lo siguió un año después. Al llegar al país, descubrió que José Maria había sido asesinado en el <span class=\"highlight-bold\">DOI-CODI/SP</span>.",
      "soledad.photo3_caption": "Foto de Soledad con su compañero, José Maria de Araújo.",
      "soledad.content3_p1": "Soledad se instaló en <span class=\"highlight-bold\">Pernambuco</span> en medio de la reorganización de la <span class=\"highlight-bold\">VPR</span> en el Nordeste y entabló una relación con el <span class=\"highlight-black-bg\">“Cabo Anselmo”</span>, con quien vivía en <span class=\"highlight-bold\">Rio Doce</span>.",
      "soledad.content3_p2": "Soledad fue una de las víctimas del episodio conocido como la <span class=\"highlight-bold\">Masacre de la Chácara São Bento</span>, una operación orquestada a través del “Cabo Anselmo” actuando como agente infiltrado.",
      "soledad.content3_p3": "Se sospecha que cuando fue asesinada, Soledad estaba embarazada de Anselmo.",
      "soledad.agents_intro": "Los principales agentes mencionados en el caso son:",
      "soledad.agent1": "<span class=\"highlight-black-bg\">Sérgio Paranhos Fleury</span>, comandó la operación que capturó y asesinó a los militantes de la VPR bajo tortura;",
      "soledad.agent2": "<span class=\"highlight-black-bg\">João Henrique de Carvalho</span>, actuando como doble agente, delató a los militantes y participó en la operación de captura;",
      "soledad.agent3": "<span class=\"highlight-black-bg\">Carlos Alberto Augusto</span>, participó en la operación que capturó a los militantes de la VPR.",
      "soledad.mandate": "Soledad murió durante la presidencia de <span class=\"highlight-black-bg\">Emílio Garrastazu Médici</span>.",
      "soledad.source": "Texto basado en el <span class=\"highlight-bold\">Tercer Volumen del Informe Final de la Comisión Nacional de la Verdad (CNV)</span>.",

      "massacre.title": "Masacre de la Chácara São Bento",
      "massacre.p1": "La Masacre de la Chácara São Bento fue un violento episodio en 1973 en Pernambuco. Resultó en la muerte de seis militantes de izquierda pertenecientes al Partido Comunista Revolucionario (PCR)—un grupo que luchaba contra el régimen militar.",
      "massacre.back_btn": "&larr; VOLVER",

      "flag.search_title": "ORDEN Y PROGRESO",
      "flag.search_placeholder": "Buscar víctima...",
      "flag.search_btn_title": "Buscar Víctima",
      "flag.filters_title": "Filtros",
      "flag.close_filters": "Cerrar Filtros",
      "flag.close_card": "Cerrar Tarjeta",
      "flag.loc_header": "LOCALIDAD",
      "flag.loc_norte": "Norte",
      "flag.loc_nordeste": "Nordeste",
      "flag.loc_sudeste": "Sudeste",
      "flag.loc_sul": "Sur",
      "flag.loc_centro_oeste": "Centro-Oeste",
      "flag.loc_fora": "Fuera de Brasil",
      "flag.loc_na": "No Identificado",
      "flag.period_header": "PERÍODO",
      "flag.desc_header": "DESCRIPCIÓN",
      "flag.desc_jovem": "Joven",
      "flag.desc_mulher": "Mujeres",
      "flag.desc_homem": "Hombres",
      "flag.desc_desaparecidos": "Desaparecidos",
      "flag.desc_mortos": "Muertos",
      "flag.clear_filters": "LIMPIAR SELECCIÓN",
      "flag.select_all": "SELECCIONAR TODO",
      "flag.profile_not_found": "Perfil no encontrado.",
      "flag.error_loading_card": "Error al cargar tarjeta:",
      "flag.legend_title": "LEYENDA",
      "flag.legend_disappeared": "Desaparecidos",
      "flag.legend_deceased": "Muertos",
      "flag.legend_young": "Jóvenes",
      "flag.legend_women": "Mujeres",
      "flag.cnv_footnote": "*Datos de la Comisión Nacional de la Verdad"
    }
  };

  // Occupations & locations translation table for dynamic overlay modal cards
  const cardTerms = {
    "Bancario": { pt: "Bancário", en: "Banker", es: "Bancario" },
    "Estudante": { pt: "Estudante", en: "Student", es: "Estudiante" },
    "Médico": { pt: "Médico", en: "Doctor", es: "Médico" },
    "Advogado": { pt: "Advogado", en: "Lawyer", es: "Abogado" },
    "Professor": { pt: "Professor", en: "Teacher", es: "Profesor" },
    "Jornalista": { pt: "Jornalista", en: "Journalist", es: "Periodista" },
    "Militar": { pt: "Militar", en: "Military", es: "Militar" },
    "Operário": { pt: "Operário", en: "Worker", es: "Obrero" },
    "Camponês": { pt: "Camponês", en: "Peasant", es: "Campesino" },
    "Comerciante": { pt: "Comerciante", en: "Merchant", es: "Comerciante" },
    "Sem informação": { pt: "Sem informação", en: "No information", es: "Sin información" },
    "Fora do Brasil": { pt: "Fora do Brasil", en: "Outside Brazil", es: "Fuera de Brasil" },
    "Não Identificado": { pt: "Não Identificado", en: "Unidentified", es: "No Identificado" }
  };

  function getCurrentLanguage() {
    return localStorage.getItem("site_lang") || "pt";
  }

  function setLanguage(lang) {
    if (lang !== "pt" && lang !== "en" && lang !== "es") lang = "pt";
    localStorage.setItem("site_lang", lang);
    applyLanguage(lang);
    notifyIframes(lang);
  }

  function notifyIframes(lang) {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      try {
        iframe.contentWindow.postMessage({ type: "setLanguage", lang: lang }, "*");
      } catch (e) {
        console.error(e);
      }
    });
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang === "en" ? "en" : (lang === "es" ? "es" : "pt-br");

    // 1. Update text elements with data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // 2. Update HTML elements with data-i18n-html
    const htmlElements = document.querySelectorAll("[data-i18n-html]");
    htmlElements.forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    // 3. Update placeholders
    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
    placeholderElements.forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.placeholder = translations[lang][key];
      }
    });

    // 4. Update titles
    const titleElements = document.querySelectorAll("[data-i18n-title]");
    titleElements.forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.title = translations[lang][key];
      }
    });

    // 5. Update Language Switcher UI buttons
    const buttons = document.querySelectorAll(".lang-btn");
    buttons.forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // 6. Translate dynamically inserted profile overlay cards
    translateProfileCards(lang);
  }

  const wordTranslations = {
    "2o Sargento Da Aeronautica": { en: "Air Force 2nd Sergeant", es: "Sargento 2º de la Fuerza Aérea" },
    "Capitao Da Forca Publica Do Estado De Sao Paulo": { en: "Captain of the Public Force of the State of São Paulo", es: "Capitán de la Fuerza Pública del Estado de São Paulo" },
    "Policia Militar": { en: "Military Police", es: "Policía Militar" },
    "Forca Publica": { en: "Public Force", es: "Fuerza Pública" },
    "Dona De Casa": { en: "Housewife", es: "Ama de casa" },
    "Dona de casa": { en: "Housewife", es: "Ama de casa" },
    "Bolsa De Valores": { en: "Stock Exchange", es: "Bolsa de Valores" },
    "Corretor De Imoveis": { en: "Real Estate Broker", es: "Corredor de Bienes Raíces" },
    "Corretor De Seguros": { en: "Insurance Broker", es: "Corredor de Seguros" },
    "Vendedor De Carros": { en: "Car Salesman", es: "Vendedor de Autos" },
    "Trabalhador Rural": { en: "Rural Worker", es: "Trabajador Rural" },
    "Trabalhadora Rural": { en: "Rural Worker", es: "Trabajador Rural" },
    "Sindicalista Rural": { en: "Rural Unionist", es: "Sindicalista Rural" },
    "Trabalhador Torneiro-Mecanico": { en: "Turner-Mechanic Worker", es: "Obrero Tornero Mecánico" },
    "Operador De Maquinas": { en: "Machine Operator", es: "Operador de Máquinas" },
    "Lider Sindical": { en: "Union Leader", es: "Líder Sindical" },
    "Líder Sindical": { en: "Union Leader", es: "Líder Sindical" },
    "Dirigente Sindical": { en: "Union Leader", es: "Líder Sindical" },
    "Deputado Federal": { en: "Federal Deputy", es: "Diputado Federal" },
    "Deputado Estadual": { en: "State Deputy", es: "Diputado Estatal" },
    "Deputado Constituinte": { en: "Constituent Deputy", es: "Diputado Constituyente" },
    "Professor Universitario": { en: "University Professor", es: "Profesor Universitario" },
    "Professor Universitário": { en: "University Professor", es: "Profesor Universitario" },
    "Professora Universitaria": { en: "University Professor", es: "Profesor Universitario" },
    "Professora Universitária": { en: "University Professor", es: "Profesor Universitario" },
    "Professor De Educacao Fisica": { en: "Physical Education Teacher", es: "Profesor de Educación Física" },
    "Professor De Geografia": { en: "Geography Teacher", es: "Profesor de Geografía" },
    "Professor De Frances": { en: "French Teacher", es: "Profesor de Francés" },
    "Professora De Teatro": { en: "Theater Teacher", es: "Profesor de Teatro" },
    "Empregada Domestica": { en: "Housemaid", es: "Empleada Doméstica" },
    "Empregada Doméstica": { en: "Housemaid", es: "Empleada Doméstica" },
    "Estudante Universitario": { en: "University Student", es: "Estudiante Universitario" },
    "Estudante Universitário": { en: "University Student", es: "Estudiante Universitario" },
    "Estudante Universitaria": { en: "University Student", es: "Estudiante Universitario" },
    "Estudante Universitária": { en: "University Student", es: "Estudiante Universitario" },
    "Estudante Secundarista": { en: "High School Student", es: "Estudiante Secundario" },
    "Secundarista": { en: "High School", es: "Secundaria" },
    "Estudante De Arquitetura": { en: "Architecture Student", es: "Estudiante de Arquitectura" },
    "Estudante De Quimica": { en: "Chemistry Student", es: "Estudiante de Química" },
    "Estudante De Química": { en: "Chemistry Student", es: "Estudiante de Química" },
    "Bancaria e Estudante": { en: "Banker and Student", es: "Bancario y Estudiante" },
    "Bancária e Estudante": { en: "Banker and Student", es: "Bancario y Estudiante" },
    "Bancaria e Estudante Secundarista": { en: "Banker and High School Student", es: "Bancario y Estudiante Secundario" },
    "Estudante Atuacao Politica": { en: "Student Political Activity", es: "Actividad Política Estudiantil" },
    "Movimento De Libertacao Popular": { en: "Popular Liberation Movement", es: "Movimiento de Liberación Popular" },
    "Movimento Revolucionario 8 De Outubro": { en: "October 8th Revolutionary Movement", es: "Movimiento Revolucionario 8 de Octubre" },
    "Comissao Nacional da Verdade": { en: "National Truth Commission", es: "Comisión Nacional de la Verdad" },
    "Comissão Nacional da Verdade": { en: "National Truth Commission", es: "Comisión Nacional de la Verdad" },
    "Ministerio Da Justica": { en: "Ministry of Justice", es: "Ministerio de Justicia" },
    "Ministério da Justiça": { en: "Ministry of Justice", es: "Ministerio de Justicia" },
    "Diretor Da Divisao De Materiais": { en: "Director of the Materials Division", es: "Director de la División de Materiales" },
    "Funcionario Aposentado": { en: "Retired Employee", es: "Empleado Jubilado" },
    "Funcionário Aposentado": { en: "Retired Employee", es: "Empleado Jubilado" },
    "Funcionario Publico": { en: "Public Servant", es: "Servidor Público" },
    "Funcionário Público": { en: "Public Servant", es: "Servidor Público" },
    "Funcionario Do Frigorifico Pedro Hermanos Na Argentina": { en: "Employee of the Pedro Hermanos Slaughterhouse in Argentina", es: "Empleado del Frigorífico Pedro Hermanos en Argentina" },
    "Data e Local Do Desaparecimento": { en: "Date and Place of Disappearance", es: "Fecha y Lugar de Desaparición" },
    "Data e Local Da Morte/Desaparecimento": { en: "Date and Place of Death/Disappearance", es: "Fecha y Lugar de Muerte/Desaparición" },
    "Ex-Sargento Do Exercito": { en: "Former Army Sergeant", es: "Ex Sargento del Ejército" },
    "Ex-Sargento Do Exército": { en: "Former Army Sergeant", es: "Ex Sargento del Ejército" },
    "Segundo Sargento Do Exercito Reformado": { en: "Retired Army Second Sergeant", es: "Segundo Sargento del Ejército Jubilado" },
    "Segundo Sargento Do Exército Reformado": { en: "Retired Army Second Sergeant", es: "Segundo Sargento del Ejército Jubilado" },
    "Sargento Do Exercito": { en: "Army Sergeant", es: "Sargento del Ejército" },
    "Sargento Do Exército": { en: "Army Sergeant", es: "Sargento del Ejército" },
    "Soldado Do Exercito": { en: "Army Soldier", es: "Soldado del Ejército" },
    "Soldado Do Exército": { en: "Army Soldier", es: "Soldado del Ejército" },
    "Tenente Da Reserva Da Policia Militar": { en: "Reserve Lieutenant of the Military Police", es: "Teniente de Reserva de la Policía Militar" },
    "Tenente Da Reserva": { en: "Reserve Lieutenant", es: "Teniente de Reserva" },
    "Major Do Exercito": { en: "Army Major", es: "Mayor del Ejército" },
    "Major Do Exército": { en: "Army Major", es: "Mayor del Ejército" },
    "Coronel Da Forca Publica": { en: "Colonel of the Public Force", es: "Coronel de la Fuerza Pública" },
    "Sargento Da Marinha": { en: "Navy Sergeant", es: "Sargento de la Marina" },
    "Cabo Da Marinha": { en: "Navy Corporal", es: "Cabo de la Marina" },
    "Marinheiro (Ex-Militar)": { en: "Sailor (Former Military)", es: "Marinero (Ex Militar)" },
    "Cabo Da Marinha (Ex-Militar)": { en: "Navy Corporal (Former Military)", es: "Cabo de la Marina (Ex Militar)" },
    "Segundo Sargento": { en: "Second Sergeant", es: "Segundo Sargento" },
    "Torneiro Mecanico": { en: "Turner Mechanic", es: "Tornero Mecánico" },
    "Torneiro Mecânico": { en: "Turner Mechanic", es: "Tornero Mecánico" },
    "Tecnico Em Eletronica": { en: "Electronics Technician", es: "Técnico en Electrónica" },
    "Técnico Em Eletrônica": { en: "Electronics Technician", es: "Técnico en Electrónica" },
    "Tecnico Em Telefonia": { en: "Telephony Technician", es: "Técnico en Telefonía" },
    "Técnico Em Telefonia": { en: "Telephony Technician", es: "Técnico en Telefonía" },
    "Tecnico Em Laticinios": { en: "Dairy Technician", es: "Técnico en Lácteos" },
    "Técnico Em Laticínios": { en: "Dairy Technician", es: "Técnico en Lácteos" },
    "Desenhista Mecanico": { en: "Mechanical Draftsman", es: "Dibujante Mecánico" },
    "Desenhista Mecânico": { en: "Mechanical Draftsman", es: "Dibujante Mecánico" },
    "Operario Da Construcao Civil": { en: "Construction Worker", es: "Obrero de Construcción" },
    "Operário Da Construção Civil": { en: "Construction Worker", es: "Obrero de Construcción" },
    "Operario Do Setor Quimico": { en: "Chemical Sector Worker", es: "Obrero del Sector Químico" },
    "Operário Do Setor Químico": { en: "Chemical Sector Worker", es: "Obrero del Sector Químico" },
    "Operario Metalurgico": { en: "Metallurgical Worker", es: "Obrero Metalúrgico" },
    "Operário Metalúrgico": { en: "Metallurgical Worker", es: "Obrero Metalúrgico" },
    "Operaria Metalurgica": { en: "Metallurgical Worker", es: "Obrero Metalúrgico" },
    "Operária Metalúrgica": { en: "Metallurgical Worker", es: "Obrero Metalúrgico" },
    "Operario Grafico": { en: "Graphic Worker", es: "Obrero Gráfico" },
    "Operário Gráfico": { en: "Graphic Worker", es: "Obrero Gráfico" },
    "Operario Naval": { en: "Naval Worker", es: "Obrero Naval" },
    "Operário Naval": { en: "Naval Worker", es: "Obrero Naval" },
    "Carpinteiro Naval": { en: "Naval Carpenter", es: "Carpintero Naval" },
    "Agente Pastoral": { en: "Pastoral Agent", es: "Agente Pastoral" },
    "Dancarina Folclorica": { en: "Folk Dancer", es: "Bailarina Folclórica" },
    "Dançarina Folclórica": { en: "Folk Dancer", es: "Bailarina Folclórica" },
    "Representante Comercial": { en: "Commercial Representative", es: "Representante Comercial" },
    "Cronista": { en: "Chronicler", es: "Cronista" },
    "Gerente De Transportadora De Cargas": { en: "Cargo Transportation Manager", es: "Gerente de Transporte de Carga" },
    "Gerente De Jornal": { en: "Newspaper Manager", es: "Gerente de Periódico" },
    "Contador": { en: "Accountant", es: "Contador" },
    "Guarda-Vidas": { en: "Lifeguard", es: "Salvavidas" },
    "Dramaturga": { en: "Playwright", es: "Dramaturgo" },
    "Dramaturgo": { en: "Playwright", es: "Dramaturgo" },
    "Ensaista": { en: "Essayist", es: "Ensayista" },
    "Ensianista": { en: "Essayist", es: "Ensayista" },
    "Tradutor": { en: "Translator", es: "Traductor" },
    "Escritor": { en: "Writer", es: "Escritor" },
    "Ator": { en: "Actor", es: "Actor" },
    "Administrador Publico": { en: "Public Administrator", es: "Administrador Público" },
    "Administrador Público": { en: "Public Administrator", es: "Administrador Público" },
    "Secretaria Da Ordem Dos Advogados Do Brasil": { en: "Secretary of the Brazilian Bar Association (OAB)", es: "Secretario del Colegio de Abogados de Brasil (OAB)" },
    "Secretária Da Ordem Dos Advogados Do Brasil": { en: "Secretary of the Brazilian Bar Association (OAB)", es: "Secretario del Colegio de Abogados de Brasil (OAB)" },
    "Prefeitura De Sao Paulo": { en: "São Paulo City Hall", es: "Ayuntamiento de São Paulo" },
    "Advogada": { en: "Lawyer", es: "Abogado" },
    "Advogado": { en: "Lawyer", es: "Abogado" },
    "Bancaria": { en: "Banker", es: "Bancario" },
    "Bancária": { en: "Banker", es: "Bancario" },
    "Bancario": { en: "Banker", es: "Bancario" },
    "Bancário": { en: "Banker", es: "Bancario" },
    "Estudante": { en: "Student", es: "Estudiante" },
    "Medico": { en: "Doctor", es: "Médico" },
    "Médico": { en: "Doctor", es: "Médico" },
    "Medica": { en: "Doctor", es: "Médico" },
    "Médica": { en: "Doctor", es: "Médico" },
    "Professor": { en: "Teacher", es: "Profesor" },
    "Professora": { en: "Teacher", es: "Profesor" },
    "Jornalista": { en: "Journalist", es: "Periodista" },
    "Militar": { en: "Military", es: "Militar" },
    "Operaria": { en: "Worker", es: "Obrero" },
    "Operária": { en: "Worker", es: "Obrero" },
    "Operario": { en: "Worker", es: "Obrero" },
    "Operário": { en: "Worker", es: "Obrero" },
    "Campones": { en: "Peasant", es: "Campesino" },
    "Camponês": { en: "Peasant", es: "Campesino" },
    "Comerciante": { en: "Merchant", es: "Comerciante" },
    "Comerciaria": { en: "Shopkeeper", es: "Comerciante" },
    "Comerciária": { en: "Shopkeeper", es: "Comerciante" },
    "Comerciario": { en: "Shopkeeper", es: "Comerciante" },
    "Comerciário": { en: "Shopkeeper", es: "Comerciante" },
    "Metalurgico": { en: "Metallurgist", es: "Metalúrgico" },
    "Metalúrgico": { en: "Metallurgist", es: "Metalúrgico" },
    "Agricultor": { en: "Farmer", es: "Agricultor" },
    "Alfaiate": { en: "Tailor", es: "Sastre" },
    "Artesao": { en: "Artisan", es: "Artesano" },
    "Artesão": { en: "Artisan", es: "Artesano" },
    "Ascensorista": { en: "Lift Operator", es: "Ascensorista" },
    "Carpinteiro": { en: "Carpenter", es: "Carpintero" },
    "Corretor": { en: "Broker", es: "Corredor" },
    "Costureira": { en: "Seamstress", es: "Costurera" },
    "Dentista": { en: "Dentist", es: "Dentista" },
    "Deputado": { en: "Deputy", es: "Diputado" },
    "Desenhista": { en: "Draftsman", es: "Dibujante" },
    "Diplomata": { en: "Diplomat", es: "Diplomático" },
    "Economista": { en: "Economist", es: "Economista" },
    "Eletricista": { en: "Electrician", es: "Electricista" },
    "Enfermeira": { en: "Nurse", es: "Enfermero" },
    "Enfermeiro": { en: "Nurse", es: "Enfermero" },
    "Engenheiro": { en: "Engineer", es: "Ingeniero" },
    "Escriturario": { en: "Clerk", es: "Oficinista" },
    "Escriturário": { en: "Clerk", es: "Oficinista" },
    "Escultor": { en: "Sculptor", es: "Escultor" },
    "Estilista": { en: "Stylist", es: "Estilista" },
    "Farmaceutico": { en: "Pharmacist", es: "Farmacéutico" },
    "Farmacêutico": { en: "Pharmacist", es: "Farmacéutico" },
    "Ferreiro": { en: "Blacksmith", es: "Herrero" },
    "Ferroviario": { en: "Railway Worker", es: "Ferroviario" },
    "Ferroviário": { en: "Railway Worker", es: "Ferroviario" },
    "Geologa": { en: "Geologist", es: "Geólogo" },
    "Geóloga": { en: "Geologist", es: "Geólogo" },
    "Geologo": { en: "Geologist", es: "Geólogo" },
    "Geólogo": { en: "Geologist", es: "Geólogo" },
    "Grafico": { en: "Graphic Artist", es: "Artista Gráfico" },
    "Gráfico": { en: "Graphic Artist", es: "Artista Gráfico" },
    "Industriaria": { en: "Industrial Worker", es: "Obrero Industrial" },
    "Industriária": { en: "Industrial Worker", es: "Obrero Industrial" },
    "Industriario": { en: "Industrial Worker", es: "Obrero Industrial" },
    "Industriário": { en: "Industrial Worker", es: "Obrero Industrial" },
    "Lavrador": { en: "Laborer", es: "Trabajador" },
    "Marinheiro": { en: "Sailor", es: "Marinero" },
    "Maritimo": { en: "Maritime Worker", es: "Trabajador Marítimo" },
    "Marítimo": { en: "Maritime Worker", es: "Trabajador Marítimo" },
    "Mecanico": { en: "Mechanic", es: "Mecánico" },
    "Mecânico": { en: "Mechanic", es: "Mecánico" },
    "Motorista": { en: "Driver", es: "Chofer" },
    "Musico": { en: "Musician", es: "Músico" },
    "Músico": { en: "Musician", es: "Músico" },
    "Padre": { en: "Priest", es: "Sacerdote" },
    "Policial": { en: "Police Officer", es: "Policía" },
    "Procurador": { en: "Attorney", es: "Procurador" },
    "Programador": { en: "Programmer", es: "Programador" },
    "Psicologa": { en: "Psychologist", es: "Psicólogo" },
    "Psicóloga": { en: "Psychologist", es: "Psicólogo" },
    "Psicologo": { en: "Psychologist", es: "Psicólogo" },
    "Psicólogo": { en: "Psychologist", es: "Psicólogo" },
    "Sacerdote": { en: "Priest", es: "Sacerdote" },
    "Sapateiro": { en: "Shoemaker", es: "Zapatero" },
    "Secretaria": { en: "Secretary", es: "Secretario" },
    "Secretária": { en: "Secretary", es: "Secretario" },
    "Servidor": { en: "Civil Servant", es: "Servidor Público" },
    "Sindicalista": { en: "Unionist", es: "Sindicalista" },
    "Sociologo": { en: "Sociologist", es: "Sociólogo" },
    "Sociólogo": { en: "Sociologist", es: "Sociólogo" },
    "Soldado": { en: "Soldier", es: "Soldado" },
    "Tabeliao": { en: "Notary", es: "Notario" },
    "Tabelião": { en: "Notary", es: "Notario" },
    "Taifeiro": { en: "Steward", es: "Mayordomo" },
    "Taxista": { en: "Taxi Driver", es: "Taxista" },
    "Tecnico": { en: "Technician", es: "Técnico" },
    "Técnico": { en: "Technician", es: "Técnico" },
    "Tenente": { en: "Lieutenant", es: "Teniente" },
    "Vendedor": { en: "Salesperson", es: "Vendedor" },
    "Veterinario": { en: "Veterinarian", es: "Veterinario" },
    "Veterinário": { en: "Veterinarian", es: "Veterinario" },
    " e ": { en: " and ", es: " y " },
    "Ex-Militar": { en: "Former Military", es: "Ex Militar" },
    "Ex-militar": { en: "Former military", es: "Ex militar" },
    "Ex-": { en: "Former ", es: "Ex " },
    "Aposentado": { en: "Retired", es: "Jubilado" },
    "Reformado": { en: "Retired", es: "Jubilado" },
    "Universitario": { en: "University", es: "Universidad" },
    "Universitário": { en: "University", es: "Universidad" },
    "Universitaria": { en: "University", es: "Universidad" },
    "Universitária": { en: "University", es: "Universidad" },
    "Civil": { en: "Civil", es: "Civil" },
    "Publico": { en: "Public", es: "Público" },
    "Público": { en: "Public", es: "Público" },
    "Rural": { en: "Rural", es: "Rural" },
    "Estadual": { en: "State", es: "Estatal" },
    "Federal": { en: "Federal", es: "Federal" },
    "Constituinte": { en: "Constituent", es: "Constituyente" },
    "Lider": { en: "Leader", es: "Líder" },
    "Líder": { en: "Leader", es: "Líder" },
    "Dirigente": { en: "Leader", es: "Líder" },
    "Sindical": { en: "Union", es: "Sindicato" },
    "Nao Consta": { en: "No information", es: "Sin información" },
    "Não Consta": { en: "No information", es: "Sin información" },
    "Nao se Aplica": { en: "Not applicable", es: "No aplica" },
    "Não se Aplica": { en: "Not applicable", es: "No aplica" },
    "Sem Informacoes": { en: "No information", es: "Sin información" },
    "Sem Informações": { en: "No information", es: "Sin información" },
  };

  function translateOccupationString(text, lang) {
    let result = text;
    // Sort keys by length descending to ensure longer phrases are replaced before sub-words
    const keys = Object.keys(wordTranslations).sort((a, b) => b.length - a.length);
    for (const key of keys) {
      const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedKey, "gi");
      result = result.replace(regex, wordTranslations[key][lang] || wordTranslations[key].en);
    }
    return result;
  }

  function translateProfileCards(lang) {
    const cardPlaceholder = document.getElementById("modal-card-placeholder");
    if (!cardPlaceholder) return;

    // Handle standard overlays
    const occupationEl = cardPlaceholder.querySelector(".text-occupation .text-black");
    if (occupationEl) {
      const rawText = occupationEl.getAttribute("data-original") || occupationEl.textContent.trim();
      if (!occupationEl.getAttribute("data-original")) {
        occupationEl.setAttribute("data-original", rawText);
      }
      if (lang === "en" || lang === "es") {
        occupationEl.textContent = translateOccupationString(rawText, lang);
      } else {
        occupationEl.textContent = rawText;
      }
    }

    const locationEl = cardPlaceholder.querySelector(".text-location .text-black");
    if (locationEl) {
      const rawText = locationEl.getAttribute("data-original") || locationEl.textContent.trim();
      if (!locationEl.getAttribute("data-original")) {
        locationEl.setAttribute("data-original", rawText);
      }
      if (cardTerms[rawText] && cardTerms[rawText][lang]) {
        locationEl.textContent = cardTerms[rawText][lang];
      } else if (lang !== "pt") {
        // Translate location prefixes and country names
        let translated = rawText;
        if (lang === "en") {
          translated = translated.replace(/^em /, "in ");
          translated = translated.replace(/Espanha/, "Spain");
          translated = translated.replace(/provincia de/, "province of");
        } else if (lang === "es") {
          translated = translated.replace(/^em /, "en ");
          translated = translated.replace(/Espanha/, "Espa\u00f1a");
          translated = translated.replace(/provincia de/, "provincia de");
        }
        locationEl.textContent = translated;
      } else {
        locationEl.textContent = rawText;
      }
    }

    // Handle Arnaldo overlay
    const arnaldoCard = cardPlaceholder.querySelector(".overlay-arnaldo-8851");
    if (arnaldoCard) {
      const pcbAln = arnaldoCard.querySelector(".text-8855 .text-black");
      if (pcbAln) pcbAln.textContent = lang === "en" ? "PCB and ALN Militant" : (lang === "es" ? "Militante del PCB y ALN" : "Militante PCB e ALN");

      const quote = arnaldoCard.querySelector(".text-8856 .text-black");
      if (quote) quote.textContent = lang === "en"
        ? "“He was a kid like many his age, except he didn't love the Beatles and Rolling Stones, but rather samba and bossa nova. He loved dancing, dating, and talking with friends.”"
        : lang === "es"
          ? "“Arnaldo era un muchacho como muchos de su edad, solo que no amaba a los Beatles y los Rolling Stones, sino el samba y la bossa nova. Le encantaba bailar, salir en citas y conversar con amigos.”"
          : "“Era um garoto como muitos de sua idade, só não amava os Beatles e os Rolling Stones e sim o samba e a bossa nova. Adorava dançar, namorar e conversar com amigos.”";
    }

    // Handle Soledad overlay
    const soledadCard = cardPlaceholder.querySelector(".overlay-soleda-19609");
    if (soledadCard) {
      const vpr = soledadCard.querySelector(".text-19613 .text-black");
      if (vpr) vpr.textContent = lang === "en" ? "VPR Militant" : (lang === "es" ? "Militante VPR" : "Militante VPR");

      const quote = soledadCard.querySelector(".text-19614 .text-black");
      if (quote) quote.textContent = lang === "en"
        ? "“From her teenage years, Soledad was active in the student movement and dedicated herself to artistic activities as a folk dancer.”"
        : lang === "es"
          ? "“Desde su adolescencia, Soledad fue activa en el movimiento estudiantil y se dedicó a actividades artísticas como bailarina de danza folclórica.”"
          : "“Desde a adolescência, Soledad militava no movimento estudantil e se dedicava a atividades artísticas como dançarina folclórica.”";
    }
  }

  function injectStyles() {
    if (document.getElementById("i18n-styles")) return;
    const style = document.createElement("style");
    style.id = "i18n-styles";
    style.textContent = `
      .lang-selector {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: 'Roboto Mono', monospace;
        font-size: 14px;
        font-weight: 700;
        margin-left: auto;
      }
      .lang-btn {
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.7);
        font-family: 'Roboto Mono', monospace;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 4px;
        transition: all 0.2s ease;
        letter-spacing: 1px;
      }
      .lang-btn:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.15);
      }
      .lang-btn.active {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.25);
        text-decoration: underline;
        text-underline-offset: 4px;
      }
      .lang-divider {
        color: rgba(255, 255, 255, 0.5);
        font-size: 14px;
        user-select: none;
      }
    `;
    if (document.head) {
      document.head.appendChild(style);
    }
  }

  function createHeaderLanguageSwitcher() {
    injectStyles();
    // Check if header already has selector
    if (document.querySelector(".lang-selector")) return;


    const headers = document.querySelectorAll(".global-header, .nav-bar-lang-container");
    headers.forEach((header) => {
      const switcher = document.createElement("div");
      switcher.className = "lang-selector";
      switcher.innerHTML = `
        <button class="lang-btn" data-lang="pt" aria-label="Português">PT</button>
        <span class="lang-divider">|</span>
        <button class="lang-btn" data-lang="en" aria-label="English">EN</button>
        <span class="lang-divider">|</span>
        <button class="lang-btn" data-lang="es" aria-label="Español">ES</button>
      `;
      header.appendChild(switcher);
    });

    // Attach click events
    document.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("lang-btn")) {
        const selectedLang = e.target.getAttribute("data-lang");
        if (selectedLang) {
          setLanguage(selectedLang);
        }
      }
    });
  }

  // Observe DOM insertions (for dynamically loaded profile modal cards)
  const observer = new MutationObserver(() => {
    observer.disconnect();
    translateProfileCards(getCurrentLanguage());
    const cardPlaceholder = document.getElementById("modal-card-placeholder");
    if (cardPlaceholder) {
      observer.observe(cardPlaceholder, { childList: true, subtree: true });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    createHeaderLanguageSwitcher();
    const currentLang = getCurrentLanguage();
    applyLanguage(currentLang);

    const cardPlaceholder = document.getElementById("modal-card-placeholder");
    if (cardPlaceholder) {
      observer.observe(cardPlaceholder, { childList: true, subtree: true });
    }
  });

  // Listen for storage events across tabs/windows
  window.addEventListener("storage", function (e) {
    if (e.key === "site_lang" && e.newValue) {
      applyLanguage(e.newValue);
    }
  });

  // Listen for postMessage from parent or subframes
  window.addEventListener("message", function (e) {
    if (e.data && e.data.type === "setLanguage" && e.data.lang) {
      localStorage.setItem("site_lang", e.data.lang);
      applyLanguage(e.data.lang);
    }
  });

  // Expose global object
  window.i18n = {
    setLanguage: setLanguage,
    getCurrentLanguage: getCurrentLanguage,
    applyLanguage: applyLanguage,
    translations: translations
  };
})();
