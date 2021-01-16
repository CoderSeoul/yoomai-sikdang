import styled from 'styled-components';


export const StyledFooter = styled.footer`
  position:fixed;
  bottom:0;
  z-index:1000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width:100vw;
  height:70px;
  background-color: rgba(0,0,0,0.9);
  justify-content: space-between;

  .section {
    margin-top: 52px;
    flex: 22%;

    @include media("<screen-x") {
      flex: 50%;
    }
    @include media("<tablet-xx") {
      flex: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .title {
      font-family: LucidaGrande;
      font-size: 16px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: black;
      margin-bottom: 13px;
    }
    li {
      a {
        font-family: OpenSans;
        font-size: 16px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
      }
    }

    p {
      font-size: 16px;
      font-family: OpenSans;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
    }
  }
  .section:nth-child(1) {
    margin-left: 20px;

    @include media("<screen-x") {
      margin-left: 0;
    }
  }


`;
