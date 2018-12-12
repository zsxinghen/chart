<template>
	<div>
		<my-table :columns="columns" :rowspanConfig="rowspanConfig" :colspanConfig="colspanConfig" :tableData="tableData" >
		</my-table>
	</div>
</template>
<script>
	import myTable from '../components/zhiyun-ui/table-ext.vue'
	export default{
		components:{
			myTable
		},
		data(){
			return {
								rowspanConfig: ['marketName', 'marketClassName'],
								colspanConfig: ['col1-col2'],
								columns:[{
									prop:'id',
									label:'ID',
									width:'120px',
									align:'center'
								},{
									prop:'marketName',
									label:'市场名称',
									width:'120px',
									align:'center'
								},{
									prop:'marketClassName',
									label:'市场分类',
									width:'120px',
									align:'center'
								},{
									prop:'productClassName',
									label:'产品大类',
									width:'120px',
									align:'center'
								},{
									prop:'col1',
									label:'扩展1',
									width:'120px',
									align:'center'
								},{
									prop:'col2',
									label:'扩展2',
									align:'center'
								}],
								tableData: [{
										id: 1,
										marketName: '服装市场',
										marketClassName: '男装',
										productClassName: '西装',
										col1: '1',
										col2: '1'
									},
									{
										id: 2,
										marketName: '服装市场',
										marketClassName: '男装',
										productClassName: '皮衣',
										col1: '1',
										col2: '2'
									},
									{
										id: 3,
										marketName: '服装市场',
										marketClassName: '女装',
										productClassName: '皮衣',
										col1: '1',
										col2: '2'
									},
									{
										id: 4,
										marketName: '服装市场',
										marketClassName: '女装',
										productClassName: '群子',
										col1: '1',
										col2: '2'
									}
								]
			}
		}
	}
</script>