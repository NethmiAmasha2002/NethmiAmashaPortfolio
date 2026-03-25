import { useState, useEffect, useRef } from "react";
// ─── PUT YOUR PHOTO in src/assets/mine.jpg ───────────────────────────────────
// If you don't have a photo yet, just comment out the import and the <img> will
// be replaced by your initials automatically.
import myPhoto from "./assets/mine.jpg";
 
const projects = [
  {
    title: "GlowSkin",
    subtitle: "Full-Stack E-Commerce Platform · Ongoing",
    desc: "Skincare platform with User and Admin portals for browsing, ordering, and managing products.",
    tech: ["Angular", "Spring Boot", "Java", "REST API", "MySQL", "JWT Auth"],
    github: "https://github.com/NethmiAmasha2002",   // ← add your repo link when ready
    live: "",     // ← add live URL when deployed
    color: "#f472b6",
    ongoing: true,
  },
  
  {
    title: "Learnova",
    subtitle: "Full-Stack Math Tutoring App",
    desc: "Cross-platform mobile app for teacher–student class management with real-time chat, file sharing, and role-based access control.",
    tech: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Railway"],
    github: "https://github.com/NethmiAmasha2002/learnova-backend",
    live: "",
    color: "#3b82f6",
  },
  {
    title: "AI Skin Cancer Detection",
    subtitle: "Bias Reduction Framework",
    desc: "Reducing skin-tone bias in AI-based lesion detection using Explainable AI, fairness-aware regularisation, and medical image analysis.",
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "XAI", "Scikit-learn"],
    github: "",
    live: "",
    color: "#8b5cf6",
  },
  {
    title: "ST Management System",
    subtitle: "Student Management System",
    desc: "Secure web system with real-time student & course records, audit logs, deadline reminders, and Firebase hosting.",
    tech: ["React.js", "Firebase", "Node.js", "GitHub"],
    github: "https://github.com/NethmiAmasha2002/STManagement-System",
    live: "https://student-management-syste-2da3b.web.app/",
    color: "#06b6d4",
  },
  {
    title: "GoGoBot",
    subtitle: "Travel Chatbot",
    desc: "Conversational AI chatbot for trip planning using Rasa and Python with intent recognition and context-aware dialogue management.",
    tech: ["Rasa", "Python", "NLP", "Machine Learning"],
    github: "https://github.com/NethmiAmasha2002/Chatbot-with-rasa",
    live: "",
    color: "#10b981",
  },
  {
    title: "BLUORA",
    subtitle: "Ocean Conservation App",
    desc: "Interactive story-driven mobile app promoting ocean conservation through gamified learning, built with React Native and Figma prototyping.",
    tech: ["React Native", "Figma", "UI/UX Prototyping"],
    github: "https://github.com/NethmiAmasha2002/VISIO4",
    live: "",
    color: "#0ea5e9",
  },
  {
    title: "Delta Apparels Platform",
    subtitle: "Business Software",
    desc: "Web-based system to streamline garment business operations with real-time Firebase database and cloud deployment.",
    tech: ["React.js", "Firebase", "Node.js", "HTML"],
    github: "https://github.com/KavishkaChamath/Delta-Core",
    live: "",
    color: "#f59e0b",
  },
  {
    title: "Expense Tracker 2.0",
    subtitle: "Desktop Finance App",
    desc: "Modular desktop app to track expenses, manage budgets, and generate financial reports with OOP architecture.",
    tech: ["Java", "Swing/JavaFX", "MySQL", "SQLite"],
    github: "https://github.com/NethmiAmasha2002/Expenses-Tracker",
    live: "",
    color: "#ef4444",
  },
  {
    title: "Multi-Agent Bookstore",
    subtitle: "AI Management System",
    desc: "Intelligent bookstore management using multi-agent architecture with ontology-based reasoning powered by Owlready2.",
    tech: ["Python", "Flask", "HTML", "CSS", "Owlready2"],
    github: "https://github.com/NethmiAmasha2002/Bookstore-Management-System",
    live: "",
    color: "#ec4899",
  },
  {
    title: "Apex Justice Storm Pack",
    subtitle: "Personal Safety Wearable",
    desc: "Wearable system for personal safety with real-time GPS monitoring, multi-sensor integration, and secure cloud data transmission.",
    tech: ["NEO-6M GPS", "ESP32-CAM", "MPU-6050", "GSM SIM7600", "Cloud Sync"],
    github: "",
    live: "",
    color: "#f97316",
  },
];
 
