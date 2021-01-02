import Navbar from './components/navbar-component/Navbar';
import Home from './pages/Home';
import Genki1 from './pages/Genki1-Page';
import Genki2 from './pages/Genki2-Page';
import ContactPage from './pages/Contact-Page';
import Footer from './components/footer-component/Footer';

/*
GENKI I imports
------------------*/
import Lesson0Container from './components/genki1-component/Lesson0-View/Lesson0-Container';
import KanaView from './components/genki1-component/Lesson0-View/Kana-View';
import QuizView from './components/genki1-component/Lesson0-View/Quiz-View';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {

	return (
		<>
			<Router>
				<Navbar />

				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/contact" component={ContactPage} />

					{/* GENKI 1 LINKS 
					|----------------------|*/}
					<Route path="/genki1-home" component={Genki1} />

					{/* lesson 0: Writing */}
					<Route path="/lesson-0" component={Lesson0Container} />
					<Route path="/kana-match" component={KanaView} />
					<Route path="/kana-match" component={KanaView} />
					<Route path="/quiz-game" component={QuizView} />


					{/* GENKI 2 LINKS 
					|----------------------|*/}
					<Route path="/genki2-home" component={Genki2} />

					{/* External Links */}
					<Route exact path="/github-issues" render={() => (window.location.href = "https://github.com/Imanisima/genki-chosa/issues/new/choose")} />
				</Switch>
			</Router>

			<Footer />
			
		</>
	);
}

export default App;