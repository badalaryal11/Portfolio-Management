import './App.css';
import Header from './My Components/Header';
import Dashboard from './My Components/Dashboard';
import  Footer  from './My Components/Footer';
import  Stocks from './My Components/Stocks';
function App() {
  
    
  
  return(
    <>
    <Header/>
    
    <Stocks Stocks={Stocks}/>
    <Dashboard/>
    <Footer/>
    </>
    
        
  );
}

export default App;
