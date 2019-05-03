import React, {Fragment} from 'react';
import HeaderContainer from '../../containers/header_user'
import { Grid} from 'semantic-ui-react'
import MainUser from '../../containers/main_user'


const UserPage = props => (
   <Fragment>
      <HeaderContainer/>
        <MainUser/>
   </Fragment>
)

export default UserPage;