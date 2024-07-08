//统一管理项目用户相关的接口
import request from "@/utils/request";
import { Params, ByHittingBackParams, ReportStatusParams } from "./type";
//统一管理接口
enum API {
    ARTICLES_URL = '/articles',
    BY_HITTING_BACK = '/byHittingBack',
    REPORT_PAGE = '/reportPage',
    REPORT_STARUS = '/reportStatus'
}
//暴露请求函数
//分页加载获取请求
export const reqArticles = (data: Params) => request.get(API.ARTICLES_URL, data);

//通过和打回操作请求
export const reqByHittingBack = (data: ByHittingBackParams) => request.get(API.BY_HITTING_BACK, data);

//分页查询举报
export const reqReportPage = (data: Params) => request.get(API.REPORT_PAGE, data);

//举报状态
export const reqReportStatus = (data: ReportStatusParams) => request.get(API.REPORT_STARUS, data);