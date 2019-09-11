import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import Menu from "./elements/Menu";
import Minimize from "./elements/Minimize";
import Exit from "./elements/Exit";

function Titlebar() {
  const { title, showConfig } = useStoreState(({ nav }) => ({
    title: nav.title,
    showConfig: nav.showConfig
  }));

  const setShowConfig = useStoreActions(({ nav }) => nav.setShowConfig);

  return (
    <div className="titlebar">
      <div className="titlebar__menu">
        <Menu showConfig={showConfig} setShowConfig={setShowConfig} />
      </div>

      <div className="titlebar__title">
        <p className="app-name">{title}</p>
      </div>

      <div className="titlebar__icon">
        <Minimize />
        <Exit />
      </div>
    </div>
  );
}

export default Titlebar;