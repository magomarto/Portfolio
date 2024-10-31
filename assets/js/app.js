const content = {
  pt: {
      
      home: `
          <div class="content-wrapper">
              <section class="home">
                  <div class="greetings content-card">
                      <div class="greetings-title">
                          <h1 class="t1">Olá amigo</h1>
                          <h1 class="t2">Eu sou <span>Lucas</span></h1>
                          <h1 class="t3">Eu <span>Desenvolvo Software</span></h1>
                      </div>
                  </div>
              </section>
          </div>
      `,
      about: `
          <section class="about-wrapper">
              <div class="about-section about-content-card">
                  <div class="about-content">
                      <div class="about-title">
                          <h1>Bio</h1>
                      </div>
                      <div class="about-text">
                          <p>Texto top aqui</p>
                      </div>
                  </div>
              </div>
          </section>
      `,
      work: `
          <div class="work-content work-content-card">
              <div class="work-gallery">
                  <div class="work-project-card card-6">
                      <h1 class="work-project-card-title tooltip ">
                          Exemplo de projeto 1 <span class="tooltiptext">
                          Ideias de projeto: 
                          <br>-ideia1 
                          <br>-ideia2
                          </span>
                      </h1>
                      <a href="https://github.com/magomarto/Georunner" target="_blank">
                          <img class="workPic tooltip" src="https://github.com/magomarto/Georunner">
                      </a> 
                      <a href="https://github.com/magomarto/Georunner">  
                          <p class="button-project btn-github">Ir para GITHUB</p>
                      </a>
                  </div>
              </div>
          </div>
      `,
      skills: `
          <div class="skills-section">
              <div class="skills-content skills-content-card">
                  <div class="skills-title">
                      <h1>Habilidades</h1>
                  </div>
                  <div class="skills-text">
                      <p> Minha especialidade inclui:
                      <p>- Python <i class="fab fa-python"></i>, Django, GNU/Linux <i class="fab fa-linux"></i> e PostgreSQL <i class="fas fa-database"></i></p></p>
                      <p>Mas também uso:</p>
                      <p>- JavaScript <i class="fa-brands fa-js"></i>, C#, C++ and Shell Scripts<br/>
                      - Git/Github <i class="fa-brands fa-git-alt"></i></p>
                      <p> Atualmente estou aprofundando meu conhecimento em GNU/Linux <i class="fab fa-linux"></i> e Redes de Computadores <i class="fa-solid fa-globe"></i></p>
                      <p> Estou me preparando para as Certificações: CCNA e LPIC-1</p>
                  </div>
              </div>
          </div>
      `,
      navbar: {
        home: "Home",
        about: "Sobre",
        work: "Projetos",
        skills: "Habilidades"
      },
      LetsTalk: {
        contact: "Contato"
      }
      
  },
  en: {
      home: `
          <div class="content-wrapper">
              <section class="home">
                  <div class="greetings content-card">
                      <div class="greetings-title">
                          <h1 class="t1">Hello friend</h1>
                          <h1 class="t2">I am <span>Lucas</span></h1>
                          <h1 class="t3">I <span>Develop Software</span></h1>
                      </div>
                  </div>
              </section>
          </div>
      `,
      about: `
          <section class="about-wrapper">
              <div class="about-section about-content-card">
                  <div class="about-content">
                      <div class="about-title">
                          <h1>Bio</h1>
                      </div>
                      <div class="about-text">
                          <p>Top text here</p>
                      </div>
                  </div>
              </div>
          </section>
      `,
      work: `
          <div class="work-content work-content-card">
              <div class="work-gallery">
                  <div class="work-project-card card-6">
                      <h1 class="work-project-card-title tooltip ">
                          Example project 1 <span class="tooltiptext">
                          Project idea: 
                          <br>-idea1 
                          <br>-idea2
                          </span>
                      </h1>
                      <a href="https://github.com/magomarto/Georunner" target="_blank">
                          <img class="workPic tooltip" src="https://github.com/magomarto/Georunner">
                      </a> 
                      <a href="https://github.com/magomarto/Georunner">  
                          <p class="button-project btn-github">Go to GITHUB</p>
                      </a>
                  </div>
              </div>
          </div>
      `,
      skills: `
          <div class="skills-section">
              <div class="skills-content skills-content-card">
                  <div class="skills-title">
                      <h1>Skills</h1>
                  </div>
                  <div class="skills-text">
                      <p> My specialties include:
                      <p>- Python<i class="fab fa-python"></i>, Django, GNU/Linux<i class="fab fa-linux"></i> and PostgreSQL<i class="fas fa-database"></i></p></p>
                      <p>But I also use:</p>
                      <p>- JavaScript<i class="fa-brands fa-js"></i>, C#, C++, Shell Scripts<br/>
                      - Git/Github <i class="fa-brands fa-git-alt"></i>, APACHE<i class="fa-solid fa-server"></i></p>
                      <p> Currently, I am deepening my knowledge in GNU/Linux <i class="fab fa-linux"></i> and Computer Networks <i class="fa-solid fa-globe"></i></p>
                      <p> I am preparing for the Certifications: CCNA and LPIC-1</p>
                  </div>
              </div>
          </div>
      `,
      navbar: {
        home: "Home",
        about: "About",
        work: "Projects",
        skills: "Skills"
      },
      LetsTalk: {
        contact: "Contact Me"
      }
  }
};
let currentLanguage = 'pt';
let contentBox = document.querySelector(".content-wrapper");
let navItems = document.querySelectorAll('.nav-bar li');
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const skills = document.querySelector("#skills");
let phoneContact = document.querySelector(".letsTalk");
const pt = document.querySelector("#pt");
const en = document.querySelector("#en");

