import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border: 1px solid #e4e9ed;
  width: 300px;
  border-radius: 5px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
  border-bottom: none;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 45%;
  border-radius: 50%;
  margin: 30px 0;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 4px;
  background-color: #f2f6f9;
  border-top: 1px solid #e4e9ed;
  border-right: 1px solid #e4e9ed;
  &:last-child {
    border-right: none;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.14px;
  &.subtitle {
    font-size: 14px;
    font-weight: normal;
    color: #7c848a;
    line-height: 1px;
`;

export const Label = styled.span`
  color: #7d848a;
`;

export const Quantity = styled.span`
  color: #253340;
  font-weight: 600;
`;
