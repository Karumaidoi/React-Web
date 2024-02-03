import { styled } from "styled-components";

import SideBar from "./SideBar";
import Account from "./Account";
import MainView from "./MainView";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 18rem 1fr 25rem;
  overflow-y: hidden;
  /* grid-template-rows: 5rem 1fr; */
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <SideBar />
      <MainView />
      <Account />
    </StyledAppLayout>
  );
}

export default AppLayout;
