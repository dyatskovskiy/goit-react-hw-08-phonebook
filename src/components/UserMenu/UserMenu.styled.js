import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
`;

export const Button = styled.button`
  color: black;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  padding: 4px 6px;
  background: rgb(190, 248, 255);
  background: radial-gradient(
    circle,
    rgba(190, 248, 255, 1) 0%,
    rgba(168, 221, 255, 1) 96%
  );
`;
