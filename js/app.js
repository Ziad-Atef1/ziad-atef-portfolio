/* ==========================================
   ZIAD ATEF PORTFOLIO — APP INTERACTION LOGIC
   - Smooth Navigation Scrolling
   - Active Section Spy
   - Certification & Project Detail Modals
   - Copy-to-Clipboard Functionality
   ========================================== */

// Certificate Detail Data Dictionary
const CERTIFICATES_DATA = {
  'nvidia-llm': {
    title: 'NVIDIA – Certificate of Competency: Building LLM Applications With Prompt Engineering',
    issuer: 'NVIDIA Academy',
    date: 'February 2026',
    img: 'assets/certificates/Certificate_Nvidia_Bulding_LLM_With_Prompt_Engineering_page_1.png',
    desc: 'Focuses on designing, optimizing, and evaluating effective prompts for Large Language Models. Covers advanced techniques such as few-shot learning, chain-of-thought reasoning, and parameter tuning to build reliable enterprise AI workflows.',
    tag: 'GenAI & LLMs'
  },
  'nvidia-ai-for-all': {
    title: 'NVIDIA – AI for All: From Basics to GenAI Practice',
    issuer: 'NVIDIA Academy',
    date: 'February 2026',
    img: 'assets/certificates/AI_for_All_From_Basics_to_GenAI_Practice_AI_for_All_From_Basics_to_GenAI_Practice_-_Course_Completion_Certificate_page_1.png',
    desc: 'Comprehensive training on foundational AI concepts, transformer architectures, and practical generative AI applications. Emphasizes real-world AI deployment strategies, ethical considerations, and hands-on model implementation.',
    tag: 'Artificial Intelligence'
  },
  'nti-ml-summer': {
    title: 'NTI/ITIDA – Machine Learning Summer Training',
    issuer: 'National Telecommunication Institute (NTI) & ITIDA',
    date: 'Aug – Sep 2025 (120 Hours) | Score: 94%',
    img: 'assets/certificates/Nti.jpg',
    desc: 'Intensive 120-hour technical training program covering core statistical machine learning, regression analysis, decision trees, and model evaluation metrics. Achieved an outstanding final grade of 94% across practical projects and coding assessments.',
    tag: 'Machine Learning (94%)'
  },
  'nti-digital-egypt': {
    title: 'NTI/Digital Egypt Youth – Machine Learning for Data Analysis',
    issuer: 'NTI & Digital Egypt Youth Initiative',
    date: 'Nov 2025 – Jan 2026 (120 Hours) | Score: 84%',
    img: 'assets/certificates/شهاده_تقرير_.jpg',
    desc: 'Comprehensive dual-track program featuring 90 technical hours of data preprocessing, feature engineering, and model deployment alongside 30 hours of client communication and freelance project delivery skills.',
    tag: 'Data Analysis & Freelancing'
  },
  'iti-python': {
    title: 'ITI Mahara-Tech – Python Programming Basics',
    issuer: 'Information Technology Institute (ITI)',
    date: 'October 2025',
    img: 'assets/certificates/Course_Certificate_En_page_1.png',
    desc: 'Mastery of fundamental Python programming concepts, object-oriented principles, data structures, and script automation. Serves as the backbone for data manipulation and algorithm development.',
    tag: 'Python Core'
  },
  'iti-database': {
    title: 'ITI Mahara-Tech – Database Fundamentals',
    issuer: 'Information Technology Institute (ITI)',
    date: 'October 2025',
    img: 'assets/certificates/Course_Certificate_En__1__page_1.png',
    desc: 'In-depth study of relational database design, SQL querying, normalization, indexing, and data management best practices for structured enterprise analytics.',
    tag: 'SQL & Relational DBs'
  },
  'ebda3-masr': {
    title: 'Innovation Camp (Ebda3 Masr) – Certificate of Appreciation',
    issuer: 'Ebda3 Masr Innovation Initiative',
    date: 'April 2026',
    img: 'assets/certificates/Ziad_Atef_Yehia_page_1.png',
    desc: 'Awarded for outstanding innovation and collaborative problem-solving during Ebda3 Masr, demonstrating an entrepreneurial mindset and technical application in team environments.',
    tag: 'Innovation & Leadership'
  }
};

