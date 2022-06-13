import React from 'react'
import { Menubar } from '../layouts/menubar';
import Topbar from '../layouts/topbar';

class Home extends React.Component {
  render() {
    return (
      <div className='bg'>
        <Topbar />
        <Menubar buttonid='tc' />
        <div className="bgapp"></div>
      </div>
    )
  }
}
export default Home;

