import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'lib/routes/routes';
import { Helmet } from 'react-helmet';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css'

function App({ location }) {

  return (
    <>
      <Helmet htmlAttributes={{ lang: "kor" }}
        meta={[{
          name: '우마이식당',
          content: '라면'
        }]}
        title="범계 우마이식당" />
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              {
                routes.map(({ path, page, exact }, i) => (
                  <Route exact={exact} path={path} component={page} key={i} />
                ))
              }
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
