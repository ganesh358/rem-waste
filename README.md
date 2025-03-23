# WeWantWaste Skip Selection Page Redesign  

## 🚀 Project Overview  
This project is a redesign of the **skip selection page** for [WeWantWaste](https://wewantwaste.co.uk/).  
The goal was to improve the **UI/UX**, ensure **responsiveness**, and maintain **clean, maintainable React code** while keeping the core functionality intact.

---

## 🎨 **Approach & Features**  

### ✅ **1. UI/UX Improvements**  
- Implemented a **modern and clean UI** for better readability and user experience.  
- Improved **layout structure** to enhance accessibility on both **desktop & mobile**.  
- Added **hover effects and smooth transitions** for an interactive feel.  

### ✅ **2. Performance Optimization**  
- **Lazy loading** used for components to improve initial page load time.  
- **Memoization** (React.memo & useMemo) implemented where necessary to prevent unnecessary re-renders.  

### ✅ **3. Responsive Design**  
- Used **CSS Modules** for styling to ensure scoped styles.  
- Utilized **flexbox & grid** for a **fluid and adaptable** layout.  
- Implemented **mobile-first design** to enhance usability on smaller screens.  

### ✅ **4. Data Handling**  
- Fetched data from the provided API:  
  [`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)  
- Used **React state management (useState & useEffect)** to handle API responses and update the UI dynamically.  

### ✅ **5. Animations & Enhancements**  
- Added **slight animations** for **better user engagement** using **CSS transitions**.  
- Implemented **hover & click effects** for skip selections.  

---