import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 124px;
  
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }
`;

export const Form = styled.form`
  max-width: 400px;
  margin: 30px auto 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div:nth-child(4){
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -100px auto 32px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    > input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;