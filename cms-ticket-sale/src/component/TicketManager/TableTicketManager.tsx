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
    useticket() {
        const col5: any = document.getElementById('col5')
        const sdv: any = document.getElementById('sdv')
        const csd: any = document.getElementById('csd')
        const chose: any = document.getElementById('chosebox')
        col5.removeChild(csd)
        const div: any = document.createElement('div')
        const label: any = document.createElement('label')
        const p: any = document.createElement('p')
        div.className = 'box-tt-dsd'
        p.innerText = 'Đã sử dụng'
        label.innerText = '•'
        div.appendChild(p)
        div.appendChild(label)
        col5.appendChild(div)
        chose.style.display = 'none'
        sdv.style.pointerEvents = ' none'


    }
    render() {
        return (
            <div className="table-ticket-mangager">
                <div className="row1">
                    <div className="tkm-col1"> <p>STT</p> </div>
                    <div className="tkm-col2"> <p>Bokking code</p></div>
                    <div className="tkm-col3"><p> Sô vé</p></div>
                    <div className="tkm-col4"><p>Tên sự kiện</p> </div>
                    <div className="tkm-col5"><p>Tình trạng sử dụng</p> </div>
                    <div className="tkm-col6"><p>Ngày sử dụng</p></div>
                    <div className="tkm-col7"><p>Ngày xuất vé</p></div>
                    <div className="tkm-col8"> <p>Cổng check-in</p></div>
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
                    <div className="tkm-col8"><p>Cổng 1</p></div>
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
                    <div className="tkm-col6"><p>14/04/2021</p> </div>
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
                                <div className="item-chose" onClick={() => this.useticket()} id='sdv'><p>Sử dụng vé</p></div>
                                <div className="item-chose"><p>Đổi ngày sử dụng</p></div>
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
                <div className="row2">
                    <div className="tkm-col1"> <p>5</p> </div>
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
                    <div className="tkm-col8"><p>Cổng 1</p></div>
                    <div className="tkm-col9"></div>
                </div>
                <div className="row2">
                    <div className="tkm-col1"> <p>7</p> </div>
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
                    <div className="tkm-col8"><p>Cổng 1</p></div>
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
                        <div className="box-tt-csd ">
                            <label >•</label>
                            <p>Chưa sử dụng</p>
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
                    <div className="tkm-col8"><p>Cổng 1</p></div>
                    <div className="tkm-col9"></div>
                </div>
            </div>
        )
    }
}

export default TableTicketManager