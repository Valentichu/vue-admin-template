import { mapGetters } from 'vuex'
const mixinPermission = {
  computed: {
    ...mapGetters(['permissions'])
  },
  data() {
    return {
      canDelete: false,
      canUpdate: false,
      canInsert: false
    }
  },
  created() {
    const length = this.$route.matched.length
    const currentRoutePermission = this.$route.matched[length - 1].meta.permission
    const permissions = this.permissions.find(item => item.name === currentRoutePermission)
    this.canDelete = permissions && permissions.delete ? permissions.delete : false
    this.canUpdate = permissions && permissions.update ? permissions.update : false
    this.canInsert = permissions && permissions.insert ? permissions.insert : false
  }
}

export default mixinPermission
