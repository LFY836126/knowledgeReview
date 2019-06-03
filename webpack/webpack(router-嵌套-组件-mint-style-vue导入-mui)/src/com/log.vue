<template>
	<div>
		one 子组件：log
		<mt-button type="primary">primary</mt-button>
		<button type="button" class="mui-btn mui-btn-royal">
      紫色
    </button>
	</div>
</template>
<script type="text/javascript">
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return {
				toastInstanse : null,
			};
		},
		created(){
			this.getList();
		},
		methods:{
			getList(){
				this.show();
				setTimeout(() => {
					this.toastInstanse.close();
				},3000)
			},
			show(){
				this.toastInstanse = Toast({
					message:'message',
					duration:-1,
					iconClass:'glyphicon glyphicon-cloud',
					className:'mytoast',
				})
			}
		}
	};
</script>
<style scoped>
	div{
		color:red;
	}
</style>