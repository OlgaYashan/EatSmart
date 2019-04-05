import React, {Fragment} from 'react';
import FirstScreenComponent from '../../components/first_screen';
import HeaderContainer from '../../containers/header_user'


const HomePage = props => (
   <Fragment>
      <HeaderContainer/>
      <FirstScreenComponent/>
   </Fragment>
)

export default HomePage;