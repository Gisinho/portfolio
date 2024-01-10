const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '#',
    title: 'GS',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Giacomo Signorile',
    role: 'Junior Front End Developer',
    image: '',
    description:
      'Sono uno sviluppatore con un background come ragioniere perito commerciale. In seguito, essendomi appassionato allo sviluppo front-end, ho deciso di approfondire le mie conoscenze informatiche presso un ITS dove mi sono diplomato come tecnico superiore in sviluppo software, acquisendo competenze in Java, Java Spring, HTML, CSS, JavaScript e database. Con esperienza pratica in progetti di assistenza sanitaria a distanza con il framework Angular e una crescente curiosità legato al mondo front-end, sono dedito a migliorare costantemente le mie abilità e contribuire a soluzioni tecnologiche innovative.',
    resume: '/src/assets/CV+Giacomo+Signorile.pdf',
    social: {
      linkedin: 'https://linkedin.com',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'DMW TeleAR',
      description:
        'Soluzione digitale per la gestione assistenziale sanitaria a distanza che mette in contatto i pazienti con terapisti e professionisti della riabilitazione.',
      stack: ['Websocket', 'Git', 'RxJs', 'Swagger', 'VMware', 'JIRA', 'Angular', 'Bootstrap', 'Bitbucket', 'TypeScript', 'HTML5'],
      livePreview: 'https://dmwtelear.it/',
      imageSrc:'/dmw.png'
    },
    {
      name: 'Stage CMS AEM',
      description: 
      'Collaborazione in ambito redazionale sul portale enicom e su altri progetti per la realizzazione di componenti.',
      stack: ['Lavoro di squadra', 'HTML', 'CSS', 'JavaScript', 'Adobe Experience Manager'],
      livePreview: 'https://www.eni.com/it-IT/home.html',
      imageSrc:'/eni.png'
    },
    {
      name: 'Sito Gioelle',
      description:
        'Progettazione, sviluppo, installazione sul server e pubblicazione del sito web. Manutenzione ed assistenza al cliente.',
      stack: ['Lavoro di squadra', 'HTML', 'CSS', 'Sviluppo front-end', 'Wordpress', 'Temi', 'Plugin'],
      livePreview: 'https://www.gioelle.it/',
      imageSrc:'/gioelle.png'
    },
  ]
  
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'MySQL',
    'SCSS',
    'Material UI',
    'Websocket',
    'Scrum',
    'GitHub',
    'Figma',
    'RxJs',
    'Swagger',
    'Bitbucket',
    'Scrum',
    'Adobe AEM',
    'WordPress',
    'Jira',
    'Angular',
    'Angular Material',
    'Bootstrap',
    'Ubuntu',
    'Agile',
    'VMWare',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'giacomo.signorile.92@gmail.com',
  }
  
  export { header, about, projects, skills, contact }