import styled from "styled-components";
import Button from "../button/Button";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    height: 150px;
    min-width: 100px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  text-align: center;
  font-size: 20px;

  @media screen and (max-width: 800px) {
    height: 50px;
    min-width: 50px;
    font-size: 15px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    margin: 20px auto;
  }
`;
