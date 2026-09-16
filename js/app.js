/* ==========================================
   ZIAD ATEF PORTFOLIO — APP INTERACTION LOGIC
   ========================================== */

// 1. Certificate Detail Data Dictionary
const CERTIFICATES_DATA = {
  'nvidia-llm': {
    title: 'NVIDIA – Certificate of Competency: Building LLM Applications With Prompt Engineering',
    issuer: 'NVIDIA Academy',
    date: 'February 2026',
    img: 'assets/certificates/Certificate_Nvidia_Bulding_LLM_With_Prompt_Engineering_page_1.png',
    img2: 'assets/certificates/Certificate_Nvidia_Bulding_LLM_With_Prompt_Engineering_page_2.png',
    pdf: 'assets/docs/nvidia_prompt_engineering.pdf',
    desc: 'Focuses on designing, optimizing, and evaluating effective prompts for Large Language Models. Covers advanced techniques such as few-shot learning, chain-of-thought reasoning, and parameter tuning to build reliable enterprise AI workflows.',
    tag: 'GenAI & LLMs'
  },
  'nvidia-ai-for-all': {
    title: 'NVIDIA – AI for All: From Basics to GenAI Practice',
    issuer: 'NVIDIA Academy',
    date: 'February 2026',
    img: 'assets/certificates/AI_for_All_From_Basics_to_GenAI_Practice_AI_for_All_From_Basics_to_GenAI_Practice_-_Course_Completion_Certificate_page_1.png',
    pdf: 'assets/docs/nvidia_ai_for_all.pdf',
    desc: 'Comprehensive training on foundational AI concepts, transformer architectures, and practical generative AI applications. Emphasizes real-world AI deployment strategies, ethical considerations, and hands-on model implementation.',
    tag: 'Artificial Intelligence'
  },
  'nti-ml-summer': {
    title: 'NTI / ITIDA – Machine Learning Summer Training (120 Hours)',
    issuer: 'National Telecommunication Institute (NTI) & ITIDA',
    date: 'Aug – Sep 2025 (120 Hours) | Score: 94%',
    img: 'assets/certificates/Ziad_Atef_Yehia_page_1.png',
    pdf: 'assets/docs/nti_ml_summer_94.pdf',
    desc: 'Intensive 120-hour technical training program covering core statistical machine learning, regression analysis, decision trees, and model evaluation metrics. Achieved an outstanding final grade of 94% across practical projects and coding assessments.',
    tag: 'Machine Learning (94%)'
  },
  'nti-digital-egypt': {
    title: 'NTI / Digital Egypt Youth – Machine Learning for Data Analysis',
    issuer: 'NTI & Digital Egypt Youth Initiative',
    date: 'Nov 2025 – Jan 2026 (120 Hours) | Score: 84%',
    img: 'assets/certificates/Nti.jpg',
    pdf: 'assets/docs/nti_digital_egypt_84.jpg',
    desc: 'Comprehensive dual-track program featuring 90 technical hours of data preprocessing, feature engineering, and model deployment alongside 30 hours of client communication and freelance project delivery skills.',
    tag: 'Data Analysis & Freelancing'
  },
  'iti-python': {
    title: 'ITI Mahara-Tech – Python Programming Basics',
    issuer: 'Information Technology Institute (ITI)',
    date: 'October 2025',
    img: 'assets/certificates/Course_Certificate_En_page_1.png',
    pdf: 'assets/docs/iti_python.pdf',
    desc: 'Mastery of fundamental Python programming concepts, object-oriented principles, data structures, and script automation. Serves as the backbone for data manipulation and algorithm development.',
    tag: 'Python Core'
  },
  'iti-database': {
    title: 'ITI Mahara-Tech – Database Fundamentals',
    issuer: 'Information Technology Institute (ITI)',
    date: 'October 2025',
    img: 'assets/certificates/Course_Certificate_En__1__page_1.png',
    pdf: 'assets/docs/iti_database.pdf',
    desc: 'In-depth study of relational database design, SQL querying, normalization, indexing, and data management best practices for structured enterprise analytics.',
    tag: 'SQL & Relational DBs'
  },
  'ebda3-masr': {
    title: 'Injaz Egypt / Innovation Camp – Certificate of Appreciation',
    issuer: 'Injaz Egypt & Ministry of Youth and Sports',
    date: 'Issued: April 2026',
    img: 'assets/certificates/شهاده_تقرير_.jpg',
    pdf: 'assets/docs/injaz_egypt_innovation_camp.jpg',
    desc: 'Awarded for outstanding innovation and collaborative problem-solving during Innovation Camp by Injaz Egypt and the Ministry of Youth & Sports, demonstrating an entrepreneurial mindset and technical application in team environments.',
    tag: 'Innovation & Leadership'
  }
};

