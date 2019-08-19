import axios from '@/assets/js/axiosConfig';
import baseURL from '@/assets/js/config';
// 获取首页数据
export const getIndex = () => {
    return axios.get(`${baseURL}/index`)
}