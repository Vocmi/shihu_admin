<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="date" label="日期" width="150" />
    <el-table-column prop="name" label="名字" width="120" />
    <el-table-column prop="zip" label="标题" width="120" />
    <el-table-column prop="address" label="内容" width="600" />
    <el-table-column prop="state" label="审核状态" width="120" />
    <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick">
          通过
        </el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination background layout="total,sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
    @current-change="handleCurrentChange" :total="1000"></el-pagination>
</template>

<script lang="ts" setup>
const handleSizeChange = (val: string) => {
  alert("每页记录数变化" + val)
}
const handleCurrentChange = (val: string) => {
  alert("页码发生变化" + val)
}

const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
</script>