const skills = [
  { name: "React.js", icon: "⚛" },
  { name: "Angular", icon: "🅰️" },
  { name: "Spring Boot", icon: "🌱" },
  { name: "Flutter", icon: "🦋" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "JS" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Firebase", icon: "🔥" },
  { name: "Express.js", icon: "⚡" },
  { name: "React Native", icon: "📱" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Docker", icon: "🐳" },
  { name: "Git / GitHub", icon: "🐙" },
  { name: "HTML & CSS", icon: "🎨" },
  { name: "Java", icon: "☕" },
  { name: "Rasa NLP", icon: "💬" },
  { name: "OpenCV", icon: "👁" },

];
 
const awards = [
  { icon: "🏆", title: "Top 3 Finalist", org: "Japura Entrepreneurship Summit 2025", detail: "Built Pattabass.lk — connecting users with certified technicians" },
  { icon: "🌐", title: "IEEE Day 2025 Ambassador", org: "IEEE Region 10 (Asia-Pacific)", detail: "Promoted IEEE Day and community engagement across Asia-Pacific" },
  { icon: "📜", title: "Certificate of Appreciation", org: "CodeRally 6.0 — IIT", detail: "Selected for Advanced Tier coding competition by IEEE CS IIT" },
  { icon: "🥇", title: "Finalist — Data Odyssey 2025", org: "KDU", detail: "Built InnovaSafe — AI-based road risk prediction system" },
  { icon: "🎨", title: "Participant — Cre8X 2.0", org: "KDU BCS Student Chapter", detail: "UI/UX Designathon — design thinking and creative problem-solving" },
];
 
const courses = [
  "Python for Beginners — University of Moratuwa",
  "CCNA: Introduction to Networks — Cisco",
  "Introduction to Packet Tracer — Cisco Networking Academy",
  "Postman API Fundamentals Student Expert",
  "Generative AI: Prompt Engineering Basics — Coursera",
  "Docker For Absolute Beginners — KodeKloud",
];
 
const css = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap');
 
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#040d20;
  --navy2:#071228;
  --navy3:#0c1a36;
  --navy4:#112040;
  --blue:#1e40af;
  --blue2:#2563eb;
  --glow:#3b82f6;
  --accent:#60a5fa;
  --cyan:#38bdf8;
  --white:#eef4ff;
  --muted:#6b8db8;
  --dim:#2d4a72;
  --border:rgba(59,130,246,0.12);
  --border2:rgba(59,130,246,0.28);
}
html{scroll-behavior:smooth}
body{background:var(--navy);color:var(--white);font-family:'Plus Jakarta Sans',sans-serif;overflow-x:hidden;line-height:1.6}
::-webkit-scrollbar{width:5px}
::-webkit-scrollbar-track{background:var(--navy2)}
::-webkit-scrollbar-thumb{background:var(--blue2);border-radius:10px}
 
/* STARS */
.stars{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden}
.star{position:absolute;border-radius:50%;background:white;animation:twinkle var(--dur,3s) ease-in-out infinite var(--delay,0s)}
@keyframes twinkle{0%,100%{opacity:var(--min,0.1)}50%{opacity:var(--max,0.6)}}
 
/* NAV */
.nav{
  position:fixed;top:0;left:0;right:0;z-index:999;
  background:rgba(4,13,32,0.88);backdrop-filter:blur(24px);
  border-bottom:1px solid var(--border);
  height:64px;display:flex;align-items:center;justify-content:space-between;
  padding:0 clamp(20px,5vw,80px);
  animation:slideDown 0.7s cubic-bezier(.22,1,.36,1) both;
}
@keyframes slideDown{from{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}
.nav-logo{
  font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:800;letter-spacing:-0.5px;
  background:linear-gradient(135deg,var(--accent),var(--cyan));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
}
.nav-links{display:flex;gap:4px;list-style:none}
.nav-links a{
  text-decoration:none;font-size:13px;font-weight:600;
  color:var(--muted);padding:7px 14px;border-radius:10px;transition:all 0.2s;
}
.nav-links a:hover{color:var(--white);background:rgba(59,130,246,0.1)}
 
/* HERO */
.hero{
  min-height:100vh;
  display:grid;grid-template-columns:1.1fr 0.9fr;
  align-items:center;gap:40px;
  padding:110px clamp(24px,7vw,100px) 90px;
  position:relative;overflow:hidden;
}
.hero-orbs{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.orb{position:absolute;border-radius:50%;filter:blur(80px);animation:orbFloat var(--dur,12s) ease-in-out infinite var(--delay,0s)}
@keyframes orbFloat{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(var(--tx,20px),var(--ty,-20px)) scale(1.05)}}
.hero-grid{
  position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(rgba(59,130,246,0.03) 1px,transparent 1px),
                   linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px);
  background-size:50px 50px;animation:gridShift 25s linear infinite;
}
@keyframes gridShift{from{background-position:0 0}to{background-position:50px 50px}}
 
.hero-text{position:relative;z-index:2}
.hero-eyebrow{
  display:inline-flex;align-items:center;gap:10px;
  background:rgba(59,130,246,0.08);border:1px solid var(--border2);
  border-radius:50px;padding:7px 18px;
  font-size:11.5px;font-weight:700;letter-spacing:2.5px;
  text-transform:uppercase;color:var(--accent);margin-bottom:24px;
  animation:fadeUp 0.9s 0.2s cubic-bezier(.22,1,.36,1) both;
}
.eyebrow-dot{
  width:7px;height:7px;border-radius:50%;background:var(--cyan);
  animation:pulseDot 2s ease-in-out infinite;flex-shrink:0;
}
@keyframes pulseDot{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(0.5);opacity:0.4}}
 
