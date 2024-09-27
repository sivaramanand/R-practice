import logo from "./logo.svg";
import "./App.css";
import Todolist from "./1.ToDoList";
import Tictactoe from "./2.tictoe/Tictactoe";
import Noti from "./3.notificaiton system/noti";
function App() {
  return (
    <div className="App">
      <Noti />
    </div>
  );
}

export default App;
