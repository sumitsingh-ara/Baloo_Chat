import './App.css';
import {TopNavbar} from './Components/TopNavbar/TopNavbar';
import {ChatBody} from './Components/ChatBody/ChatBody';
import {BottomNavbar} from './Components/BottomNavbar/BottomNavbar';
function App() {
  return (
    <div className="App">
        <TopNavbar/>
        <ChatBody/>
        <BottomNavbar/>
    </div>
  );
}

export default App;
