import React from 'react';
import Profil from './profil/Profil'; 

function App() {
 
    var name ="Amel Kemala"
  const handleClick = e => {
    e.preventDefault()
    alert("Welcome "+name)
  }
  return (
    <div className="App">
      <div className="container">
        <Profil 
                handleClick={handleClick} 
                fullName={name}
                bio="Young graduate from a management IT training with a master's degree in electronic commerce.
                Being passionate about IT technologies, digital marketing and e-commerce."
                profession="FullStack JavaScript"
        >
          <img src="chihiro.jpg" className="img1" alt="profil"/>
        </Profil>
      </div>
    </div>
  );
}

export default App;
