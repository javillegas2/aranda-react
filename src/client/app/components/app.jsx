import React from 'react';
import st from './app.css';

   //Componente Info-box
//Componente Imagen
//Componente Lista
//Componente bottom

class App extends React.Component {
	render(){

		return (
		  <div id="containerApp" className={st.containerApp}>
				{ console.log("aranda component") }
				Aranda react
			</div>
		);
		

	}
};

export default App;
