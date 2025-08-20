// Project data for the dashboard
const projects = [
    {
        id: 0,
        title: "AI Geletterdheid Training",
        description: "Comprehensive AI literacy training platform met role-based modules en EU AI Act compliance.",
        cost: 45000,
        status: "planning",
        savings: {
            kosten: "€25.000/jaar",
            tijd: "65% sneller AI onboarding",
            kwaliteit: "85% meer AI bewustzijn",
            capaciteit: "900+ medewerkers certified"
        },
        timeline: ["Q2 2025", "Q# 2025"],
        details: "Volledig geïntegreerde AI-geletterdheid training met mock SSO, verschillende rollen, interactieve scenario's, gamification, certificering en admin analytics dashboard. Inclusief EU AI Act compliance modules."
    },
    {
        id: 2,
        title: "Kletsen met Data",
        description: "Conversational analytics tool waarmee collega's in natuurlijke taal vragen kunnen stellen aan datasets.",
        cost: 15000,
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
        status: "active",
        savings: {
            kosten: "€200.000/jaar",
            tijd: "80% minder admin tijd",
            kwaliteit: "95% transcriptie accuratesse",
            capaciteit: "Alle vergaderingen gedocumenteerd"
        },
        timeline: ["Q3 2025", "Q4 2025"],
        details: "Spraak-naar-tekst conversie met AI-gestuurde samenvatting en action item extractie voor professionele omgevingen."
    },
    {
        id: 4,
        title: "Gaims Uitrol",
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
        title: "Data Structuur",
        description: "Document chat capabilities voor het doorzoeken en bevragen van interne documentatie.",
        cost: 30000,
        status: "planning",
        savings: {
            kosten: "€50.000/jaar",
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
        cost: 20000,
        status: "active",
        savings: {
            kosten: "€120.000/jaar",
            tijd: "70% snellere verwerking",
            kwaliteit: "95% minder fouten",
            capaciteit: "3x meer aanvragen"
        },
        timeline: ["Q4 2025", "Q1 2026"],
        details: "Automatische documentcontrole, compliance checking en risk assessment voor vergunningsprocessen."
    }, 
        {
        id: 7,
        title: "AI in Schulinck",
        description: "Het gebruik van een AI chatbot in Schulinck.",
        cost: 20000,
        status: "active",
        savings: {
            kosten: "€10.000/jaar",
            tijd: "Snellere juridische antwoorden",
            kwaliteit: "Minder foutieve ",
            capaciteit: "Snellere doorlooptijden aanvraag"
        },
        timeline: ["Q4 2025", "Q1 2026"],
        details: "Usecase controle."
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

// AI Training Game Data
const aiTrainingData = {
    roles: {
        vergunningverlener: {
            name: "Henk Handtekening",
            title: "Vergunningverlener Bouw & Wonen",
            department: "Ruimtelijke Ordening",
            experience: "8 jaar",
            workload: "127 openstaande aanvragen",
            icon: "🏛️",
            intakeQuestions: [
                {
                    question: "Hoeveel uur besteed je gemiddeld aan één omgevingsvergunning?",
                    type: "slider",
                    min: 0,
                    max: 40,
                    default: 0,
                    unit: "uur",
                    answer: 6
                },
                {
                    question: "Hoeveel procent van de aanvragen is onvolledig bij eerste indiening?",
                    type: "slider", 
                    min: 0,
                    max: 100,
                    default: 0,
                    unit: "%",
                    answer: 45
                },
                {
                    question: "Grootste tijdrovende taak?",
                    type: "multiple",
                    options: ["Tekeningen controleren", "Documenten zoeken", "Brieven schrijven", "Overleg specialisten"],
                    answer: 0
                },
                {
                    question: "Zou AI je kunnen helpen bij je dagelijkse werk?",
                    type: "multiple",
                    options: ["Ja, zeker weten", "Waarschijnlijk wel", "Ik twijfel nog", "Nee, te complex"],
                    answer: 0
                }
            ],
            scenarios: [
                {
                    title: "Maandagmorgen Rush",
                    description: "15 nieuwe aanvragen, 8 deadline dossiers",
                    setting: "Het is maandagochtend 8:00 en je inbox wordt overspoeld. 15 nieuwe vergunningsaanvragen wachten op behandeling, terwijl 8 andere dossiers deze week een deadline hebben.",
                    aiTool: "VergunningScan AI voor volledigheidscheck",
                    options: [
                        "Chronologisch alle aanvragen behandelen",
                        "AI scan eerst gebruiken voor prioritering",
                        "Direct deadlines afhandelen",
                        "Willekeurig verdelen over de week"
                    ],
                    correct: 1,
                    feedback: "AI scant in 5 minuten → 6 incompleet, 3 standaard, 4 complex, 2 risico's. Tijdwinst: 3 uur!",
                    explanation: "AI kan snel volledigheid en complexiteit beoordelen, waardoor je direct kunt prioriteren en efficiënter werkt."
                },
                {
                    title: "Complexe Dakopbouw",
                    description: "Familie Jansen dakopbouw 45m², twijfel bouwhoogte vs welstand",
                    setting: "Familie Jansen wil een dakopbouw van 45m². De bouwhoogte lijkt te hoog, maar er kunnen uitzonderingen zijn voor welstand.",
                    aiTool: "BouwRegels AI detecteert conflict: 11.2m > 10.5m limiet",
                    options: [
                        "Vertrouw AI volledig en wijs af",
                        "Check handmatig na en overleg",
                        "Negeer AI en keur goed",
                        "Bel direct specialisten"
                    ],
                    correct: 1,
                    feedback: "AI assisteert, mens beslist: vrijstellingsregeling mogelijk via welstandscommissie",
                    explanation: "AI geeft waardevolle input, maar menselijke expertise blijft essentieel voor complexe afwegingen."
                },
                {
                    title: "Standaard Brief Schrijverij",
                    description: "12 afgekeurde vergunningen, juridisch correcte brieven nodig",
                    setting: "Je moet 12 afwijzingsbrieven schrijven. Elke brief moet juridisch correct zijn en de specifieke redenen bevatten.",
                    aiTool: "BriefAssistent AI genereert concept afwijzingsbrieven",
                    options: [
                        "Copy-paste AI brieven direct",
                        "Doorlezen en aanpassen waar nodig",
                        "AI als basis, volledig herschrijven",
                        "Helemaal zelf schrijven"
                    ],
                    correct: 1,
                    feedback: "Tijdwinst: 4 uur per week (20 min → 5 min per brief) bij 94% accuratesse",
                    explanation: "AI kan standaardteksten genereren, maar menselijke controle zorgt voor kwaliteit en personalisatie."
                },
                {
                    title: "Compliance Dilemma",
                    description: "AI implementatie overwegen, EU AI Act regels",
                    setting: "Je team overweegt AI te implementeren voor vergunningsprocessen. De EU AI Act stelt eisen aan AI-systemen in de publieke sector.",
                    aiTool: "EU AI Act Compliance Checker",
                    options: [
                        "Gewoon beginnen met AI",
                        "DPIA + transparantie + pilot",
                        "Wachten op nieuwe richtlijnen",
                        "Alleen intern gebruik"
                    ],
                    correct: 1,
                    feedback: "DPIA verplicht, transparantie voor burgers, menselijk toezicht, risiconiveau bepalen volgens EU AI Act",
                    explanation: "AI in publieke sector vereist zorgvuldige compliance met privacy, transparantie en risicomanagement."
                }
            ]
        },
        beleidsmedewerker: {
            name: "Maria de Jong",
            title: "Beleidsmedewerker",
            department: "Strategische Planning",
            experience: "12 jaar",
            workload: "5 actieve beleidstrajecten",
            icon: "📋"
        },
        projectleider: {
            name: "Tom Janssen", 
            title: "Projectleider",
            department: "Digitale Transformatie",
            experience: "10 jaar",
            workload: "3 lopende AI projecten",
            icon: "🎯"
        },
        frontoffice: {
            name: "Sarah Ahmed",
            title: "Frontoffice medewerker", 
            department: "Burgerservice",
            experience: "6 jaar",
            workload: "50+ vragen per dag",
            icon: "👥"
        },
        jurist: {
            name: "Lisa van der Meer",
            title: "Jurist",
            department: "Juridische Zaken", 
            experience: "15 jaar",
            workload: "25 juridische dossiers",
            icon: "⚖️"
        },
        ict: {
            name: "Ahmed Hassan",
            title: "ICT-er",
            department: "Technische Implementatie",
            experience: "9 jaar", 
            workload: "12 actieve systemen",
            icon: "💻"
        }
    },
    
    coreModules: [
        {
            title: "AI Basis Concepten",
            description: "Wat is AI en wat kan het (niet)?",
            type: "knowledge",
            content: {
                concepts: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Automation"],
                mechanics: "drag-drop, quiz, AI System Builder"
            }
        },
        {
            title: "Praktijk Scenario's", 
            description: "Hoe gebruik je AI in je dagelijkse werk?",
            type: "scenario",
            content: {
                scenarios: "Role-specific scenarios with realistic choices",
                mechanics: "scenario-based choices met realtime feedback"
            }
        },
        {
            title: "Ethiek & Bias",
            description: "Verantwoord AI gebruik", 
            type: "ethics",
            content: {
                topics: ["Bias Detection", "Transparantie", "Privacy", "Fairness"],
                mechanics: "Bias Detective, Ethiek Dilemma Theater, Transparantie Checker"
            }
        },
        {
            title: "EU AI Act Compliance",
            description: "Wetgeving en naleving",
            type: "compliance", 
            content: {
                topics: ["Risico Classificatie", "DPIA", "Transparantie", "Menselijk Toezicht"],
                mechanics: "Risico Piramide, Compliance Checklist, AI Act Timeline"
            }
        }
    ],

    gamification: {
        xpPerCorrectAnswer: 10,
        xpPerCompletedModule: 50,
        badges: {
            starter: { name: "AI Starter", requirement: "Complete intake", icon: "🌱" },
            learner: { name: "AI Learner", requirement: "Complete 2 modules", icon: "📚" }, 
            expert: { name: "AI Expert", requirement: "Complete all modules", icon: "🎓" },
            ethicist: { name: "Ethiek Expert", requirement: "Perfect ethics module", icon: "⚖️" },
            compliant: { name: "Compliance Champion", requirement: "Perfect compliance module", icon: "✅" },
            specialist: { name: "Vergunning Virtuoso", requirement: "Perfect all scenarios", icon: "🏆" }
        }
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHamburgerMenu();
    initializeDashboard();
    initializePrioritizationPage();
    initializeChatbot();
    initializeGame();
    initializeModals();
    initializePWA();
    initializeAdmin();
});

// Progressive Web App initialization
function initializePWA() {
    // Register service worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // Show update available notification
                                showUpdateNotification();
                            }
                        });
                    });
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
    
    // Handle PWA install prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('PWA install prompt triggered');
        e.preventDefault();
        deferredPrompt = e;
        showInstallButton();
    });
    
    // Handle PWA install success
    window.addEventListener('appinstalled', (evt) => {
        console.log('PWA was installed');
        hideInstallButton();
        // Track installation analytics
        trackPWAInstall();
    });
    
    // Handle online/offline status
    window.addEventListener('online', () => {
        console.log('App is online');
        showNetworkStatus('online');
        // Sync any pending training progress
        if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
            navigator.serviceWorker.ready.then(registration => {
                return registration.sync.register('ai-training-progress');
            });
        }
    });
    
    window.addEventListener('offline', () => {
        console.log('App is offline');
        showNetworkStatus('offline');
    });
}

