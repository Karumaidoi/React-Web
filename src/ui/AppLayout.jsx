import { styled } from "styled-components";

import SideBar from "./SideBar";
import Account from "./Account";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 16rem 1fr 25rem;
  overflow-y: hidden;
  /* grid-template-rows: 5rem 1fr; */
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <SideBar />
      <h1>Main</h1>
      <Account />
    </StyledAppLayout>
  );
}

export default AppLayout;
