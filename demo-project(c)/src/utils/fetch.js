/**
 * @infor axios配置
 * @user CC
 * @date 2018-08-21 14:38:05
 */

import axios from 'axios'
import { getServerHost } from './common'

const C_service = axios.create({
	baseURL: getServerHost(),
	timeout: 15000
})

/**
 * 请求拦截器
 * @param  {Object} config 请求配置
 * @return {Promise}       返回处理后的Promise
 */
C_service.interceptors.request.use(config => {

	return config
}, error => {
	return Promise.reject(error)
})


/**
 * 响应拦截器
 * @param  {Object} response 响应对象
 * @return {Promise}         返回处理后的Promise
 */
C_service.interceptors.response.use(response => {

	return response
}, error => {
	return Promise.reject(error)
})

export default C_service