function updateNavbar() {
  navItems[0].textContent = content[currentLanguage].navbar.home;
  navItems[1].textContent = content[currentLanguage].navbar.about;
  navItems[2].textContent = content[currentLanguage].navbar.work;
  navItems[3].textContent = content[currentLanguage].navbar.skills;
}

contentBox.innerHTML = content[currentLanguage].home; 
updateNavbar();


const animateElements = (sequence, animations) => {
  animations.forEach(({ selector, props, duration }) => {
      sequence.from(selector, duration, props);
  });
};

const enterSequence = new TimelineMax({});
const initialAnimations = [
  { selector: ".letsTalk", props: { x: -300 }, duration: 1 },
  { selector: "#home", props: { opacity: 0 }, duration: 0.1 },
  { selector: "#home", props: { y: 400, fontSize: 250 }, duration: 0.3 },
  { selector: "#about", props: { opacity: 0 }, duration: 0.1 },
  { selector: "#about", props: { y: 400, fontSize: 250 }, duration: 0.3 },
  { selector: "#work", props: { opacity: 0 }, duration: 0.1 },
  { selector: "#work", props: { y: 400, fontSize: 250 }, duration: 0.3 },
  { selector: "#skills", props: { opacity: 0 }, duration: 0.1 },
  { selector: "#skills", props: { y: 400, fontSize: 250 }, duration: 0.3 },
  { selector: "#pt", props: { opacity: 0 }, duration: 0.1 },
  { selector: "#pt", props: { y: 400, fontSize: 250 }, duration: 0.3 },
  { selector: "#en", props: { opacity: 0 }, duration: 0.1 },
  { selector: "#en", props: { y: 400, fontSize: 250 }, duration: 0.3 },
  { selector: ".home", props: { opacity: 0, x: -300 }, duration: 1 },
  { selector: ".t1", props: { opacity: 0 }, duration: 0.1 },
  { selector: ".t2", props: { opacity: 0 }, duration: 0.1 },
  { selector: ".t3", props: { opacity: 0 }, duration: 0.1 },
  { selector: ".interface-settings li", props: { x: 550 }, duration: 0.9 },
];

animateElements(enterSequence, initialAnimations);
enterSequence.play();

