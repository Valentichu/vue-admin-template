<template>
  <div style="padding:30px;">
    <el-button :disabled="!canDelete" type="primary" icon="el-icon-search">删除权限演示</el-button>
    <el-button :disabled="!canInsert" type="primary" icon="el-icon-search">新增权限演示</el-button>
    <el-button :disabled="!canUpdate" type="primary" icon="el-icon-search">修改权限演示</el-button>
  </div>
</template>
<script>
    import mixinPermission from '@/mixins/mixinPermission'
    export default {
        mixins: [mixinPermission]
    }
</script>