// 2. Main Projects Data Dictionary
const PROJECTS_DATA = {
  'retention-classification': {
    title: 'Customer Retention Classification — Restaurant Client (Freelance)',
    category: 'Machine Learning & Predictive Modeling',
    challenge: 'A restaurant brand developing a digital ordering platform needed to identify which customers were likely to return — with no ready-made retention label in the dataset.',
    approach: 'Transformed 3,000 raw orders into 786 unique customer profiles. Engineered the retention target from historical order behavior. Designed the feature set using only each customer\'s first order to prevent target leakage. Addressed severe class imbalance (90/10 split) using SMOTE, applied only to training data. Evaluated Logistic Regression, Decision Tree, Random Forest, and XGBoost using GridSearchCV and Stratified K-Fold cross-validation.',
    result: 'Achieved 90% prediction accuracy with XGBoost, improving the 78% Logistic Regression baseline by 12 percentage points, with a final 0.94 F1-score. Delivered feature-importance visualizations and a final executive client report.',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'SMOTE', 'Matplotlib']
  },
  'arabic-sales-report': {
    title: 'Arabic Sales Report Automation (Freelance)',
    category: 'Data Engineering & Automated PDF Generation',
    challenge: 'The client needed raw sales data transformed into a professional, client-ready Arabic report — not just a spreadsheet of numbers.',
    approach: 'Built an automated pipeline converting raw sales data into a polished Arabic PDF report. Handled RTL (right-to-left) layout rendering for proper Arabic text and formatting using ReportLab and WeasyPrint. Generated charts and visualizations with Plotly and Kaleido.',
    result: 'Identified a high-performing city driving 45.7% of total revenue for one client, and a product category driving 61.3% of total sales with a 0.80 correlation between customer rating and sales value. Flagged an 85% month-over-month revenue decline for a second client, enabling early business intervention.',
    tools: ['Python', 'ReportLab', 'Plotly', 'Kaleido', 'WeasyPrint', 'Pandas']
  },
  'arabic-sales-dashboard': {
    title: 'Arabic Sales Dashboard (Freelance, Excel/VBA)',
    category: 'Business Intelligence & Excel Automation',
    challenge: 'The client requested an interactive, user-friendly Arabic-language sales dashboard without requiring complex software installations.',
    approach: 'Engineered an interactive Arabic-language sales dashboard using Excel/VBA for a client, turning raw sales data into a navigable, business-friendly view with dynamic pivot tables, macro controls, and KPI summaries.',
    result: 'Delivered an intuitive, lightweight business dashboard that allowed non-technical stakeholders to quickly analyze daily sales trends and regional performance.',
    tools: ['Excel', 'VBA', 'Pivot Tables', 'Data Visualization']
  },
  'smart-campus-yolo': {
    title: 'Smart Campus Space Management System (Graduation Project)',
    category: 'Computer Vision & Real-Time Object Detection',
    challenge: 'Developing a real-time computer vision module for lecture hall occupancy estimation as part of a larger Smart Campus Space Management System.',
    approach: 'Collected and annotated a custom dataset of lecture hall photos using Roboflow for annotation and data augmentation. Trained and fine-tuned a YOLOv8 model for real-time person detection and occupancy calculation in classroom environments.',
    result: 'Provides real-time visibility into lecture hall occupancy counts, integrating seamlessly with booking and scheduling modules built by team members to optimize campus space usage.',
    tools: ['Python', 'YOLOv8', 'Computer Vision', 'Roboflow', 'PyTorch']
  }
};

