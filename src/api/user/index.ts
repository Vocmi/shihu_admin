//统一管理项目用户相关的接口
import request from "@/utils/request";
import { loginForm, } from "./type";
//统一管理接口
enum API {
    LOGIN_URL = "/login",
    USERINFO_URL = "/info",
}
//暴露请求函数
//登陆接口方法 
export const reqLogin = (data: loginForm) => request.post(API.LOGIN_URL, data);
//获取用户信息接口方法
export const reqUserInfo = () => request.get(API.USERINFO_URL)