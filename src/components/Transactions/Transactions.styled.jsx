import styled from '@emotion/styled';

export const Wrapper = styled.table`
  width: 320px;
`;

export const TableHead = styled.thead`
  background-color: #a7c5eb;
`;

export const HeadCell = styled.th`
  font-size: 18px;
`;

export const Row = styled.tr`
  background-color: ${p => (p.accent ? '#CDDEFF' : 'transparent')};
`;

export const Cell = styled.td`
  padding: 5px;
  &.capitalize {
    text-transform: capitalize;
  }
`;
