import styled from "styled-components";

const TodosBox = styled.table`
  margin: 30px auto;
  width: 80%;
  border-radius: 5px;
`;

const Item = styled.tbody`
  color: #aeaeae;
  font-size: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 13px;
  transition: 0.125s;
  border-radius: 5px;
  &:hover {
    background-color: #aeaeae;
    color: #fff;
  }
`;
const ItemTitle = styled.span`
  font-weight: bold;
`;

const TodosContainer: React.FC = () => {
  return (
    <TodosBox>
      <Item>
        <ItemTitle>Greeting</ItemTitle>
        <span>お元気ですか　奥様？</span>
      </Item>
    </TodosBox>
  );
};

export default TodosContainer;
