import './App.css'
import SkipSize from './pages/SkipSize/SkipSize'
import { Provider } from "react-redux";
import { Store } from './store/Store';

function App() {

  return (
    <>
      <Provider store={Store}>
        <SkipSize />
      </Provider>
    </>
  )
}

export default App
