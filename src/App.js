import Navbar from './components/Navbar';
import Home from './components/Home';
import Downloads from './components/Downloads';
import FullFeatures from './components/FullFeatures.jsx'
import Development from './components/Development.jsx'
import Footer from './components/Footer'
import {Route} from 'wouter'

function App() {
  return (
    <div>
	  <Navbar />
	  <Route path="/" component={Home} />
	  <Route path="/downloads" component={Downloads} />
	  <Route path="/features" component={FullFeatures} />
	  <Route path="/development" component={Development} />
	  <Footer />
    </div>
  );
}


export default App;
