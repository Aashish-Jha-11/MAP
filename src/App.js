import React from 'react';
import ThoughtWeb from './components/ThoughtWeb';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <ThoughtWeb />
      </div>
    </AuthProvider>
  );
}

export default App;