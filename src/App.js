import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'lib/routes/routes';
import { Helmet } from 'react-helmet';

function App() {

  return (
    <>
      <Helmet htmlAttributes={{ lang: "kor" }}
        meta={[{
          name: '우마이식당',
          content: '라면'
        }]}
        title="범계 우마이식당" />
      <Switch>
        {
          routes.map(({ path, page, exact }, i) => (
            <Route exact={exact} path={path} component={page} key={i} />
          ))
        }
      </Switch>
    </>
  );
}

export default App;