// 3. Global Functions Attached to Window
window.toggleTheme = function() {
  const isLight = document.body.classList.toggle('light-theme');
  document.documentElement.classList.toggle('light-theme', isLight);
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = isLight ? '🌙 Dark Mode' : '☀️ Light Mode';
  }
  
  localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
};

window.toggleMobileNav = function() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) navLinks.classList.toggle('active');
};

window.closeMobileNav = function() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) navLinks.classList.remove('active');
};

window.filterCerts = function(category, btnElement) {
  const cards = document.querySelectorAll('.certs-grid .cert-card');
  const buttons = document.querySelectorAll('#cert-filters .filter-btn');

  buttons.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  cards.forEach(card => {
    const tag = card.getAttribute('data-category');
    if (category === 'all' || tag === category) {
      card.style.display = 'flex';
      card.classList.add('reveal-active');
      card.style.opacity = '1';
    } else {
      card.style.display = 'none';
    }
  });
};

window.filterProjects = function(category, btnElement) {
  const cards = document.querySelectorAll('.projects-grid .project-card');
  const buttons = document.querySelectorAll('#project-filters .filter-btn');

  buttons.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  cards.forEach(card => {
    const tag = card.getAttribute('data-category');
    if (category === 'all' || tag === category) {
      card.style.display = 'flex';
      card.classList.add('reveal-active');
      card.style.opacity = '1';
    } else {
      card.style.display = 'none';
    }
  });
};

window.closeModal = function() {
  const modalOverlay = document.getElementById('global-modal');
  if (modalOverlay) modalOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
};

