//创建用户相关的小仓库
import { reqArticles, reqByHittingBack, reqReportPage, reqReportStatus } from "@/api/home";
import { ByHittingBackParams, Params, ReportStatusParams } from "@/api/home/type";
import { defineStore } from "pinia";
//引入接口


//创建用户小仓库
let useHomeStore = defineStore('Home', {
    //小仓库存储数据的地方
    state: () => {
        return {
        };
    },
    //异步|逻辑的地方
    actions: {
        //分页查询方法
        async sendArticles(data: Params) {
            //分页加载请求
            let result: any = await reqArticles(data);
            //成功返回code：1，失败为0并且返回错误信息
            if (result.code == 0) {
                return Promise.reject(new Error(result.msg));
            }
            if (result.code == 1) {
                return result.data;
            }
        },
        //通过打回
        async byHittingBack(data: ByHittingBackParams) {
            //分页加载请求
            let result: any = await reqByHittingBack(data);
            //成功返回code：1，失败为0并且返回错误信息
            if (result.code == 0) {
                return Promise.reject(new Error(result.msg));
            }
            if (result.code == 1) {
                return result.data;
            }
        },
        //分页查询举报信息方法
        async sendReportPage(data: Params) {
            //分页加载请求
            let result: any = await reqReportPage(data);
            //成功返回code：1，失败为0并且返回错误信息
            if (result.code == 0) {
                return Promise.reject(new Error(result.msg));
            }
            if (result.code == 1) {
                return result.data;
            }
        },
        //举报状态
        async reportStatus(data: ReportStatusParams) {
            //分页加载请求
            let result: any = await reqReportStatus(data);
            //成功返回code：1，失败为0并且返回错误信息
            if (result.code == 0) {
                return Promise.reject(new Error(result.msg));
            }
            if (result.code == 1) {
                return result.data;
            }
        },
    },
    getters: {},
});

//对外暴露小仓库
export default useHomeStore;
