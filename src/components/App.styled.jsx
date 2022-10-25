import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Item = styled.section`
  padding-bottom: 40px;
  &:last-child {
    padding-bottom: 0;
  }
`;
