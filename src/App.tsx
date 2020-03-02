import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthLayout from "./component/layout/Auth";
import LogLayout from "./component/layout/Log";

import AuthPage from "./component/pages/auth";
import RegisterPage from "./component/pages/register";

import BillPage from "./component/pages/bill";
import HistoryPage from "./component/pages/history";
import PlaningPage from "./component/pages/planning";
import RecordPage from "./component/pages/records";
import TempPage from "./component/pages/template";

import { Session } from "./common/session";

const App: React.FC = (): JSX.Element => {
  const { SessionUser } = Session();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  // eslint-disable-next-line
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });

  SessionUser();

  if (!!token) {
    return (
      <LogLayout>
        <Switch>
          <Route exact path="/bill" component={BillPage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/planning" component={PlaningPage} />
          <Route exact path="/record" component={RecordPage} />
          <Route exact path="/temp" component={TempPage} />
          <Redirect to="/bill" />
        </Switch>
      </LogLayout>
    );
  } else {
    return (
      <AuthLayout>
        <Switch>
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Redirect to="/auth" />
        </Switch>
      </AuthLayout>
    );
  }
};

export default App;
