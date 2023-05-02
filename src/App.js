import './App.css';
import AboutUs from './components/aboutus/AboutUs';
import FAQ from './components/faq/FAQ';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolios/Portfolio';
import Services from './components/services/Services';
import ServicesPage from './pages/ServicesPage';


function App() {
  return (
    <div>
      <ServicesPage/>
      <Services/>
      <Portfolio/>
      <FAQ/>
      <AboutUs/>
      <Footer/> </div>
  );
}

export default App;
