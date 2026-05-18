/* Poster section data: hotspots (fractional coordinates) + clean reader text */
window.POSTER_DATA = {
  p1: {
    image: "assets/poster-p1.jpeg",
    label: "Page 1 · Rationale, Method, Question",
    sections: [
      {
        id: "p1-intro",
        name: "Introduction",
        title: "Introduction",
        kicker: "Why this study, why now",
        box: [0.025, 0.165, 0.585, 0.320],
        html: `
          <p>Dysmenorrhoea — commonly known as period pain — refers to the pain experienced just before or during menstruation (Chen et al., 2018). The word itself, from the Greek <em>dys</em> (difficult, pain), <em>meno</em> (month) and <em>rhoea</em> (flow), captures both its monthly cycle and its disruptive force (Abu Helwa et al., 2018). Despite its short duration each month, its recurrent and predictable onset gives it many of the hallmarks of chronic pain.</p>
          <p>Period pain affects an estimated <strong>45–95% of women</strong> across their reproductive life and is especially prevalent in adolescence (French, 2008; Iacovides et al., 2015). Adolescence is a critical stage: cognitive abilities are still maturing and academic performance shapes future outcomes. Period pain causes absenteeism (Burnett et al., 2005), reduces classroom attention, and depresses grades (Banikarim et al., 2000). It also clusters with migraine, fibromyalgia, anxiety and stress (Berkley, 2013), and a recent systematic review notes that girls report a higher prevalence of chronic pain than boys — a gap linked to pubertal development (Chambers et al., 2024).</p>
          <p>Educational disparities intersect with the global gender gap in STEM. Women make up only about <strong>35% of STEM graduates</strong> internationally, a figure essentially unchanged for a decade (Gary, 2025). Gender gaps in mathematics — a key STEM gateway subject — persist across many systems (PISA 2022 Results, Volume I).</p>
          <p>Within this context, it is crucial to explore how adolescents experience menstrual pain in relation to their learning, engagement and perceived achievement — warranting a qualitative, Interpretative Phenomenological Analysis (IPA) approach that keeps lived meaning at the centre.</p>
        `
      },
      {
        id: "p1-hero",
        name: "Hero image",
        title: "Unseen barriers",
        kicker: "Cover image",
        box: [0.595, 0.165, 0.975, 0.395],
        imageOnly: true,
        html: `<p class="hero-pull solo">Pain that is normalised<br/>becomes pain that is <em>ignored</em>.</p>`
      },
      {
        id: "p1-aim",
        name: "Aim",
        title: "Aim",
        kicker: "What the study sets out to do",
        box: [0.025, 0.320, 0.975, 0.390],
        html: `
          <p>This study explores how adolescent girls <strong>interpret menstrual pain and its impact on academics</strong>. It focuses on their lived experiences, emotional and cognitive challenges, and the coping strategies they use to manage discomfort while keeping up with school. It also examines how social and contextual factors shape these experiences — including how girls balance productivity and pain to meet academic expectations.</p>
        `
      },
      {
        id: "p1-rq",
        name: "Research Question",
        title: "Research Question",
        kicker: "The question driving the work",
        box: [0.025, 0.390, 0.230, 0.520],
        html: `
          <p class="hero-pull">The missing days, the silent desks,<br/>and the medical gaslighting<br/>that keeps them there.</p>
          <blockquote class="q-research">How do adolescent girls experience and interpret the impact of period pain and related psychological symptoms on their cognitive abilities and academic performance?</blockquote>
        `
      },
      {
        id: "p1-method",
        name: "Methodology",
        title: "Methodology",
        kicker: "Design, participants, procedure",
        box: [0.025, 0.520, 0.230, 0.840],
        html: `
          <p><strong>Design.</strong> This study uses Interpretative Phenomenological Analysis (IPA). Semi-structured interviews will be conducted with 10 participants.</p>
          <p><strong>Participants.</strong> Recruitment will use <em>purposive maximum-variation sampling</em> to capture diverse perspectives across ethnicity, socioeconomic background and parental education. Adolescent girls aged 12–17 who self-identify as having experienced period pain in the past six months and are fluent in English will be recruited. Adolescents with diagnosed learning disabilities or diagnosed gynaecological conditions will be excluded.</p>
          <p><strong>Material.</strong> The advertisement will include a research information sheet, consent form and an initial socio-demographic screening questionnaire designed to ensure diversity across ethnic and socio-economic backgrounds.</p>
          <p>All interviews will be conducted in English, audio-recorded with participant permission, and transcribed using secure transcription software. Each interview will last approximately <strong>40–60 minutes</strong>. To allow participants to share any additional perspective, each interview will conclude with an open-ended prompt: <em>“Please tell us anything else you wish to share about your pain.”</em></p>
          <p><strong>Procedure.</strong> District-level approval will be obtained from the Research Review Board, followed by school-level authorisation. Schools will be asked to display study posters with a QR code linking to the participant information and screening form. Recruitment will then proceed in collaboration with participating schools.</p>
        `
      },
      {
        id: "p1-ethics",
        name: "Ethical Considerations",
        title: "Ethical Considerations",
        kicker: "Consent, confidentiality, care",
        box: [0.240, 0.405, 0.460, 0.750],
        html: `
          <p>Ethical approval will be obtained from King's College Research and Ethics Committee and from the researcher's home higher education institution (HEI). Recruitment and data collection will not commence until both approvals are granted.</p>
          <p>All participants will receive a clear briefing about the consent form and the study (Creswell, 2012) before the interview begins. Participation will only start after an informed consent process. For adolescents, <strong>assent</strong> will be obtained using age-appropriate, accessible language, followed by parental or guardian consent, so that participation rests on the young person's own willingness rather than external influence. Participants will be reminded that participation is voluntary, that they can withdraw at any point, and that they may decline to answer any question.</p>
          <p>Interviews will be conducted in private settings — either in person at school or via a secure online platform. Participants can choose to take part with or without a camera. The date, time and choice of virtual or in-person participation are left to participants.</p>
          <p>All data will be treated as strictly confidential and accessible only to the research team. Participants will be informed that confidentiality may be broken if a serious physical or mental health concern arises, in which case the researcher will contact appropriate support services. To protect anonymity, pseudonyms will be assigned and no personal identifiers will appear in reports, publications or presentations derived from the study. Once interviews are transcribed, audio and video files will be deleted to safeguard participants (Alase, 2017). All files will be secured and password-protected.</p>
        `
      },
      {
        id: "p1-analyses",
        name: "Planned analyses",
        title: "Planned analyses",
        kicker: "Working with the transcripts",
        box: [0.240, 0.750, 0.460, 0.840],
        html: `
          <p>Analysis will follow the IPA tradition, moving close to participants' accounts of their lived experiences. This will involve repeatedly reading each interview transcript, generating exploratory notes on descriptive, linguistic and conceptual content, and developing experiential statements that are then clustered into personal experiential themes for each participant before being integrated across cases into group experiential themes.</p>
        `
      },
      {
        id: "p1-outcome",
        name: "Potential outcome",
        title: "Potential outcome",
        kicker: "Why the findings could matter",
        box: [0.470, 0.420, 0.975, 0.550],
        html: `
          <p>These in-depth analyses may inform schools and health services to design awareness campaigns that <strong>reduce stigma, promote empathy and foster supportive learning environments</strong>. The research may also guide the creation of training programmes for teachers, counsellors and school health professionals — helping them identify students who experience academic or psychological difficulties linked to menstrual pain and implement age-appropriate accommodations.</p>
          <p class="pull">Transforming pain into progress by building supportive learning environments.</p>
        `
      },
      {
        id: "p1-refs",
        name: "References (page 1)",
        title: "References — Page 1",
        kicker: "Sources cited on this page",
        box: [0.470, 0.553, 0.975, 0.840],
        html: `
          <ol class="refs">
            <li>Abu Helwa, H. A., Mitaeb, A. A., AbuHelwa, S., &amp; Al-Hamshri, Y. (2018). Prevalence of dysmenorrhea and predictors of its pain intensity among Palestinian female university students. <em>BMC Women's Health</em>, 18(1), 18. <a href="https://doi.org/10.1186/s12905-018-0516-1" target="_blank" rel="noopener">doi:10.1186/s12905-018-0516-1</a></li>
            <li>Alase, A. (2017). The Interpretative Phenomenological Analysis (IPA): A Guide to a Good Qualitative Research Approach. <em>International Journal of Education &amp; Literacy Studies</em>, 5(2), 9. <a href="https://doi.org/10.7575/aiac.ijels.v.5n.2p.9" target="_blank" rel="noopener">doi:10.7575/aiac.ijels.v.5n.2p.9</a></li>
            <li>Banikarim, C., Chacko, M. R., &amp; Kelder, S. H. (2000). Prevalence and Impact of Dysmenorrhea on Hispanic Female Adolescents. <em>Archives of Pediatrics &amp; Adolescent Medicine</em>, 154(12), 1226–1229.</li>
            <li>Berkley, K. J. (2013). Primary dysmenorrhea: an urgent mandate. <em>Pain</em>, 1(1), 8.</li>
            <li>Burnett, M. A., Antao, V., Black, A., Feldman, K., Grenville, A., Lea, R., Lefebvre, G., Pinsonneault, O., &amp; Robert, M. (2005). Prevalence of Primary Dysmenorrhea in Canada. <em>Journal of Obstetrics and Gynaecology Canada</em>, 27(8), 765–770.</li>
            <li>Chambers, C. T., Dol, J., Tutelman, P. R., et al. (2024). The prevalence of chronic pain in children and adolescents: a systematic review update and meta-analysis. <em>Pain</em>, 165(10), 2215–2234.</li>
            <li>Chen, C. X., Shieh, C., Draucker, C. B., &amp; Carpenter, J. S. (2018). Reasons women do not seek health care for dysmenorrhea. <em>Journal of Clinical Nursing</em>, 27(1–2), e301–e308.</li>
            <li>Creswell, J. W. (2012). <em>Educational research: Planning, conducting, and evaluating quantitative and qualitative research</em> (4th ed.). Pearson.</li>
            <li>French, L. (2008). Dysmenorrhea in Adolescents. <em>Pediatric Drugs</em>, 10(1), 1–7. <a href="https://doi.org/10.2165/00148581-200810010-00001" target="_blank" rel="noopener">doi:10.2165/00148581-200810010-00001</a></li>
            <li>Gary, S. (2025). Women in STEM: global figures and persistent gaps. UNESCO Institute for Statistics.</li>
            <li>Graneheim, U. H., &amp; Lundman, B. (2004). Qualitative content analysis in nursing research: concepts, procedures and measures to achieve trustworthiness. <em>Nurse Education Today</em>, 24(2), 105–112.</li>
            <li>Iacovides, S., Avidon, I., &amp; Baker, F. C. (2015). What we know about primary dysmenorrhea today: a critical review. <em>Human Reproduction Update</em>, 21(6), 762–778.</li>
            <li>OECD. (2023). <em>PISA 2022 Results (Volume I): The State of Learning and Equity in Education</em>. OECD Publishing.</li>
          </ol>
        `
      }
    ]
  },
  p2: {
    image: "assets/poster-p2.jpeg",
    label: "Page 2 · Justification, Reflexivity, Q&A",
    sections: [
      {
        id: "p2-just",
        name: "Justification",
        title: "Justification — methodological and analytical approach",
        kicker: "Why IPA, why these methods",
        box: [0.025, 0.160, 0.585, 0.550],
        html: `
          <p>Dysmenorrhoea is widespread across countries and often causes considerable disruption to school performance (Armour et al., 2019). However, much of the previous literature has not adequately characterised the pain experience, often relying on binary items or simple rating scales that strip out nuance and interpretability (Potur et al., 2014). Dysmenorrhoea can also produce symptoms of depression and anxiety (Terranova, 2018); these psychological consequences — together with pain-related distress — may undermine motivation, concentration and self-esteem, thereby impeding sustained academic achievement (Sanchez et al., 2023).</p>
          <p>Long-standing socio-cultural beliefs further suggest that menstrual pain hampers intellectual functioning, potentially shaping girls' self-efficacy and perceived performance (Walker, 1992). This study addresses these gaps by foregrounding adolescents' own perspectives and examining how socio-cultural beliefs about impaired intellectual functioning during menstruation may act as <strong>invisible barriers</strong> to perceived academic progress.</p>
          <p>A prevailing view is that perceived learning burden is positively associated with the prevalence of dysmenorrhoea during adolescence (Triwahyuningsih et al., 2024). Academic stress may disturb endocrine function, increasing prostaglandin production and triggering excessive uterine contractions, intensifying pain (Tahir et al., 2021). An IPA approach is well-suited to clarify how adolescents experience and interpret this vicious cycle — connecting academic pressure, stress physiology, pain and coping in ways that purely quantitative methods cannot capture.</p>
          <p><strong>Sampling.</strong> Maximum-variation purposive sampling enables the intentional selection of participants who embody the broadest possible range of experiences and perspectives related to menstrual pain. This approach ensures diversity in age, cultural beliefs and socio-economic background, capturing the multifaceted nature of adolescents' experiences and revealing both commonalities and differences across contexts.</p>
          <p><strong>Interviews.</strong> Semi-structured interviews were chosen for their balance of consistency and flexibility, enabling sensitive discussions of menstruation in a private, supportive setting. Unlike focus groups, semi-structured interviews reduce social desirability bias and self-censorship, letting participants speak openly about bodily experiences and academic challenges. Their interactive nature permits real-time clarification and adaptation to participants' cognitive level. Compared with diaries or logs, they capture richer, more nuanced accounts aligned with the interpretative aims of IPA.</p>
          <p><strong>Analysis.</strong> Because dysmenorrhoea is a bodily, emotional and culturally influenced phenomenon, IPA preserves the detail of individual narratives — including stigma and anxiety — before cautiously identifying broader patterns; this matters because intensity, timing and context are central. IPA also involves a <em>double hermeneutic</em>: participants interpret their own experience and the researcher interprets that interpretation (Larkin et al., 2006; Larkin &amp; Thompson, 2013).</p>
        `
      },
      {
        id: "p2-cramp",
        name: "The quiet weight",
        title: "The quiet weight",
        kicker: "What silence carries",
        box: [0.595, 0.160, 0.975, 0.395],
        imageOnly: true,
        html: `<p class="hero-pull solo">Silence does not protect girls;<br/>it only protects the systems<br/>that <em>overlook</em> them.</p>`
      },
      {
        id: "p2-pull",
        name: "IPA",
        title: "IPA",
        kicker: "Method, in one line",
        box: [0.595, 0.395, 0.975, 0.420],
        html: `
          <p class="hero-pull">IPA &mdash; understanding the <em>why</em> behind the <em>what</em><br/>by exploring the <em>how</em>.</p>
          <p class="muted">Interpretative Phenomenological Analysis sits at the heart of this study — it preserves the texture of each girl's account before any pattern is named.</p>
        `
      },
      {
        id: "p2-reflex",
        name: "Reflection / Positionality",
        title: "Reflection — Positionality &amp; Reflexivity",
        kicker: "Where I stand in this work",
        box: [0.025, 0.550, 0.585, 0.760],
        html: `
          <p>As a 40-year-old woman with an engineering background and a current focus on research, my positionality deeply shapes how I approach the study of menstrual pain and its impact on academic performance. Having personally experienced the challenge of balancing academic and professional responsibilities while managing menstrual pain, I bring an empathetic and genuine perspective, which can foster a stronger connection with participants and their narratives. At the same time, I stay attentive to the importance of <strong>reflexivity</strong>, ensuring that my lived experiences and assumptions do not unduly influence the research process.</p>
          <p>To maintain objectivity, I engage in reflexive practices such as journaling and critical self-reflection, constantly examining how my identity, beliefs and experiences inform research design, data collection and analysis. I am also aware of potential power dynamics: younger participants may perceive me as an authority figure and feel hesitant to fully share sensitive experiences around mental health and menstrual pain. To address this, I aim to foster a <em>non-hierarchical, supportive environment</em> based on mutual respect and trust — emphasising that all perspectives are valid and that there are no right or wrong responses.</p>
          <p>Considering the participants' age and developmental stage, I deliberately use age-appropriate, accessible language: replacing clinical terms such as <em>dysmenorrhoea</em> with <em>period pain</em>, and rephrasing psychological terms — anxiety becomes <em>feeling uneasy</em>, depression becomes <em>feeling sad</em> — because adolescents may find it difficult to express complex emotions. By combining this linguistic sensitivity with awareness of my dual role — insider through shared gender and lived experience, outsider through age and academic background — I aim to create an inclusive, respectful research space. This allows participants to express themselves freely, ensuring that the analysis remains balanced, ethically grounded and faithful to their authentic voices, rather than slipping into a counselling tone.</p>
          <p class="hero-pull">Medical apathy is the <em>second symptom</em><br/>of dysmenorrhoea.</p>
        `
      },
      {
        id: "p2-qa",
        name: "Anticipated Q&A",
        title: "Anticipated Questions &amp; Prepared Answers",
        kicker: "Three questions I expect",
        box: [0.025, 0.760, 0.585, 0.965],
        html: `
          <p><strong>Why recruit girls aged 12–17?</strong><br/>
          Dysmenorrhoea typically arises during ovulatory cycles in young girls, since the anovulatory endometrium is not immediately established after menarche (Harel, 2008). Symptom severity tends to decline with age (Sundell et al., 1990), so women in college may experience a relatively reduced impact compared with younger cohorts. Studying this age range therefore lets the work examine the condition at its peak impact on learning.</p>
          <p><strong>Why include participants from different ethnic and cultural backgrounds?</strong><br/>
          Surveys show variation in the prevalence of dysmenorrhoea across cultural groups, even within the same geographical area (Wong &amp; Khoo, 2010). Cultural beliefs and values significantly shape how individuals perceive, interpret and respond to pain — affecting understanding of its causes, meaning, expression and coping (Mathur et al., 2020). Including participants from diverse cultural backgrounds helps the study examine how cultural contexts shape adolescents' experiences of menstrual pain and its perceived effect on academic performance.</p>
          <p><strong>Why examine psychological symptoms alongside menstrual pain?</strong><br/>
          Menstrual pain triggers the stress response, raising cortisol and anxiety, which in turn intensifies pain perception through a two-way feedback loop (Iacovides et al., 2015). Anxiety is not just a consequence of pain but a part of experiencing it; it impairs concentration, working memory and executive function — all directly relevant to academic performance. It also leads to negative pain appraisal, lowers pain tolerance and undermines coping. Examining psychological symptoms alongside menstrual pain therefore provides a deeper account of adolescents' experiences.</p>
        `
      },
      {
        id: "p2-refs",
        name: "References (page 2)",
        title: "References — Page 2",
        kicker: "Sources cited on this page",
        box: [0.595, 0.420, 0.975, 0.965],
        html: `
          <ol class="refs">
            <li>Armour, M., Parry, K., Manohar, N., Holmes, K., Ferfolja, T., Curry, C., MacMillan, F., &amp; Smith, C. A. (2019). The Prevalence and Academic Impact of Dysmenorrhea in 21,573 Young Women: A Systematic Review and Meta-Analysis. <em>Journal of Women's Health</em>, 28(8), 1161–1174. <a href="https://doi.org/10.1089/jwh.2018.7615" target="_blank" rel="noopener">doi:10.1089/jwh.2018.7615</a></li>
            <li>Harel, Z. (2008). Dysmenorrhea in Adolescents. <em>Annals of the New York Academy of Sciences</em>, 1135(1), 185–195. <a href="https://doi.org/10.1196/annals.1429.007" target="_blank" rel="noopener">doi:10.1196/annals.1429.007</a></li>
            <li>Iacovides, S., Avidon, I., &amp; Baker, F. C. (2015). What we know about primary dysmenorrhea today: a critical review. <em>Human Reproduction Update</em>, 21(6), 762–778. <a href="https://doi.org/10.1093/humupd/dmv039" target="_blank" rel="noopener">doi:10.1093/humupd/dmv039</a></li>
            <li>Larkin, M., &amp; Thompson, A. R. (2013). Interpretative Phenomenological Analysis in Mental Health and Psychotherapy (pp. 99–116). Wiley. <a href="https://doi.org/10.1002/9781119973249.ch8" target="_blank" rel="noopener">doi:10.1002/9781119973249.ch8</a></li>
            <li>Larkin, M., Watts, S., &amp; Clifton, E. (2006). Giving voice and making sense in interpretative phenomenological analysis. <em>Qualitative Research in Psychology</em>, 3(2), 102–120. <a href="https://doi.org/10.1191/1478088706qp062oa" target="_blank" rel="noopener">doi:10.1191/1478088706qp062oa</a></li>
            <li>Mathur, V. A., Morris, T., &amp; McNamara, K. (2020). Cultural conceptions of women's labor pain and labor pain management: A mixed-method analysis. <em>Social Science &amp; Medicine</em>, 261, 113240. <a href="https://doi.org/10.1016/j.socscimed.2020.113240" target="_blank" rel="noopener">doi:10.1016/j.socscimed.2020.113240</a></li>
            <li>Potur, D. C., Bilgin, N. C., &amp; Komurcu, N. (2014). Prevalence of Dysmenorrhea in University Students in Turkey: Effect on Daily Activities and Evaluation of Different Pain Management Methods. <em>Pain Management Nursing</em>, 15(4), 768–777. <a href="https://doi.org/10.1016/j.pmn.2013.07.012" target="_blank" rel="noopener">doi:10.1016/j.pmn.2013.07.012</a></li>
            <li>Sanchez, B. N., Kraemer, W. J., &amp; Maresh, C. M. (2023). Premenstrual Syndrome and Exercise: A Narrative Review. <em>Women</em>, 3(2), 348–364. <a href="https://doi.org/10.3390/women3020026" target="_blank" rel="noopener">doi:10.3390/women3020026</a></li>
            <li>Sundell, G., Milsom, I., &amp; Andersch, B. (1990). Factors influencing the prevalence and severity of dysmenorrhoea in young women. <em>BJOG</em>, 97(7), 588–594.</li>
            <li>Tahir, S., et al. (2021). The influence of macronutrient intake, stress and prostaglandin levels (PGF2α) of urine with the incidence of dysmenorrhea in adolescents. <em>Gaceta Sanitaria</em>, 35, S298–S301. <a href="https://doi.org/10.1016/j.gaceta.2021.10.029" target="_blank" rel="noopener">doi:10.1016/j.gaceta.2021.10.029</a></li>
            <li>Terranova, P. (2018). Dysmenorrhea. In <em>Reference Module in Biomedical Sciences</em>, Elsevier. <a href="https://doi.org/10.1016/B978-0-12-801238-3.04092-8" target="_blank" rel="noopener">doi:10.1016/B978-0-12-801238-3.04092-8</a></li>
            <li>Triwahyuningsih, R. Y., Rahfiludin, M. Z., Sulistiyani, &amp; Widjanarko, B. (2024). Role of stress and physical activity on primary dysmenorrhea: A cross-sectional study. <em>Narra J</em>, 4(2), e685. <a href="https://doi.org/10.52225/narra.v4i2.685" target="_blank" rel="noopener">doi:10.52225/narra.v4i2.685</a></li>
            <li>Walker, A. (1992). Men's and Women's Beliefs about the Influence of the Menstrual Cycle on Academic Performance: A Preliminary Study. <em>Journal of Applied Social Psychology</em>, 22(11), 896–909. <a href="https://doi.org/10.1111/j.1559-1816.1992.tb00933.x" target="_blank" rel="noopener">doi:10.1111/j.1559-1816.1992.tb00933.x</a></li>
            <li>Wong, L. P., &amp; Khoo, E. M. (2010). Dysmenorrhea in a multiethnic population of adolescent Asian girls. <em>International Journal of Gynecology &amp; Obstetrics</em>, 108(2), 139–142. <a href="https://doi.org/10.1016/j.ijgo.2009.09.018" target="_blank" rel="noopener">doi:10.1016/j.ijgo.2009.09.018</a></li>
          </ol>
        `
      },
      {
        id: "p2-closing",
        name: "Closing",
        title: "In closing",
        kicker: "A reminder, before you leave this page",
        box: null,
        virtual: true,
        html: `
          <p class="hero-pull solo closing">The history of medicine<br/>is a history of the <em>silence of women</em>.</p>
          <p class="attribution">&mdash; Dr. Elizabeth Blackwell, the first woman to earn a medical degree in the United States, 1849</p>
          <p class="closing-body">This study listens for what that silence has been hiding, in the lives of girls who are still learning to name their pain.</p>
          <p class="closing-signature">Kulsam Shanofer &middot; MSc Applied Neuroscience &middot; King's College London &middot; 2026</p>
        `
      }
    ]
  }
};
