import * as React from 'react';
import { Footer, MainTemplate, Navigation } from 'components';
import { HomeContainer } from 'containers';

const Home = ({ history }) => (
    <MainTemplate header={<Navigation />} footer={<Footer />}>
        <HomeContainer history={history} />
    </MainTemplate>
);

export default Home;