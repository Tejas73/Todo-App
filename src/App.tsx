import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateTodo from './components/CreateTodo';
import ShowTodo from './components/ShowTodo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateTodo />} />
          <Route path="/showTodo" element={<ShowTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
