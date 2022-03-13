import styled from "styled-components";

export const Main = styled.div`
  width: 80vw;
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
  @include media(">=phone", "<lgphone") {
    flex-direction: column-reverse;
  }
  @include media(">=lgphone", "<tablet") {
    flex-direction: column-reverse;
  }
  @include media(">=tablet", "<desktop") {
    flex-direction: column-reverse;
    align-items: center;
  }
  .content {
    width: 50%;
    @include media(">=phone", "<lgphone") {
      width: 100%;
    }
    @include media(">=lgphone", "<tablet") {
      width: 100%;
    }
    @include media(">=tablet", "<desktop") {
      width: 100%;
    }

    h1 {
      font-size: 3rem;
      line-height: 20px;
      @include media(">=tablet", "<desktop") {
        text-align: center;
      }
    }
    p {
      @include media(">=tablet", "<desktop") {
        text-align: center;
      }
    }
  }
  .image-wrapper {
    width: 50%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    @include media(">=phone", "<lgphone") {
      width: 100%;

      img {
        height: 75%;
        width: 100%;
      }
    }
    @include media(">=lgphone", "<tablet") {
      width: 100%;

      img {
        height: 75%;
        width: 100%;
      }
    }
    @include media(">=tablet", "<desktop") {
      width: 100%;

      img {
        height: 75%;
        width: 100%;
      }
    }

    img {
      height: 80%;
      width: 80%;
    }
  }
`;
