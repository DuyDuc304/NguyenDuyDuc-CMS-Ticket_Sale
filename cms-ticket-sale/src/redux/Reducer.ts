

//innit defau value
var ServicePackData: any = []
var TicketData: any = []

//call api bằng json server
// cd Json-server and npm start 
var APIServicePackData = '  http://localhost:3000/ServicePackData'
var APITicket = 'http://localhost:3000/Ticket'

//load data từ server gán = ServicePackData
const fetchItemServicePackData = async () => {
    const data: any = await fetch(APIServicePackData).then(function (response) {
        return response.json()
    })
    ServicePackData = data.map((item: any) => (
        ServicePackData.push(item)
    ))
    console.log('fetchItemServicePackData')

}
fetchItemServicePackData()



//load data từ server gán = TicketData
const fetchItemTicketData = async () => {
    const data = await fetch(APITicket).then(function (response) {
        return response.json()
    })
    TicketData = data.map((item: any) => (
        TicketData.push(item)
    ))

}
fetchItemTicketData()


//Tạo gói dịch vụi mới 
function createServicepark(data: any) {
    var option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(APIServicePackData, option)
}

//cập nhập trạng thái đã sử dụng vé 
function UpdataTicket(data: object, id: string) {
    var option = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(APITicket + '/' + id, option)
}

//innit value
const innitState = {
    ServicePackData,
    TicketData
}
console.log(innitState)


const rootReducer = (state: any = innitState, action: any) => {
    switch (action.type) {
        //thêm gói dịch vụ
        case "ServicePackData/AddServicePack": {
            createServicepark(action.payload)
            return state
        }
        //Sửa trạng thái sử dụng vé thành đã sử dụng
        case "TicketData/UpdateTicketData": {
            UpdataTicket(action.payload, action.id)
            return state;
        }
        default:
            return state;
    }

}
export default rootReducer