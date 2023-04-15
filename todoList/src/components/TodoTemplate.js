import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 550px;
  height: 750px;

  position: relative;
  background: white;
  border-radius: 20px;
  box-shadow: 0 3px 18px 2px rgba(0, 0, 0, 0.4);

  margin: 0 auto;

  margin-top: 70px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;