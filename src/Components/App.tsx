import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import AddNewItemBar from "../AddNewItemBar/AddNewItemBar";
import SwitchBar from "../SwitchBar/SwitchBar";
import TodosContainer from "../TodosContainrt/TodosContainrt";

const LayoutStyle = styled.div`
  width: 100%;
  height: 100%;
`;

interface Item {
  content: string;
  createTime: number;
  completeTime: number;
}

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [currentState, setCurrentState] = useState("undone");
  const [rows, setRows] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // 主要透過這個函式來改變畫面呈現。
  function filterView() {
    let tempRows = JSON.parse(localStorage.getItem("todos")) || [];
    switch (currentState) {
      case "all":
        setRows(tempRows);
        break;
      case "done":
        tempRows = tempRows.filter((item: Item) => item.completeTime > 0);
        setRows(tempRows);
        break;
      case "undone":
        tempRows = tempRows.filter((item: Item) => item.completeTime === 0);
        setRows(tempRows);
        break;
    }
  }

  useEffect(() => {
    filterView();
  }, [currentState]);

  return (
    <LayoutStyle>
      <Header />
      <AddNewItemBar
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        filterView={filterView}
      />
      <SwitchBar
        currentState={currentState}
        setCurrentState={setCurrentState}
      />
      <TodosContainer rows={rows} setRows={setRows} filterView={filterView} />
    </LayoutStyle>
  );
};

export default App;
