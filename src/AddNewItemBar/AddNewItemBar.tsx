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
`;

type Props = {
  newTodo: string;
  setNewTodo: (ref: any) => void;
};

const AddNewItemBar: React.FC<Props> = () => {
  return (
    <AddNewItemBox>
      <Input type="text" placeholder="Enter something..." />
      <Button type="button">Add</Button>
    </AddNewItemBox>
  );
};

export default AddNewItemBar;
