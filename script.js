// Project data for the dashboard
const projects = [
    {
        id: 1,
        title: "AI Bewustwording Game",
        description: "Spelenderwijs collega's leren over AI mogelijkheden en beperkingen door interactieve scenario's.",
        cost: 15000,
        status: "planning",
        savings: {
            kosten: "€25.000/jaar",
            tijd: "40% sneller onboarding",
            kwaliteit: "60% meer AI awareness",
            capaciteit: "200+ medewerkers bereik"
        },
        timeline: ["Q2 2025", "Q3 2025"],
        details: "Ontwikkeling van een interactieve web-applicatie met scenario-gebaseerde leermomenten over AI ethics, capabilities en praktische toepassingen."
    },
    {
        id: 2,
        title: "Kletsen met Data",
        description: "Conversational analytics tool waarmee collega's in natuurlijke taal vragen kunnen stellen aan datasets.",
        cost: 35000,
        status: "active",
        savings: {
            kosten: "€80.000/jaar",
            tijd: "75% snellere data insights",
            kwaliteit: "90% minder query fouten",
            capaciteit: "5x meer data analyses"
        },
        timeline: ["Q2 2025", "Q3 2025", "Q4 2025"],
        details: "Implementatie van Natural Language Processing voor database queries met een gebruiksvriendelijke chat interface."
    },
    {
        id: 3,
        title: "Spreekkamer Tool",
        description: "Automatische transcriptie en notulen generatie voor vergaderingen en consultaties.",
        cost: 25000,
        status: "planning",
        savings: {
            kosten: "€45.000/jaar",
            tijd: "80% minder admin tijd",
            kwaliteit: "95% transcriptie accuratesse",
            capaciteit: "Alle vergaderingen gedocumenteerd"
        },
        timeline: ["Q3 2025", "Q4 2025"],
        details: "Spraak-naar-tekst conversie met AI-gestuurde samenvatting en action item extractie voor professionele omgevingen."
    },
    {
        id: 4,
        title: "Gaims Uitbreiding",
        description: "Verdere uitrol en optimalisatie van de interne chatbot voor employee self-service.",
        cost: 20000,
        status: "active",
        savings: {
            kosten: "€60.000/jaar",
            tijd: "50% snellere vraagbeantwoording",
            kwaliteit: "85% first-time resolution",
            capaciteit: "24/7 beschikbaarheid"
        },
        timeline: ["Q2 2025", "Q3 2025", "Q4 2025", "Q1 2026"],
        details: "Uitbreiding van knowledge base, integratie met meer systemen en verbetering van natural language understanding."
    },
    {
        id: 5,
        title: "Data Structuur & DocChat",
        description: "Document chat capabilities voor het doorzoeken en bevragen van interne documentatie.",
        cost: 30000,
        status: "planning",
        savings: {
            kosten: "€70.000/jaar",
            tijd: "65% sneller informatie vinden",
            kwaliteit: "Consistente informatie toegang",
            capaciteit: "Volledige document library"
        },
        timeline: ["Q3 2025", "Q4 2025", "Q1 2026"],
        details: "RAG (Retrieval Augmented Generation) systeem voor intelligent zoeken en bevragen van bedrijfsdocumenten."
    },
    {
        id: 6,
        title: "Vergunning Pilot",
        description: "AI-gestuurde controle en validatie van vergunningsaanvragen voor snellere doorlooptijden.",
        cost: 40000,
        status: "planning",
        savings: {
            kosten: "€120.000/jaar",
            tijd: "70% snellere verwerking",
            kwaliteit: "95% minder fouten",
            capaciteit: "3x meer aanvragen"
        },
        timeline: ["Q4 2025", "Q1 2026"],
        details: "Automatische documentcontrole, compliance checking en risk assessment voor vergunningsprocessen."
    }
];

