import styled from "styled-components";
const AddNewItemBox = styled.div`
  width: 1024px;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const Input = styled.input`
  padding: 5px 8px;
  border: none;
  font-size: 1.25rem;
  line-height: 2;
  flex: 1;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #aeaeae;
  &::placeholder {
    color: #aeaeae;
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  padding: 5px 8px;
  font-size: 1.25rem;
`;

type Props = {
  newTodo: string;
  rows: Array<object>;
  setNewTodo: (ref: any) => void;
  setRows: (ref: any) => void;
};

function handleAddNewTodo(
  newTodo: string,
  setNewTodo: (ref: any) => void,
  rows: Array<object>,
  setRows: (ref: any) => void
) {
  if (!newTodo) alert("Please enter something...");
  const sendData = {
    content: newTodo.trim(),
    createTime: Date.now(),
    completeTime: 0,
  };
  let tempRows = [...rows];
  tempRows = [...rows, sendData];
  setRows(tempRows);
  localStorage.setItem("todos", JSON.stringify(tempRows));
  setNewTodo("");
}

const AddNewItemBar: React.FC<Props> = ({
  newTodo,
  setNewTodo,
  rows,
  setRows,
}) => {
  return (
    <AddNewItemBox>
      <Input
        type="text"
        placeholder="Enter something..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button
        type="button"
        onClick={() => handleAddNewTodo(newTodo, setNewTodo, rows, setRows)}
      >
        Add
      </Button>
    </AddNewItemBox>
  );
};

export default AddNewItemBar;