.hero-name{
  font-family:'Syne',sans-serif;
  font-size:clamp(2.8rem,5vw,5rem);
  font-weight:800;line-height:1.05;letter-spacing:-2px;
  margin-bottom:20px;
  animation:fadeUp 0.9s 0.35s cubic-bezier(.22,1,.36,1) both;
}
.hero-name .line1{color:var(--white);display:block}
.hero-name .line2{
  background:linear-gradient(135deg,var(--glow) 0%,var(--cyan) 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;display:block;
}
.hero-bio{
  font-size:1rem;line-height:1.85;color:var(--muted);
  max-width:460px;margin-bottom:36px;font-weight:400;
  text-align:left;
  animation:fadeUp 0.9s 0.5s cubic-bezier(.22,1,.36,1) both;
}
.hero-ctas{
  display:flex;gap:10px;flex-wrap:wrap;
  animation:fadeUp 0.9s 0.65s cubic-bezier(.22,1,.36,1) both;
}
.btn{
  display:inline-flex;align-items:center;gap:8px;
  padding:11px 22px;border-radius:12px;
  font-size:13.5px;font-weight:700;text-decoration:none;
  cursor:pointer;transition:all 0.25s;border:none;
  font-family:'Plus Jakarta Sans',sans-serif;letter-spacing:0.2px;
}
.btn-primary{
  background:linear-gradient(135deg,var(--blue2),#1d4ed8);
  color:white;box-shadow:0 4px 20px rgba(37,99,235,0.45);
}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(37,99,235,0.55)}
.btn-hire{
  background:linear-gradient(135deg,#059669,#10b981);
  color:white;box-shadow:0 4px 20px rgba(16,185,129,0.4);
}
.btn-hire:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(16,185,129,0.5)}
.btn-outline{
  background:rgba(59,130,246,0.07);color:var(--accent);border:1px solid var(--border2);
}
.btn-outline:hover{background:rgba(59,130,246,0.14);transform:translateY(-2px)}
.btn-download{
  background:rgba(255,255,255,0.05);color:var(--white);border:1px solid rgba(255,255,255,0.12);
}
.btn-download:hover{background:rgba(255,255,255,0.1);transform:translateY(-2px)}
 
/* HERO PHOTO */
.hero-photo-wrap{
  position:relative;z-index:2;
  display:flex;justify-content:center;align-items:center;
  animation:fadeUp 0.9s 0.4s cubic-bezier(.22,1,.36,1) both;
}
.photo-ring{
  position:relative;
  width:clamp(260px,30vw,380px);
  height:clamp(260px,30vw,380px);
}
.ring-outer,.ring-mid{
  position:absolute;border-radius:50%;
  border:1px solid rgba(59,130,246,0.18);
  animation:ringBreath 5s ease-in-out infinite;
}
.ring-outer{inset:-28px;animation-delay:0s}
.ring-mid{inset:-14px;animation-delay:1.5s}
@keyframes ringBreath{0%,100%{opacity:0.3;transform:scale(1)}50%{opacity:0.65;transform:scale(1.015)}}
.photo-inner{
  width:100%;height:100%;border-radius:50%;overflow:hidden;
  position:relative;
  background:linear-gradient(135deg,var(--navy3),var(--navy4));
  display:flex;align-items:center;justify-content:center;
}
.photo-inner::before{
  content:'';position:absolute;inset:0;border-radius:50%;padding:3px;
  background:linear-gradient(135deg,var(--glow),var(--cyan));
  -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;z-index:1;
}
.photo-inner img{
  width:100%;height:100%;object-fit:cover;object-position:center top;
  border-radius:50%;position:relative;z-index:0;
}
.photo-initials{
  font-family:'Syne',sans-serif;font-size:clamp(3.5rem,9vw,5.5rem);font-weight:800;
  background:linear-gradient(135deg,var(--glow),var(--cyan));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
}
.badge{
  position:absolute;background:rgba(7,18,40,0.92);
  border:1px solid var(--border2);border-radius:14px;
  padding:9px 15px;font-size:12px;font-weight:700;
  color:var(--white);white-space:nowrap;
  display:flex;align-items:center;gap:8px;
  backdrop-filter:blur(16px);box-shadow:0 8px 32px rgba(0,0,0,0.5);
}
.badge-val{color:var(--accent)}
.badge.b1{bottom:4%;right:-6%;animation:floatB1 5s ease-in-out infinite}
.badge.b2{top:8%;left:-6%;animation:floatB2 5s ease-in-out infinite 1.5s}
@keyframes floatB1{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-12px) rotate(1deg)}}
@keyframes floatB2{0%,100%{transform:translateY(0) rotate(1deg)}50%{transform:translateY(-10px) rotate(-1deg)}}
 
/* SECTION */
.section{max-width:1200px;margin:0 auto;padding:100px 24px;position:relative;z-index:1}
.section-label{
  display:inline-flex;align-items:center;gap:10px;
  color:var(--accent);font-size:11px;letter-spacing:4px;
  text-transform:uppercase;font-weight:700;margin-bottom:10px;
}
.section-label::before{
  content:'';width:28px;height:2px;border-radius:2px;
  background:linear-gradient(90deg,var(--glow),var(--cyan));
}
.section-title{
  font-family:'Syne',sans-serif;
  font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-1.5px;
  color:var(--white);margin-bottom:56px;line-height:1.1;
}
.section-title em{
  font-style:normal;
  background:linear-gradient(135deg,var(--glow),var(--cyan));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
}
 
