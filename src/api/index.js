import request from './request';
import mock_request from "@/api/mock_request";

// 获取商品分类信息
export const getCategories = () => request({ url: '/product/getBaseCategoryList', method: 'GET' });
// 过去查询结果列表
export const getSearchList = (params) => request({ url: '/list', method: 'POST', data: params });
// 获取产品详情
export const getGoodInfo = (skuid) => request({ url: `/item/${skuid}`, method: 'GET' });
// 添加商品到购物车 || 更新购物车商品数量
export const saveToCart = (skuId, skuNum) => request({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'POST' });
// 获取购物车商品列表
export const cartList = () => request({ url: '/cart/cartList', method: 'GET' });
// 切换购物车中商品的选中状态
export const checkCart = (skuId, isChecked) => request({ url: `/cart/checkCart/${skuId}/${isChecked}` });
// 删除购物城选中商品
export const deleteCartById = (skuId) => request({ url: `/cart/deleteCart/${skuId}`, method: 'DELETE' });
// 获取短信验证码
export const getVerificationCode = (phone) => request({ url: `/user/passport/sendCode/${phone}`, method: 'GET' });
// 注册用户
export const registerUser = (params) => request({ url: '/user/passport/register', method: 'POST', data: params });
// 用户登录
export const login = (params) => request({ url: '/user/passport/login', method: 'POST', data: params });
// 获取用户信息
export const getUserInfo = () => request({ url: '/user/passport/auth/getUserInfo', method: 'GET' });
// 退出登录
export const logout = () => request({url:'user/passport/logout', method: 'GET'});


// mock request
export const getBannerList = () => mock_request.get('/banner')
export const getFloorList = () => mock_request.get('/floor')