// FAQ data for AI Guide
const faqData = [
    {
        question: "Wat is Artificial Intelligence (AI)?",
        answer: "AI is de technologie waarmee computers taken kunnen uitvoeren die normaal menselijke intelligentie vereisen, zoals het herkennen van patronen, maken van beslissingen en het begrijpen van taal."
    },
    {
        question: "Hoe kan AI onze organisatie helpen?",
        answer: "AI kan processen automatiseren, data-analyse versnellen, klantservice verbeteren, kosten reduceren en nieuwe inzichten genereren uit bestaande data."
    },
    {
        question: "Is AI veilig om te gebruiken?",
        answer: "Met de juiste beveiligingsmaatregelen, data governance en ethische richtlijnen is AI veilig te gebruiken. Belangrijke aandachtspunten zijn privacy, data kwaliteit en transparantie."
    },
    {
        question: "Wat zijn de kosten van AI implementatie?",
        answer: "Kosten variëren per project, maar bestaan uit ontwikkeling (€15k-€40k), training, infrastructuur en onderhoud. ROI wordt meestal binnen 6-18 maanden behaald."
    },
    {
        question: "Hoe lang duurt een AI project?",
        answer: "Eenvoudige AI tools kunnen binnen 1-2 maanden worden geïmplementeerd, complexere systemen duren 3-6 maanden. Onze 100-dagen plan toont realistische tijdlijnen."
    },
    {
        question: "Wat voor training hebben medewerkers nodig?",
        answer: "Basis AI awareness (2-4 uur), tool-specifieke training (4-8 uur) en continue ondersteuning. Onze AI Bewustwording Game maakt dit proces eenvoudig en effectief."
    }
];

// Knowledge tracking data
const knowledgeData = [
    {
        category: "Online Cursussen",
        items: [
            "Stanford CS229 Machine Learning",
            "DeepLearning.ai Specialization",
            "MIT Introduction to AI"
        ]
    },
    {
        category: "Vakpublicaties",
        items: [
            "Harvard Business Review AI artikelen",
            "Nature Machine Intelligence",
            "AI Magazine"
        ]
    },
    {
        category: "Conferenties & Events",
        items: [
            "AI Summit Amsterdam 2024",
            "Dutch AI Coalition meetings",
            "Microsoft AI Days"
        ]
    },
    {
        category: "Praktijkervaring",
        items: [
            "OpenAI API experimenten",
            "Azure Cognitive Services pilots",
            "Internal AI tool development"
        ]
    }
];

// Chatbot responses
const chatbotResponses = {
    "mag ik ai gebruiken": "Ja, AI gebruik is toegestaan binnen onze richtlijnen. Zorg ervoor dat je geen vertrouwelijke data deelt met externe AI diensten.",
    "openai chatgpt": "ChatGPT mag gebruikt worden voor algemene vragen en brainstorming, maar niet voor vertrouwelijke bedrijfsinformatie.",
    "data privacy": "Deel nooit persoonsgegevens, klantdata of bedrijfsvertrouwelijke informatie met externe AI tools. Gebruik alleen geanonimiseerde voorbeelden.",
    "welke ai tools": "Goedgekeurde tools zijn: Microsoft Copilot (binnen Office 365), onze interne chatbot Gaims, en publieke AI tools voor niet-vertrouwelijke taken.",
    "ai policy": "Onze AI policy focust op veilig gebruik, data bescherming en transparantie. Vraag altijd toestemming bij twijfel over specifieke use cases.",
    "help": "Ik help je met vragen over AI gebruik binnen onze organisatie. Vraag bijvoorbeeld: 'Mag ik ChatGPT gebruiken?' of 'Welke data kan ik delen?'"
};

// Game questions
const gameQuestions = [
    {
        question: "Wat is machine learning?",
        options: [
            "Computers die zichzelf leren programmeren",
            "Algoritmes die patronen leren herkennen in data",
            "Robots die fysieke taken leren",
            "Software die automatisch updates installeert"
        ],
        correct: 1,
        explanation: "Machine learning zijn algoritmes die patronen kunnen herkennen en voorspellingen maken op basis van data, zonder expliciet geprogrammeerd te worden voor elke specifieke taak."
    },
    {
        question: "Wat is een groot voordeel van AI in business processen?",
        options: [
            "Vervangt alle menselijke medewerkers",
            "Automatiseert repetitieve taken en bespaart tijd",
            "Maakt bedrijfsdata openbaar toegankelijk",
            "Elimineert alle bedrijfsrisico's"
        ],
        correct: 1,
        explanation: "AI's grootste voordeel is het automatiseren van repetitieve taken, waardoor medewerkers zich kunnen focussen op meer strategische en creatieve werkzaamheden."
    },
    {
        question: "Wat is belangrijk bij het implementeren van AI?",
        options: [
            "Zo snel mogelijk alle processen automatiseren",
            "Alleen de nieuwste en duurste technologie gebruiken",
            "Starten met kleine pilots en geleidelijk opschalen",
            "Eerst alle medewerkers vervangen door AI"
        ],
        correct: 2,
        explanation: "Succesvolle AI implementatie start met kleine, beheersbare pilots om te leren en te experimenteren, voordat je opschaalt naar grotere toepassingen."
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHamburgerMenu();
    initializeDashboard();
    initializeChatbot();
    initializeGame();
    initializeModals();
});

