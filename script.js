// Sample City Air Quality Data Store
const cityAQIData = {
    "delhi": {
        name: "Delhi NCR",
        aqi: 385,
        status: "Very Poor",
        color: "#ef4444",
        pm25: 245,
        pm10: 380,
        no2: 82,
        contributor: "Stubble & Heavy Smog",
        summary: "Severe health warning. Public mask usage strongly recommended for all outdoor activities.",
        actions: [
            { icon: "😷", title: "Wear N95 Respirator", desc: "Always wear N95/FFP2 masks outdoors to filter fine PM2.5 particles." },
            { icon: "🌬️", title: "Use Indoor Air Purifiers", desc: "Keep doors/windows shut and run HEPA air filtration inside homes." },
            { icon: "🚫", title: "Avoid Morning Jogging", desc: "Refrain from heavy outdoor cardiovascular exercise during peak smog hours." },
            { icon: "🚗", title: "Carpool / Use Metro", desc: "Reduce personal vehicle use to prevent worsening ambient city emissions." }
        ]
    },
    "mumbai": {
        name: "Mumbai",
        aqi: 142,
        status: "Moderate",
        color: "#f59e0b",
        pm25: 58,
        pm10: 120,
        no2: 34,
        contributor: "Coastal Humidity & Dust",
        summary: "Breathing discomfort possible for sensitive individuals, children, and elderly.",
        actions: [
            { icon: "🪟", title: "Ventilate Mid-day", desc: "Open windows during sunny afternoon hours when sea breeze clears dust." },
            { icon: "🏃", title: "Moderate Outdoor Workouts", desc: "Sensitive groups should limit prolonged outdoor exertion in dusty zones." },
            { icon: "🪴", title: "Keep Indoor Greenery", desc: "Maintain Areca palms or Snake plants to refresh indoor oxygen levels." },
            { icon: "💧", title: "Stay Hydrated", desc: "Drink ample fluids to help respiratory passages flush out micro-particles." }
        ]
    },
    "bengaluru": {
        name: "Bengaluru",
        aqi: 42,
        status: "Good",
        color: "#10b981",
        pm25: 12,
        pm10: 35,
        no2: 15,
        contributor: "Urban Traffic Peak",
        summary: "Air quality is satisfactory. Enjoy outdoor activities safely without concern.",
        actions: [
            { icon: "🚴", title: "Enjoy Outdoor Sports", desc: "Perfect air conditions for jogging, cycling, and park walks." },
            { icon: "🪴", title: "Balcony Gardening", desc: "Great weather to grow urban plants and maintain balcony greenery." },
            { icon: "🚲", title: "Choose Cycling Trips", desc: "Opt for non-motorized transport to keep local air pristine." },
            { icon: "🪟", title: "Natural Ventilation", desc: "Keep home windows open for fresh natural airflow throughout the day." }
        ]
    },
    "kolkata": {
        name: "Kolkata",
        aqi: 220,
        status: "Poor",
        color: "#f97316",
        pm25: 110,
        pm10: 215,
        no2: 48,
        contributor: "Industrial Plumes & Vehicles",
        summary: "Breathing discomfort to most residents upon prolonged outdoor exposure.",
        actions: [
            { icon: "😷", title: "Wear Dust Mask", desc: "Wear a protective mask during peak commute hours near congested roads." },
            { icon: "🚪", title: "Close Windows Peak Hours", desc: "Keep windows closed during early morning and late evening rush hours." },
            { icon: "🍵", title: "Warm Herbal Drinks", desc: "Soothe throat irritation with warm ginger-tulsi tea or warm water." },
            { icon: "🚌", title: "Public Transport", desc: "Use Kolkata Metro or electric buses to limit individual emissions." }
        ]
    },
    "mangaluru": {
        name: "Mangaluru",
        aqi: 68,
        status: "Satisfactory",
        color: "#84cc16",
        pm25: 22,
        pm10: 54,
        no2: 18,
        contributor: "Coastal Sea Breeze & Traffic",
        summary: "Air quality is acceptable; minor discomfort for extremely sensitive individuals.",
        actions: [
            { icon: "🌊", title: "Enjoy Coastal Air", desc: "Overall good conditions for outdoor morning walks and coastal activities." },
            { icon: "🛵", title: "Regular Vehicle Tuning", desc: "Ensure two-wheelers and personal vehicles pass annual emission checks." },
            { icon: "🚮", title: "Segregate Waste", desc: "Ensure organic and dry waste are segregated; avoid burning dry leaves." },
            { icon: "🚶", title: "Walk Local Distances", desc: "Take short walks to nearby markets instead of short motor rides." }
        ]
    },
    "kanpur": {
        name: "Kanpur",
        aqi: 312,
        status: "Very Poor",
        color: "#ef4444",
        pm25: 185,
        pm10: 295,
        no2: 64,
        contributor: "Industrial Emissions & Dust",
        summary: "Triggers health warnings. Significant risk of respiratory illness on long exposure.",
        actions: [
            { icon: "😷", title: "Mandatory Masking", desc: "Wear N95 masks when walking outside near industrial zones." },
            { icon: "🏠", title: "Minimize Outdoor Stay", desc: "Reschedule non-essential outdoor work to afternoons or indoors." },
            { icon: "🫁", title: "Steam Inhalation", desc: "Use steam inhalation to clear nasal passages after returning home." },
            { icon: "📢", title: "Report Garbage Fires", desc: "Alert local municipal staff immediately if open waste burning is seen." }
        ]
    }
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
    
    // Core Elements
    const citySelect = document.getElementById('city-select');
    const aqiValue = document.getElementById('aqi-value');
    const aqiBadge = document.getElementById('aqi-badge');
    const aqiSummaryText = document.getElementById('aqi-summary-text');
    const meterFill = document.getElementById('meter-fill');
    
    const pm25Val = document.getElementById('pm25-val');
    const pm10Val = document.getElementById('pm10-val');
    const no2Val = document.getElementById('no2-val');
    const mainContributor = document.getElementById('main-contributor');
    
    const actionPlanSubtitle = document.getElementById('action-plan-subtitle');
    const actionCardsGrid = document.getElementById('action-cards-grid');

    // Function to update Dashboard based on City
    function updateDashboard(cityKey) {
        const data = cityAQIData[cityKey] || cityAQIData['mangaluru'];

        // Update Text
        aqiValue.textContent = data.aqi;
        aqiBadge.textContent = data.status;
        aqiBadge.style.backgroundColor = data.color;
        aqiSummaryText.textContent = data.summary;

        pm25Val.textContent = data.pm25;
        pm10Val.textContent = data.pm10;
        no2Val.textContent = data.no2;
        mainContributor.textContent = data.contributor;

        // Calculate Meter Bar % (max 500 AQI)
        const percentage = Math.min(100, Math.max(5, (data.aqi / 500) * 100));
        meterFill.style.width = `${percentage}%`;
        meterFill.style.backgroundColor = data.color;

        // Update Action Plan Subtitle & Cards
        actionPlanSubtitle.textContent = `Dynamic recommendations based on current AQI in ${data.name}`;
        
        // Render Action Cards
        actionCardsGrid.innerHTML = '';
        data.actions.forEach(act => {
            const card = document.createElement('div');
            card.className = 'action-item-card';
            card.innerHTML = `
                <div class="action-icon">${act.icon}</div>
                <div class="action-text">
                    <h4>${act.title}</h4>
                    <p>${act.desc}</p>
                </div>
            `;
            actionCardsGrid.appendChild(card);
        });
    }

    // City Selector Event Listener
    citySelect.addEventListener('change', (e) => {
        updateDashboard(e.target.value);
    });

    // Initialize with default selected city
    updateDashboard(citySelect.value);

    // ===================================
    // IMPACT CALCULATOR LOGIC
    // ===================================
    const calcChecks = document.querySelectorAll('.calc-check');
    const totalScoreEl = document.getElementById('total-score');
    const impactLevelTag = document.getElementById('impact-level-tag');
    const impactFeedback = document.getElementById('impact-feedback');

    function calculateImpact() {
        let total = 0;
        let selectedCount = 0;

        calcChecks.forEach(check => {
            if (check.checked) {
                total += parseInt(check.value, 10);
                selectedCount++;
            }
        });

        totalScoreEl.textContent = total;

        // Feedback messaging
        if (total === 0) {
            impactLevelTag.textContent = "Getting Started";
            impactLevelTag.style.backgroundColor = "rgba(148, 163, 184, 0.2)";
            impactLevelTag.style.color = "#94a3b8";
            impactFeedback.textContent = "Select actions on the left to measure your individual contribution towards clean air.";
        } else if (total <= 30) {
            impactLevelTag.textContent = "Bronze Clean Air Citizen 🥉";
            impactLevelTag.style.backgroundColor = "rgba(245, 158, 11, 0.2)";
            impactLevelTag.style.color = "#f59e0b";
            impactFeedback.textContent = "Good initial start! Every small action reduces urban particulate accumulation.";
        } else if (total <= 65) {
            impactLevelTag.textContent = "Silver Clean Air Champion 🥈";
            impactLevelTag.style.backgroundColor = "rgba(59, 130, 246, 0.2)";
            impactLevelTag.style.color = "#3b82f6";
            impactFeedback.textContent = "Impressive effort! You are actively preventing emissions and supporting healthier lungs.";
        } else {
            impactLevelTag.textContent = "Gold Climate Leader 🥇";
            impactLevelTag.style.backgroundColor = "rgba(20, 184, 166, 0.2)";
            impactLevelTag.style.color = "#14b8a6";
            impactFeedback.textContent = "Outstanding commitment! Your lifestyle choices set an exemplary benchmark for your neighborhood.";
        }
    }

    calcChecks.forEach(check => {
        check.addEventListener('change', calculateImpact);
    });

    // ===================================
    // CLEAN AIR PLEDGE FORM LOGIC
    // ===================================
    const pledgeForm = document.getElementById('pledge-form');
    const pledgeConfirmation = document.getElementById('pledge-confirmation');
    const confText = document.getElementById('conf-text');
    const pledgeSummaryBox = document.getElementById('pledge-summary-box');

    pledgeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('pledger-name').value.trim();
        const city = document.getElementById('pledger-city').value.trim();
        const selectedCommitment = document.querySelector('input[name="pledge_commit"]:checked').value;

        if (name && city) {
            pledgeForm.classList.add('hidden');
            pledgeConfirmation.classList.remove('hidden');

            confText.textContent = `Thank you, ${name} from ${city}, for standing up against pollution!`;
            pledgeSummaryBox.innerHTML = `
                <strong>Official Pledge Record:</strong><br>
                "I, <strong>${name}</strong> (${city}), pledge to active clean air stewardship by committing to: <em>'${selectedCommitment}'</em>."
            `;
        }
    });
});
