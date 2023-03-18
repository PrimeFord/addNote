import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  // const listArr = ["Pray"];
  const [list, setList] = useState("");
  // const [todo, setTodo] = useState(listArr);
  const [todo, setTodo] = useState(["Pray"]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodo(todo.concat(list));
    setList("");
  };
  // console.log(listArr);
  return (
    <div className="App">
      <div className="lg:h-[70%] lg:w-[45%] h-[95%] w-[90%] lg:rounded-[.5rem] rounded-[.3rem] bg-[#e0dfdf] flex flex-col items-center ">
        <p className="text-center lg:text-[3rem] p-[1rem] lg:p-0 text-[2rem] text-[#6e1616] font-[400] mb-[1rem]">
          Add Note
        </p>
        <form
          action=""
          onSubmit={addTodo}
          className="flex flex-col lg:flex-row gap-2"
        >
          <input
            className="lg:w-[20rem] w-[100%] border-solid border-2 border-black lg:h-8 lg:p-0 p-1 h-8 rounded-[0.4rem]"
            type="text"
            value={list}
            onChange={(e) => {
              setList(e.target.value);
            }}
          />
          <button className="lg:w-[4rem] w-[100%] border-solid border-2 border-[#6e1616] h-8 flex justify-center items-center rounded-[0.4rem] text-[1.2rem] text-black hover:bg-[#6e1616] hover:text-white">
            Add
          </button>
        </form>
        <ol className="text-black list-decimal mt-6 font-[400] text-[1.2rem]">
          {todo.map((e, index) => (
            <li>{e}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