function showUpdateNotification() {
    // Create update notification
    const notification = document.createElement('div');
    notification.className = 'update-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span>🔄 Nieuwe versie beschikbaar!</span>
            <button onclick="refreshApp()" class="update-btn">Vernieuwen</button>
            <button onclick="dismissUpdate()" class="dismiss-btn">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 10000);
}

function showInstallButton() {
    // Create install button in navigation
    const installBtn = document.createElement('button');
    installBtn.id = 'pwa-install-btn';
    installBtn.className = 'install-btn';
    installBtn.innerHTML = '📱 Installeer App';
    installBtn.onclick = installPWA;
    
    const navigation = document.querySelector('.nav-list-compact');
    if (navigation) {
        const installItem = document.createElement('li');
        installItem.appendChild(installBtn);
        navigation.appendChild(installItem);
    }
}

function hideInstallButton() {
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn && installBtn.parentNode) {
        installBtn.parentNode.remove();
    }
}

async function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to install prompt: ${outcome}`);
        deferredPrompt = null;
        hideInstallButton();
    }
}

function refreshApp() {
    window.location.reload();
}

function dismissUpdate() {
    const notification = document.querySelector('.update-notification');
    if (notification) {
        notification.remove();
    }
}

function showNetworkStatus(status) {
    // Remove existing status
    const existingStatus = document.querySelector('.network-status');
    if (existingStatus) {
        existingStatus.remove();
    }
    
    // Create new status indicator
    const statusDiv = document.createElement('div');
    statusDiv.className = `network-status ${status}`;
    statusDiv.innerHTML = status === 'online' ? 
        '🟢 Online' : '🔴 Offline - Training beschikbaar offline';
    
    document.body.appendChild(statusDiv);
    
    // Auto-hide online status after 3 seconds
    if (status === 'online') {
        setTimeout(() => {
            if (statusDiv.parentNode) {
                statusDiv.remove();
            }
        }, 3000);
    }
}

function trackPWAInstall() {
    // Track PWA installation for analytics
    const installData = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
    };
    
    localStorage.setItem('pwaInstallData', JSON.stringify(installData));
    console.log('PWA installation tracked:', installData);
}

// Admin Dashboard Functions
function exportAnalytics(type) {
    const reportData = generateAnalyticsReport(type);
    
    // Create downloadable file
    let filename = '';
    let content = '';
    
    switch(type) {
        case 'overview':
            filename = 'AI-Training-Overzicht.csv';
            content = generateOverviewReport(reportData);
            break;
        case 'department':
            filename = 'AI-Training-Afdelingen.csv';
            content = generateDepartmentReport(reportData);
            break;
        case 'individual':
            filename = 'AI-Training-Individueel.csv';
            content = generateIndividualReport(reportData);
            break;
        case 'compliance':
            filename = 'AI-Training-Compliance.csv';
            content = generateComplianceReport(reportData);
            break;
    }
    
    // Download file
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Analytics report exported: ${type}`);
}

function generateAnalyticsReport(type) {
    // Mock analytics data - in real app this would come from backend
    return {
        overview: {
            totalUsers: 127,
            completionRate: 73,
            avgScore: 82,
            certificates: 94,
            timestamp: new Date().toISOString()
        },
        departments: [
            { name: 'Ruimtelijke Ordening', users: 23, avgScore: 86, certificates: 19 },
            { name: 'Beleid & Strategie', users: 18, avgScore: 91, certificates: 16 },
            { name: 'Burgerservice', users: 31, avgScore: 78, certificates: 24 },
            { name: 'ICT & Digitalisering', users: 15, avgScore: 94, certificates: 14 }
        ],
        modules: [
            { name: 'Vergunningverlener Scenarios', completion: 89, rating: 4.8 },
            { name: 'EU AI Act Compliance', completion: 76, rating: 4.6 },
            { name: 'AI Ethiek & Bias', completion: 82, rating: 4.7 }
        ]
    };
}

function generateOverviewReport(data) {
    return `AI Training Overzicht Rapport
Gegenereerd op: ${new Date().toLocaleDateString('nl-NL')}

Organisatie Statistieken:
Totaal Actieve Gebruikers: ${data.overview.totalUsers}
Gemiddelde Completie Rate: ${data.overview.completionRate}%
Gemiddelde Score: ${data.overview.avgScore}%
Totaal Certificaten: ${data.overview.certificates}

Departement Prestaties:
${data.departments.map(dept => 
    `${dept.name}: ${dept.users} gebruikers, ${dept.avgScore}% gemiddelde score, ${dept.certificates} certificaten`
).join('\n')}

Module Populariteit:
${data.modules.map(module => 
    `${module.name}: ${module.completion}% completie, ${module.rating}/5.0 rating`
).join('\n')}`;
}

function generateDepartmentReport(data) {
    let csv = 'Afdeling,Aantal Gebruikers,Gemiddelde Score,Certificaten Behaald,Completie Rate\n';
    data.departments.forEach(dept => {
        const completionRate = Math.round((dept.certificates / dept.users) * 100);
        csv += `${dept.name},${dept.users},${dept.avgScore}%,${dept.certificates},${completionRate}%\n`;
    });
    return csv;
}

function generateIndividualReport(data) {
    // Mock individual data
    return `Naam,Afdeling,Score,Status,Certificaat Datum
Jan van der Berg,Ruimtelijke Ordening,86%,Voltooid,2024-01-15
Maria de Jong,Beleid & Strategie,91%,Voltooid,2024-01-14
Ahmed Hassan,ICT & Digitalisering,97%,Voltooid,2024-01-13
Sarah Ahmed,Burgerservice,78%,In Progress,-
Tom Janssen,ICT & Digitalisering,89%,Voltooid,2024-01-12`;
}

function generateComplianceReport(data) {
    return `AI Training Compliance Rapport
Gegenereerd: ${new Date().toLocaleDateString('nl-NL')}

EU AI Act Naleving:
- DPIA Training Voltooien: ${data.overview.completionRate}%
- Transparantie Module: 85% voltooid
- Risico Assessment: 78% voltooid
- Menselijk Toezicht: 82% voltooid

Organisatie Compliance Score: 83/100

Aanbevelingen:
- Verhoog deelname Burgerservice afdeling
- Focus op DPIA training voor management
- Update scenario's voor nieuwe wetgeving
- Implementeer verplichte herhaling elk jaar`;
}

// Update admin dashboard with real-time data
function updateAdminDashboard() {
    // In a real app, this would fetch data from backend
    const data = generateAnalyticsReport('overview');
    
    // Update overview stats with animation
    animateValue('total-users', 0, data.overview.totalUsers, 1000);
    animateValue('completion-rate', 0, data.overview.completionRate, 1000, '%');
    animateValue('avg-score', 0, data.overview.avgScore, 1000, '%');
    animateValue('certificates', 0, data.overview.certificates, 1000);
}

function animateValue(elementId, start, end, duration, suffix = '') {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.round(current) + suffix;
    }, 16);
}

// Initialize admin dashboard when page loads
function initializeAdmin() {
    // Update dashboard every 30 seconds in a real app
    // setInterval(updateAdminDashboard, 30000);
    
    // For demo, just update once after short delay
    setTimeout(updateAdminDashboard, 500);
}

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
            
            // Show/Hide Clippy based on section
            const clippyContainer = document.getElementById('clippy-container');
            if (clippyContainer) {
                if (targetId === 'game') {
                    // Only show if actually in training game (not on login screen)
                    const trainingGame = document.getElementById('training-game');
                    if (trainingGame && !trainingGame.classList.contains('hidden')) {
                        clippyContainer.style.display = 'flex';
                    }
                } else {
                    clippyContainer.style.display = 'none';
                }
            }
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
        const response = await fetch('https://n8n.srv814968.hstgr.cloud/webhook/AI-uitleg', {
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

// Initialize AI Training Game
function initializeGame() {
    initializeAITrainingGame();
}

// AI Training Game State
let gameState = {
    currentRole: null,
    currentStep: 0,
    totalSteps: 6, // Intake + 4 modules + results
    score: 0,
    xp: 0,
    badges: [],
    answers: [],
    progress: 0
};

function initializeAITrainingGame() {
    setupRoleSelection();
    setupGameNavigation();
    loadGameProgress();
}

function setupRoleSelection() {
    const roleButtons = document.querySelectorAll('.role-btn');
    
    roleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const role = this.dataset.role;
            const name = this.dataset.name;
            selectRole(role, name);
        });
    });
}

