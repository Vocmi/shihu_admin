//分页查询暴露方法
export interface Pagefrom {
    page: number;
    per_page: number;
}

export interface Params {
    params: Pagefrom;
}

//通过打回
export interface ByHittingBack {
    postId: number;
    status: number;
}
export interface ByHittingBackParams {
    params: ByHittingBack;
}

//举报状态
export interface ReportStatus {
    reportId: number;
    status: number;
}
export interface ReportStatusParams {
    params: ReportStatus;
}