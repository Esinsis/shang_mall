import request from './request'
import mock_request from "@/api/mock_request";

export const getCategories = () => request({url: '/product/getBaseCategoryList', method: 'GET'})
export const getSearchList = (params) => request({url: '/list', method: 'POST', data: params})

// 获取产品详情
export const getGoodInfo = (skuid) => request({url: `/item/${skuid}`, method: 'GET'})



// mock request
export const getBannerList = () => mock_request.get('/banner')
export const getFloorList = () => mock_request.get('/floor')
