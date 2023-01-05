import request from './request'
import mock_request from "@/api/mock_request";

export const getCategories = () => request({url: '/product/getBaseCategoryList', method: 'GET'})

export const getBannerList = () => mock_request.get('/banner')
export const getFloorList = () => mock_request.get('/floor')