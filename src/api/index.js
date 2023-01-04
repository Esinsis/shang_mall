import request from './request'

export const getCategories = () => {
    return request({url: '/product/getBaseCategoryList', method: 'GET'})
}