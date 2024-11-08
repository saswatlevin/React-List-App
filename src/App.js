import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index';

function App() {
  const name = "Dave";
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>    
    </div>
    
  );
};

export default App;
