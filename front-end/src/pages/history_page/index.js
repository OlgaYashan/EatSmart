import React, {Fragment} from 'react';
import HeaderContainer from '../../containers/header_user'
import HistoryList from '../../containers/history_user'


const HistoryPage = props => (
   <Fragment>
      <HeaderContainer/>
      <HistoryList/>
   </Fragment>
)

export default HistoryPage;