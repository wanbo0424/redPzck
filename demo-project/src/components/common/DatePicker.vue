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
					<tr v-for="(row, index) in rows">
						<td v-for="(day, key) in row">{{day}}</td>
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
		},
		data() {
			return {
				// 日期常量
				C_week: ['日', '一', '二', '三', '四', '五', '六'],
				nowDate: this.date
			}
		},
		methods: {
			nextMonth() {
				this.nowDate = nextMonth(this.nowDate)
			}
		},
		mounted() {

		},
		computed: {
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
				let day = 1
				while (day <= dayCount) {
					let row = new Array()
					while (row.length < 7) {
						if (day === 1) {
							for (let i = 0; i < dayOfWeek; i++) {
								row.push('')
							}
						}
						row.push(day++)
						if (day > dayCount) {
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

<style lang="less">
	

</style>