function selectRole(roleKey, name) {
    const role = aiTrainingData.roles[roleKey];
    if (!role) return;
    
    gameState.currentRole = roleKey;
    saveGameProgress();
    
    // Update profile display
    document.getElementById('profile-icon').textContent = role.icon;
    document.getElementById('profile-name').textContent = `Welkom terug, ${role.name}`;
    
    // Hide SSO login and show game
    document.getElementById('sso-login').classList.add('hidden');
    document.getElementById('training-game').classList.remove('hidden');
    
    // Show Clippy when entering training game
    const clippyContainer = document.getElementById('clippy-container');
    if (clippyContainer) {
        clippyContainer.style.display = 'flex';
    }
    
    // Start with intake assessment
    gameState.currentStep = 0;
    showCurrentStep();
}

// Microsoft SSO Login Function
function loginWithMicrosoft() {
    // Show loading state
    const msButton = document.querySelector('.microsoft-sso-btn');
    const originalContent = msButton.innerHTML;
    
    msButton.innerHTML = `
        <div class="loading-spinner"></div>
        <span>Inloggen...</span>
    `;
    msButton.disabled = true;
    
    // Simulate Microsoft SSO authentication delay
    setTimeout(() => {
        // In a real implementation, this would be actual Microsoft Graph API authentication
        // For demo purposes, we automatically log in as vergunningverlener
        
        // Simulate successful authentication response
        const mockUserData = {
            displayName: "Jan van der Berg",
            jobTitle: "Vergunningverlener Bouw & Wonen",
            department: "Ruimtelijke Ordening",
            userPrincipalName: "j.vandenberg@gemeente.nl",
            officeLocation: "Stadskantoor, Verdieping 3"
        };
        
        // Store authentication data
        localStorage.setItem('msAuthUser', JSON.stringify(mockUserData));
        
        // Auto-select vergunningverlener role based on "SSO" authentication
        selectRole('vergunningverlener', mockUserData.displayName);
        
        // Show success message briefly
        showAuthenticationSuccess(mockUserData.displayName);
        
    }, 2000); // 2 second delay to simulate real authentication
}

