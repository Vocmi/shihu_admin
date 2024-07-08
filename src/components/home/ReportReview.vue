<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="createTime" label="举报日期" width="200" />
        <el-table-column prop="informer" label="举报人" width="100" />
        <el-table-column prop="reason" label="举报原因" width="300" />
        <el-table-column label="举报内容" width="400">
            <template v-slot="{ row }">
                {{ row.content.length > 10 ? row.content.slice(0, 20) + '...' : row.content }}
            </template>
        </el-table-column>
        <el-table-column prop="status" label="举报状态" width="120">
            <template v-slot="{ row }">
                <span
                    :class="{ 'text-warning': row.status === 0, 'text-success': row.status === 1, 'text-danger': row.status === 2 }">
                    {{ getStatusText(row.status) }}
                </span>
            </template>
        </el-table-column>
        <el-table-column fixed="right" label="选择" min-width="120">
            <template #default="{ row }">
                <el-button link type="primary" size="small" @click="handleClick(row.id)">
                    通过
                </el-button>
                <el-button link type="primary" size="small" @click="handleReject(row.id)">
                    打回
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination background layout="total,sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" :total="total"></el-pagination>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import useHomeStore from '@/store/modules/home/home';
import { Params, ReportStatusParams } from "@/api/home/type";
let homeStore = useHomeStore();
const tableData: any = ref([])
const total = ref(10)

const getStatusText = (status: number): string => {
    switch (status) {
        case 0:
            return '待审核';
        case 1:
            return '通过';
        case 2:
            return '打回';
        default:
            return '未知状态';
    }
};

let params: Params = {
    params: {
        page: 1,
        per_page: 10,
    }
}

const handleSizeChange = (val: string) => {
    alert("每页记录数变化" + val)
}
const handleCurrentChange = (val: string) => {
    alert("页码发生变化" + val)
}

onMounted(async () => {
    // 页面加载时初始化加载数据
    try {
        const response: any = await homeStore.sendReportPage(params);
        tableData.value.push(...response.articles);
        total.value = response.total
    } catch (error) {
        console.error('加载数据出错:', error);
    }
});

const ReportStatus: ReportStatusParams = {
    params: {
        reportId: 0,
        status: 0
    }
}


const handleClick = async (id: any) => {
    ReportStatus.params.reportId = id;
    ReportStatus.params.status = 1;
    try {
        await homeStore.reportStatus(ReportStatus);
        tableData.value = [];
        const response: any = await homeStore.sendReportPage(params);
        tableData.value.push(...response.articles);
        total.value = response.total
    } catch (error) {
        console.error('操作失败:', error);
    }
};

const handleReject = async (id: any) => {
    ReportStatus.params.reportId = id;
    ReportStatus.params.status = 2;
    try {
        await homeStore.reportStatus(ReportStatus);
        tableData.value = [];
        const response: any = await homeStore.sendReportPage(params);
        tableData.value.push(...response.articles);
        total.value = response.total
    } catch (error) {
        console.error('操作失败:', error);
    }
}
</script>