pt.addEventListener("click", () => changeLanguage('pt'));
en.addEventListener("click", () => changeLanguage('en'));

function changeLanguage(lang) {
  currentLanguage = lang; 
  const newContent = content[currentLanguage].home; 
  contentBox.innerHTML = ""; 
  contentBox.innerHTML = newContent;
  updateNavbar(); 

  const openTimeline = new TimelineMax({});
  animateElements(openTimeline, [
      { selector: ".home", props: { opacity: 0, x: -300 }, duration: 1 },
      { selector: ".t1", props: { opacity: 0 }, duration: 0.1 },
      { selector: ".t2", props: { opacity: 0 }, duration: 0.1 },
      { selector: ".t3", props: { opacity: 0 }, duration: 0.1 },
  ]);
  openTimeline.play(); 
}


const handleClick = (contentType) => {
  contentBox.innerHTML = content[currentLanguage][contentType]; 
  const openTimeline = new TimelineMax({});

  const animations = {
      home: [
          { selector: ".home", props: { opacity: 0, x: -300 }, duration: 1 },
          { selector: ".t1", props: { opacity: 0 }, duration: 0.1 },
          { selector: ".t2", props: { opacity: 0 }, duration: 0.1 },
          { selector: ".t3", props: { opacity: 0 }, duration: 0.1 },
      ],
      about: [
        { selector: ".about-section", props: { opacity: 0, x: 300 }, duration: 1 },
        { selector: ".about-title h1", props: { opacity: 0 }, duration: 0.1 },
        { selector: ".about-title h1", props: { opacity: 1 }, duration: 0.1 },
        { selector: ".about-title h1", props: { opacity: 0 }, duration: 0.1 },
        { selector: ".about-title h1", props: { opacity: 1 }, duration: 0.1 },
        { selector: ".about-title h1", props: { opacity: 0 }, duration: 0.1 },
        { selector: ".about-text p", props: { opacity: 0 }, duration: 0.2 },
      ],
      work: [
        { selector: ".work-content-card", props: { opacity: 0, x: -300 }, duration: 1 },
        { selector: ".card-5", props: { opacity: 0 }, duration: 0.1 },
        { selector: ".card-2", props: { opacity: 0 }, duration: 0.1 },
        { selector: ".card-3", props: { opacity: 0 }, duration: 0.1 },
        { selector: ".card-6", props: { opacity: 0 }, duration: 0.1 },
        { selector: ".card-1", props: { opacity: 0 }, duration: 0.1 },
        { selector: ".card-4", props: { opacity: 0 }, duration: 0.1 },
      ],
      skills: [
        { selector: ".skills-content", props: { opacity: 0, x: 300 }, duration: 0.6 },
        { selector: ".skills-title h1", props: { opacity: 0 }, duration: 0.1 },
        { selector: ".skills-title h1", props: { opacity: 1 }, duration: 0.1 },
        { selector: ".skills-title h1", props: { opacity: 0 }, duration: 0.1 },
        { selector: ".skills-title h1", props: { opacity: 1 }, duration: 0.1 },
        { selector: ".skills-title h1", props: { opacity: 0 }, duration: 0.1 },
        { selector: ".skills-text", props: { opacity: 0 }, duration: 0.2 },
      ]
  };

  contentBox.innerHTML = content[currentLanguage][contentType]; 
  updateNavbar(); 
  animateElements(openTimeline, animations[contentType]); 
  openTimeline.play();
};

home.addEventListener("click", () => handleClick('home'));
about.addEventListener("click", () => handleClick('about'));
work.addEventListener("click", () => handleClick('work'));
skills.addEventListener("click", () => handleClick('skills'));

const openContact = new TimelineMax({ paused: true, reversed: true });
phoneContact.addEventListener("click", () => {
  phoneContact.classList.toggle("opened");
  openContact.reversed() ? openContact.play() : openContact.reverse();
  openContact.to(".interface-settings li", 0.3, { x: 550 });
});
