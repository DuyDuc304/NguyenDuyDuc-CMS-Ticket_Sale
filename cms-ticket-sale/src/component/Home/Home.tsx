import React from 'react'

import { Menubar } from '../layouts/menubar';
import Sreach from '../layouts/sreach';
import Topbar from '../layouts/topbar';
import { DonutChart } from './DonutChart';
import { LineChart } from './LineChart';



class Home extends React.Component {

  render() {
    return (
      <div className='bg'>
        <Sreach />
        <Topbar />
        <Menubar buttonid='tc' />
        <div className="bgapp">
          <label className="titleapp"> Thống kê</label>
          {/* Line Char */}
          <LineChart />
          {/* Donut Char */}
          <DonutChart />

        </div>
      </div>
    )
  }
}
export default Home;