/* SKILLS */
.skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(145px,1fr));gap:14px}
.skill-card{
  background:var(--navy2);border:1px solid var(--border);
  border-radius:16px;padding:22px 16px;text-align:center;cursor:default;
  transition:all 0.3s cubic-bezier(.22,1,.36,1);position:relative;overflow:hidden;
}
.skill-card::before{
  content:'';position:absolute;bottom:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,var(--glow),var(--cyan));
  transform:scaleX(0);transform-origin:left;transition:transform 0.35s;
}
.skill-card:hover::before{transform:scaleX(1)}
.skill-card:hover{border-color:var(--border2);transform:translateY(-5px);background:var(--navy3);box-shadow:0 16px 40px rgba(0,0,0,0.3)}
.skill-icon{font-size:26px;margin-bottom:10px;display:block;height:32px;line-height:32px}
.skill-name{font-size:13px;font-weight:700;color:var(--white)}
 
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:22px}
.proj-card{
  background:var(--navy2);border:1px solid var(--border);
  border-radius:20px;padding:28px;
  transition:all 0.35s cubic-bezier(.22,1,.36,1);
  position:relative;overflow:hidden;display:flex;flex-direction:column;
}
.proj-card:hover{border-color:rgba(59,130,246,0.38);transform:translateY(-7px);box-shadow:0 28px 60px rgba(0,0,0,0.45)}
.proj-glow{position:absolute;top:-30px;right:-30px;width:140px;height:140px;border-radius:50%;opacity:0.1;pointer-events:none;transition:opacity 0.3s;filter:blur(50px)}
.proj-card:hover .proj-glow{opacity:0.2}
.proj-color-dot{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.proj-color-dot-inner{width:10px;height:10px;border-radius:3px}
.proj-subtitle{font-size:10.5px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:6px}
.proj-title{font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:800;color:var(--white);margin-bottom:12px;line-height:1.25}
.proj-desc{font-size:13px;color:var(--muted);line-height:1.8;margin-bottom:18px;flex:1}
.tech-stack{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:18px}
.tech-tag{background:rgba(59,130,246,0.08);color:var(--accent);border:1px solid rgba(59,130,246,0.18);border-radius:7px;padding:4px 11px;font-size:11px;font-weight:700}
.proj-links{display:flex;gap:10px;margin-top:auto}
.proj-link{display:inline-flex;align-items:center;gap:7px;padding:8px 16px;border-radius:10px;font-size:12.5px;font-weight:700;text-decoration:none;transition:all 0.2s}
.proj-link.gh{background:rgba(255,255,255,0.04);color:var(--muted);border:1px solid rgba(255,255,255,0.07)}
.proj-link.gh:hover{background:rgba(255,255,255,0.08);color:var(--white)}
.proj-link.lv{background:rgba(59,130,246,0.12);color:var(--accent);border:1px solid var(--border2)}
.proj-link.lv:hover{background:rgba(59,130,246,0.22)}
 
/* EDUCATION TIMELINE */
.timeline{display:flex;flex-direction:column;position:relative;padding-left:40px}
.timeline::before{content:'';position:absolute;left:12px;top:20px;bottom:20px;width:1px;background:linear-gradient(180deg,var(--glow),var(--cyan),transparent)}
.edu-item{position:relative;padding:0 0 40px 24px}
.edu-item:last-child{padding-bottom:0}
.edu-dot{position:absolute;left:-28px;top:20px;width:14px;height:14px;border-radius:50%;background:linear-gradient(135deg,var(--glow),var(--cyan));border:2.5px solid var(--navy);box-shadow:0 0 14px rgba(59,130,246,0.7)}
.edu-card{background:var(--navy2);border:1px solid var(--border);border-radius:18px;padding:26px 30px;transition:all 0.3s}
.edu-card:hover{border-color:var(--border2);transform:translateX(5px)}
.edu-degree{font-family:'Syne',sans-serif;font-size:1.05rem;font-weight:800;color:var(--white);margin-bottom:6px}
.edu-inst{font-size:14px;font-weight:700;color:var(--accent);margin-bottom:10px}
.edu-meta{font-size:12.5px;color:var(--muted);display:flex;gap:20px;flex-wrap:wrap}
.edu-badge{display:inline-block;background:rgba(59,130,246,0.1);color:var(--accent);border:1px solid var(--border2);border-radius:8px;padding:4px 14px;font-size:12px;font-weight:700}
 
/* EXPERIENCE */
.exp-list{display:flex;flex-direction:column;gap:18px}
.exp-card{background:var(--navy2);border:1px solid var(--border);border-radius:18px;padding:26px 30px;display:flex;gap:20px;transition:all 0.3s;position:relative;overflow:hidden}
.exp-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--glow),var(--cyan))}
.exp-card:hover{border-color:var(--border2);transform:translateX(5px)}
.exp-icon{width:46px;height:46px;border-radius:13px;background:rgba(59,130,246,0.1);border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.exp-role{font-size:1rem;font-weight:800;color:var(--white);margin-bottom:3px}
.exp-company{font-size:13.5px;font-weight:700;color:var(--accent);margin-bottom:4px}
.exp-period{font-size:12px;color:var(--muted);margin-bottom:10px}
.exp-desc{font-size:13.5px;color:var(--muted);line-height:1.75}
 
/* PUBLICATIONS */
.pub-card{background:var(--navy2);border:1px solid var(--border);border-radius:20px;padding:32px;margin-bottom:18px;transition:all 0.3s;position:relative;overflow:hidden}
.pub-card::after{content:'';position:absolute;top:-50px;right:-50px;width:150px;height:150px;border-radius:50%;background:radial-gradient(circle,rgba(59,130,246,0.12),transparent 70%);pointer-events:none}
.pub-card:hover{border-color:var(--border2)}
.pub-badge{display:inline-block;border-radius:7px;padding:4px 12px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:14px}
.pub-badge.published{background:rgba(16,185,129,0.1);color:#34d399;border:1px solid rgba(16,185,129,0.25)}
.pub-badge.progress{background:rgba(59,130,246,0.1);color:var(--accent);border:1px solid var(--border2)}
.pub-title{font-family:'Syne',sans-serif;font-size:1.08rem;font-weight:800;color:var(--white);margin-bottom:10px;line-height:1.4}
.pub-venue{font-size:13px;font-weight:700;color:var(--accent);margin-bottom:14px}
.pub-desc{font-size:13.5px;color:var(--muted);line-height:1.8}
 
/* AWARDS */
.awards-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px}
.award-card{background:var(--navy2);border:1px solid var(--border);border-radius:18px;padding:26px;transition:all 0.35s cubic-bezier(.22,1,.36,1)}
.award-card:hover{border-color:var(--border2);transform:translateY(-5px);box-shadow:0 20px 44px rgba(0,0,0,0.35)}
.award-icon-wrap{width:50px;height:50px;border-radius:14px;background:rgba(59,130,246,0.1);border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px}
.award-title{font-size:15px;font-weight:800;color:var(--white);margin-bottom:4px}
.award-org{font-size:12.5px;font-weight:700;color:var(--accent);margin-bottom:10px}
.award-detail{font-size:13px;color:var(--muted);line-height:1.65}
 
/* COURSES */
.courses-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:13px}
.course-chip{background:var(--navy2);border:1px solid var(--border);border-radius:13px;padding:16px 20px;font-size:13.5px;color:var(--white);font-weight:600;transition:all 0.25s;display:flex;align-items:center;gap:12px}
.course-chip:hover{border-color:var(--border2);background:var(--navy3);transform:translateX(5px)}
 
