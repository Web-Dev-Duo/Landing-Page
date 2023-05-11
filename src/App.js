import './App.scss';
import Header from './components/header/header';
import codeThinking from './assets/codeThinking.svg';
import namaste from './assets/namaste.svg';

function App() {
  return (
	<div className="main">
		<Header></Header>
		<div className="heroContainer">
			<div className="leftHeroDiv">
				<span className="boldText">
					Namaste
				</span>
				<img className="namasteImage" src={namaste}></img>
				<p>
					Where ideas become reality
				</p>
				<div className="contactButton">
					<a>CONTACT US</a>
				</div>
			</div>
			<div className="rightHeroDiv">
				<img src={codeThinking} />
			</div>
		</div>
		<div className="mainContent2">
		</div>
	</div>
  );
}

export default App;
