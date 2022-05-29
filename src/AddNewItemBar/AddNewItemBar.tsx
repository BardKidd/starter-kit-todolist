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
  setNewTodo: (ref: any) => void;
  filterView: () => void;
};

function handleAddNewTodo(
  newTodo: string,
  setNewTodo: (ref: any) => void,
  filterView: () => void
) {
  if (!newTodo) alert("Please enter something...");
  const sendData = {
    content: newTodo.trim(),
    createTime: Date.now(),
    completeTime: 0,
  };
  let tempRows = JSON.parse(localStorage.getItem("todos")) || [];
  tempRows = [...tempRows, sendData];
  localStorage.setItem("todos", JSON.stringify(tempRows));
  filterView();
  setNewTodo("");
}

const AddNewItemBar: React.FC<Props> = ({
  newTodo,
  setNewTodo,
  filterView,
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
        onClick={() => handleAddNewTodo(newTodo, setNewTodo, filterView)}
      >
        Add
      </Button>
    </AddNewItemBox>
  );
};

export default AddNewItemBar;
