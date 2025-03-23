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
- **Memoization** (`React.memo` & `useMemo`) implemented where necessary to prevent unnecessary re-renders.  

### ✅ **3. Responsive Design**  
- Used **CSS Modules** for styling to ensure scoped styles.  
- Utilized **flexbox & grid** for a **fluid and adaptable** layout.  
- Implemented **mobile-first design** to enhance usability on smaller screens.  

### ✅ **4. State Management with Redux**  
- Used **Redux Toolkit** for efficient **global state management**.  
- Implemented a **skip selection slice** to manage **API data**, **loading state**, and **user selections**.  
- Used **`useSelector` and `useDispatch`** to access the store and update state dynamically.  
- Ensured **Redux state persists** across components, improving maintainability and performance.  

#### **Redux State Flow**  
1. **Fetching Skip Data:**  
   - The API call is made using an async thunk (`getSkipSize`).  
   - The response is stored in Redux state.  

2. **Selecting a Skip:**  
   - Clicking on a skip dispatches an action (`setSelectedSize`).  
   - The selected skip is updated in the Redux store.  

3. **Optimized Re-renders:**  
   - State updates trigger only necessary UI updates, avoiding unnecessary renders.  

### ✅ **5. Well-Structured Project Architecture**  
- The project follows a **modular architecture** ensuring **maintainability** and **scalability**.  
- Each component has a **single responsibility**, following **separation of concerns**.  
- The project is structured for **easy navigation and code reuse**.  

### ✅ **6. Component Reusability**  
- **Reusable UI components** (`Card`, `Button`, `SkeletonLoader`, etc.) are used to avoid code duplication.  
- **Custom hooks (`useFetch`)** are implemented for API calls to keep components clean.  
- **Utility functions** are used for common operations, improving readability.  
- Components are **modular**, allowing easy updates and extensions in the future.  

### ✅ **7. Data Handling**  
- Fetched data from the provided API:  
  [`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)  
- Used **Redux Toolkit** to manage API data globally for better state control.  

### ✅ **8. Animations & Enhancements**  
- Added **slight animations** for **better user engagement** using **CSS transitions**.  
- Implemented **hover & click effects** for skip selections.  

---

