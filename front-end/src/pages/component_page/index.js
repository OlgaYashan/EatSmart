import React, {Fragment} from 'react';
import HeaderContainer from '../../containers/header_user'
import ComponentList from '../../containers/list_component'


const ComponentPage = props => (
   <Fragment>
      <HeaderContainer/>
      <ComponentList/>
   </Fragment>
)

export default ComponentPage;