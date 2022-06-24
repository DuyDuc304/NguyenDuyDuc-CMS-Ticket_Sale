

//thêm gói dịch vụ
export const AddSP = (data: any) => {
    console.log(data)
    return {
        type: "ServicePackData/AddServicePack",
        payload: data
    }
}
//Sửa trạng thái sử dụng vé thành đã sử dụng
export const UpdateTicket = (data: any, id: string) => {
    console.log(data)
    return {
        type: "TicketData/UpdateTicketData",
        payload: data,
        id: id
    }
}
