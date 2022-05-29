import { useState } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import AddNewItemBar from "../AddNewItemBar/AddNewItemBar";
import SwitchBar from "../SwitchBar/SwitchBar";
import TodosContainer from "../TodosContainrt/TodosContainrt";

const LayoutStyle = styled.div`
  width: 100%;
  height: 100%;
`;

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [currentState, setCurrentState] = useState("all");
  const [rows, setRows] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  return (
    <LayoutStyle>
      <Header />
      <AddNewItemBar
        rows={rows}
        setRows={setRows}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
      <SwitchBar
        currentState={currentState}
        setCurrentState={setCurrentState}
      />
      <TodosContainer rows={rows} setRows={setRows} />
    </LayoutStyle>
  );
};

export default App;
