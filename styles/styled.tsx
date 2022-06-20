//@ts-ignore
import styled from "styled-components";

export const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const RowSB = styled(Row)`
  justify-content: space-between;
  border-bottom: 2px solid  hsl(219, 9%, 45%);
  margin: 0 20px;
`
