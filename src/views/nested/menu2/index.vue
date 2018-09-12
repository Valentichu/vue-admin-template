<template>
  <div style="padding:30px;">
    <el-button v-if="viewAccessSuper" type="primary" icon="el-icon-search">按钮权限演示</el-button>
  </div>
</template>
<script>
    import { hasOneOf } from '@/utils/auth'
    export default {
        computed: {
            roles () {
                return this.$store.state.user.roles
            },
            viewAccessSuper () {
                return hasOneOf(['admin'], this.roles)
            }
        }
    }
</script>