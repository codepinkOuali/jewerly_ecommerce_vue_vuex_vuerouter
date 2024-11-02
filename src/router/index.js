import {createRouter,createWebHistory} from "vue-router";
const routes =[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'HomePage',
        component:() => import('@/views/HomePage.vue')
    },
    {
        path:'/product-details/:id',
        name:'ProductDetails',
        component:() => import('@/views/ProductDetails.vue')
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(){
        return{top:0};
    }
})

export default router;