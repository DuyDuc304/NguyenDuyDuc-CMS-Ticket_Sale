import React from 'react'
import { Menubar } from '../layouts/menubar';

class Home extends React.Component {
  render() {
    return (
      <div className='bg'>
        <Menubar buttonid='tc' />
      </div>
    )
  }
}
export default Home;