// Hamburger menu functionality
function initializeHamburgerMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('navigation');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('open');
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navigation.classList.remove('open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navigation.contains(e.target)) {
            menuToggle.classList.remove('active');
            navigation.classList.remove('open');
        }
    });
}

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active navigation
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// Initialize dashboard - only table view
function initializeDashboard() {
    renderTableView();
}

// Render table view
function renderTableView() {
    const tableBody = document.getElementById('projects-table-body');
    
    projects.forEach(project => {
        const row = createTableRow(project);
        tableBody.appendChild(row);
    });
}

function createTableRow(project) {
    const row = document.createElement('tr');
    
    const statusText = {
        'planning': 'Planning',
        'active': 'In Uitvoering',
        'completed': 'Afgerond'
    };

    row.innerHTML = `
        <td>
            <div class="project-name">${project.title}</div>
            <div class="project-description-mini">${project.description}</div>
        </td>
        <td>
            <span class="status-badge status-${project.status}">${statusText[project.status]}</span>
        </td>
        <td class="cost-cell">€${project.cost.toLocaleString()}</td>
        <td class="category-cell kosten-cell">${project.savings.kosten}</td>
        <td class="category-cell tijd-cell">${project.savings.tijd}</td>
        <td class="category-cell kwaliteit-cell">${project.savings.kwaliteit}</td>
        <td class="category-cell capaciteit-cell">${project.savings.capaciteit}</td>
        <td>
            <div class="timeline-badges">
                ${project.timeline.map(quarter => `<span class="timeline-badge">${quarter}</span>`).join('')}
            </div>
        </td>
        <td>
            <button class="details-btn" onclick="showProjectDetails(${project.id})">Bekijk</button>
        </td>
    `;

    return row;
}

// Timeline view removed - only table view needed

// Chart view removed - table view is much clearer and more informative

