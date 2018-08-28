<!--
 - infor 日期选择器
 - user CC
 - date 2018-08-28 09:40:33
 - use 详见readme
 -->

<template>
	<div class="date-picker">
		<!-- 头部 -->
		<div class="date-picker-header">
			{{`${this.year}年${this.month >= 9 ? '' : '0'}${this.month + 1}月`}}<span @click="nextMonth">></span>
		</div>
		<div class="date-picker-content">
			<table>
				<tbody>
					<tr>
						<th v-for="(item, index) in C_week" :key="index">{{ item }}</th>
					</tr>
					<tr v-for="(row, index) in rows" :key="index">
						<td v-for="(dayobject, key) in row" :key="key" 
						:class="{today:isToday == row[key].day,pre:row[key] == '', selected:select == row[key].day}"
						@click="flag && pickDate(row[key].day)">{{dayobject.day}}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import { getFirstDayOfWeekByDayOfMonth, getDayCountOfMonth, nextMonth } from '@/utils/dateUtils'
	export default {
		name: 'DatePicker',

		props: {
			date: {
				type: Date,
				default: () => { return new Date() },
			},
			startDate: {
				type: String,
				default: () => {return '2018-08-15'}
			},
			endDate: {
				type: String,
				default: () => {return '2018-08-26'}
			}
		},
		data() {
			return {
				// 日期常量
				C_week: ['日', '一', '二', '三', '四', '五', '六'],
				nowDate: new Date(this.date),
				select:'',
				selectedDate:null,
				flag:false	
			}
		},
		methods: {
			nextMonth() {
				this.nowDate = nextMonth(this.nowDate)
			},
			/**
			 * 点击获得日期
			 * 
			 */
			pickDate:function(date){
				// 被点击的日期样式改变
				this.select = date;
				alert(this.selectedDate = this.year + "-" + (this.month + 1) + "-" + date);
			}
		},
		mounted() {
			
		},
		computed: {
			/**
			 * 判断是否是当天日期
			 * @return {Number} 日期
			 */
			isToday:function(){
				let date= new Date();
				const nowDate = new Date(this.year, this.month, 1);
				let dayOfWeek = getFirstDayOfWeekByDayOfMonth(nowDate);
				if(this.year == date.getFullYear() &&
					this.month == date.getMonth()){
						return date.getDate()
				}
			},
			/**
			 * 获取传入日期年份
			 * @return {Number} 4位数年份
			 */
			year() {
				return this.nowDate.getFullYear()
			},
			/**
			 * 获取传入日期月份
			 * @return {Number} 两位数月份
			 */
			month() {
				return this.nowDate.getMonth()
			},
			rows() {
				const nowDate = new Date(this.year, this.month, 1)
				let dayOfWeek = getFirstDayOfWeekByDayOfMonth(nowDate)
				let dayCount = getDayCountOfMonth(this.year, this.month)
				// day = day === 0 ? 7 : day

				let rows = new Array()
				// let dayobject ={day:1}
				let d= 1
				while (d <= dayCount) {
					let row = new Array()
					while (row.length < 7) {
						if (d === 1) {
							for (let i = 0; i < dayOfWeek; i++) {
								row.push('')
							}
						}
						
						// 当天的日期对象
						// new Date(this.year, this.month, day)

						// {
						// 	day:,
						// 	isToday: ,
						// 	isSelect: ,
						// 	isDisabled, 
						// }
						
						// let st = this.startDate.split('-');
						// let et = this.endDate.split('-');
						// let startTime = new Date(st[0],st[1]-1,st[2]).getTime();
						// console.log(et[2])
						// let endTime = new Date(et[0],et[1]-1,et[2]).getTime();
						// let currentTime = new Date(this.year, this.month, day).getTime();
						// console.log("s"+startTime);
						// console.log("e"+endTime);
						// console.log(currentTime);
						// if(currentTime > startTime && currentTime < endTime  ){
						// 	// this.flag = true
						// }

						
						let dayobject ={}
						dayobject.day = d
						d++
						row.push(dayobject)
						console.log(dayobject)
						// console.log(dayobject.day)
						
						if (dayobject.day > dayCount) {
							break
						}
					}
					rows.push(row)
				}

				return rows
			},
		},
	}
</script>

<style lang="scss">
@import "@/scss/mixins/mixins.scss";
.date-picker{
	width: 100%;
	.date-picker-header{
		text-align: center;
	}
	.date-picker-content{
		@include flex-center;
		th{
			width: 4rem
		}
		td{
			text-align: center;
			height: 2rem;
			background-color: gainsboro;
			border-radius: 5px;
		}
		.today{
			background-color: aquamarine
		}
		.pre{
			background-color:#fff
		}
		.selected{
			background-color: aquamarine
		}
	}
}


</style>