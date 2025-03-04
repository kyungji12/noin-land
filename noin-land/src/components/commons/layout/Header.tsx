import { colors } from "commons/constants/colors";
import styled from "styled-components";
import { StyledPadding } from "components/commons/styles/padding";
import router from "next/router";
import { StyledText } from "components/commons/styles/text/text";

export default function Header() {
  return (
    <Wrap>
      <StyledText.LogoText>NoinLand</StyledText.LogoText>
      <MenuWrap>
        <StyledText.H4 onClick={() => router.push("/lotto")}>
          로또
        </StyledText.H4>
        <StyledPadding width={30} />
        <StyledText.H4>룰렛</StyledText.H4>
        <StyledPadding width={30} />
        <StyledText.H4>테스트</StyledText.H4>
        <StyledPadding width={30} />
        <StyledText.H4>텍스트</StyledText.H4>
      </MenuWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 120px;
  background-color: ${colors.main05};
  border-bottom: 1px solid ${colors.main6};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 100px 0px 100px;
`;

const MenuWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: row;
`;
