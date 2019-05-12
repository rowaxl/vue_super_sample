import { set, toggle } from '@/utils/vuex'

export default {
    setState: set('state'),
    toggleState: toggle('toggleState')
}