window.openCvModal = function() {
  const modalOverlay = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; border-bottom:1px solid var(--border-dark); padding-bottom:1rem;">
        <div>
          <span class="badge" style="margin-bottom:0.4rem;">Curriculum Vitae</span>
          <h3 style="color:var(--text-on-dark); font-size:1.5rem; margin:0;">Ziad Atef — Data Science & ML Engineer</h3>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <a href="assets/docs/Ziad_Atef_CV.pdf" target="_blank" class="btn btn-outline-dark" style="padding:0.45rem 1.1rem; font-size:0.85rem; display:inline-flex; align-items:center; gap:0.4rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Open Original PDF
          </a>
          <a href="assets/docs/Ziad_Atef_CV.pdf" download="Ziad_Atef_CV.pdf" class="btn btn-primary" style="padding:0.45rem 1.1rem; font-size:0.85rem; display:inline-flex; align-items:center; gap:0.4rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download PDF
          </a>
        </div>
      </div>
      
      <!-- Visual Image Pages Preview (Guaranteed rendering on all browsers & devices) -->
      <div style="display:flex; flex-direction:column; gap:1.25rem; max-height:65vh; overflow-y:auto; padding-right:0.5rem;">
        <img src="assets/certificates/Ziad_Atef_cv_page_1.png" alt="Ziad Atef CV Page 1" style="width:100%; border-radius:8px; border:1px solid var(--border-dark); box-shadow:0 8px 25px rgba(0,0,0,0.3);" />
        <img src="assets/certificates/Ziad_Atef_cv_page_2.png" alt="Ziad Atef CV Page 2" style="width:100%; border-radius:8px; border:1px solid var(--border-dark); box-shadow:0 8px 25px rgba(0,0,0,0.3);" />
      </div>

      <button class="btn btn-outline-dark" onclick="closeModal()" style="width:100%; margin-top:0.25rem;">Close Preview</button>
    </div>
  `;
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.openCertModal = function(certKey) {
  const data = CERTIFICATES_DATA[certKey];
  const modalOverlay = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!data || !modalOverlay || !modalBody) return;

  let imagesHtml = `<img src="${data.img}" alt="${data.title}" style="width:100%; border-radius:8px; border:1px solid var(--border-dark);" />`;
  if (data.img2) {
    imagesHtml += `<img src="${data.img2}" alt="${data.title} Page 2" style="width:100%; border-radius:8px; border:1px solid var(--border-dark); margin-top:1rem;" />`;
  }

  modalBody.innerHTML = `
    <div class="modal-split-grid">
      <div class="modal-img-frame" style="max-height:65vh; overflow-y:auto; padding-right:0.25rem;">
        ${imagesHtml}
      </div>
      <div>
        <span class="badge badge-light-mode" style="margin-bottom:1rem;">${data.tag}</span>
        <h2 style="font-size:1.6rem; color:var(--text-on-dark); margin-bottom:0.5rem; line-height:1.3;">${data.title}</h2>
        <p style="color:var(--accent); font-weight:600; font-size:0.95rem; margin-bottom:0.25rem;">${data.issuer}</p>
        <p style="color:var(--text-on-dark-muted); font-size:0.85rem; margin-bottom:1.25rem;">Issued: ${data.date}</p>
        
        <div style="background:rgba(200, 164, 92, 0.08); border-left:3px solid var(--accent); padding:1rem; border-radius:4px; margin-bottom:1.5rem;">
          <h4 style="font-family:var(--font-sans); color:var(--text-on-dark); font-size:0.95rem; margin-bottom:0.4rem;">Certification Overview & Scope:</h4>
          <p style="font-size:0.95rem; color:var(--text-on-dark-muted); line-height:1.6;">${data.desc}</p>
        </div>

        <div style="display:flex; gap:0.75rem; flex-direction:column; margin-bottom:1rem;">
          ${data.pdf ? `<a href="${data.pdf}" target="_blank" class="btn btn-primary" style="width:100%; font-size:0.88rem; justify-content:center; gap:0.4rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Open Original PDF Document
          </a>` : ''}
          <button class="btn btn-outline-dark" onclick="closeModal()" style="width:100%;">Close Preview</button>
        </div>
      </div>
    </div>
  `;
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.openProjectModal = function(projKey) {
  const data = PROJECTS_DATA[projKey];
  const modalOverlay = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!data || !modalOverlay || !modalBody) return;

  const toolsHtml = data.tools.map(t => `<span class="pill-tag">${t}</span>`).join(' ');
  let interactiveWidgetHtml = '';

  if (projKey === 'retention-classification') {
    interactiveWidgetHtml = `
      <div class="ml-sandbox-card" style="margin-bottom:1.5rem;">
        <h4 style="color:var(--accent); font-family:var(--font-sans); font-size:1rem; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
          ⚡ Interactive XGBoost Retention Simulator:
        </h4>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem; align-items:center;">
          <div>
            <div class="range-slider-group">
              <div class="range-slider-label">
                <span>First Order Amount ($)</span>
                <span id="slider-val-amount">$75</span>
              </div>
              <input type="range" id="slider-amount" min="10" max="250" value="75" class="range-slider" oninput="updateRetentionSim()" />
            </div>
            <div class="range-slider-group">
              <div class="range-slider-label">
                <span>Days Since First Order</span>
                <span id="slider-val-days">14 days</span>
              </div>
              <input type="range" id="slider-days" min="1" max="90" value="14" class="range-slider" oninput="updateRetentionSim()" />
            </div>
          </div>
          <div class="gauge-box">
            <p style="font-size:0.8rem; text-transform:uppercase; color:var(--text-on-dark-muted); font-weight:600;">Predicted Retention Score</p>
            <div class="gauge-val" id="gauge-score">92%</div>
            <p id="gauge-status" style="font-size:0.8rem; color:var(--accent); margin-top:0.25rem;">High Returning Likelihood</p>
          </div>
        </div>
      </div>
    `;
  }

  if (projKey === 'smart-campus-yolo') {
    interactiveWidgetHtml = `
      <div class="ml-sandbox-card" style="margin-bottom:1.5rem; background:#0D0D0D; border:1px solid var(--accent); border-radius:12px; padding:1.25rem;">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
          <h4 style="color:var(--accent); font-family:var(--font-sans); font-size:1rem; margin:0; display:flex; align-items:center; gap:0.5rem;">
            <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:#E74C3C; box-shadow:0 0 10px #E74C3C;"></span>
            LIVE INFERENCE STREAM — CAM 04 (Lecture Hall A-102)
          </h4>
          <span style="font-family:monospace; font-size:0.8rem; color:var(--text-on-dark-muted); background:rgba(255,255,255,0.06); padding:0.2rem 0.6rem; border-radius:4px; border:1px solid rgba(255,255,255,0.1);">
            YOLOv8n · 1080p @ 60 FPS · 12.4ms
          </span>
        </div>

        <!-- Real CCTV Camera Frame Container -->
        <div style="position:relative; width:100%; height:320px; border-radius:10px; border:1.5px solid var(--accent); overflow:hidden; background:url('assets/images/lecture_hall_cctv.png') center/cover no-repeat; box-shadow:0 10px 30px rgba(0,0,0,0.8);">
          
          <!-- Dark Vignette Overlay for Real CCTV Lens Effect -->
          <div style="position:absolute; inset:0; background:radial-gradient(circle at center, transparent 55%, rgba(0,0,0,0.65) 100%); pointer-events:none;"></div>

          <!-- HUD Overlay Top Info -->
          <div style="position:absolute; top:12px; left:12px; display:flex; align-items:center; gap:0.5rem; background:rgba(15,15,15,0.85); backdrop-filter:blur(6px); padding:0.35rem 0.85rem; border-radius:50px; border:1px solid var(--accent); color:var(--accent); font-size:0.78rem; font-weight:700; font-family:monospace;">
            <span style="color:#2ECC71;">● REC</span> | DETECTED PERSONS: 18 | OCCUPANCY: 72%
          </div>

          <!-- HUD Overlay Top Right Timestamp -->
          <div style="position:absolute; top:12px; right:12px; background:rgba(15,15,15,0.85); backdrop-filter:blur(6px); padding:0.35rem 0.75rem; border-radius:6px; border:1px solid rgba(255,255,255,0.15); color:#F5F5F0; font-size:0.75rem; font-family:monospace;">
            2026-09-16 05:45:12 UTC
          </div>

          <!-- Bounding Box 1 (Person 1 - Desk Row Left) -->
          <div style="position:absolute; top:28%; left:18%; width:90px; height:135px; border:2px solid #C8A45C; background:rgba(200, 164, 92, 0.15); border-radius:4px; box-shadow:0 0 12px rgba(200,164,92,0.6);">
            <span style="background:#C8A45C; color:#141414; font-size:0.65rem; font-weight:800; font-family:monospace; padding:1px 5px; position:absolute; top:-18px; left:-2px; border-radius:2px; white-space:nowrap;">
              person 0.97
            </span>
          </div>

          <!-- Bounding Box 2 (Person 2 - Desk Row Center) -->
          <div style="position:absolute; top:32%; left:42%; width:95px; height:130px; border:2px solid #C8A45C; background:rgba(200, 164, 92, 0.15); border-radius:4px; box-shadow:0 0 12px rgba(200,164,92,0.6);">
            <span style="background:#C8A45C; color:#141414; font-size:0.65rem; font-weight:800; font-family:monospace; padding:1px 5px; position:absolute; top:-18px; left:-2px; border-radius:2px; white-space:nowrap;">
              person 0.95
            </span>
          </div>

          <!-- Bounding Box 3 (Person 3 - Desk Row Right) -->
          <div style="position:absolute; top:25%; right:20%; width:85px; height:140px; border:2px solid #C8A45C; background:rgba(200, 164, 92, 0.15); border-radius:4px; box-shadow:0 0 12px rgba(200,164,92,0.6);">
            <span style="background:#C8A45C; color:#141414; font-size:0.65rem; font-weight:800; font-family:monospace; padding:1px 5px; position:absolute; top:-18px; left:-2px; border-radius:2px; white-space:nowrap;">
              person 0.98
            </span>
          </div>

          <!-- Bounding Box 4 (Person 4 - Back Desk) -->
          <div style="position:absolute; top:45%; left:62%; width:80px; height:120px; border:2px solid #2ECC71; background:rgba(46, 204, 113, 0.15); border-radius:4px; box-shadow:0 0 12px rgba(46, 204, 113, 0.5);">
            <span style="background:#2ECC71; color:#141414; font-size:0.65rem; font-weight:800; font-family:monospace; padding:1px 5px; position:absolute; top:-18px; left:-2px; border-radius:2px; white-space:nowrap;">
              person 0.92
            </span>
          </div>

          <!-- HUD Camera Corner Label -->
          <div style="position:absolute; bottom:12px; left:12px; color:var(--text-on-dark-muted); font-size:0.75rem; font-family:monospace;">
            [SYSTEM READY] · ASSIUT NATIONAL UNIV - SMART CAMPUS NODE #04
          </div>
        </div>

        <!-- Real-time Live Metrics Bar Below Feed -->
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:0.75rem; margin-top:1rem;">
          <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:0.75rem; border-radius:8px; text-align:center;">
            <p style="font-size:0.75rem; color:var(--text-on-dark-muted); margin-bottom:0.2rem; font-weight:600;">ACTIVE COUNT</p>
            <p style="font-size:1.3rem; font-family:var(--font-serif); font-weight:700; color:var(--accent); margin:0;">18 Persons</p>
          </div>
          <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:0.75rem; border-radius:8px; text-align:center;">
            <p style="font-size:0.75rem; color:var(--text-on-dark-muted); margin-bottom:0.2rem; font-weight:600;">ROOM CAPACITY</p>
            <p style="font-size:1.3rem; font-family:var(--font-serif); font-weight:700; color:#2ECC71; margin:0;">72% Occupied</p>
          </div>
          <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:0.75rem; border-radius:8px; text-align:center;">
            <p style="font-size:0.75rem; color:var(--text-on-dark-muted); margin-bottom:0.2rem; font-weight:600;">INFERENCE SPEED</p>
            <p style="font-size:1.3rem; font-family:var(--font-serif); font-weight:700; color:var(--accent); margin:0;">12.4 ms</p>
          </div>
        </div>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div>
      <span class="badge" style="margin-bottom:1rem;">${data.category}</span>
      <h2 style="font-size:1.8rem; color:var(--text-on-dark); margin-bottom:1.25rem; line-height:1.3;">${data.title}</h2>
      
      ${interactiveWidgetHtml}

      <div style="display:flex; flex-direction:column; gap:1.25rem; margin-bottom:1.5rem;">
        <div style="background:rgba(30, 30, 30, 0.8); border:1px solid var(--border-dark); padding:1.25rem; border-radius:12px;">
          <h4 style="color:var(--accent); font-family:var(--font-sans); font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.4rem;">The Challenge:</h4>
          <p style="color:var(--text-on-dark-muted); font-size:0.98rem; line-height:1.6;">${data.challenge}</p>
        </div>

        <div style="background:rgba(30, 30, 30, 0.8); border:1px solid var(--border-dark); padding:1.25rem; border-radius:12px;">
          <h4 style="color:var(--accent); font-family:var(--font-sans); font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.4rem;">My Engineering Approach:</h4>
          <p style="color:var(--text-on-dark-muted); font-size:0.98rem; line-height:1.6;">${data.approach}</p>
        </div>

        <div style="background:rgba(200, 164, 92, 0.1); border:1px solid var(--accent); padding:1.25rem; border-radius:12px;">
          <h4 style="color:var(--accent); font-family:var(--font-sans); font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.4rem;">Key Results & Business Impact:</h4>
          <p style="color:var(--text-on-dark); font-size:0.98rem; line-height:1.6;">${data.result}</p>
        </div>
      </div>

      <div style="margin-bottom:1.5rem;">
        <p style="font-size:0.85rem; text-transform:uppercase; color:var(--text-on-dark-muted); margin-bottom:0.5rem; font-weight:600;">Technologies Used:</p>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">${toolsHtml}</div>
      </div>

      <button class="btn btn-primary" onclick="closeModal()" style="width:100%;">Back to Portfolio</button>
    </div>
  `;
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.updateRetentionSim = function() {
  const amountInput = document.getElementById('slider-amount');
  const daysInput = document.getElementById('slider-days');
  if (!amountInput || !daysInput) return;

  const amount = parseInt(amountInput.value || 75);
  const days = parseInt(daysInput.value || 14);

  const amountSpan = document.getElementById('slider-val-amount');
  const daysSpan = document.getElementById('slider-val-days');
  if (amountSpan) amountSpan.innerText = `$${amount}`;
  if (daysSpan) daysSpan.innerText = `${days} days`;

  let score = Math.round(95 - (days * 0.45) + (amount * 0.12));
  score = Math.min(Math.max(score, 18), 98);

  const gaugeScore = document.getElementById('gauge-score');
  const gaugeStatus = document.getElementById('gauge-status');

  if (gaugeScore) gaugeScore.innerText = `${score}%`;
  if (gaugeStatus) {
    if (score >= 75) {
      gaugeStatus.innerText = 'High Returning Likelihood';
      gaugeStatus.style.color = 'var(--accent)';
    } else if (score >= 50) {
      gaugeStatus.innerText = 'Moderate Retention';
      gaugeStatus.style.color = '#E6C280';
    } else {
      gaugeStatus.innerText = 'At-Risk Customer Churn';
      gaugeStatus.style.color = '#E76F51';
    }
  }
};

window.copyToClipboard = function(text, elementId) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById(elementId);
    if (btn) {
      const originalText = btn.innerText;
      btn.innerText = 'Copied!';
      btn.style.backgroundColor = 'var(--accent)';
      btn.style.color = '#141414';
      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'var(--accent)';
      }, 2000);
    }
  }).catch(err => {
    console.error('Clipboard copy failed:', err);
  });
};

// 4. Initial DOM Setup & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Direct Event Listeners Attachment for bulletproof interaction
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.toggleTheme();
    });
  }

  const mobileToggle = document.getElementById('mobile-nav-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
      e.preventDefault();
      window.toggleMobileNav();
    });
  }

  // Theme Initial Check
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    document.documentElement.classList.add('light-theme');
    if (themeBtn) themeBtn.innerHTML = '🌙 Dark Mode';
  } else {
    document.body.classList.remove('light-theme');
    document.documentElement.classList.remove('light-theme');
    if (themeBtn) themeBtn.innerHTML = '☀️ Light Mode';
  }

  // Scroll Progress Bar & Scroll To Top
  const progressBar = document.getElementById('scroll-progress-bar');
  const scrollTopBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
    
    if (progressBar) progressBar.style.width = `${progress}%`;
    
    if (scrollTopBtn) {
      if (window.pageYOffset > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Modal Overlay Close Events
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalOverlay = document.getElementById('global-modal');

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', window.closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) window.closeModal();
    });
  }

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerText : 'Send Message';
      if (submitBtn) {
        submitBtn.innerText = 'Sending Message...';
        submitBtn.disabled = true;
      }

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('https://formspree.io/f/xovjepzg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            _subject: `New Portfolio Message from ${data.name}`
          })
        });

        if (response.ok) {
          alert('Thank you! Your message has been sent directly to Ziad Atef (ziad.atef.yehia@gmail.com).');
          contactForm.reset();
        } else {
          window.location.href = `mailto:ziad.atef.yehia@gmail.com?subject=${encodeURIComponent("Portfolio Inquiry from " + data.name)}&body=${encodeURIComponent(data.message + "\n\nFrom: " + data.name + " (" + data.email + ")")}`;
        }
      } catch (err) {
        window.location.href = `mailto:ziad.atef.yehia@gmail.com?subject=${encodeURIComponent("Portfolio Inquiry from " + data.name)}&body=${encodeURIComponent(data.message + "\n\nFrom: " + data.name + " (" + data.email + ")")}`;
      } finally {
        if (submitBtn) {
          submitBtn.innerText = originalText;
          submitBtn.disabled = false;
        }
      }
    });
  }
});
