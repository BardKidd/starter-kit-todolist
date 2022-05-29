import styled from "styled-components";

const HeaderH1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #aeaeae;
`;
const ListSpan = styled.span`
  color: #ffffff;
`;
const DesiribeP = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #aeaeae;
`;

const Header: React.FC = () => {
  return (
    <>
      <HeaderH1>
        TODO <ListSpan>LIST</ListSpan>
      </HeaderH1>
      <DesiribeP>Left click to finish. Right click to delete.</DesiribeP>
    </>
  );
};

export default Header;
