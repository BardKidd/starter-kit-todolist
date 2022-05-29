import styled from "styled-components";

type active = {
  isActive: boolean;
};

const SwitchBox = styled.div`
  display: inline-block;
  border-radius: 5px;
`;
const Input = styled.input`
  display: none;
`;
const Label = styled.label<active>`
  margin: 0 auto;
  padding: 5px 8px;
  font-size: 1.25rem;
  line-height: 1.25;
  background-color: ${(props) => (props.isActive ? "#b0bec5" : "none")};
  cursor: pointer;
  transition: 0.25s;
  border-radius: 5px;
  display: inline-block;
`;

type Props = {
  currentState: string;
  setCurrentState: (ref: any) => void;
};

const SwitchBar: React.FC<Props> = ({ currentState, setCurrentState }) => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <SwitchBox>
        <Input type="radio" name="switch" id="all" value="all" />
        <Input type="radio" name="switch" id="done" value="done" />
        <Input type="radio" name="switch" id="undone" value="undone" />
        <Label
          isActive={currentState === "all"}
          htmlFor="all"
          onClick={() => setCurrentState("all")}
        >
          Show all todos
        </Label>
        <Label
          isActive={currentState === "done"}
          htmlFor="done"
          onClick={() => setCurrentState("done")}
        >
          Show done todos
        </Label>
        <Label
          isActive={currentState === "undone"}
          htmlFor="undone"
          onClick={() => setCurrentState("undone")}
        >
          Show undone todos
        </Label>
      </SwitchBox>
    </div>
  );
};

export default SwitchBar;
