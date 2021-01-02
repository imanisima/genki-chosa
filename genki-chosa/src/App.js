import Navbar from './components/navbar-component/Navbar';
import Home from './pages/Home';
import Genki1 from './pages/Genki1-Page';
import Genki2 from './pages/Genki2-Page';
import Game from './pages/Game';
import ContactPage from './pages/Contact-Page';
import Footer from './components/footer-component/Footer';

// genk1 - links
import Lesson0 from './components/genki1-component/Lesson0-View/Lesson-0';
import HiraganaView from './components/genki1-component/Lesson0-View/Hiragana-View';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {

	return (
		<>
			<Router>
				<Navbar />

				<Switch>
					<Route path="/" exact component={Home} />

					{/* genki 1 */}
					<Route path="/genki1" component={Genki1} />
					<Route path="/lesson-0" component={Lesson0} />
					<Route path="/hiragana" component={HiraganaView} />
					<Route path="/katakana" component={Lesson0} />


					<Route path="/genki2" component={Genki2} />
					<Route path="/game" component={Game} />
					<Route path="/contact" component={ContactPage} />

					{/* External Links */}
					<Route exact path="/github-issues" render={() => (window.location.href = "https://github.com/Imanisima/genki-chosa/issues/new/choose")} />
				</Switch>

				<Footer />
			</Router>
			
		</>
	);
}

export default App;