/* CONTACT */
.contact-box{background:var(--navy2);border:1px solid var(--border);border-radius:28px;position:relative;overflow:hidden}
.contact-box::before{content:'';position:absolute;top:-80px;left:50%;transform:translateX(-50%);width:600px;height:300px;border-radius:50%;background:radial-gradient(ellipse,rgba(37,99,235,0.12) 0%,transparent 70%);pointer-events:none}
.contact-title{font-family:'Syne',sans-serif;font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:var(--white);margin-bottom:14px}
.contact-sub{font-size:15px;color:var(--muted);line-height:1.85;margin-bottom:32px}
.contact-link{display:inline-flex;align-items:center;gap:10px;padding:13px 20px;border-radius:12px;font-size:14px;font-weight:700;text-decoration:none;background:rgba(59,130,246,0.07);color:var(--accent);border:1px solid var(--border2);transition:all 0.25s;width:100%}
.contact-link:hover{background:rgba(59,130,246,0.16);transform:translateX(4px)}
 
/* CONTACT FORM */
.cf-wrap{margin-top:28px;text-align:left}
.cf-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.cf-field{display:flex;flex-direction:column;gap:7px;margin-bottom:14px}
.cf-label{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted)}
.cf-input,.cf-textarea{
  background:rgba(59,130,246,0.05);border:1px solid var(--border2);
  border-radius:12px;padding:13px 16px;font-size:14px;font-weight:500;color:var(--white);
  font-family:'Plus Jakarta Sans',sans-serif;transition:all 0.25s;outline:none;width:100%;
}
.cf-input::placeholder,.cf-textarea::placeholder{color:var(--dim)}
.cf-input:focus,.cf-textarea:focus{border-color:var(--glow);background:rgba(59,130,246,0.1);box-shadow:0 0 0 3px rgba(59,130,246,0.12)}
.cf-textarea{resize:vertical;min-height:130px;line-height:1.7}
.cf-submit{
  width:100%;padding:14px 28px;border-radius:12px;
  background:linear-gradient(135deg,var(--blue2),#1d4ed8);
  color:white;font-size:15px;font-weight:700;border:none;cursor:pointer;
  font-family:'Plus Jakarta Sans',sans-serif;transition:all 0.25s;
  display:flex;align-items:center;justify-content:center;gap:10px;
}
.cf-submit:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 10px 30px rgba(37,99,235,0.5)}
.cf-submit:disabled{opacity:0.6;cursor:not-allowed}
.cf-success{background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:16px 20px;color:#34d399;font-size:14px;font-weight:600;text-align:center;margin-top:14px}
.cf-error{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:12px;padding:16px 20px;color:#f87171;font-size:14px;font-weight:600;text-align:center;margin-top:14px}
 
/* DIVIDER */
.divider{height:1px;background:var(--border);margin:0 clamp(24px,5vw,80px)}
 
/* FOOTER */
.footer{text-align:center;padding:30px;font-size:13px;color:var(--dim);font-weight:500}
 
@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
.reveal{opacity:0;transform:translateY(28px);transition:opacity 0.75s cubic-bezier(.22,1,.36,1),transform 0.75s cubic-bezier(.22,1,.36,1)}
.reveal.visible{opacity:1;transform:translateY(0)}
 
@media(max-width:900px){
  .hero{grid-template-columns:1fr;text-align:center;gap:50px;padding:110px 24px 70px}
  .hero-bio{margin:0 auto 36px;text-align:center;max-width:100%}
  .hero-ctas{justify-content:center}
  .hero-photo-wrap{order:-1}
  .photo-ring{width:220px;height:220px}
  .badge.b1{right:0;bottom:-8%}
  .badge.b2{left:0;top:-8%}
  .nav-links{display:none}
  .contact-inner{grid-template-columns:1fr !important;gap:40px !important}
  .cf-row{grid-template-columns:1fr}
}
`;
 
/* ── HOOKS ─────────────────────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
 
function R({ children, delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
 
/* ── CONTACT FORM ──────────────────────────────────────────────────────────── */
function ContactForm({ compact = false }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
 
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
 
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) { setStatus("error_fields"); return; }
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mbdprwej", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio message from ${form.name}`,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error_submit");
        console.error("Formspree error:", data);
      }
    } catch (err) {
      setStatus("error_submit");
      console.error("Network error:", err);
    }
  };
 
  return (
    <div className="cf-wrap">
      <div className="cf-row">
        <div className="cf-field">
          <label className="cf-label">Name *</label>
          <input className="cf-input" name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
        </div>
        <div className="cf-field">
          <label className="cf-label">Email *</label>
          <input className="cf-input" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
        </div>
      </div>
      {!compact && (
        <div className="cf-field">
          <label className="cf-label">Subject</label>
          <input className="cf-input" name="subject" placeholder="What's this about?" value={form.subject} onChange={handleChange} />
        </div>
      )}
      <div className="cf-field">
        <label className="cf-label">Message *</label>
        <textarea className="cf-textarea" name="message" placeholder="Tell me about your project, role, or idea..." value={form.message} onChange={handleChange} style={{ minHeight: compact ? 90 : 130 }} />
      </div>
      <button className="cf-submit" onClick={handleSubmit} disabled={status === "sending"}>
        {status === "sending"
          ? <><span style={{ display:"inline-block",width:16,height:16,border:"2px solid rgba(255,255,255,0.4)",borderTop:"2px solid white",borderRadius:"50%",animation:"spin 0.8s linear infinite" }} />Sending…</>
          : <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>Send Message →</>
        }
      </button>
      {status === "success" && <div className="cf-success">✅ Message sent! I'll get back to you soon.</div>}
      {status === "error_fields" && <div className="cf-error">⚠️ Please fill in your name, email, and message.</div>}
      {status === "error_submit" && <div className="cf-error">❌ Something went wrong. Please try again or email me directly.</div>}
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
 
/* ── STARS ─────────────────────────────────────────────────────────────────── */
function Stars() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    dur: (Math.random() * 4 + 2).toFixed(1),
    delay: (Math.random() * 5).toFixed(1),
    minO: (Math.random() * 0.1).toFixed(2),
    maxO: (Math.random() * 0.5 + 0.2).toFixed(2),
  }));
  return (
    <div className="stars">
      {stars.map(s => (
        <div key={s.id} className="star" style={{
          left:`${s.left}%`, top:`${s.top}%`, width:s.size, height:s.size,
          "--dur":`${s.dur}s`, "--delay":`${s.delay}s`, "--min":s.minO, "--max":s.maxO,
        }} />
      ))}
    </div>
  );
}
 