// Main Projects Data Dictionary
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

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Progress Bar & Scroll To Top Handler
  const progressBar = document.getElementById('scroll-progress-bar');
  const scrollTopBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    
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

  // 2. Category Filtering Logic for Certifications & Projects
  window.filterCerts = function(category, btnElement) {
    const cards = document.querySelectorAll('.certs-grid .cert-card');
    const buttons = document.querySelectorAll('#cert-filters .filter-btn');

    buttons.forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    cards.forEach(card => {
      const tag = card.getAttribute('data-category');
      if (category === 'all' || tag === category) {
        card.style.display = 'flex';
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
      } else {
        card.style.display = 'none';
      }
    });
  };

  // 3. Modal Handler for Certifications & Projects
  const modalOverlay = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  window.openCertModal = function(certKey) {
    const data = CERTIFICATES_DATA[certKey];
    if (!data) return;

    modalBody.innerHTML = `
      <div class="modal-split-grid">
        <div class="modal-img-frame">
          <img src="${data.img}" alt="${data.title}" />
        </div>
        <div>
          <span class="badge badge-light-mode" style="margin-bottom:1rem;">${data.tag}</span>
          <h2 style="font-size:1.6rem; color:var(--text-on-dark); margin-bottom:0.5rem; line-height:1.3;">${data.title}</h2>
          <p style="color:var(--accent); font-weight:600; font-size:0.95rem; margin-bottom:0.25rem;">${data.issuer}</p>
          <p style="color:var(--text-on-dark-muted); font-size:0.85rem; margin-bottom:1.5rem;">Issued: ${data.date}</p>
          
          <div style="background:rgba(200, 164, 92, 0.08); border-left:3px solid var(--accent); padding:1rem; border-radius:4px; margin-bottom:1.5rem;">
            <h4 style="font-family:var(--font-sans); color:var(--text-on-dark); font-size:0.95rem; margin-bottom:0.4rem;">Certification Overview & Scope:</h4>
            <p style="font-size:0.95rem; color:var(--text-on-dark-muted); line-height:1.6;">${data.desc}</p>
          </div>
          <button class="btn btn-outline-dark" onclick="closeModal()" style="width:100%;">Close Preview</button>
        </div>
      </div>
    `;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.openProjectModal = function(projKey) {
    const data = PROJECTS_DATA[projKey];
    if (!data) return;

    const toolsHtml = data.tools.map(t => `<span class="pill-tag">${t}</span>`).join(' ');

    let interactiveWidgetHtml = '';

    // Interactive Widget for Customer Retention ML
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

    // Interactive Widget for YOLOv8 Computer Vision
    if (projKey === 'smart-campus-yolo') {
      interactiveWidgetHtml = `
        <div class="ml-sandbox-card" style="margin-bottom:1.5rem;">
          <h4 style="color:var(--accent); font-family:var(--font-sans); font-size:1rem; margin-bottom:1rem;">
            👁️ YOLOv8 Real-Time Occupancy Detector Simulation:
          </h4>
          <div style="position:relative; width:100%; height:180px; background:#000; border-radius:8px; border:1px solid var(--accent); overflow:hidden; display:flex; align-items:center; justify-content:center;">
            <div style="position:absolute; top:12px; left:12px; background:rgba(0,0,0,0.8); padding:0.3rem 0.75rem; border-radius:50px; font-size:0.8rem; color:var(--accent); border:1px solid var(--accent);">
              ● LIVE INFERENCE: 14 Persons Detected
            </div>
            <!-- Animated Bounding Boxes Simulation -->
            <div style="position:absolute; top:35%; left:20%; width:50px; height:70px; border:2px solid #C8A45C; border-radius:4px; box-shadow:0 0 10px rgba(200,164,92,0.5);">
              <span style="background:#C8A45C; color:#000; font-size:0.6rem; font-weight:bold; padding:1px 3px; position:absolute; top:-14px; left:0;">person 0.96</span>
            </div>
            <div style="position:absolute; top:40%; left:50%; width:48px; height:68px; border:2px solid #C8A45C; border-radius:4px; box-shadow:0 0 10px rgba(200,164,92,0.5);">
              <span style="background:#C8A45C; color:#000; font-size:0.6rem; font-weight:bold; padding:1px 3px; position:absolute; top:-14px; left:0;">person 0.94</span>
            </div>
            <div style="position:absolute; top:30%; right:20%; width:52px; height:72px; border:2px solid #C8A45C; border-radius:4px; box-shadow:0 0 10px rgba(200,164,92,0.5);">
              <span style="background:#C8A45C; color:#000; font-size:0.6rem; font-weight:bold; padding:1px 3px; position:absolute; top:-14px; left:0;">person 0.98</span>
            </div>
            <p style="color:var(--text-on-dark-muted); font-size:0.9rem;">Lecture Hall A-102 Camera Stream Overlay</p>
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

  // Retention ML Simulator Calculation Helper
  window.updateRetentionSim = function() {
    const amount = parseInt(document.getElementById('slider-amount').value || 75);
    const days = parseInt(document.getElementById('slider-days').value || 14);

    document.getElementById('slider-val-amount').innerText = `$${amount}`;
    document.getElementById('slider-val-days').innerText = `${days} days`;

    // Simulated XGBoost probability model equation based on feature weights
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

  window.closeModal = function() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // 4. Copy To Clipboard Helper
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
    });
  };

  // 5. Contact Form Direct Email Handler to ziad.atef.yehia@gmail.com
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Sending Message...';
      submitBtn.disabled = true;

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
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
      }
    });
  }
});