// Show project details in modal
window.showProjectDetails = function(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('project-details-modal');
    const content = document.getElementById('project-details-content');
    
    const statusText = {
        'planning': 'Planning',
        'active': 'In Uitvoering',
        'completed': 'Afgerond'
    };

    const savings = parseInt(project.savings.kosten.replace(/[€.,]/g, ''));
    const roi = Math.round(((savings - project.cost) / project.cost) * 100);
    const paybackMonths = Math.round((project.cost / (savings / 12)) * 10) / 10;
    
    content.innerHTML = `
        <div class="project-details-header">
            <h2 class="project-details-title">${project.title}</h2>
            <span class="status-badge status-${project.status}">${statusText[project.status]}</span>
        </div>
        
        <div class="project-details-grid">
            <div class="detail-section">
                <h4>Project Beschrijving</h4>
                <p>${project.description}</p>
                <p style="margin-top: 1rem; color: var(--text-light);">${project.details}</p>
            </div>
            
            <div class="detail-section">
                <h4>Financiële Overzicht</h4>
                <p><strong>Investering:</strong> €${project.cost.toLocaleString()}</p>
                <p><strong>Jaarlijkse Besparing:</strong> ${project.savings.kosten}</p>
                <p><strong>ROI:</strong> ${roi}%</p>
                <p><strong>Payback Period:</strong> ${paybackMonths} maanden</p>
            </div>
            
            <div class="detail-section">
                <h4>Timeline</h4>
                <p><strong>Kwartalen:</strong> ${project.timeline.join(', ')}</p>
                <p><strong>Status:</strong> ${statusText[project.status]}</p>
            </div>
        </div>
        
        <div class="savings-breakdown">
            <div class="saving-detail">
                <div class="saving-detail-icon">💰</div>
                <div class="saving-detail-value">${project.savings.kosten}</div>
                <div class="saving-detail-label">Kosten Besparing</div>
            </div>
            <div class="saving-detail">
                <div class="saving-detail-icon">⏱️</div>
                <div class="saving-detail-value">${project.savings.tijd}</div>
                <div class="saving-detail-label">Tijd Efficiency</div>
            </div>
            <div class="saving-detail">
                <div class="saving-detail-icon">🎯</div>
                <div class="saving-detail-value">${project.savings.kwaliteit}</div>
                <div class="saving-detail-label">Kwaliteit Verbetering</div>
            </div>
            <div class="saving-detail">
                <div class="saving-detail-icon">📈</div>
                <div class="saving-detail-value">${project.savings.capaciteit}</div>
                <div class="saving-detail-label">Capaciteit Uitbreiding</div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
};

// FAQ section removed - not needed in navigation

// Initialize chatbot
function initializeChatbot() {
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    // Add welcome message
    addChatMessage('Hallo! Ik help je met vragen over AI gebruik binnen onze organisatie. Wat wil je weten?', 'bot');

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addChatMessage(message, 'user');
            chatInput.value = '';
            
            // Show typing indicator
            addChatMessage('AI Assistant aan het typen...', 'bot', 'typing');
            
            // Send to API
            sendToAPI(message);
        }
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Send message to n8n API
async function sendToAPI(message) {
    try {
        const response = await fetch('https://n8n.srv814968.hstgr.cloud/webhook-test/AI-uitleg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                timestamp: new Date().toISOString()
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Remove typing indicator
        removeTypingIndicator();
        
        // Add API response to chat
        const botResponse = data.response || data.message || 'Ik heb je vraag ontvangen, maar kan momenteel geen antwoord geven.';
        addChatMessage(botResponse, 'bot');
        
    } catch (error) {
        console.error('API Error:', error);
        
        // Remove typing indicator
        removeTypingIndicator();
        
        // Fallback to local response
        const fallbackResponse = getChatbotResponse(message);
        addChatMessage('Verbinding met AI server mislukt. Hier is een standaard antwoord: ' + fallbackResponse, 'bot');
    }
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingMessage = document.querySelector('.chat-message.typing');
    if (typingMessage) {
        typingMessage.remove();
    }
}

function addChatMessage(message, sender, type = null) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message message-${sender}`;
    
    if (type === 'typing') {
        messageDiv.classList.add('typing');
        messageDiv.innerHTML = `
            <span class="typing-text">${message}</span>
            <span class="typing-dots">
                <span>.</span><span>.</span><span>.</span>
            </span>
        `;
    } else {
        messageDiv.textContent = message;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(chatbotResponses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return "Interessante vraag! Voor specifieke AI gebruik cases raad ik aan om contact op te nemen met het IT team. Algemene vragen over AI policy kan ik wel beantwoorden.";
}

// Initialize game
function initializeGame() {
    const startGameBtn = document.getElementById('start-game');
    const gameArea = document.getElementById('game-area');
    let currentQuestion = 0;
    let score = 0;

    startGameBtn.addEventListener('click', function() {
        startGameBtn.style.display = 'none';
        gameArea.classList.remove('hidden');
        currentQuestion = 0;
        score = 0;
        showQuestion();
    });

    function showQuestion() {
        if (currentQuestion >= gameQuestions.length) {
            showGameResults();
            return;
        }

        const question = gameQuestions[currentQuestion];
        const optionsHTML = question.options.map((option, index) => 
            `<button class="game-option" data-index="${index}">${option}</button>`
        ).join('');

        gameArea.innerHTML = `
            <div class="game-question">
                <h4>Vraag ${currentQuestion + 1}/${gameQuestions.length}</h4>
                <p>${question.question}</p>
                <div class="game-options">
                    ${optionsHTML}
                </div>
                <div class="game-score">Score: ${score}/${currentQuestion}</div>
            </div>
        `;

        // Add event listeners to options
        document.querySelectorAll('.game-option').forEach(option => {
            option.addEventListener('click', function() {
                const selectedIndex = parseInt(this.dataset.index);
                handleGameAnswer(selectedIndex);
            });
        });
    }

    function handleGameAnswer(selectedIndex) {
        const question = gameQuestions[currentQuestion];
        const isCorrect = selectedIndex === question.correct;
        
        if (isCorrect) {
            score++;
        }

        // Show explanation
        gameArea.innerHTML += `
            <div class="game-feedback ${isCorrect ? 'correct' : 'incorrect'}">
                <p><strong>${isCorrect ? 'Correct!' : 'Helaas, dat is niet juist.'}</strong></p>
                <p>${question.explanation}</p>
                <button class="game-btn" onclick="nextQuestion()">Volgende Vraag</button>
            </div>
        `;
    }

    window.nextQuestion = function() {
        currentQuestion++;
        showQuestion();
    };

    function showGameResults() {
        const percentage = Math.round((score / gameQuestions.length) * 100);
        let message = '';
        
        if (percentage >= 80) {
            message = 'Uitstekend! Je hebt een goede kennis van AI concepten.';
        } else if (percentage >= 60) {
            message = 'Goed bezig! Er zijn nog wat concepten om te verdiepen.';
        } else {
            message = 'Een goede start! Blijf leren over AI mogelijkheden.';
        }

        gameArea.innerHTML = `
            <div class="game-results">
                <h4>Game Voltooid!</h4>
                <p class="score-display">Je score: ${score}/${gameQuestions.length} (${percentage}%)</p>
                <p>${message}</p>
                <button class="game-btn" onclick="restartGame()">Speel Opnieuw</button>
            </div>
        `;
    }

    window.restartGame = function() {
        startGameBtn.style.display = 'inline-block';
        gameArea.classList.add('hidden');
    };
}

// Modal functionality
function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.add('hidden');
        });
    });

    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });
    });
}

