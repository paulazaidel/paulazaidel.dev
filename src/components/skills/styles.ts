import styled from "styled-components";

export const Grid = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10vh 30vh;
  grid-gap: 20px;
  @include media(">=phone", "<lgphone") {
    grid-template-columns: 1fr;
  }
  @include media(">=lgphone", "<tablet") {
    grid-template-columns: 1fr;
  }
  @include media(">=tablet", "<desktop") {
    grid-template-columns: 1fr 1fr;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      height: 3rem;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const Header = styled.div`
  text-align: center;
  font-size: 1.7rem;
  line-height: 20px;
`;
