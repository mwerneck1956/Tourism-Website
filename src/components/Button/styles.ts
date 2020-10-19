import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { shade } from "polished";
import ButtonInterface from "./ButtonInterface";
export const Container = styled.button<ButtonInterface>`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  width: 132px;
  height: 45px;
  border: 1px solid #fb8f1d;
  border-radius: 8px;
  color: #fff;
  transition: background-color 0.2s;
  background: #fb8f1d;
  ${(props) =>
    !props.outlined &&
    css`
      &:hover {
        background: ${shade(0.1, "#FB8F1D")};
      }
    `}

  ${(props) =>
    props.outlined &&
    css`
      color: #fb8f1d;
      background: #fff;
      transition: opacity 0.2;
      &:hover {
       opacity : 0.6;
      }

    `
  }
`;
