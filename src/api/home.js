import request from "@utils/request"

export const reqGetBaseCategoryList = () => {
    return request({
        method: "GET",
        url: "/product/getBaseCategoryList",
    })
}