console.log('haahahh');
import Vue from '../node_modules/vue/dist/vue.js';
import login from './login.vue';
import a, {title as hahh, hah} from './text.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import one from './rout/one.vue'
import two from './rout/two.vue'
import log from './com/log.vue'
import reg from './com/reg.vue'
import './app.css'
import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/css/mui.min.css'
/*import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)*/
/*import { Button } from 'mint-ui'
Vue.component(Button.name, Button);*/
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
var router = new VueRouter({
	routes:[
	{path:'/one', 
	component:one,
	children:[
		{path:'log', component:log},
		{path:'reg', component:reg}
	]
	},
	{path:'/two', component:two},
	]
})
console.log(a,hahh,hah);
var vm = new Vue({
	el: "#app",
	data:{
		msg : 'a',
	},
/*	components:{
		login,
	}*/
	render:function(c){
        return c(login);
    },
    router
})