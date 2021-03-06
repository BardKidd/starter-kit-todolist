import styled from "styled-components";

const TodosBox = styled.div`
  margin: 30px auto;
  width: 80%;
  border-radius: 5px;
`;

const Item = styled.div`
  color: #aeaeae;
  font-size: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 13px;
  transition: 0.125s;
  border-radius: 5px;
  width: 80%;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: #aeaeae;
    color: #fff;
  }
`;
const ItemTitle = styled.span<Complete>`
  font-weight: bold;
  text-decoration: ${(props) => (props.isComplete ? "line-through" : "")};
`;
interface Item {
  content: string;
  createTime: number;
  completeTime: number;
}

type Props = {
  rows: Item[];
  setRows: (ref: any) => void;
  filterView: () => void;
};
type Complete = {
  isComplete: boolean;
};

const addZero = (time: number) => {
  return time < 10 ? `0${time}` : time;
};

const changeTimeForm = (time: number): string => {
  if (time > 0) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const day = addZero(date.getDate());
    const hour = addZero(date.getHours());
    const min = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());
    return `${year}/${month}/${day} ${hour}:${min}:${seconds} 完成`;
  } else {
    return "";
  }
};

const TodosContainer: React.FC<Props> = ({ rows, setRows, filterView }) => {
  function handleComplete(target: Item) {
    if (target.completeTime !== 0) return;
    let tempRows = [...JSON.parse(localStorage.getItem("todos"))] || [];
    let rmIndex;
    let current = tempRows.find((item, index) => {
      if (item.createTime === target.createTime) {
        rmIndex = index;
        return item;
      }
    });
    current = { ...current, completeTime: Date.now() };
    tempRows.splice(rmIndex, 1, current);
    localStorage.setItem("todos", JSON.stringify(tempRows));
    filterView();
  }

  function handleDelete(e: any, target: Item) {
    e.preventDefault();
    let isDelete = confirm("Confirm Delete?");
    if (isDelete) {
      let tempRows = [...JSON.parse(localStorage.getItem("todos"))] || [];
      let rmIndex;

      let current = tempRows.find((item, index) => {
        if (item.createTime === target.createTime) {
          rmIndex = index;
          return item;
        }
      });
      tempRows.splice(rmIndex, 1);
      localStorage.setItem("todos", JSON.stringify(tempRows));
      filterView();
    }
  }

  return (
    <TodosBox>
      {rows.map((item) => (
        <Item
          key={item.createTime}
          onClick={() => handleComplete(item)}
          onContextMenu={(e) => {
            handleDelete(e, item);
          }}
        >
          <ItemTitle isComplete={item.completeTime > 0}>
            {item.content}
          </ItemTitle>
          <span>{changeTimeForm(item.completeTime)}</span>
        </Item>
      ))}
    </TodosBox>
  );
};

export default TodosContainer;
