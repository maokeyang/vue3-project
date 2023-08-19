
import { get, post } from '@/utils/request'


export const getOrderList = (data: any) => get(`/order/list`, data)