import VueRouter from 'vue-router'
import Layout from './components/Layout'
import BrowseView from './components/pages/BrowseView'
import ProfileView from './components/pages/ProfileView'
import MessageView from './components/pages/MessageView'
import Vue from 'vue/dist/vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: "/",
            component: Layout,
            children: [
                { path: "/", redirect: "/browse"},
                { path: "/browse", component: BrowseView},
                { path: "/messages", component: MessageView},
                { path: "/profile", component: ProfileView}
            ]
        }
    ]
})