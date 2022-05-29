import styled from "styled-components";

type active = {
  isActive: boolean;
};

const SwitchBox = styled.div`
  display: inline-block;
  border: 1px solid #b0bec5;
  border-radius: 5px;
`;
const Input = styled.input`
  display: none;
`;
const Label = styled.label<active>`
  margin: 0 auto;
  padding: 8px 10px;
  font-size: 1.25rem;
  line-height: 2;
  background-color: ${(props) => (props.isActive ? "#b0bec5" : "none")};
  cursor: pointer;
  transition: 0.125s;
  border-radius: 5px;
`;

type Props = {
  currentState: string;
  setCurrentState: (ref: any) => void;
};

const SwitchBar: React.FC<Props> = () => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <SwitchBox>
        <Input type="radio" name="switch" id="all" value="all" />
        <Input type="radio" name="switch" id="done" value="done" />
        <Input type="radio" name="switch" id="undone" value="undone" />
        <Label isActive={true} htmlFor="all">
          Show all todos
        </Label>
        <Label isActive={false} htmlFor="done">
          Show done todos
        </Label>
        <Label isActive={false} htmlFor="undone">
          Show undone todos
        </Label>
      </SwitchBox>
    </div>
  );
};

export default SwitchBar;
