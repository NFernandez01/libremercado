import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 LibreMercado</h1>
        <p>Aplicación React Dockerizada</p>
        
        <div className="card">
          <h2>Contador: {count}</h2>
          <div className="button-group">
            <button onClick={() => setCount(count + 1)}>
              Incrementar
            </button>
            <button onClick={() => setCount(count - 1)}>
              Decrementar
            </button>
            <button onClick={() => setCount(0)}>
              Resetear
            </button>
          </div>
        </div>

        <div className="info">
          <h3>Entornos configurados:</h3>
          <ul>
            <li>✅ Desarrollo con hot reload (puerto 3000)</li>
            <li>✅ Producción con Nginx (puerto 8080)</li>
            <li>✅ Docker Compose para orquestación</li>
            <li>✅ Multi-stage build optimizado</li>
          </ul>
        </div>

        <p className="footer">
          Edita <code>src/App.js</code> y guarda para ver los cambios en desarrollo.
        </p>
      </header>
    </div>
  );
}

export default App;
