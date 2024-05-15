import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ContactHeader from './components/ContactHeader/ContactHeader';

function App() {
  return (
 <div>
    <Navigation/>
   <main className='main_container'>
    <ContactHeader/>
   </main>
 </div>
  );
}

export default App;
