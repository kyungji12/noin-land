import axios from "axios";
import { colors } from "commons/constants/colors";
import { ILotto } from "commons/types/lotto";
import RoundChip from "components/commons/Chip/roundchip";
import { StyledText } from "components/commons/styles/text/text";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

export default function LottoContainer() {
  const [lottoData, setLottoData] = useState<ILotto>();
  const drwNo = 1041;
  useEffect(() => {
    getLottoData();
  }, []);

  const getLottoData = useCallback(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`
      )
      .then((res) => setLottoData(res.data));
  }, [drwNo]);
  return (
    <Wrap>
      <LottoNumWrap>
        <StyledText.H4>
          {" "}
          <StyledText.H3 color={colors.red5}>
            {lottoData?.drwNo}회
          </StyledText.H3>{" "}
          당첨결과
        </StyledText.H4>
        <ChipWrap>
          <RoundChip text={lottoData?.drwtNo1} />
          <RoundChip text={lottoData?.drwtNo2} />
          <RoundChip text={lottoData?.drwtNo3} />
          <RoundChip text={lottoData?.drwtNo4} />
          <RoundChip text={lottoData?.drwtNo5} />
          <RoundChip text={lottoData?.drwtNo6} />
          +
          <RoundChip text={lottoData?.bnusNo} />
        </ChipWrap>
      </LottoNumWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;
const LottoNumWrap = styled.div`
  border: 1px solid #ddd;
  background: #fff;
  padding: 60px 60px 90px;
`;
const ChipWrap = styled.div`
  display: flex;
  align-items: center;
`;
