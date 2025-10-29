
  
  
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");


links.forEach(link => {
  link.addEventListener("click", function(e) {
    
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });

    
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});


window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});



const phrases = ["Computer Science Student|", "Frontend Developer|", "Writer."];
let currentPhrase = 0, currentChar = 0, typingForward = true;
const typedEl = document.querySelector(".typed-text");

function typeLoop() {
    const phrase = phrases[currentPhrase];
    if (typingForward) {
        currentChar++;
        if (currentChar > phrase.length) {
            typingForward = false;
            setTimeout(typeLoop, 1000);
            return;
        }
    } else {
        currentChar--;
        if (currentChar < 0) {
            typingForward = true;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(typeLoop, 200);
            return;
        }
    }
    typedEl.textContent = phrase.slice(0, currentChar);
    setTimeout(typeLoop, typingForward ? 80 : 40);
}
typeLoop();


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const aboutCards = document.querySelectorAll(".about-card");
aboutCards.forEach(card => {
    card.addEventListener("click", () => {
        aboutCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
});


const skills = document.querySelectorAll(".skill-fill");
function animateSkills() {
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = "0";
        setTimeout(() => {
            skill.style.width = width;
        }, 300);
    });
}

const aboutSection = document.getElementById("about");
function checkSkillsScroll() {
    const top = aboutSection.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
        animateSkills();
        window.removeEventListener("scroll", checkSkillsScroll);
    }
}
window.addEventListener("scroll", checkSkillsScroll);


(function(){
    emailjs.init("VYeDmmalva_zoUqj7"); 
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", e => {
    e.preventDefault();

    
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    
    status.style.display = "none";

    
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
        status.style.display = "block";
        status.style.color = "red";
        status.textContent = "Names can only contain letters and spaces.";
        return;
    }

    
    const emailPattern = /^[^ ]+@[^ ]+\.com$/;
    if (!emailPattern.test(email)) {
        status.style.display = "block";
        status.style.color = "red";
        status.textContent = "Please enter a valid email address ending with .com.";
        return;
    }

    
    if (message.length === 0) {
        status.style.display = "block";
        status.style.color = "red";
        status.textContent = "Please enter your message.";
        return;
    }

    
    status.style.display = "block";
    status.style.color = "blue";
    status.textContent = "Sending...";

    emailjs.sendForm("service_gjzt4zb", "template_c5xhyl7", form)
        .then(() => {
            status.style.color = "green";
            status.textContent = "✅ Message sent successfully!";
            form.reset();
            setTimeout(() => {
                status.style.display = "none";
            }, 4000);
        }, (error) => {
            console.error("EmailJS error:", error);
            status.style.color = "red";
            status.textContent = "❌ Failed to send message. Check console for details.";
        });
});

document.getElementById("year").textContent = new Date().getFullYear();
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    
    if(document.body.classList.contains("light-theme")){
      themeIcon.classList.remove("☀️");
        themeIcon.classList.add("🌙");
       
   }
    else {
       themeIcon.classList.remove("🌙");
    
   
  themeIcon.classList.add( "☀️");
    }
});

