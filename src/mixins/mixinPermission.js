import { mapGetters } from 'vuex'

let mixinPermission = {
    computed: {
        ...mapGetters([
            'permissions'
        ])
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
        console.log(currentRoutePermission)
        console.log(this.permissions)
        console.log(permissions)
        const permissions = this.permissions.find((item) => {
            return item.name === currentRoutePermission
        })
        this.canDelete = permissions.delete
        this.canUpdate = permissions.update
        this.canInsert = permissions.insert
    }
}

export default mixinPermission