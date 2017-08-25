<template>
<div class="m-header border-1px">
	<div class="icon"></div>
	<h1 class="text">Chicken Music</h1>
	<router-link tag="div" class="mine" to="/user">
		<i class="icon-mine"></i>
	</router-link>
</div>
</template>

 <script>
 	export default{}
 </script>

 <style scoped lang="less">
    @import "../../assets/less/mixin.less";

    .m-header{
        position: relative;
        height: 44px;
        text-align: center;
        color: #ffcd32;
        font-size: 0;
		padding-top: 8px;
        .icon{
            display: inline-block;
			vertical-align: top;
			margin-top: 6px;
			width: 30px;
			height: 32px;
			margin-right: 9px;
			.bg-img('logo');
			background-size: 30px 32px;
        }
		.text{
			display: inline-block;
			vertical-align: top;
			line-height: 44px;
			font-size: 18px;
		}
		.mine{
			position: absolute;
			top: 0;
			right: 0;
			.icon-mine{
				display: block;
				width: 52px;
				height: 52px;
			    // padding: 16px;
			    font-size: 20px;
				line-height: 52px;
			    color: #ffcd32;
			}
		}
    }
 </style>
