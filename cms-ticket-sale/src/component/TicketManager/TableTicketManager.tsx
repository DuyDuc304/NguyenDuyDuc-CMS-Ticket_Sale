import React from "react"
import './TableTicketManager.css'
import { BsThreeDotsVertical } from 'react-icons/bs';
class TableTicketManager extends React.Component {
    showchose() {
        const chose: any = document.getElementById('chosebox')
        if (chose.style.display === 'none') {
            chose.style.display = 'flex'
        } else {
            chose.style.display = 'none'
        }

    }
    TurnOnUseTicket() {
        const xn: any = document.getElementById('bls-xn')
        xn.style.display = 'flex'
    }
    Showchangedate() {
        const bls: any = document.getElementById('bls-dnsdv')

        bls.style.display = 'flex'


    }

    render() {
        return (
            <div className="table-ticket-mangager" id="tbtm">
                <div className="row-title">
                    <div className="tkm-col1"> <p className="row1-p">STT</p> </div>
                    <div className="tkm-col2"> <p className="row1-p">Bokking code</p></div>
                    <div className="tkm-col3"><p className="row1-p"> Sô vé</p></div>
                    <div className="tkm-col4"><p className="row1-p">Tên sự kiện</p> </div>
                    <div className="tkm-col5"><p className="row1-p">Tình trạng sử dụng</p> </div>
                    <div className="tkm-col6"><p className="row1-p">Ngày sử dụng</p></div>
                    <div className="tkm-col7"><p className="row1-p">Ngày xuất vé</p></div>
                    <div className="tkm-col8"> <p className="row1-p">Cổng check-in</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row2">
                    <div className="tkm-col1"> <p>1</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789034</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5">
                        <div className="box-tt-dsd ">
                            <label >•</label>
                            <p>Đã sử dụng</p>
                        </div>
                    </div>
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p>14/04/2021</p>  </div>
                    <div className="tkm-col8"><p>Cổng 2</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row1">
                    <div className="tkm-col1"> <p>2</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789034</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5" id="col5">
                        <div className="box-tt-csd " id="csd">
                            <label >•</label>
                            <p>Chưa sử dụng</p>
                        </div>
                    </div>
                    <div className="tkm-col6" id="nsd"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p></p>  </div>
                    <div className="tkm-col8"><p>-</p></div>
                    <div className="tkm-col9">
                        <div className="div-col9" onClick={() => this.showchose()}>
                            <p  >
                                <BsThreeDotsVertical />
                            </p>
                        </div>
                        <div className="row-box-chose " id="chosebox">
                            <div className="tkm-chose">
                                <div className="item-chose" onClick={() => this.TurnOnUseTicket()} id='sdv'><p>Sử dụng vé</p></div>
                                <div className="item-chose" onClick={() => this.Showchangedate()}><p>Đổi ngày sử dụng</p></div>
                            </div>
                            <div className="nhon"></div>
                        </div>

                    </div>
                </div>
                <div className="row2">
                    <div className="tkm-col1"> <p>3</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789034</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5">
                        <div className="box-tt-hh ">
                            <label >•</label>
                            <p>Hết hạn</p>
                        </div>
                    </div>
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p></p>  </div>
                    <div className="tkm-col8"><p>-</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row1">
                    <div className="tkm-col1"> <p>4</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789031</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5">
                        <div className="box-tt-hh ">
                            <label >•</label>
                            <p>Hết hạn</p>
                        </div>
                    </div>
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p></p>  </div>
                    <div className="tkm-col8"><p>-</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row2">
                    <div className="tkm-col1"> <p>5</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789031</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5">
                        <div className="box-tt-dsd ">
                            <label >•</label>
                            <p>Đã sử dụng</p>
                        </div>
                    </div>
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p>14/04/2021</p>  </div>
                    <div className="tkm-col8"><p>Cổng 5</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row1">
                    <div className="tkm-col1"> <p>6</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789034</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5">
                        <div className="box-tt-dsd ">
                            <label >•</label>
                            <p>Đã sử dụng</p>
                        </div>
                    </div>
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p>14/04/2021</p>  </div>
                    <div className="tkm-col8"><p>Cổng 2</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row2">
                    <div className="tkm-col1"> <p>7</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789031</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5">
                        <div className="box-tt-dsd ">
                            <label >•</label>
                            <p>Đã sử dụng</p>
                        </div>
                    </div>
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p>14/04/2021</p>  </div>
                    <div className="tkm-col8"><p>Cổng 5</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row1">
                    <div className="tkm-col1"> <p>8</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789034</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5">
                        <div className="box-tt-dsd ">
                            <label >•</label>
                            <p>Đã sử dụng</p>
                        </div>
                    </div>
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p>14/04/2021</p>  </div>
                    <div className="tkm-col8"><p>Cổng 3</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row2">
                    <div className="tkm-col1"> <p>9</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789034</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5">
                        <div className="box-tt-dsd ">
                            <label >•</label>
                            <p>Đã sử dụng</p>
                        </div>
                    </div>
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p>14/04/2021</p>  </div>
                    <div className="tkm-col8"><p>Cổng 1</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row1">
                    <div className="tkm-col1"> <p>10</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789034</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5">
                        <div className="box-tt-dsd ">
                            <label >•</label>
                            <p>Đã sử dụng</p>
                        </div>
                    </div>
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p>14/04/2021</p>  </div>
                    <div className="tkm-col8"><p>Cổng 1</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row2">
                    <div className="tkm-col1"> <p>11</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789031</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5">
                        <div className="box-tt-dsd ">
                            <label >•</label>
                            <p>Đã sử dụng</p>
                        </div>
                    </div>
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p>14/04/2021</p>  </div>
                    <div className="tkm-col8"><p>Cổng 4</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row1">
                    <div className="tkm-col1"> <p>12</p> </div>
                    <div className="tkm-col2"><p> ALT20210501</p></div>
                    <div className="tkm-col3"> <p>123456789034</p></div>
                    <div className="tkm-col4"> <p>Hội chợ triển lãm tiêu dùng 2021</p></div>
                    <div className="tkm-col5">
                        <div className="box-tt-hh ">
                            <label >•</label>
                            <p>Hết hạn</p>
                        </div>
                    </div>
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
                    <div className="tkm-col7"><p>14/04/2021</p>  </div>
                    <div className="tkm-col8"><p>Cổng 2</p></div>
                    <div className="tkm-col9"></div>
                </div>

            </div>
        )
    }
}

export default TableTicketManager