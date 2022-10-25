import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border: 1px solid #e4e9ed;
  width: 300px;
  border-radius: 5px;
`;

export const StatTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0px;
  background-color: ${p => p.bg};
`;

export const Label = styled.p``;

export const Percentage = styled.span`
  font-size: 20px;
`;
