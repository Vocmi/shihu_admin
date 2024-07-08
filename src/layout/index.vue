<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <User />
              </el-icon>用户管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">权限分配</el-menu-item>
              <el-menu-item index="1-2">账号封禁</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>审核管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click="articleModeration">文章审核</el-menu-item>
              <el-menu-item index="2-2" @click="reportReview">举报审核</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <EditPen />
              </el-icon>稿子管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">编辑稿子</el-menu-item>
              <el-menu-item index="3-2">数据大屏</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-button type="button.type" text @click="logOut">
            退出登录
          </el-button>
          <el-avatar>{{ username }} </el-avatar>
        </div>
      </el-header>

      <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, User, EditPen } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import useUserStore from '@/store/modules/user';

let userStore = useUserStore();

let $router = useRouter();

const username = ref(userStore.username);

//  退出登录功能的实现
const logOut = () => {
  userStore.userLogout();
  $router.push("/login")
}

const articleModeration = () => {
  $router.push("articleModeration")
}

const reportReview = () => {
  $router.push("reportReview")
}
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
