# AirAware — From Air Quality Data to Everyday Action

AirAware is an interactive climate-tech web solution created for the **AI for Clean Air: Tackling India's Pollution Crisis** challenge.

## 🚀 How to Open and Run in VS Code

1. **Extract Zip File:**
   Unzip `AirAware_Project.zip` into your desired project directory.

2. **Open in Visual Studio Code:**
   - Launch Visual Studio Code.
   - Go to `File` -> `Open Folder...`
   - Select the unzipped `AirAware_Project` folder.

3. **Run the Project:**
   - **Method 1 (Simple Double-Click):** Navigate to the project folder on your computer and double-click `index.html` to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).
   - **Method 2 (VS Code Live Server Extension):**
     1. Install the **Live Server** extension by extension author *Rita Wickramasinghe* in VS Code.
     2. Right-click `index.html` inside VS Code file explorer.
     3. Select **"Open with Live Server"**.

## 📁 Project Structure

```
AirAware_Project/
│
├── index.html              # Main HTML structure with semantic sections & layout
├── style.css               # Polished climate-tech dark mode stylesheet
├── script.js               # Dynamic AQI state switcher, calculator & pledge engine
├── PRODUCT-ASSUMPTIONS.md  # Phase 1 Deliverable (Product assumptions & scope)
├── DESIGN-SYSTEM.md       # Phase 3 Deliverable (Colors, typography, component specs)
└── README.md               # Setup and project overview document
```

## 🌟 Key Features
- **Dynamic City Switcher:** Instantly updates AQI levels, PM2.5, PM10, NO2, and localized advisories for Delhi, Mumbai, Bengaluru, Kolkata, Mangaluru, and Kanpur.
- **Visual Meter:** Real-time percentage indicator bar matching CPCB air quality severity.
- **My Impact Calculator:** Interactive points system calculating user micro-contributions.
- **Clean Air Citizen Pledge:** Interactive form generating printable/viewable civic pledges.
- **Demonstration Notice:** Fully honest demo labeling without requiring paid API tokens.
