import Navbar from './components/navbar-component/Navbar';
import Home from './pages/Home';
import Genki1 from './pages/Genki1-Page';
import Genki2 from './pages/Genki2-Page';
import Game from './pages/Game';
import ContactPage from './pages/Contact-Page';
import Footer from './components/footer-component/Footer';

/*
GENKI I imports
------------------*/
import KanaContainer from './components/genki1-component/Lesson0-View/Kana-Match-Container';
import KanaView from './components/genki1-component/Lesson0-View/Kana-View';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {

	return (
		<>
			<Router>
				<Navbar />

				<Switch>
					<Route path="/" exact component={Home} />

					{/* genki 1 
					----------------------*/}
					<Route path="/genki1-home" component={Genki1} />

					{/* lesson 0: Writing */}
					<Route path="/lesson-0" component={KanaContainer} />
					<Route path="/kana-match" component={KanaView} />

					<Route path="/genki2-home" component={Genki2} />
					<Route path="/game" component={Game} />
					<Route path="/contact" component={ContactPage} />

					{/* External Links */}
					<Route exact path="/github-issues" render={() => (window.location.href = "https://github.com/Imanisima/genki-chosa/issues/new/choose")} />
				</Switch>
			</Router>

			<Footer />
			
		</>
	);
}

export default App;