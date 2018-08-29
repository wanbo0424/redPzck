/**
 * @infor 日期工具
 * @user CC
 * @date 2018-08-28 10:11:28
 */

/**
 * 获取当前日期月份第一天是周几
 * @param  {Date}  date 传入日期对象
 * @return {Number}     周几
 */
export const getFirstDayOfWeekByDayOfMonth = (date) => {
	const temp = new Date(date.getTime())
	temp.setDate(1)
	return temp.getDay()
}

/**
 * 获取当前月份总天数
 * @param  {Number} year  年份
 * @param  {Number} month 月份
 * @return {Number}       天数
 */
export const getDayCountOfMonth = (year, month) => {
	if (month === 3 || month === 5 || month === 8 || month === 10) {
		return 30
	}

	if (month === 1) {
		if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
			return 29
		} else {
			return 28
		}
	}

	return 31
}

/**
 * 获取下一个月份的日期
 * @param  {Date} date 传入日期对象
 * @return {Date}      返回下一个月日期对象
 */
export const nextMonth = (date) => {
	const year = date.getFullYear()
	const month = date.getMonth()
	return month === 11
		? changeYearMonthAndClampDate(date, year + 1, 0)
		: changeYearMonthAndClampDate(date, year, month + 1)
}

/**
 * 转化为日期对象，判断当前日是否超出当前月总天数，超出则设置为最后一天
 * @param  {Date}   date  传入日期对象
 * @param  {Number} year  年份
 * @param  {Number} month 月份
 * @return {Date}        转换后的日期对象
 */
const changeYearMonthAndClampDate = function(date, year, month) {
	// clamp date to the number of days in `year`, `month`
	// eg: (2010-1-31, 2010, 2) => 2010-2-28
	const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month))
	return modifyDate(date, year, month, monthDate)
}

const modifyDate = function(date, y, m, d) {
	return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
}

export default {
	
}