/* ── ICONS ─────────────────────────────────────────────────────────────────── */
function GitHubIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>;
}
function LiveIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
}
 
/* ── PROJECT CARD ──────────────────────────────────────────────────────────── */
function ProjectCard({ p, i }) {
  return (
    <R delay={i * 55}>
      <div className="proj-card" style={{ borderColor: p.ongoing ? `${p.color}44` : undefined }}>
        <div className="proj-glow" style={{ background: p.color }} />
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14, gap:10 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
              <div className="proj-subtitle">{p.subtitle}</div>
              {p.ongoing && (
                <span style={{
                  borderRadius:6, padding:"2px 8px",
                  fontSize:10, fontWeight:700, letterSpacing:1,
                  textTransform:"uppercase", whiteSpace:"nowrap",
                }}></span>
              )}
            </div>
            <div className="proj-title">{p.title}</div>
          </div>
          <div className="proj-color-dot" style={{ background:p.color+"1a", border:`1px solid ${p.color}44` }}>
            <div className="proj-color-dot-inner" style={{ background:p.color }} />
          </div>
        </div>
        <div className="proj-desc">{p.desc}</div>
        <div className="tech-stack">{p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
        <div className="proj-links">
          {p.github && <a className="proj-link gh" href={p.github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>}
          {p.live   && <a className="proj-link lv" href={p.live}   target="_blank" rel="noreferrer"><LiveIcon /> Live Demo</a>}
          {!p.github && !p.live && p.ongoing && (
            <span style={{ fontSize:12.5, color:"var(--muted)", fontStyle:"italic", display:"flex", alignItems:"center", gap:6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Coming soon — in active development
            </span>
          )}
        </div>
      </div>
    </R>
  );
}
 
/* ── APP ───────────────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
 
  return (
    <>
      <style>{css}</style>
      <Stars />
 
      {/* NAV */}
      <nav className="nav" style={{ boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.6)" : "none" }}>
        <div className="nav-logo">Nethmi.dev</div>
        <ul className="nav-links">
          {["about","skills","projects","education","experience","awards","contact"].map(s => (
            <li key={s}><a href={`#${s}`}>{s.charAt(0).toUpperCase()+s.slice(1)}</a></li>
          ))}
        </ul>
      </nav>
 
      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-orbs">
          <div className="orb" style={{ width:600, height:600, top:-200, right:-100, background:"rgba(37,99,235,0.12)", "--dur":"14s", "--tx":"30px", "--ty":"-20px" }} />
          <div className="orb" style={{ width:400, height:400, bottom:-100, left:-50,  background:"rgba(56,189,248,0.07)", "--dur":"18s", "--delay":"3s",  "--tx":"-20px","--ty":"20px" }} />
          <div className="orb" style={{ width:250, height:250, top:"40%",  left:"30%", background:"rgba(59,130,246,0.06)", "--dur":"10s", "--delay":"6s",  "--tx":"10px", "--ty":"-30px" }} />
        </div>
        <div className="hero-grid" />
 
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Software Engineer Undergraduate
          </div>
          <h1 className="hero-name">
            <span className="line1">Nethmi</span>
            <span className="line2">Amasha</span>
          </h1>
          <p className="hero-bio">
            Final-year Software Engineering student at KDU, Sri Lanka. I build full-stack and mobile applications, explore AI/ML research, and craft intuitive digital experiences.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              View Projects
            </a>
            <a className="btn btn-hire" href="#contact">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              Hire Me
            </a>
            {/* ▶ Put your CV file in public/Nethmi_Amasha_CV.pdf */}
            <a className="btn btn-download" href="/Nethmi_Amasha CV.pdf" download>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
            <a className="btn btn-outline" href="https://github.com/NethmiAmasha2002" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/danethmi-amasha" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
 
        <div className="hero-photo-wrap">
          <div className="photo-ring">
            <div className="ring-outer" />
            <div className="ring-mid" />
            <div className="photo-inner">
              {/* Uses the imported photo — falls back to initials if import fails */}
              {myPhoto
                ? <img src={myPhoto} alt="Nethmi Amasha" />
                : <span className="photo-initials">NA</span>
              }
            </div>
            <div className="badge b1">💻 <span className="badge-val">Full-Stack Dev</span></div>
            <div className="badge b2">🧠 <span className="badge-val">AI/ML Explorer</span></div>
          </div>
        </div>
      </section>
 
      {/* ── ABOUT ── */}
      <section className="section" id="about">
        <R>
          <div className="section-label">About</div>
          <h2 className="section-title">Crafting software with<br /><em>curiosity & purpose</em></h2>
        </R>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }}>
          <R delay={80}>
            <div style={{ background:"var(--navy2)", border:"1px solid var(--border)", borderRadius:20, padding:32, lineHeight:1.9, color:"var(--muted)", fontSize:15 }}>
              I'm a final-year <strong style={{ color:"var(--white)" }}>Software Engineering</strong> student at General Sir John Kotelawala Defence University, Sri Lanka, with hands-on experience in full-stack and mobile development, cloud deployment, and AI/ML research.
              <br /><br />
              Beyond code, I volunteer with <strong style={{ color:"var(--accent)" }}>IEEE Women in Engineering</strong> as Head of Logistics and represented IEEE as an <strong style={{ color:"var(--accent)" }}>IEEE Day 2025 Ambassador</strong> for the Asia-Pacific region.
              <br /><br />
              I'm actively seeking <strong style={{ color:"var(--white)" }}>internships and graduate roles</strong> in software engineering where I can contribute and keep growing.
            </div>
          </R>
          <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
            {[
              { e:"📧", label:"Email",    val:"amashanethmi200212@gmail.com" },
              { e:"📍", label:"Location", val:"Galle, Sri Lanka" },
              { e:"🎓", label:"Status",   val:"Final Year · BSc Software Engineering" },
            ].map((x, i) => (
              <R key={x.label} delay={100 + i * 60}>
                <div style={{ background:"var(--navy2)", border:"1px solid var(--border)", borderRadius:14, padding:"17px 22px", display:"flex", gap:15, alignItems:"center" }}>
                  <div style={{ width:40, height:40, borderRadius:12, background:"rgba(59,130,246,0.08)", border:"1px solid var(--border2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>{x.e}</div>
                  <div>
                    <div style={{ fontSize:10.5, color:"var(--muted)", textTransform:"uppercase", letterSpacing:1.5, marginBottom:2, fontWeight:700 }}>{x.label}</div>
                    <div style={{ fontSize:13.5, color:"var(--white)", fontWeight:700 }}>{x.val}</div>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>
 
      <div className="divider" />
 
      {/* ── SKILLS ── */}
      <section className="section" id="skills">
        <R><div className="section-label">Skills</div><h2 className="section-title">My <em>Technical Toolkit</em></h2></R>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <R key={s.name} delay={i * 35}>
              <div className="skill-card">
                <span className="skill-icon">{s.icon}</span>
                <div className="skill-name">{s.name}</div>
              </div>
            </R>
          ))}
        </div>
      </section>
 
      <div className="divider" />
 
      {/* ── PROJECTS ── */}
      <section className="section" id="projects">
        <R><div className="section-label">Projects</div><h2 className="section-title">Things <em>I've Built</em></h2></R>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </section>
 
      <div className="divider" />
 
      {/* ── EDUCATION ── */}
      <section className="section" id="education">
        <R><div className="section-label">Education</div><h2 className="section-title">Academic <em>Background</em></h2></R>
        <div className="timeline">
          {[
            { degree:"BSc (Hons) in Software Engineering", inst:"General Sir John Kotelawala Defence University", loc:"Rathmalana, Sri Lanka", period:"2023 – Present", ongoing:true  },
            { degree:"Advanced Diploma in English",        inst:"The Beeline Campus",                            loc:"Galle, Sri Lanka",      period:"01/2022 – 05/2022", ongoing:false },
            { degree:"Secondary Education (O/L & A/L)",   inst:"Sanghamitta Balika Vidyalaya",                  loc:"Galle, Sri Lanka",      period:"2007 – 2021",       ongoing:false },
          ].map((e, i) => (
            <R key={e.inst} delay={i * 100}>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-card">
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12, flexWrap:"wrap", marginBottom:8 }}>
                    <div className="edu-degree">{e.degree}</div>
                    <span className="edu-badge">{e.period}</span>
                  </div>
                  <div className="edu-inst">{e.inst}</div>
                  <div className="edu-meta">
                    <span>📍 {e.loc}</span>
                    <span style={{ color: e.ongoing ? "#34d399" : "var(--muted)" }}>● {e.ongoing ? "Ongoing" : "Completed"}</span>
                  </div>
                </div>
              </div>
            </R>
          ))}
        </div>
      </section>
 
      <div className="divider" />
 
      {/* ── EXPERIENCE ── */}
      <section className="section" id="experience">
        <R><div className="section-label">Experience</div><h2 className="section-title">Professional & <em>Volunteer</em></h2></R>
        <div className="exp-list">
          {[
            { icon:"🏦", role:"Bank Trainee",          company:"Bank of Ceylon (BOC)",                          period:"Sep 2022 – Dec 2022 · Galle", desc:"Assisted in banking operations and IT tasks. Managed data and documentation while developing teamwork, communication, and attention-to-detail skills." },
            { icon:"⚙️", role:"Head of Logistics",      company:"IEEE Women in Engineering Student Branch, KDU", period:"2025 – 2026",                  desc:"Coordinated logistics and operations for student events and workshops, ensuring smooth execution and team collaboration." },
            { icon:"🌐", role:"IEEE Day 2025 Ambassador",company:"IEEE Region 10 (Asia-Pacific)",                period:"2025",                         desc:"Promoted IEEE Day initiatives, supported community engagement, and represented IEEE in outreach programs across the Asia-Pacific region." },
          ].map((e, i) => (
            <R key={e.role} delay={i * 100}>
              <div className="exp-card">
                <div className="exp-icon">{e.icon}</div>
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  <div className="exp-period">{e.period}</div>
                  <div className="exp-desc">{e.desc}</div>
                </div>
              </div>
            </R>
          ))}
        </div>
      </section>
 
      <div className="divider" />
 
      {/* ── PUBLICATIONS ── */}
      <section className="section" id="publications">
        <R><div className="section-label">Research</div><h2 className="section-title">Publications & <em>Research</em></h2></R>
        {[
          { badge:"Published", badgeClass:"published",
            title:"Development of a Smart Mirror System Based on Kansei Engineering for Enhanced User Experience",
            venue:"6th Student Symposium · Faculty of Computing, KDU · January 14, 2026",
            desc:"Presented research on designing an intelligent smart mirror integrating Kansei Engineering to enable personalized, intuitive, and emotionally aware human–computer interactions.",
            tech:[] },
          { badge:"In Progress", badgeClass:"progress",
            title:"Framework for Reducing Skin-Tone Bias in AI Skin Cancer Detection Using XAI-Guided Lesion-Focused Regularization",
            venue:"2026 – In Progress",
            desc:"Researching methods to reduce skin-tone bias in AI-based lesion detection using Explainable AI, developing fairness-aware models to improve accuracy and equity.",
            tech:["Python","TensorFlow/PyTorch","OpenCV","XAI","Medical Image Analysis"] },
        ].map((p, i) => (
          <R key={p.title} delay={i * 100}>
            <div className="pub-card">
              <div className={`pub-badge ${p.badgeClass}`}>{p.badge}</div>
              <div className="pub-title">{p.title}</div>
              <div className="pub-venue">{p.venue}</div>
              <div className="pub-desc">{p.desc}</div>
              {p.tech.length > 0 && <div className="tech-stack" style={{ marginTop:16 }}>{p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>}
            </div>
          </R>
        ))}
      </section>
 
      <div className="divider" />
 
      {/* ── AWARDS ── */}
      <section className="section" id="awards">
        <R><div className="section-label">Recognition</div><h2 className="section-title">Awards & <em>Achievements</em></h2></R>
        <div className="awards-grid">
          {awards.map((a, i) => (
            <R key={a.title} delay={i * 70}>
              <div className="award-card">
                <div className="award-icon-wrap">{a.icon}</div>
                <div className="award-title">{a.title}</div>
                <div className="award-org">{a.org}</div>
                <div className="award-detail">{a.detail}</div>
              </div>
            </R>
          ))}
        </div>
      </section>
 
      <div className="divider" />
 
      {/* ── COURSES ── */}
      <section className="section">
        <R><div className="section-label">Learning</div><h2 className="section-title">Courses & <em>Certifications</em></h2></R>
        <div className="courses-grid">
          {courses.map((c, i) => (
            <R key={c} delay={i * 60}>
              <div className="course-chip"><span style={{ fontSize:18, flexShrink:0 }}>🎓</span>{c}</div>
            </R>
          ))}
        </div>
      </section>
 
      <div className="divider" />
 
      {/* ── CONTACT ── */}
      <div className="section" id="contact" style={{ paddingTop:40, paddingBottom:80 }}>
        <R>
          <div className="contact-box" style={{ padding:"56px 52px" }}>
            <div className="contact-inner" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:56, alignItems:"flex-start" }}>
 
              {/* LEFT — info */}
              <div>
                <div className="section-label" style={{ marginBottom:14 }}>Get In Touch</div>
                <div className="contact-title">
                  Let's <em style={{ background:"linear-gradient(135deg,var(--glow),var(--cyan))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontStyle:"normal" }}>work together</em>
                </div>
                <p className="contact-sub">
                  I'm actively looking for internships and graduate software engineering roles. Drop me a message or reach out through any of these channels.
                </p>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  <a className="contact-link" href="mailto:amashanethmi200212@gmail.com">📧 amashanethmi200212@gmail.com</a>
                  <a className="contact-link" href="https://www.linkedin.com/in/danethmi-amasha" target="_blank" rel="noreferrer">💼 linkedin.com/in/danethmi-amasha</a>
                  <a className="contact-link" href="https://github.com/NethmiAmasha2002" target="_blank" rel="noreferrer">🐙 github.com/NethmiAmasha2002</a>
                </div>
              </div>
 
              {/* RIGHT — form */}
              <div>
                <div style={{ fontSize:17, fontFamily:"'Syne',sans-serif", fontWeight:800, color:"var(--white)", marginBottom:4 }}>Message me directly</div>
                <div style={{ fontSize:13.5, color:"var(--muted)" }}>Fill in the form and I'll get back to you as soon as possible.</div>
                <ContactForm />
              </div>
 
            </div>
          </div>
        </R>
      </div>
 
      <footer className="footer">
        Designed & built with ✦ by Nethmi Amasha · {new Date().getFullYear()}
      </footer>
    </>
  );
}