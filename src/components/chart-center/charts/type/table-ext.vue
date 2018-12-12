<template>
	<div>
		<div class="el-card box-card table_container">

			<div class="el-card__body">
				<table class="gridtable" border>
					<thead>
						<tr>
							<th v-for="item in columns" :key="item.prop">{{item.label}}</th>
							<!-- <th>市场名称</th>
							<th>市场分类</th>
							<th>产品大类</th>
							<th>列合并1</th>
							<th>列合并2</th> -->
						</tr>
					</thead>
					<tbody>
						<tr v-for="(row,index) in data" :key="row.id">
							<td v-for="(cell,i) in columns" 
							:align="cell.align"
							:width="cell.width"
							 :rowspan="row.rowSpanConfig.get(cell.prop)==null?1:row.rowSpanConfig.get(cell.prop)" 
							 :colspan="row.colSpanConfig.get(cell.prop)==null?1:row.colSpanConfig.get(cell.prop)"
							 v-show="!((row.rowSpanConfig.get(cell.prop)!=null&&row.rowSpanConfig.get(cell.prop)==0)||(row.colSpanConfig.get(cell.prop)!=null&&row.colSpanConfig.get(cell.prop)==0))">
								{{ row[cell.prop]}}
							</td>
							<!-- <td :rowspan="row.rowSpanConfig.get('marketName')==null?1:row.rowSpanConfig.get('marketName')" 
							:colspan="row.colSpanConfig.get('marketName')==null?1:row.colSpanConfig.get('marketName')"
							 v-show="!((row.rowSpanConfig.get('marketName')!=null&&row.rowSpanConfig.get('marketName')==0)||(row.colSpanConfig.get('marketName')!=null&&row.colSpanConfig.get('marketName')==0))">
								{{ row.marketName }}
							</td>
							<td :rowspan="row.rowSpanConfig.get('marketClassName')==null?1:row.rowSpanConfig.get('marketClassName')"
							 :colspan="row.colSpanConfig.get('marketClassName')==null?1:row.colSpanConfig.get('marketClassName')" 
							 v-show="!((row.rowSpanConfig.get('marketClassName')!=null&&row.rowSpanConfig.get('marketClassName')==0)||(row.colSpanConfig.get('marketClassName')!=null&&row.colSpanConfig.get('marketClassName')==0))">
								{{ row.marketClassName }}
							</td>
							<td :rowspan="row.rowSpanConfig.get('productClassName')==null?1:row.rowSpanConfig.get('productClassName')"
							 :colspan="row.colSpanConfig.get('productClassName')==null?1:row.colSpanConfig.get('productClassName')" v-show="!((row.rowSpanConfig.get('productClassName')!=null&&row.rowSpanConfig.get('productClassName')==0)||(row.colSpanConfig.get('productClassName')!=null&&row.colSpanConfig.get('productClassName')==0))">
								{{ row.productClassName }}
							</td>
							<td :rowspan="row.rowSpanConfig.get('col1')==null?1:row.rowSpanConfig.get('col1')" :colspan="row.colSpanConfig.get('col1')==null?1:row.colSpanConfig.get('col1')"
							 v-show="!((row.rowSpanConfig.get('col1')!=null&&row.rowSpanConfig.get('col1')==0)||(row.colSpanConfig.get('col1')!=null&&row.colSpanConfig.get('col1')==0))">
								{{ row.rowSpanConfig.get('marketClassName') }}
							</td>
							<td :rowspan="row.rowSpanConfig.get('col2')==null?1:row.rowSpanConfig.get('col2')" :colspan="row.colSpanConfig.get('col2')==null?1:row.colSpanConfig.get('col2')"
							 v-show="!((row.rowSpanConfig.get('col2')!=null&&row.rowSpanConfig.get('col2')==0)||(row.colSpanConfig.get('col2')!=null&&row.colSpanConfig.get('col2')==0))">
								{{ row.rowSpanConfig.get('marketClassName') }}
							</td> -->
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:{
			columns:{
				require:true,
				default(){
					return []
				}
			},
			tableData:{
				require:true,
				default(){
					return []
				}
			},
			rowspanConfig:{
				type:Array,
				default(){
					return []
				}
			},
			colspanConfig:{
				type:Array,
				default(){
					return []
				}
			},
		},
		computed:{
			data(){
				return this.getData()
			}
		},
		data() {
			return {
// 				rowspanConfig: ['marketName', 'marketClassName'],
// 				colspanConfig: ['col1-col2'],
// 				tableData: [{
// 						id: 1,
// 						marketName: '服装市场',
// 						marketClassName: '男装',
// 						productClassName: '西装',
// 						col1: '1',
// 						col2: '1'
// 					},
// 					{
// 						id: 2,
// 						marketName: '服装市场',
// 						marketClassName: '男装',
// 						productClassName: '皮衣',
// 						col1: '1',
// 						col2: '2'
// 					},
// 					{
// 						id: 3,
// 						marketName: '服装市场',
// 						marketClassName: '女装',
// 						productClassName: '皮衣',
// 						col1: '1',
// 						col2: '2'
// 					},
// 					{
// 						id: 4,
// 						marketName: '服装市场',
// 						marketClassName: '女装',
// 						productClassName: '群子',
// 						col1: '1',
// 						col2: '2'
// 					}
// 				]
			}
		},
		methods: {

			getData() {
				this.tableData.forEach((row, index) => {
					row.rowSpanConfig = new Map();
					row.colSpanConfig = new Map();
					this.rowSpanCompute(row, index);
					this.colSpanCompute(row)
				})
				return this.tableData;
			},
			colSpanCompute(row) {
				if (this.colspanConfig != null && this.colspanConfig.length > 0) {
					this.colspanConfig.forEach(fields => {
						let fieldArr = fields.split('-');
						let valueArr = [];
						fieldArr.forEach(field=>{
							if(valueArr.indexOf(row[field])==-1)
								valueArr.push(row[field])
						})
						if(valueArr.length<2){
							fieldArr.forEach((field,index)=>{
								if(index==0){
									row.colSpanConfig.set(field,fieldArr.length)
								}else{
									row.colSpanConfig.set(field,0)
								}
							})
						}else{
							fieldArr.forEach((field,index)=>{
								row.colSpanConfig.set(field,1)
							})
						}
					})
				}
			},
			rowSpanCompute( row, index) {
			
				if (this.rowspanConfig != null && this.rowspanConfig.length > 0) {
					this.rowspanConfig.forEach(field => {
						if (index > 0) {
							let parentIndex = index-1;
							if (row[field] == this.tableData[parentIndex][field]) {
								row.rowSpanConfig.set(field, 0)
								this.rowSpanParentCompute( parentIndex, field)
							}else{
								row.rowSpanConfig.set(field, 1)
							}
						}else{
							row.rowSpanConfig.set(field, 1)
						}
						
					})
				}


			},
			rowSpanParentCompute( rowIndex, field) {
				if (this.tableData[rowIndex].rowSpanConfig.get(field) == 0){
					let parentRowIndex =rowIndex-1
					this.rowSpanParentCompute(parentRowIndex, field)
				}else {
					this.tableData[rowIndex].rowSpanConfig.set(field, this.tableData[rowIndex].rowSpanConfig.get(field) + 1)
				}

			}
		}
	}
</script>

<style lang="less" scoped>
	.mybtn {
		margin: 10px 0px 0px 10px
	}

	.btn_right {
		float: right
	}

	.gridtable {
		border-collapse: collapse;
		width: 100%;

		thead>tr {
			background: #eef1f6;
			height: 40px;
			line-height: 40px
		}

		th,
		td {
			border: 1px solid #dfe6ec;
			font-size: 14px;
			font-weight: normal;
		}

		.w {
			width: 120px
		}

		tbody>tr {
			height: 50px;
			line-height: 50px;

			&:hover {
				background: #eef1f6;
			}

			td {
				padding: 0 10px;
			}

		}

	}

	.hidden {
		display: none
	}
</style>
