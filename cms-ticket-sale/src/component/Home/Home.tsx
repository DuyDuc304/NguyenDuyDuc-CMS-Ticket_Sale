import React from 'react'
import { FiCalendar } from 'react-icons/fi';
import { Menubar } from '../layouts/menubar';
import Topbar from '../layouts/topbar';
import { DonutChart } from './DonutChart';
import { LineChart } from './LineChart';
const date = new Date();
class Home extends React.Component {

  render() {
    return (
      <div className='bg'>
        <Topbar />
        <Menubar buttonid='tc' />
        <div className="bgapp">
          <label className="titleapp"> Thống kê</label>
          {/* Line Char */}
          <div className="home-line-chart" >
            <LineChart />
          </div>

          {/* lịch tuần hoặc ngày Line chart*/}
          <div className="home-calenda-div" style={{ marginLeft: '1320px', marginTop: '80px' }}>
            <p className='calenda-date'> Tháng {date.getMonth()}, {date.getFullYear()}</p>
            <p className='calenda-icon'><FiCalendar /></p>
          </div>
          {/* tổng doanh thu*/}

          <label className="home-label-doanhthu">tổng doanh thu theo tuần</label>
          <div className="home-row-doanhthu">
            <label className="home-money-doanhthu">525.145.000</label>
            <label className="home-dong-doanhthu">đồng</label>
          </div>

          {/* lịch tuần hoặc ngày donut chart*/}
          <div className="home-calenda-div" style={{ marginLeft: '32px', marginTop: '610px' }}>
            <p className='calenda-date'> Tháng {date.getMonth()}, {date.getFullYear()}</p>
            <p className='calenda-icon'><FiCalendar /></p>
          </div>

          {/* Donut Char */}
          <DonutChart />
          {/* Donut Char chú thích */}
          <div className="hone-donut-chuthich">
            <div className="row">
              <div className="donut-chart-chuthich" style={{ background: '#4F75FF' }}></div>
              <p >Vé đã sử dụng</p>
            </div>
            <div className="row">
              <div className="donut-chart-chuthich" style={{ background: '#FF8A48' }}></div>
              <p >Vé chưa sử dụng</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;