// ROI Calculator
window.openROICalculator = function() {
    const modal = document.getElementById('roi-modal');
    const calculatorForm = modal.querySelector('.calculator-form');
    
    calculatorForm.innerHTML = `
        <form id="roi-form">
            <div class="form-group">
                <label>Huidige jaarlijkse kosten (€):</label>
                <input type="number" id="current-costs" value="100000" min="0">
            </div>
            <div class="form-group">
                <label>AI implementatie kosten (€):</label>
                <input type="number" id="implementation-costs" value="25000" min="0">
            </div>
            <div class="form-group">
                <label>Verwachte kostenreductie (%):</label>
                <input type="number" id="cost-reduction" value="30" min="0" max="100">
            </div>
            <div class="form-group">
                <label>Verwachte tijdsbesparing (%):</label>
                <input type="number" id="time-savings" value="40" min="0" max="100">
            </div>
            <button type="button" onclick="calculateROI()" class="tool-btn">Bereken ROI</button>
        </form>
        <div id="roi-results" class="hidden">
            <!-- Results will be displayed here -->
        </div>
    `;
    
    modal.classList.remove('hidden');
};

window.calculateROI = function() {
    const currentCosts = parseFloat(document.getElementById('current-costs').value);
    const implementationCosts = parseFloat(document.getElementById('implementation-costs').value);
    const costReduction = parseFloat(document.getElementById('cost-reduction').value);
    const timeSavings = parseFloat(document.getElementById('time-savings').value);
    
    const annualSavings = currentCosts * (costReduction / 100);
    const paybackPeriod = implementationCosts / (annualSavings / 12);
    const firstYearROI = ((annualSavings - implementationCosts) / implementationCosts) * 100;
    const threeYearROI = (((annualSavings * 3) - implementationCosts) / implementationCosts) * 100;
    
    const resultsDiv = document.getElementById('roi-results');
    resultsDiv.innerHTML = `
        <h4>ROI Resultaten</h4>
        <div class="roi-metrics">
            <div class="metric">
                <span class="metric-label">Jaarlijkse besparing:</span>
                <span class="metric-value">€${annualSavings.toLocaleString()}</span>
            </div>
            <div class="metric">
                <span class="metric-label">Terugverdientijd:</span>
                <span class="metric-value">${paybackPeriod.toFixed(1)} maanden</span>
            </div>
            <div class="metric">
                <span class="metric-label">ROI eerste jaar:</span>
                <span class="metric-value">${firstYearROI.toFixed(1)}%</span>
            </div>
            <div class="metric">
                <span class="metric-label">ROI na 3 jaar:</span>
                <span class="metric-value">${threeYearROI.toFixed(1)}%</span>
            </div>
        </div>
    `;
    resultsDiv.classList.remove('hidden');
};