function showAuthenticationSuccess(userName) {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'auth-success-notification';
    notification.innerHTML = `
        <div class="auth-success-content">
            <div class="success-icon">✅</div>
            <div class="success-text">
                <h4>Succesvol ingelogd!</h4>
                <p>Welkom ${userName}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
    
    console.log('Microsoft SSO authentication successful for:', userName);
}

function setupGameNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.addEventListener('click', () => {
        if (gameState.currentStep > 0) {
            gameState.currentStep--;
            showCurrentStep();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (gameState.currentStep < gameState.totalSteps - 1) {
            gameState.currentStep++;
            showCurrentStep();
        }
    });
}

function showCurrentStep() {
    updateProgress();
    updateNavigation();
    updateScoreDisplay();
    updateProgressSidebar();
    
    const contentArea = document.getElementById('game-content');
    
    switch(gameState.currentStep) {
        case 0:
            showIntakeAssessment(contentArea);
            break;
        case 1:
            showModule('knowledge', contentArea);
            break;
        case 2:
            showModule('scenario', contentArea);
            break;
        case 3:
            showModule('ethics', contentArea);
            break;
        case 4:
            showModule('compliance', contentArea);
            break;
        case 5:
            showResults(contentArea);
            break;
    }
}

function showIntakeAssessment(container) {
    const role = aiTrainingData.roles[gameState.currentRole];
    if (!role.intakeQuestions) {
        // For roles without detailed intake, show generic assessment
        container.innerHTML = `
            <div class="intake-assessment">
                <h3>Intake Assessment</h3>
                <p>Welkom bij de AI@Werk Simulator! Deze training is aangepast aan jouw rol als ${role.title}.</p>
                <div class="role-specific-info">
                    <h4>Voor ${role.title}:</h4>
                    <ul>
                        <li>Leer hoe AI jouw dagelijkse taken kan ondersteunen</li>
                        <li>Ontdek best practices voor jouw vakgebied</li>
                        <li>Verstå de ethische en juridische aspecten</li>
                        <li>Word een AI-geletterde professional</li>
                    </ul>
                </div>
                <button class="primary-btn" onclick="completeIntake()">Start Training</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="intake-assessment-new">
            <div class="intake-header">
                <h3>Intake Assessment</h3>
                <p>Beantwoord deze vragen zodat we de training kunnen personaliseren voor jouw werkwijze.</p>
            </div>
            
            <div id="intake-questions">
                ${role.intakeQuestions.map((q, index) => {
                    if (q.type === 'slider') {
                        return `
                            <div class="question-block slider-question">
                                <h4>${q.question}</h4>
                                <div class="slider-container">
                                    <div class="slider-input-group">
                                        <input type="range" 
                                               id="slider-${index}" 
                                               class="custom-slider" 
                                               min="${q.min}" 
                                               max="${q.max}" 
                                               value="${q.default}"
                                               data-question="${index}">
                                        <div class="slider-value">
                                            <span id="value-${index}">${q.default}</span>
                                            <span class="slider-unit">${q.unit}</span>
                                        </div>
                                    </div>
                                    <div class="slider-labels">
                                        <span class="slider-min">${q.min}${q.unit}</span>
                                        <span class="slider-max">${q.max}${q.unit}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    } else {
                        return `
                            <div class="question-block multiple-question">
                                <h4>${q.question}</h4>
                                <div class="options-grid">
                                    ${q.options.map((option, optIndex) => `
                                        <button class="option-btn" data-question="${index}" data-answer="${optIndex}">
                                            ${option}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }
                }).join('')}
            </div>
            
            <div class="intake-progress">
                <div class="progress-text">
                    <span id="questions-answered">0</span> van ${role.intakeQuestions.length} vragen beantwoord
                </div>
                <div class="progress-bar">
                    <div id="intake-progress-fill" class="progress-fill"></div>
                </div>
            </div>
            
            <button class="primary-btn" id="complete-intake" disabled onclick="completeIntake()">
                Start Training →
            </button>
        </div>
    `;
    
    setupIntakeInteractions();
    initializeClippy();
}

// Clippy AI Assistant
const clippyMessages = {
    intake: [
        "Hallo! Ik ben je AI-assistent voor deze training. Laten we beginnen met een paar vragen over je werk!",
        "Wist je dat de gemiddelde vergunningverlener 6,2 uur besteedt aan één omgevingsvergunning?",
        "Fun fact: 67% van alle vergunningsaanvragen heeft bij eerste indiening documenten die niet compleet zijn!",
        "AI kan de controle van technische tekeningen tot 85% versnellen. Interessant toch?",
        "EU AI Act tip: Transparantie is key! Burgers hebben recht om te weten wanneer AI wordt gebruikt."
    ],
    scenarios: [
        "Tijd voor de praktijk! Deze scenario's zijn gebaseerd op echte werksituaties.",
        "Pro tip: Er zijn geen 'foute' antwoorden - elke keuze leert je iets nieuws!",
        "Wist je dat AI-assistentie in vergunningsverlening de doorlooptijd met 40% kan verminderen?",
        "Interessant feitje: 78% van de vergunningverleners wil graag AI-ondersteuning bij routine taken.",
        "De beste AI-implementaties combineren menselijke expertise met machine efficiency!"
    ],
    encouragement: [
        "Je doet het geweldig! Blijf zo doorgaan!",
        "Elke vraag brengt je dichter bij AI-expertise!",
        "Leuk om te zien hoe je de sliders gebruikt! 🎯",
        "Jouw antwoorden helpen de training persoonlijk te maken.",
        "Bijna klaar met deze sectie! 💪"
    ],
    facts: [
        "💡 AI kan 95% van standaardbrieven automatisch genereren met menselijke kwaliteit.",
        "⚡ Machine learning modellen kunnen patronen zien die mensen over het hoofd zien.",
        "🎯 De meest succesvolle AI-implementaties focussen op assistentie, niet vervanging.",
        "🔍 Computer vision kan tekeningen controleren in seconden in plaats van uren.",
        "📊 Predictive analytics kan helpen inschatten welke aanvragen complex worden.",
        "🤝 Hybrid intelligence (mens + AI) presteert beter dan beide apart.",
        "🔒 Privacy by design is essentieel bij AI in de publieke sector.",
        "⚖️ De EU AI Act classificeert overheids-AI meestal als 'hoog risico'."
    ]
};

let clippyState = {
    currentMessageIndex: 0,
    messageCategory: 'intake',
    isVisible: true,
    lastInteraction: Date.now()
};

function initializeClippy() {
    // Show initial message  
    showClippyMessage("Hallo! Ik help je door deze training. Klik op mij voor een leuk AI feitje! 📎");
    
    // Add click handler for Clippy
    const clippyChar = document.getElementById('clippy-char');
    if (clippyChar) {
        clippyChar.addEventListener('click', () => {
            showRandomClippyFact();
            animateClippy();
        });
    }
    
    // Update score display
    updateScoreDisplay();
    updateProgressSidebar();
}

function showClippyMessage(message) {
    const speechBubble = document.getElementById('clippy-speech');
    const speechContent = speechBubble?.querySelector('.speech-content');
    
    if (speechContent) {
        // Fade out, change text, fade in
        speechBubble.style.opacity = '0.5';
        
        setTimeout(() => {
            speechContent.textContent = message;
            speechBubble.style.opacity = '1';
            animateClippy();
        }, 300);
    }
}

function updateClippyMessage() {
    // Don't update if user interacted recently (within 5 seconds)
    if (Date.now() - clippyState.lastInteraction < 5000) return;
    
    const messages = clippyMessages[clippyState.messageCategory];
    clippyState.currentMessageIndex = (clippyState.currentMessageIndex + 1) % messages.length;
    
    showClippyMessage(messages[clippyState.currentMessageIndex]);
}

function showRandomClippyFact() {
    const facts = clippyMessages.facts;
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    showClippyMessage(randomFact);
    clippyState.lastInteraction = Date.now();
}

function animateClippy() {
    const clippy = document.querySelector('.clippy-character');
    if (clippy) {
        clippy.classList.add('clippy-bounce');
        setTimeout(() => {
            clippy.classList.remove('clippy-bounce');
        }, 600);
    }
}

function setClippyCategory(category) {
    clippyState.messageCategory = category;
    clippyState.currentMessageIndex = 0;
    
    if (clippyMessages[category]) {
        showClippyMessage(clippyMessages[category][0]);
    }
}

function updateScoreDisplay() {
    const xpElement = document.getElementById('current-xp');
    const scoreElement = document.getElementById('current-score');
    const badgesElement = document.getElementById('current-badges');
    
    if (xpElement) xpElement.textContent = gameState.xp || 0;
    if (scoreElement) scoreElement.textContent = gameState.score ? `${gameState.score}%` : '0%';
    if (badgesElement) badgesElement.textContent = gameState.badges?.length || 0;
}

function updateProgressSidebar() {
    const currentStep = gameState.currentStep || 0;
    
    // Update step items
    document.querySelectorAll('.step-item').forEach((item, index) => {
        const stepStatus = item.querySelector('.step-status');
        
        if (index < currentStep) {
            // Completed steps
            stepStatus.textContent = '✅';
            stepStatus.className = 'step-status completed';
            item.classList.add('completed');
        } else if (index === currentStep) {
            // Current step
            stepStatus.textContent = '🎯';
            stepStatus.className = 'step-status active';
            item.classList.add('active');
        } else {
            // Future steps
            stepStatus.textContent = '🔒';
            stepStatus.className = 'step-status locked';
            item.classList.add('locked');
        }
    });
    
    // Update badges based on earned badges
    const badgePreviews = document.querySelectorAll('.badge-preview');
    badgePreviews.forEach((badge, index) => {
        if (gameState.badges && gameState.badges.length > index) {
            badge.classList.add('earned');
        }
    });
}

function clippyReactToSlider(questionIndex, value) {
    let reaction = "";
    
    // React based on question and value (simplified, only show once)
    if (questionIndex === 0 && value >= 10) { // Hours per permit
        reaction = "Interessant! 🤔 AI kan vooral helpen bij tijdrovende document controles.";
    } else if (questionIndex === 1 && value >= 60) { // Incomplete applications
        reaction = "Dat is veel! 😅 AI volledigheidscheck kan dit drastisch verbeteren.";
    }
    
    if (reaction && !clippyState.hasReactedToSlider) {
        showClippyMessage(reaction);
        clippyState.lastInteraction = Date.now();
        clippyState.hasReactedToSlider = true;
        animateClippy();
    }
}

function setupIntakeInteractions() {
    const role = aiTrainingData.roles[gameState.currentRole];
    const optionBtns = document.querySelectorAll('.option-btn');
    const sliders = document.querySelectorAll('.custom-slider');
    const completeBtn = document.getElementById('complete-intake');
    let answeredQuestions = new Set();
    
    // Handle multiple choice buttons
    optionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const questionIndex = parseInt(this.dataset.question);
            const answerIndex = parseInt(this.dataset.answer);
            
            // Remove active state from other buttons in this question
            document.querySelectorAll(`[data-question="${questionIndex}"].option-btn`).forEach(b => {
                b.classList.remove('selected');
            });
            
            // Add active state to clicked button
            this.classList.add('selected');
            
            // Track answered questions
            answeredQuestions.add(questionIndex);
            gameState.answers[questionIndex] = answerIndex;
            
            updateIntakeProgress();
        });
    });
    
    // Handle sliders
    sliders.forEach(slider => {
        const questionIndex = parseInt(slider.dataset.question);
        const valueDisplay = document.getElementById(`value-${questionIndex}`);
        
        // Mark slider questions as answered by default (they have default values)
        answeredQuestions.add(questionIndex);
        gameState.answers[questionIndex] = parseInt(slider.value);
        
        slider.addEventListener('input', function() {
            const value = parseInt(this.value);
            valueDisplay.textContent = value;
            gameState.answers[questionIndex] = value;
            
            // Add visual feedback for interaction
            this.classList.add('interacted');
            
            // Clippy reactions to slider values
            clippyReactToSlider(questionIndex, value);
            
            updateIntakeProgress();
        });
    });
    
    function updateIntakeProgress() {
        // Update progress indicator
        const questionsAnswered = document.getElementById('questions-answered');
        const progressFill = document.getElementById('intake-progress-fill');
        
        questionsAnswered.textContent = answeredQuestions.size;
        const progressPercentage = (answeredQuestions.size / role.intakeQuestions.length) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        
        // Enable complete button if all answered
        if (answeredQuestions.size === role.intakeQuestions.length) {
            completeBtn.disabled = false;
            completeBtn.classList.add('enabled');
        }
    }
    
    // Initial progress update (for sliders that start with default values)
    updateIntakeProgress();
}

function completeIntake() {
    gameState.xp += 25;
    gameState.badges.push('starter');
    gameState.currentStep = 1;
    saveGameProgress();
    showCurrentStep();
}

function showModule(moduleType, container) {
    const module = aiTrainingData.coreModules.find(m => m.type === moduleType);
    
    if (moduleType === 'scenario' && gameState.currentRole === 'vergunningverlener') {
        showScenarioModule(container);
        return;
    }
    
    // Generic module display for other types
    container.innerHTML = `
        <div class="module-content">
            <h3>${module.title}</h3>
            <p>${module.description}</p>
            <div class="module-placeholder">
                <div class="coming-soon">
                    <div class="coming-soon-icon">🚧</div>
                    <h4>Module in ontwikkeling</h4>
                    <p>Deze module wordt binnenkort beschikbaar gesteld.</p>
                    
                    <div class="module-preview">
                        <h5>Wat je kunt verwachten:</h5>
                        <div class="preview-content">
                            ${module.content.concepts ? `
                                <div class="preview-section">
                                    <strong>📚 Concepten:</strong>
                                    <ul class="concept-list">
                                        ${module.content.concepts.map(concept => `<li>${concept}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                            
                            ${module.content.mechanics ? `
                                <div class="preview-section">
                                    <strong>🎮 Interacties:</strong>
                                    <p class="mechanics-text">${module.content.mechanics}</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    
                    <div class="development-status">
                        <div class="status-bar">
                            <div class="status-progress" style="width: 75%"></div>
                        </div>
                        <p class="status-text">75% gereed - Verwacht: Q2 2025</p>
                    </div>
                </div>
            </div>
            <button class="primary-btn" onclick="completeModule('${moduleType}')">
                Doorgaan naar volgende module →
            </button>
        </div>
    `;
}

function showScenarioModule(container) {
    const role = aiTrainingData.roles[gameState.currentRole];
    const scenarios = role.scenarios || [];
    
    // Update Clippy for scenarios
    setClippyCategory('scenarios');
    
    container.innerHTML = `
        <div class="scenario-module">
            <!-- Clippy for Scenarios -->
            <div class="clippy-container">
                <div class="clippy-character">📎</div>
                <div class="clippy-speech-bubble" id="clippy-speech">
                    <div class="speech-content">
                        Tijd voor de praktijk! Deze scenario's zijn gebaseerd op echte werksituaties.
                    </div>
                    <div class="speech-pointer"></div>
                </div>
            </div>
            
            <h3>Praktijk Scenario's - ${role.title}</h3>
            <p>Doorloop realistische werksituaties en leer hoe AI je kan helpen.</p>
            <div id="scenario-content">
                ${scenarios.map((scenario, index) => `
                    <div class="scenario-card ${index === 0 ? 'active' : 'locked'}" data-scenario="${index}">
                        <div class="scenario-header">
                            <h4>${scenario.title}</h4>
                            <span class="scenario-status">${index === 0 ? 'Actief' : 'Vergrendeld'}</span>
                        </div>
                        <p class="scenario-description">${scenario.description}</p>
                        ${index === 0 ? `<button class="scenario-btn" onclick="startScenario(${index})">Start Scenario</button>` : ''}
                    </div>
                `).join('')}
            </div>
            <div class="scenario-progress">
                <span>Voortgang: <span id="scenario-progress">0/${scenarios.length}</span></span>
            </div>
        </div>
    `;
}

function startScenario(scenarioIndex) {
    const role = aiTrainingData.roles[gameState.currentRole];
    const scenario = role.scenarios[scenarioIndex];
    
    const container = document.getElementById('game-content');
    container.innerHTML = `
        <div class="active-scenario">
            <h3>${scenario.title}</h3>
            <div class="scenario-setting">
                <h4>Situatie:</h4>
                <p>${scenario.setting}</p>
            </div>
            <div class="ai-tool-info">
                <h4>AI Tool beschikbaar:</h4>
                <p>${scenario.aiTool}</p>
            </div>
            <div class="scenario-question">
                <h4>Wat doe je?</h4>
                <div class="scenario-options">
                    ${scenario.options.map((option, index) => `
                        <button class="scenario-option" data-index="${index}">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    setupScenarioInteractions(scenario, scenarioIndex);
}

function setupScenarioInteractions(scenario, scenarioIndex) {
    const optionBtns = document.querySelectorAll('.scenario-option');
    
    optionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedIndex = parseInt(this.dataset.index);
            showScenarioFeedback(scenario, selectedIndex, scenarioIndex);
        });
    });
}

function showScenarioFeedback(scenario, selectedIndex, scenarioIndex) {
    const isCorrect = selectedIndex === scenario.correct;
    
    if (isCorrect) {
        gameState.score += 10;
        gameState.xp += aiTrainingData.gamification.xpPerCorrectAnswer;
    }
    
    const container = document.getElementById('game-content');
    container.innerHTML = `
        <div class="scenario-feedback">
            <h3>${scenario.title}</h3>
            <div class="feedback-result ${isCorrect ? 'correct' : 'incorrect'}">
                <h4>${isCorrect ? '✅ Uitstekende keuze!' : '❌ Niet optimaal'}</h4>
                <p><strong>Resultaat:</strong> ${scenario.feedback}</p>
                <p><strong>Uitleg:</strong> ${scenario.explanation}</p>
            </div>
            <div class="scenario-stats">
                <div class="stat">
                    <span class="stat-label">XP verdiend:</span>
                    <span class="stat-value">+${isCorrect ? aiTrainingData.gamification.xpPerCorrectAnswer : 5}</span>
                </div>
            </div>
            <button class="primary-btn" onclick="nextScenario(${scenarioIndex})">
                ${scenarioIndex < 3 ? 'Volgende Scenario' : 'Module Voltooien'}
            </button>
        </div>
    `;
}

function nextScenario(completedIndex) {
    const role = aiTrainingData.roles[gameState.currentRole];
    const scenarios = role.scenarios || [];
    
    if (completedIndex < scenarios.length - 1) {
        // Show next scenario
        showScenarioModule(document.getElementById('game-content'));
        // Unlock next scenario (simplified for demo)
    } else {
        // All scenarios completed
        completeModule('scenario');
    }
}

function completeModule(moduleType) {
    gameState.xp += aiTrainingData.gamification.xpPerCompletedModule;
    
    // Award badges based on performance
    if (moduleType === 'scenario' && gameState.currentRole === 'vergunningverlener') {
        gameState.badges.push('specialist');
    }
    
    gameState.currentStep++;
    saveGameProgress();
    showCurrentStep();
}

function showResults(container) {
    const totalXP = gameState.xp;
    const percentage = Math.round((gameState.score / 40) * 100); // Simplified calculation
    
    container.innerHTML = `
        <div class="final-results">
            <h3>🎓 Training Voltooid!</h3>
            <div class="results-summary">
                <div class="result-stat">
                    <div class="stat-icon">📊</div>
                    <div class="stat-info">
                        <h4>AI-Geletterdheid Score</h4>
                        <span class="stat-number">${percentage}%</span>
                    </div>
                </div>
                <div class="result-stat">
                    <div class="stat-icon">⭐</div>
                    <div class="stat-info">
                        <h4>XP Totaal</h4>
                        <span class="stat-number">${totalXP}</span>
                    </div>
                </div>
            </div>
            
            <div class="badges-earned">
                <h4>Behaalde Badges</h4>
                <div class="badge-list">
                    ${gameState.badges.map(badge => {
                        const badgeInfo = aiTrainingData.gamification.badges[badge];
                        return `
                            <div class="badge-item">
                                <span class="badge-icon">${badgeInfo.icon}</span>
                                <span class="badge-name">${badgeInfo.name}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <div class="certificate-download">
                <h4>🏆 Certificaat</h4>
                <p>Download je persoonlijke AI-geletterdheid certificaat</p>
                <button class="primary-btn" onclick="downloadCertificate()">
                    📄 Download Certificaat
                </button>
            </div>
            
            <div class="next-steps">
                <h4>Vervolgstappen</h4>
                <ul>
                    <li>Deel je kennis met collega's</li>
                    <li>Implementeer AI tools in je dagelijks werk</li>
                    <li>Blijf op de hoogte van nieuwe ontwikkelingen</li>
                    <li>Neem deel aan vervolgtrainingen</li>
                </ul>
            </div>
            
            <button class="secondary-btn" onclick="restartTraining()">
                🔄 Opnieuw Starten
            </button>
        </div>
    `;
}

function updateProgress() {
    const progress = (gameState.currentStep / (gameState.totalSteps - 1)) * 100;
    gameState.progress = progress;
    
    document.getElementById('progress-percentage').textContent = `${Math.round(progress)}%`;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function updateNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const stepIndicator = document.getElementById('step-indicator');
    
    prevBtn.disabled = gameState.currentStep === 0;
    nextBtn.disabled = gameState.currentStep === gameState.totalSteps - 1;
    
    stepIndicator.textContent = `Stap ${gameState.currentStep + 1} van ${gameState.totalSteps}`;
}

function downloadCertificate() {
    const role = aiTrainingData.roles[gameState.currentRole];
    const certificateData = {
        name: role.name,
        role: role.title,
        score: Math.round((gameState.score / 40) * 100),
        date: new Date().toLocaleDateString('nl-NL'),
        badges: gameState.badges
    };
    
    // Simplified certificate generation (in real app, use proper PDF generation)
    const certificateText = `
AI-GELETTERDHEID CERTIFICAAT

Dit certificaat wordt uitgereikt aan:
${certificateData.name}
${certificateData.role}

Voor het succesvol voltooien van de AI@Werk Simulator training
met een score van ${certificateData.score}%

Behaalde badges: ${gameState.badges.map(b => aiTrainingData.gamification.badges[b].name).join(', ')}

Datum: ${certificateData.date}

🤖 Gegenereerd met Claude Code
Co-Authored-By: Claude
    `;
    
    const blob = new Blob([certificateText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI-Certificaat-${role.name.replace(/\s+/g, '')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

function saveGameProgress() {
    localStorage.setItem('aiTrainingProgress', JSON.stringify(gameState));
}

function loadGameProgress() {
    const saved = localStorage.getItem('aiTrainingProgress');
    if (saved) {
        gameState = { ...gameState, ...JSON.parse(saved) };
    }
}

function restartTraining() {
    gameState = {
        currentRole: null,
        currentStep: 0,
        totalSteps: 6,
        score: 0,
        xp: 0,
        badges: [],
        answers: [],
        progress: 0
    };
    
    localStorage.removeItem('aiTrainingProgress');
    
    document.getElementById('training-game').classList.add('hidden');
    document.getElementById('game-results').classList.add('hidden');
    document.getElementById('sso-login').classList.remove('hidden');
    
    // Hide Clippy when exiting training game
    const clippyContainer = document.getElementById('clippy-container');
    if (clippyContainer) {
        clippyContainer.style.display = 'none';
    }
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

// Project Prioritization Tool State
let prioritizationState = {
    projectName: '',
    description: '',
    duration: '1-3 maanden',
    resources: '0.2 FTE',
    costSavings: 5,
    timeWins: 5,
    qualityImprovement: 5,
    numberOfPeople: 20,
    strategicValue: 'Gemiddeld',
    implementationRisk: 'Gemiddeld',
    quickWins: false,
    complianceImpact: 'Laag',
    priorityScore: 0,
    priorityLevel: 'Gemiddelde Prioriteit',
    savedProjects: JSON.parse(localStorage.getItem('prioritizedProjects') || '[]')
};

// Project Prioritization Tool - Initialize Page
function initializePrioritizationPage() {
    const pageContent = document.querySelector('#prioritering .prioritering-page-content');
    
    pageContent.innerHTML = `
        <div class="prioritization-tool">
            <div class="prioritization-main">
                <!-- Left Panel: Form -->
                <div class="prioritization-form">
                    ${renderProjectBasisSection()}
                    ${renderImpactAssessmentSection()}
                    ${renderStrategieRisicoSection()}
                    
                    <div class="form-actions">
                        <button class="primary-btn" onclick="calculatePriority()">📊 Bereken Prioriteit</button>
                        <button class="secondary-btn" onclick="resetForm()">🔄 Reset Formulier</button>
                    </div>
                </div>
                
                <!-- Right Panel: Results -->
                <div class="prioritization-results">
                    <div id="priority-dashboard" class="priority-dashboard">
                        ${renderPriorityDashboard()}
                    </div>
                    
                    <div class="project-portfolio">
                        <h4>📋 Project Portfolio</h4>
                        <div class="example-actions" style="margin-bottom: 1rem;">
                            <button class="secondary-btn" onclick="loadMockData()" style="font-size: 0.8rem; padding: 0.5rem;">📝 Laad Mock Data Voorbeelden</button>
                        </div>
                        <div id="saved-projects-list">
                            ${renderSavedProjectsList()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    setupPrioritizationEventListeners();
}

// Legacy function for backward compatibility
window.openPrioritization = function() {
    showSection('prioritering');
};

function renderProjectBasisSection() {
    return `
        <div class="form-section">
            <h3>📋 Sectie 1: Project Basis</h3>
            
            <div class="form-group">
                <label for="project-name">Projectnaam</label>
                <input type="text" id="project-name" value="${prioritizationState.projectName}" 
                       placeholder="Bijv. AI Chatbot voor FAQ">
            </div>
            
            <div class="form-group">
                <label for="project-description">Beschrijving</label>
                <textarea id="project-description" rows="3" 
                         placeholder="Korte beschrijving van het AI project...">${prioritizationState.description}</textarea>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="project-duration">Geschatte projectduur</label>
                    <select id="project-duration">
                        <option value="1-3 maanden" ${prioritizationState.duration === '1-3 maanden' ? 'selected' : ''}>1-3 maanden</option>
                        <option value="3-6 maanden" ${prioritizationState.duration === '3-6 maanden' ? 'selected' : ''}>3-6 maanden</option>
                        <option value="6-12 maanden" ${prioritizationState.duration === '6-12 maanden' ? 'selected' : ''}>6-12 maanden</option>
                        <option value="12+ maanden" ${prioritizationState.duration === '12+ maanden' ? 'selected' : ''}>12+ maanden</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="project-resources">Benodigde resources</label>
                    <select id="project-resources">
                        <option value="0.2 FTE" ${prioritizationState.resources === '0.2 FTE' ? 'selected' : ''}>0.2 FTE</option>
                        <option value="0.5 FTE" ${prioritizationState.resources === '0.5 FTE' ? 'selected' : ''}>0.5 FTE</option>
                        <option value="1 FTE" ${prioritizationState.resources === '1 FTE' ? 'selected' : ''}>1 FTE</option>
                        <option value="2+ FTE" ${prioritizationState.resources === '2+ FTE' ? 'selected' : ''}>2+ FTE</option>
                    </select>
                </div>
            </div>
        </div>
    `;
}

function renderImpactAssessmentSection() {
    return `
        <div class="form-section">
            <h3>📊 Sectie 2: Impact Assessment</h3>
            
            <div class="impact-slider">
                <label>💰 Kostenbesparing (€0 - €100k+ per jaar)</label>
                <div class="slider-container">
                    <input type="range" id="cost-savings" min="0" max="10" value="${prioritizationState.costSavings}" 
                           class="priority-slider">
                    <div class="slider-value-display">
                        <span id="cost-value">€${getCostValue(prioritizationState.costSavings)}</span>
                    </div>
                </div>
                <div class="slider-tooltip">💡 Directe kosten zoals FTE-tijd, licenties, externe inhuur</div>
            </div>
            
            <div class="impact-slider">
                <label>⏱️ Tijdwinst (0% - 80% procesversnelling)</label>
                <div class="slider-container">
                    <input type="range" id="time-wins" min="0" max="10" value="${prioritizationState.timeWins}" 
                           class="priority-slider">
                    <div class="slider-value-display">
                        <span id="time-value">${getTimeValue(prioritizationState.timeWins)}%</span>
                    </div>
                </div>
                <div class="slider-tooltip">💡 Hoeveel sneller wordt het proces met AI?</div>
            </div>
            
            <div class="impact-slider">
                <label>🎯 Kwaliteitsverbetering (1-10 schaal)</label>
                <div class="slider-container">
                    <input type="range" id="quality-improvement" min="1" max="10" value="${prioritizationState.qualityImprovement}" 
                           class="priority-slider">
                    <div class="slider-value-display">
                        <span id="quality-value">${getQualityLabel(prioritizationState.qualityImprovement)}</span>
                    </div>
                </div>
                <div class="slider-tooltip">💡 Minder fouten, betere consistentie, compliance</div>
            </div>
            
            <div class="impact-slider">
                <label>👥 Aantal betrokken personen (1-500+ mensen)</label>
                <div class="slider-container">
                    <input type="range" id="number-people" min="0" max="10" value="${Math.log10(prioritizationState.numberOfPeople / 5)}" 
                           class="priority-slider">
                    <div class="slider-value-display">
                        <span id="people-value">${prioritizationState.numberOfPeople} mensen</span>
                    </div>
                </div>
                <div class="slider-tooltip">💡 Hoeveel collega's profiteren van deze AI oplossing?</div>
            </div>
        </div>
    `;
}

function renderStrategieRisicoSection() {
    return `
        <div class="form-section">
            <h3>🎯 Sectie 3: Strategie & Risico</h3>
            
            <div class="form-group">
                <label for="strategic-value">🎯 Strategische waarde</label>
                <select id="strategic-value">
                    <option value="Laag" ${prioritizationState.strategicValue === 'Laag' ? 'selected' : ''}>Laag: "Nice to have verbetering"</option>
                    <option value="Gemiddeld" ${prioritizationState.strategicValue === 'Gemiddeld' ? 'selected' : ''}>Gemiddeld: "Ondersteunt afdelingsdoelen"</option>
                    <option value="Hoog" ${prioritizationState.strategicValue === 'Hoog' ? 'selected' : ''}>Hoog: "Cruciaal voor organisatiestrategie"</option>
                    <option value="Kritiek" ${prioritizationState.strategicValue === 'Kritiek' ? 'selected' : ''}>Kritiek: "Essentieel voor toekomst organisatie"</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="implementation-risk">⚠️ Implementatie risico</label>
                <select id="implementation-risk">
                    <option value="Laag" ${prioritizationState.implementationRisk === 'Laag' ? 'selected' : ''}>Laag: "Proven technology, minimale weerstand"</option>
                    <option value="Gemiddeld" ${prioritizationState.implementationRisk === 'Gemiddeld' ? 'selected' : ''}>Gemiddeld: "Enige technische/organisatorische uitdagingen"</option>
                    <option value="Hoog" ${prioritizationState.implementationRisk === 'Hoog' ? 'selected' : ''}>Hoog: "Complexe implementatie, change management nodig"</option>
                    <option value="Zeer hoog" ${prioritizationState.implementationRisk === 'Zeer hoog' ? 'selected' : ''}>Zeer hoog: "Experimentele technologie, grote veranderingen"</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="quick-wins">🚀 Quick wins mogelijk</label>
                <div class="toggle-container">
                    <input type="checkbox" id="quick-wins" ${prioritizationState.quickWins ? 'checked' : ''}>
                    <label for="quick-wins" class="toggle-label">Kunnen we binnen 3 maanden eerste resultaten tonen?</label>
                </div>
            </div>
            
            <div class="form-group">
                <label for="compliance-impact">📋 Compliance impact</label>
                <select id="compliance-impact">
                    <option value="Geen" ${prioritizationState.complianceImpact === 'Geen' ? 'selected' : ''}>Geen: "Geen wet- en regelgeving issues"</option>
                    <option value="Laag" ${prioritizationState.complianceImpact === 'Laag' ? 'selected' : ''}>Laag: "Minimale privacy/compliance overwegingen"</option>
                    <option value="Gemiddeld" ${prioritizationState.complianceImpact === 'Gemiddeld' ? 'selected' : ''}>Gemiddeld: "DPIA en risicoanalyse vereist"</option>
                    <option value="Hoog" ${prioritizationState.complianceImpact === 'Hoog' ? 'selected' : ''}>Hoog: "Complexe juridische afwegingen, externe advisering"</option>
                </select>
            </div>
        </div>
    `;
}

function renderPriorityDashboard() {
    const score = prioritizationState.priorityScore;
    const level = getPriorityLevel(score);
    const icon = getPriorityIcon(level);
    const color = getPriorityColor(level);
    
    return `
        <div class="priority-score-display">
            <div class="score-circle" style="border-color: ${color}; color: ${color}">
                <span class="score-number">${score.toFixed(1)}</span>
                <span class="score-label">Score</span>
            </div>
        </div>
        
        <div class="priority-level">
            <h3 style="color: ${color}">${icon} ${level}</h3>
            <p class="priority-description">${getPriorityDescription(level)}</p>
        </div>
        
        <div class="radar-chart-container">
            <canvas id="radar-chart" width="250" height="250"></canvas>
        </div>
        
        <div class="recommendations">
            <h4>🎯 Aanbevelingen</h4>
            <div class="recommendation-card">
                ${getRecommendations(level, score)}
            </div>
        </div>
        
        <div class="action-buttons">
            <button class="primary-btn" onclick="saveProject()">💾 Project Opslaan</button>
            <button class="secondary-btn" onclick="exportToCsv()">📊 Export naar CSV</button>
        </div>
    `;
}

function renderSavedProjectsList() {
    if (prioritizationState.savedProjects.length === 0) {
        return '<p class="empty-state">Nog geen projecten opgeslagen. Vul het formulier in en sla je eerste project op!</p>';
    }
    
    return prioritizationState.savedProjects
        .sort((a, b) => b.priorityScore - a.priorityScore)
        .map((project, index) => `
            <div class="saved-project-item" onclick="loadProject(${index})">
                <div class="project-rank">${index + 1}</div>
                <div class="project-info">
                    <h5>${project.projectName}</h5>
                    <div class="project-meta">
                        <span class="score">Score: ${project.priorityScore.toFixed(1)}</span>
                        <span class="level ${getPriorityLevel(project.priorityScore).toLowerCase().replace(' ', '-')}">${getPriorityIcon(getPriorityLevel(project.priorityScore))} ${getPriorityLevel(project.priorityScore)}</span>
                    </div>
                </div>
                <button class="delete-btn" onclick="deleteProject(${index}); event.stopPropagation();">×</button>
            </div>
        `).join('');
}

// Utility Functions for Priority Calculation
function getCostValue(slider) {
    const values = [0, 5000, 10000, 20000, 35000, 50000, 65000, 80000, 90000, 95000, 100000];
    return values[slider]?.toLocaleString() || '0';
}

function getTimeValue(slider) {
    return slider * 8;
}

function getQualityLabel(value) {
    if (value <= 2) return 'Minimaal';
    if (value <= 4) return 'Beperkt';
    if (value <= 6) return 'Aanzienlijk';
    if (value <= 8) return 'Groot';
    return 'Revolutionair';
}

function getPeopleValue(slider) {
    return Math.round(Math.pow(10, slider / 2) * 5);
}

function getStrategyScore(value) {
    const scores = { 'Laag': 2, 'Gemiddeld': 5, 'Hoog': 8, 'Kritiek': 10 };
    return scores[value] || 5;
}

function getRiskScore(value) {
    const scores = { 'Laag': 1, 'Gemiddeld': 3, 'Hoog': 6, 'Zeer hoog': 8 };
    return scores[value] || 3;
}

function getComplianceScore(value) {
    const scores = { 'Geen': 0, 'Laag': 1, 'Gemiddeld': 3, 'Hoog': 5 };
    return scores[value] || 1;
}

function getPriorityLevel(score) {
    if (score >= 8.0) return 'Hoge Prioriteit';
    if (score >= 6.0) return 'Gemiddelde Prioriteit';
    if (score >= 4.0) return 'Lage Prioriteit';
    return 'Niet Prioriteit';
}

function getPriorityIcon(level) {
    const icons = {
        'Hoge Prioriteit': '🔥',
        'Gemiddelde Prioriteit': '⚡',
        'Lage Prioriteit': '📋',
        'Niet Prioriteit': '❌'
    };
    return icons[level] || '📋';
}

function getPriorityColor(level) {
    const colors = {
        'Hoge Prioriteit': '#FF4444',
        'Gemiddelde Prioriteit': '#FFA500',
        'Lage Prioriteit': '#4BA6DF',
        'Niet Prioriteit': '#999999'
    };
    return colors[level] || '#4BA6DF';
}

function getPriorityDescription(level) {
    const descriptions = {
        'Hoge Prioriteit': 'Start direct, maximale impact',
        'Gemiddelde Prioriteit': 'Plan voor Q2/Q3',
        'Lage Prioriteit': 'Overweeg voor Q4 of later',
        'Niet Prioriteit': 'Uitstellen of heroverwegen'
    };
    return descriptions[level] || 'Beoordeling vereist';
}

function getRecommendations(level, score) {
    const roiMonths = Math.max(3, Math.round(12 - (score * 1.2)));
    const roi = (score * 0.3).toFixed(1);
    
    const baseRecommendations = {
        'Hoge Prioriteit': `
            <div class="recommendation-item success">
                <h5>✅ Aanbeveling: Start direct in Q1</h5>
                <p>💰 ROI: ${roi}x binnen ${roiMonths} maanden</p>
                <p>⚠️ Risico: ${prioritizationState.implementationRisk} - ${getRiskAdvice()}</p>
                <p>🎯 Next steps: Stakeholder alignment, pilot team formeren</p>
            </div>
        `,
        'Gemiddelde Prioriteit': `
            <div class="recommendation-item warning">
                <h5>⚡ Aanbeveling: Plan voor Q2/Q3</h5>
                <p>💰 ROI: ${roi}x binnen ${roiMonths} maanden</p>
                <p>⚠️ Risico: ${prioritizationState.implementationRisk} - plan risicomanagement</p>
                <p>🎯 Next steps: Business case versterken, resources plannen</p>
            </div>
        `,
        'Lage Prioriteit': `
            <div class="recommendation-item info">
                <h5>📋 Aanbeveling: Overweeg voor Q4 of later</h5>
                <p>💰 ROI: ${roi}x binnen ${roiMonths} maanden</p>
                <p>⚠️ Focus op hoger prioritaire projecten eerst</p>
                <p>🎯 Next steps: Impact verhogen of scope aanpassen</p>
            </div>
        `,
        'Niet Prioriteit': `
            <div class="recommendation-item danger">
                <h5>❌ Aanbeveling: Uitstellen of heroverwegen</h5>
                <p>💰 Beperkte ROI verwacht</p>
                <p>⚠️ Hoog risico bij lage impact</p>
                <p>🎯 Next steps: Project herdefiniëren of stoppen</p>
            </div>
        `
    };
    
    return baseRecommendations[level] || baseRecommendations['Lage Prioriteit'];
}

function getRiskAdvice() {
    const advice = {
        'Laag': 'minimale voorbereiding nodig',
        'Gemiddeld': 'plan change management',
        'Hoog': 'uitgebreide risico-analyse vereist',
        'Zeer hoog': 'overweeg alternatieve aanpak'
    };
    return advice[prioritizationState.implementationRisk] || 'risico-analyse aanbevolen';
}

// Event Listeners and Interactions
function setupPrioritizationEventListeners() {
    // Form inputs
    document.getElementById('project-name').addEventListener('input', updateProjectName);
    document.getElementById('project-description').addEventListener('input', updateDescription);
    document.getElementById('project-duration').addEventListener('change', updateDuration);
    document.getElementById('project-resources').addEventListener('change', updateResources);
    
    // Sliders
    document.getElementById('cost-savings').addEventListener('input', updateCostSavings);
    document.getElementById('time-wins').addEventListener('input', updateTimeWins);
    document.getElementById('quality-improvement').addEventListener('input', updateQuality);
    document.getElementById('number-people').addEventListener('input', updateNumberPeople);
    
    // Dropdowns and toggles
    document.getElementById('strategic-value').addEventListener('change', updateStrategyValue);
    document.getElementById('implementation-risk').addEventListener('change', updateRisk);
    document.getElementById('quick-wins').addEventListener('change', updateQuickWins);
    document.getElementById('compliance-impact').addEventListener('change', updateCompliance);
    
    // Auto-calculate on any change
    calculatePriority();
}

function updateProjectName(e) {
    prioritizationState.projectName = e.target.value;
}

function updateDescription(e) {
    prioritizationState.description = e.target.value;
}

function updateDuration(e) {
    prioritizationState.duration = e.target.value;
}

function updateResources(e) {
    prioritizationState.resources = e.target.value;
}

function updateCostSavings(e) {
    prioritizationState.costSavings = parseInt(e.target.value);
    document.getElementById('cost-value').textContent = '€' + getCostValue(prioritizationState.costSavings);
    calculatePriority();
}

function updateTimeWins(e) {
    prioritizationState.timeWins = parseInt(e.target.value);
    document.getElementById('time-value').textContent = getTimeValue(prioritizationState.timeWins) + '%';
    calculatePriority();
}

function updateQuality(e) {
    prioritizationState.qualityImprovement = parseInt(e.target.value);
    document.getElementById('quality-value').textContent = getQualityLabel(prioritizationState.qualityImprovement);
    calculatePriority();
}

function updateNumberPeople(e) {
    const sliderValue = parseInt(e.target.value);
    prioritizationState.numberOfPeople = getPeopleValue(sliderValue);
    document.getElementById('people-value').textContent = prioritizationState.numberOfPeople + ' mensen';
    calculatePriority();
}

function updateStrategyValue(e) {
    prioritizationState.strategicValue = e.target.value;
    calculatePriority();
}

function updateRisk(e) {
    prioritizationState.implementationRisk = e.target.value;
    calculatePriority();
}

function updateQuickWins(e) {
    prioritizationState.quickWins = e.target.checked;
    calculatePriority();
}

function updateCompliance(e) {
    prioritizationState.complianceImpact = e.target.value;
    calculatePriority();
}

function calculatePriority() {
    // Priority Score Algorithm (exact specification)
    const costScore = prioritizationState.costSavings;
    const timeScore = prioritizationState.timeWins;
    const qualityScore = prioritizationState.qualityImprovement;
    const peopleScore = Math.log10(prioritizationState.numberOfPeople / 5) + 1;
    const strategyScore = getStrategyScore(prioritizationState.strategicValue);
    const quickWinScore = prioritizationState.quickWins ? 2 : 0;
    const riskPenalty = getRiskScore(prioritizationState.implementationRisk);
    const compliancePenalty = getComplianceScore(prioritizationState.complianceImpact);
    
    const score = (costScore * 0.25) + 
                  (timeScore * 0.20) + 
                  (qualityScore * 0.15) + 
                  (peopleScore * 0.15) + 
                  (strategyScore * 0.15) + 
                  (quickWinScore * 0.10) - 
                  (riskPenalty * 0.10) - 
                  (compliancePenalty * 0.05);
    
    prioritizationState.priorityScore = Math.max(0, score);
    
    // Update dashboard
    updatePriorityDashboard();
    drawRadarChart();
}

function updatePriorityDashboard() {
    const dashboard = document.getElementById('priority-dashboard');
    if (dashboard) {
        dashboard.innerHTML = renderPriorityDashboard();
    }
}

function drawRadarChart() {
    const canvas = document.getElementById('radar-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Data points (normalized to 0-1)
    const data = [
        prioritizationState.costSavings / 10,
        prioritizationState.timeWins / 10,
        prioritizationState.qualityImprovement / 10,
        Math.min(Math.log10(prioritizationState.numberOfPeople / 5) / 2, 1),
        getStrategyScore(prioritizationState.strategicValue) / 10,
        (10 - getRiskScore(prioritizationState.implementationRisk)) / 10
    ];
    
    const labels = ['Kosten', 'Tijd', 'Kwaliteit', 'Personen', 'Strategie', 'Risico'];
    const numPoints = data.length;
    
    // Draw background circles
    ctx.strokeStyle = '#E9ECEF';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    // Draw axes
    ctx.strokeStyle = '#D1D5DB';
    ctx.lineWidth = 1;
    for (let i = 0; i < numPoints; i++) {
        const angle = (i * 2 * Math.PI) / numPoints - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // Labels
        ctx.fillStyle = '#6B7280';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        const labelX = centerX + Math.cos(angle) * (radius + 20);
        const labelY = centerY + Math.sin(angle) * (radius + 20);
        ctx.fillText(labels[i], labelX, labelY);
    }
    
    // Draw data polygon
    ctx.strokeStyle = '#4BA6DF';
    ctx.fillStyle = 'rgba(75, 166, 223, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let i = 0; i < numPoints; i++) {
        const angle = (i * 2 * Math.PI) / numPoints - Math.PI / 2;
        const value = data[i];
        const x = centerX + Math.cos(angle) * radius * value;
        const y = centerY + Math.sin(angle) * radius * value;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Draw data points
    ctx.fillStyle = '#4BA6DF';
    for (let i = 0; i < numPoints; i++) {
        const angle = (i * 2 * Math.PI) / numPoints - Math.PI / 2;
        const value = data[i];
        const x = centerX + Math.cos(angle) * radius * value;
        const y = centerY + Math.sin(angle) * radius * value;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function saveProject() {
    if (!prioritizationState.projectName.trim()) {
        alert('Voer eerst een projectnaam in.');
        return;
    }
    
    const project = { ...prioritizationState };
    project.savedAt = new Date().toISOString();
    
    // Check if project already exists
    const existingIndex = prioritizationState.savedProjects.findIndex(p => p.projectName === project.projectName);
    
    if (existingIndex >= 0) {
        if (confirm('Project bestaat al. Overschrijven?')) {
            prioritizationState.savedProjects[existingIndex] = project;
        } else {
            return;
        }
    } else {
        prioritizationState.savedProjects.push(project);
    }
    
    localStorage.setItem('prioritizedProjects', JSON.stringify(prioritizationState.savedProjects));
    
    // Update saved projects list
    document.getElementById('saved-projects-list').innerHTML = renderSavedProjectsList();
    
    alert('Project opgeslagen!');
}

function loadProject(index) {
    const project = prioritizationState.savedProjects[index];
    if (!project) return;
    
    // Load project data into state
    Object.assign(prioritizationState, project);
    
    // Re-render the form with loaded data
    const pageContent = document.querySelector('#prioritering .prioritering-page-content');
    pageContent.innerHTML = `
        <div class="prioritization-tool">
            <div class="prioritization-main">
                <div class="prioritization-form">
                    ${renderProjectBasisSection()}
                    ${renderImpactAssessmentSection()}
                    ${renderStrategieRisicoSection()}
                    
                    <div class="form-actions">
                        <button class="primary-btn" onclick="calculatePriority()">📊 Bereken Prioriteit</button>
                        <button class="secondary-btn" onclick="resetForm()">🔄 Reset Formulier</button>
                    </div>
                </div>
                
                <div class="prioritization-results">
                    <div id="priority-dashboard" class="priority-dashboard">
                        ${renderPriorityDashboard()}
                    </div>
                    
                    <div class="project-portfolio">
                        <h4>📋 Project Portfolio</h4>
                        <div id="saved-projects-list">
                            ${renderSavedProjectsList()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    setupPrioritizationEventListeners();
    drawRadarChart();
}

function deleteProject(index) {
    if (confirm('Project verwijderen?')) {
        prioritizationState.savedProjects.splice(index, 1);
        localStorage.setItem('prioritizedProjects', JSON.stringify(prioritizationState.savedProjects));
        document.getElementById('saved-projects-list').innerHTML = renderSavedProjectsList();
    }
}

function exportToCsv() {
    if (prioritizationState.savedProjects.length === 0) {
        alert('Geen projecten om te exporteren. Sla eerst projecten op.');
        return;
    }
    
    const headers = [
        'Projectnaam', 'Beschrijving', 'Duur', 'Resources', 'Priority Score', 'Priority Level',
        'Kostenbesparing', 'Tijdwinst', 'Kwaliteit', 'Aantal Personen', 'Strategische Waarde',
        'Implementatie Risico', 'Quick Wins', 'Compliance Impact', 'Opgeslagen op'
    ];
    
    const csvContent = [
        headers.join(','),
        ...prioritizationState.savedProjects.map(project => [
            `"${project.projectName}"`,
            `"${project.description}"`,
            `"${project.duration}"`,
            `"${project.resources}"`,
            project.priorityScore.toFixed(2),
            `"${getPriorityLevel(project.priorityScore)}"`,
            getCostValue(project.costSavings),
            getTimeValue(project.timeWins) + '%',
            getQualityLabel(project.qualityImprovement),
            project.numberOfPeople,
            `"${project.strategicValue}"`,
            `"${project.implementationRisk}"`,
            project.quickWins ? 'Ja' : 'Nee',
            `"${project.complianceImpact}"`,
            new Date(project.savedAt).toLocaleDateString('nl-NL')
        ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `Project-Prioritering-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function resetForm() {
    if (confirm('Formulier resetten? Alle huidige gegevens gaan verloren.')) {
        prioritizationState = {
            projectName: '',
            description: '',
            duration: '1-3 maanden',
            resources: '0.2 FTE',
            costSavings: 5,
            timeWins: 5,
            qualityImprovement: 5,
            numberOfPeople: 20,
            strategicValue: 'Gemiddeld',
            implementationRisk: 'Gemiddeld',
            quickWins: false,
            complianceImpact: 'Laag',
            priorityScore: 0,
            priorityLevel: 'Gemiddelde Prioriteit',
            savedProjects: JSON.parse(localStorage.getItem('prioritizedProjects') || '[]')
        };
        initializePrioritizationPage();
    }
}

// Mock Data Examples as specified in requirements
function loadMockData() {
    const mockProjects = [
        {
            projectName: "AI Chatbot voor FAQ",
            description: "Automatische beantwoording van veelgestelde vragen via conversational AI interface voor betere klantservice en minder werkdruk frontoffice.",
            duration: "3-6 maanden",
            resources: "0.5 FTE",
            costSavings: 6, // €35k
            timeWins: 8, // 60%
            qualityImprovement: 7,
            numberOfPeople: 150,
            strategicValue: "Gemiddeld",
            implementationRisk: "Laag",
            quickWins: true,
            complianceImpact: "Laag",
            priorityScore: 8.2,
            savedAt: new Date().toISOString()
        },
        {
            projectName: "Voorspellende Analytics voor Planning",
            description: "Machine learning model voor voorspelling van resource behoefte en capaciteitsplanning op basis van historische data en trends.",
            duration: "6-12 maanden",
            resources: "1 FTE",
            costSavings: 9, // €80k
            timeWins: 5, // 30%
            qualityImprovement: 9,
            numberOfPeople: 25,
            strategicValue: "Hoog",
            implementationRisk: "Hoog",
            quickWins: false,
            complianceImpact: "Gemiddeld",
            priorityScore: 6.8,
            savedAt: new Date().toISOString()
        },
        {
            projectName: "Document Classificatie Systeem",
            description: "Automatische categorisering en routering van inkomende documenten met AI-powered document understanding voor efficiëntere workflows.",
            duration: "3-6 maanden",
            resources: "0.5 FTE",
            costSavings: 7, // €50k
            timeWins: 7, // 55%
            qualityImprovement: 8,
            numberOfPeople: 75,
            strategicValue: "Gemiddeld",
            implementationRisk: "Gemiddeld",
            quickWins: true,
            complianceImpact: "Hoog",
            priorityScore: 7.1,
            savedAt: new Date().toISOString()
        }
    ];
    
    // Add mock projects to saved projects if they don't exist
    const existingNames = prioritizationState.savedProjects.map(p => p.projectName);
    mockProjects.forEach(project => {
        if (!existingNames.includes(project.projectName)) {
            prioritizationState.savedProjects.push(project);
        }
    });
    
    localStorage.setItem('prioritizedProjects', JSON.stringify(prioritizationState.savedProjects));
    
    // Update display
    document.getElementById('saved-projects-list').innerHTML = renderSavedProjectsList();
    
    alert('Mock data voorbeelden geladen! Je kunt deze projecten bekijken en bewerken.');
}

// Function to load example project 1 (High Priority)
function loadExample1() {
    prioritizationState = {
        projectName: "AI Chatbot voor FAQ",
        description: "Automatische beantwoording van veelgestelde vragen via conversational AI interface voor betere klantservice en minder werkdruk frontoffice.",
        duration: "3-6 maanden",
        resources: "0.5 FTE",
        costSavings: 6, // €35k
        timeWins: 8, // 60%
        qualityImprovement: 7,
        numberOfPeople: 150,
        strategicValue: "Gemiddeld",
        implementationRisk: "Laag",
        quickWins: true,
        complianceImpact: "Laag",
        priorityScore: 0,
        priorityLevel: 'Gemiddelde Prioriteit',
        savedProjects: JSON.parse(localStorage.getItem('prioritizedProjects') || '[]')
    };
    
    // Re-render form
    const pageContent = document.querySelector('#prioritering .prioritering-page-content');
    pageContent.innerHTML = `
        <div class="prioritization-tool">
            <div class="prioritization-main">
                <div class="prioritization-form">
                    ${renderProjectBasisSection()}
                    ${renderImpactAssessmentSection()}
                    ${renderStrategieRisicoSection()}
                    
                    <div class="form-actions">
                        <button class="primary-btn" onclick="calculatePriority()">📊 Bereken Prioriteit</button>
                        <button class="secondary-btn" onclick="resetForm()">🔄 Reset Formulier</button>
                    </div>
                </div>
                
                <div class="prioritization-results">
                    <div id="priority-dashboard" class="priority-dashboard">
                        ${renderPriorityDashboard()}
                    </div>
                    
                    <div class="project-portfolio">
                        <h4>📋 Project Portfolio</h4>
                        <div class="example-actions" style="margin-bottom: 1rem;">
                            <button class="secondary-btn" onclick="loadMockData()" style="font-size: 0.8rem; padding: 0.5rem;">📝 Laad Mock Data</button>
                        </div>
                        <div id="saved-projects-list">
                            ${renderSavedProjectsList()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    setupPrioritizationEventListeners();
    calculatePriority();
}

// Function to load example project 2 (Medium Priority)
function loadExample2() {
    prioritizationState = {
        projectName: "Voorspellende Analytics voor Planning",
        description: "Machine learning model voor voorspelling van resource behoefte en capaciteitsplanning op basis van historische data en trends.",
        duration: "6-12 maanden",
        resources: "1 FTE",
        costSavings: 9, // €80k
        timeWins: 5, // 30%
        qualityImprovement: 9,
        numberOfPeople: 25,
        strategicValue: "Hoog",
        implementationRisk: "Hoog",
        quickWins: false,
        complianceImpact: "Gemiddeld",
        priorityScore: 0,
        priorityLevel: 'Gemiddelde Prioriteit',
        savedProjects: JSON.parse(localStorage.getItem('prioritizedProjects') || '[]')
    };
    
    // Re-render form
    initializePrioritizationPage();
    setupPrioritizationEventListeners();
    calculatePriority();
}

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