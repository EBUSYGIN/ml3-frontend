import { Outlet } from "react-router";

import { Container } from "../../../shared/ui";

import styles from "./RootLayout.module.css";

export function RootLayout() {
  return (
    <div className={styles.container}>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
