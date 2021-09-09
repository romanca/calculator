import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.spaces[24]};
  background: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.background5},
    ${(props) => props.theme.colors.background6}
  );
`;

export const LayoutContainer = styled.div`
  height: ${(props) => props.theme.spaces[21]};
  width: ${(props) => props.theme.spaces[8]};
  box-shadow: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[22]} ${(props) => props.theme.spaces[23]};
  border-radius: ${(props) => props.theme.spaces[4]};
`;

export const ResultScreenContainer = styled.div`
  height: ${(props) => props.theme.spaces[17]};
  font-size: ${(props) => props.theme.spaces[18]};
  font-weight: ${(props) => props.theme.spaces[19]};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: ${(props) => props.theme.spaces[4]};
  margin-bottom: ${(props) => props.theme.spaces[20]};
`;

export const ScreenContainer = styled.div`
  height: ${(props) => props.theme.spaces[15]};
  width: ${(props) => props.theme.spaces[16]};
  white-space: nowrap;
  border-radius: ${(props) => props.theme.spaces[4]}
    ${(props) => props.theme.spaces[4]} ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[9]};
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background4};
`;

export const ComputationScreenContainer = styled.div`
  height: ${(props) => props.theme.spaces[12]};
  font-size: ${(props) => props.theme.spaces[13]};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${(props) => props.theme.spaces[4]};
  margin-right: ${(props) => props.theme.spaces[14]};
`;

export const LongButtonContainer = styled.div`
  width: ${(props) => props.theme.spaces[5]};
  height: ${(props) => props.theme.spaces[6]};
  margin-top: ${(props) => props.theme.spaces[7]};
  font-size: ${(props) => props.theme.spaces[3]};
  font-family: inherit;
  background: ${(props) => props.theme.colors.background2};
  border: ${(props) => props.theme.spaces[0]} solid
    ${(props) => props.theme.colors.border};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.spaces[4]};
  cursor: pointer;
  font-family: ArialRoundedMTBold;
  color: ${(props) => props.theme.colors.text};
`;

export const LargeButtonContainer = styled.div`
  width: ${(props) => props.theme.spaces[1]};
  height: ${(props) => props.theme.spaces[2]};
  font-size: ${(props) => props.theme.spaces[3]};
  font-family: inherit;
  background: ${(props) => props.theme.colors.background1};
  border: ${(props) => props.theme.spaces[0]} solid
    ${(props) => props.theme.colors.border};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.spaces[4]};
  cursor: pointer;
  font-family: ArialRoundedMTBold;
  color: ${(props) => props.theme.colors.text};
`;

export const KeypadContainer = styled.div`
  height: ${(props) => props.theme.spaces[8]};
  background: ${(props) => props.theme.colors.background3};
  width: ${(props) => props.theme.spaces[2]};
  border-radius: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[9]} ${(props) => props.theme.spaces[4]}
    ${(props) => props.theme.spaces[4]};
`;

export const ButtonsLine = styled.div`
  height: ${(props) => props.theme.spaces[10]};
  width: ${(props) => props.theme.spaces[2]};
  display: flex;
`;

export const FourthButtonLine = styled.div`
  height: ${(props) => props.theme.spaces[10]};
  width: ${(props) => props.theme.spaces[11]};
  display: flex;
`;

export const ButtonContainer = styled.div`
  width: ${(props) => props.theme.spaces[5]};
  height: ${(props) => props.theme.spaces[2]};
  font-size: ${(props) => props.theme.spaces[3]};
  font-family: inherit;
  border: ${(props) => props.theme.spaces[0]} solid
    ${(props) => props.theme.colors.border};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.spaces[4]};
  cursor: pointer;
  font-family: ArialRoundedMTBold;
  color: ${(props) => props.theme.colors.text};
`;
