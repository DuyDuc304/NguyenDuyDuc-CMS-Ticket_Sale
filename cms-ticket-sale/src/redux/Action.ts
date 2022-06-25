

//thêm gói dịch vụ
export const AddSP = (data: any) => {
    console.log(data)
    return {
        type: "ServicePackData/AddServicePack",
        payload: data
    }
}
//Sửa trạng thái sử dụng vé thành đã sử dụng
export const UpdateTicketStatus = (data: any, id: string) => {
    console.log(data)
    return {
        type: "TicketData/UpdateTicketStatus",
        payload: data,
        id: id
    }
}
//id vé đang được chọn để cập nhật
export const ClickidTicket = (id: any) => {
    return {
        type: "choseTickket/ClickidTicket",
        payload: id,

    }
}
//Sửa ngày sử dụng vé thành ngày đã chọn
export const UpdateTicketDate = (data: any, id: string) => {
    console.log(data, id)
    return {
        type: "TicketData/UpdateTicketDate",
        payload: data,
        id: id
    }
}
//id vé đang được chọn để cập nhật
export const ClickidServicepack = (id: any) => {
    console.log(id)
    return {
        type: "choseServicepack/ClickidServicepack",
        payload: id,
    }
}