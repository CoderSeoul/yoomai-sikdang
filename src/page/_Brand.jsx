import * as React from 'react';
import { MainTemplate, Navigation } from 'components';
import { BrandContainer } from 'containers';

const Brand = ({ history }) => (
    <MainTemplate header={<Navigation />}>
        <BrandContainer history={history} />
    </MainTemplate>
);

export default Brand;