import axios from '@/assets/js/axiosConfig';
import baseURL from '@/assets/js/config';

/** detail 路由 */
// 获取 search 数据
export const getDetail = () => {
    return axios.get(`${baseURL}/search`)
}
/** detail 路由 */