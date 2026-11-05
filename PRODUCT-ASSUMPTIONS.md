# PRODUCT-ASSUMPTIONS.md

## 1. What product are you planning to build?
We are building **AirAware**, an interactive civic climate-tech web dashboard designed to transform raw air quality index (AQI) metrics into actionable, daily health advisories and personal micro-action plans for citizens in Indian cities.

## 2. What problem does it solve?
Air pollution (high PM2.5, PM10, NOx) poses severe public health threats in India. However, traditional AQI apps only present raw numbers and charts, leaving citizens confused about real health implications and feeling powerless to contribute towards solutions. AirAware bridges the gap between air quality data and tangible personal action.

## 3. Who are the target users?
- Urban residents and commuters seeking daily health guidance.
- Sensitive individuals (asthma patients, parents, senior citizens).
- Civic-minded citizens wanting to measure and lower their personal pollution footprint.

## 4. What is the main use case?
A user checks AirAware in the morning, selects their city, views their local AQI status along with personalized health precautions, calculates their daily clean-air reduction score, and signs a community pledge.

## 5. What are the core features?
- **Interactive AQI Dashboard:** Dynamic city selector with live-simulated AQI, PM2.5, PM10, NO2, and primary pollutant tags.
- **Color-Coded Standard Legend:** Clear explanation of AQI health brackets based on CPCB/NAQS standards.
- **Contextual Action Plan ("What should I do today?"):** Dynamic advice tailored to the selected city's pollution level.
- **Pollution Source Breakdown:** Educational insights into vehicular emissions, dust, waste burning, and industrial smoke.
- **My Clean Air Impact Calculator:** Interactive checklist calculating an individual impact score (0-100 PTS).
- **Clean Air Citizen Pledge:** Interactive form to sign and view personalized pledge summaries.

## 6. What assumptions are we making about the users?
- Users prefer immediate, actionable takeaways over complex environmental engineering metrics.
- Gamified impact scores encourage positive lifestyle choices (walking short trips, public transit).
- Users access the application across both desktop computers and mobile devices.

## 7. What will be included in your MVP?
- Vanilla HTML5, CSS3, and JavaScript implementation running without backend dependencies.
- Sample data for major Indian cities (Delhi NCR, Mumbai, Bengaluru, Kolkata, Mangaluru, Kanpur).
- Fully functional dynamic UI state (city switching, impact calculation, pledge submission).
- Responsive, polished dark-mode climate startup styling.

## 8. What will NOT be included in the MVP?
- Real-time IoT sensor hardware integration or live paid weather API keys.
- User registration backend database (PostgreSQL/MongoDB).
- Machine learning AI predictive engine deployment (simulated for MVP front-end architecture).
