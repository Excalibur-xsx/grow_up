import request from "@utils/request"

export const reqLogin = (phone, password) => {
    return request({
        method: "POST",
        url: "/user/passport/login",
        data: {//放置请求体参数，通常post请求
            phone,
            password,
        },
        // params: {} //放置查询字符串参数，通常get请求
    })
}