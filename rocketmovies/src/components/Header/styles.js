import styled from "styled-components";

export const Container = styled.header`
  grid-area: header; // Para o cabeçalho permanecer fixo

  width: 100%;
  height: 105px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 150px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    margin-right: 20px;

    strong {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  text-align: start;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;