// Knowledge Tracker
window.openKnowledgeTracker = function() {
    const modal = document.getElementById('knowledge-modal');
    const knowledgeContent = modal.querySelector('.knowledge-content');
    
    let contentHTML = '<h4>Hoe ik mijn AI kennis up-to-date houd</h4>';
    
    knowledgeData.forEach(category => {
        contentHTML += `
            <div class="knowledge-category">
                <h5>${category.category}</h5>
                <ul>
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    
    knowledgeContent.innerHTML = contentHTML;
    modal.classList.remove('hidden');
};

// Project Prioritization
window.openPrioritization = function() {
    const modal = document.getElementById('prioritization-modal');
    const prioritizationContent = modal.querySelector('.prioritization-content');
    
    // Sort projects by a simple prioritization score (impact vs effort)
    const prioritizedProjects = projects.map(project => {
        const impact = parseInt(project.savings.kosten.replace(/[€.,]/g, '')) / 1000;
        const effort = project.cost / 1000;
        const score = impact / effort;
        return { ...project, priorityScore: score };
    }).sort((a, b) => b.priorityScore - a.priorityScore);
    
    let contentHTML = `
        <h4>Project Prioritering Matrix</h4>
        <p>Projecten gerangschikt op impact/effort ratio:</p>
        <div class="priority-list">
    `;
    
    prioritizedProjects.forEach((project, index) => {
        contentHTML += `
            <div class="priority-item">
                <div class="priority-rank">${index + 1}</div>
                <div class="priority-details">
                    <h5>${project.title}</h5>
                    <p>Impact/Effort Score: ${project.priorityScore.toFixed(2)}</p>
                    <small>Investering: €${project.cost.toLocaleString()} | Besparing: ${project.savings.kosten}</small>
                </div>
            </div>
        `;
    });
    
    contentHTML += '</div>';
    prioritizationContent.innerHTML = contentHTML;
    modal.classList.remove('hidden');
};

// Add CSS for new elements
const additionalCSS = `
    .form-group {
        margin-bottom: 1rem;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }
    
    .form-group input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid var(--border-color);
        border-radius: 4px;
    }
    
    .roi-metrics {
        margin-top: 1rem;
    }
    
    .metric {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--border-color);
    }
    
    .metric-value {
        font-weight: 600;
        color: var(--secondary-color);
    }
    
    .knowledge-category {
        margin-bottom: 1.5rem;
    }
    
    .knowledge-category h5 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }
    
    .knowledge-category ul {
        margin-left: 1rem;
    }
    
    .priority-list {
        margin-top: 1rem;
    }
    
    .priority-item {
        display: flex;
        align-items: center;
        padding: 1rem;
        margin-bottom: 0.5rem;
        background-color: var(--neutral-light);
        border-radius: 8px;
    }
    
    .priority-rank {
        background-color: var(--primary-color);
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        margin-right: 1rem;
    }
    
    .priority-details h5 {
        margin-bottom: 0.25rem;
        color: var(--secondary-color);
    }
    
    .game-options {
        margin: 1rem 0;
    }
    
    .game-option {
        display: block;
        width: 100%;
        margin-bottom: 0.5rem;
        padding: 0.8rem;
        background-color: var(--neutral-white);
        border: 2px solid var(--border-color);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .game-option:hover {
        border-color: var(--primary-color);
        background-color: rgba(75, 166, 223, 0.1);
    }
    
    .game-feedback {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
    }
    
    .game-feedback.correct {
        background-color: #D4EDDA;
        border: 1px solid #C3E6CB;
        color: #155724;
    }
    
    .game-feedback.incorrect {
        background-color: #F8D7DA;
        border: 1px solid #F5C6CB;
        color: #721C24;
    }
    
    .game-results {
        text-align: center;
        padding: 2rem;
    }
    
    .score-display {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--accent-color);
        margin: 1rem 0;
    }
`;

// Add the additional CSS to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);