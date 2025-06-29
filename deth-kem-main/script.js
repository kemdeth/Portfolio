// Matrix Code Rain Effect
function createCodeRain() {
  const codeRain = document.getElementById("codeRain");
  const codeChars =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const numLines = 15;

  for (let i = 0; i < numLines; i++) {
    const line = document.createElement("div");
    line.className = "code-line";
    line.style.left = Math.random() * 100 + "%";
    line.style.animationDuration = Math.random() * 3 + 5 + "s";
    line.style.animationDelay = Math.random() * 2 + "s";

    let codeText = "";
    for (let j = 0; j < Math.floor(Math.random() * 20 + 10); j++) {
      codeText += codeChars[Math.floor(Math.random() * codeChars.length)];
    }
    line.textContent = codeText;

    codeRain.appendChild(line);
  }
}

// Initialize code rain
createCodeRain();

// Refresh code rain every 8 seconds
setInterval(() => {
  const codeRain = document.getElementById("codeRain");
  codeRain.innerHTML = "";
  createCodeRain();
}, 8000);

// Smooth scrolling for navigation
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation highlight
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("actives");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("actives");
    }
  });
});

// Developer avatar interaction
const developerAvatar = document.querySelector(".developer-avatar");
if (developerAvatar) {
  developerAvatar.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05) rotate(5deg)";
    this.style.boxShadow = "0 0 80px rgba(0, 255, 136, 0.8)";
  });

  developerAvatar.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
    this.style.boxShadow = "0 0 50px rgba(0, 255, 136, 0.5)";
  });

  developerAvatar.addEventListener("click", function () {
    this.style.animation = "pulse 0.6s ease-in-out";
    setTimeout(() => {
      this.style.animation = "";
    }, 600);
  });
}

// Terminal typing effect enhancement
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Interactive terminal commands
const terminal = document.querySelector(".terminal");
if (terminal) {
  terminal.addEventListener("click", function () {
    const commands = [
      "git status",
      "npm start",
      "docker build .",
      "kubectl apply -f deployment.yaml",
      "python train_model.py",
      "truffle compile",
    ];

    const randomCommand = commands[Math.floor(Math.random() * commands.length)];
    const header = this.querySelector(".terminal-header");
    const originalText = header.textContent;

    header.textContent = `deth@developer:~$ ${randomCommand}`;

    setTimeout(() => {
      header.textContent = originalText;
    }, 2000);
  });
}

// Particle interaction on mouse move
document.addEventListener("mousemove", (e) => {
  const particles = document.querySelectorAll(".particle");
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  particles.forEach((particle, index) => {
    const rect = particle.getBoundingClientRect();
    const particleX = rect.left + rect.width / 2;
    const particleY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
    );

    if (distance < 100) {
      const angle = Math.atan2(mouseY - particleY, mouseX - particleX);
      const force = (100 - distance) / 100;

      particle.style.transform = `translate(${
        Math.cos(angle) * force * 20
      }px, ${Math.sin(angle) * force * 20}px)`;
      particle.style.opacity = Math.min(1, 0.7 + force * 0.3);
    } else {
      particle.style.transform = "translate(0, 0)";
      particle.style.opacity = "0.7";
    }
  });
});

// Social icons hover effects
document.querySelectorAll(".social_icon a").forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.3) translateY(-10px) rotate(360deg)";
    this.style.transition = "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
  });

  icon.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) translateY(0) rotate(0deg)";
    this.style.transition = "all 0.3s ease";
  });
});

// Dynamic skill rotation in dropdowns
const skillsSelect = document.getElementById("skills-roles");
const educationSelect = document.getElementById("education-roles");

if (skillsSelect) {
  skillsSelect.addEventListener("change", function () {
    const selectedSkill = this.value;
    this.style.color = "#ff0080";
    setTimeout(() => {
      this.style.color = "#00ff88";
    }, 300);
  });
}

if (educationSelect) {
  educationSelect.addEventListener("change", function () {
    const selectedEducation = this.value;
    this.style.color = "#ff0080";
    setTimeout(() => {
      this.style.color = "#00ff88";
    }, 300);
  });
}

// Button click effect
const btn = document.querySelector(".btn");
if (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Create ripple effect
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255, 255, 255, 0.6)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.pointerEvents = "none";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    // Simulate navigation
    setTimeout(() => {
      console.log("Navigating to portfolio...");
    }, 300);
  });
}

// Add ripple animation keyframes dynamically
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;

  // Add glow effect when at top
  if (scrollTop === 0) {
    header.style.boxShadow = "0 2px 20px rgba(0, 255, 136, 0.3)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Initialize animations on page load
window.addEventListener("load", () => {
  // Fade in animation for main content
  const homeContent = document.querySelector(".home_content");
  const homeImg = document.querySelector(".home_img");

  if (homeContent) {
    homeContent.style.opacity = "0";
    homeContent.style.transform = "translateY(50px)";
    homeContent.style.transition = "all 1s ease";

    setTimeout(() => {
      homeContent.style.opacity = "1";
      homeContent.style.transform = "translateY(0)";
    }, 300);
  }

  if (homeImg) {
    homeImg.style.opacity = "0";
    homeImg.style.transform = "translateX(-50px)";
    homeImg.style.transition = "all 1s ease";

    setTimeout(() => {
      homeImg.style.opacity = "1";
      homeImg.style.transform = "translateX(0)";
    }, 600);
  }
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Ctrl + / to focus on skills
  if (e.ctrlKey && e.key === "/") {
    e.preventDefault();
    if (skillsSelect) {
      skillsSelect.focus();
    }
  }

  // Escape to scroll to top
  if (e.key === "Escape") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttling to scroll-heavy functions
const throttledScroll = throttle(() => {
  // Your scroll-dependent code here
}, 16); // ~60fps

window.addEventListener("scroll", throttledScroll);
