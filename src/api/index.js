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
export const logout = () => request({ url: 'user/passport/logout', method: 'GET' });
// 获取用户地址信息
export const getAddressInfo = () => request({ url: '/user/userAddress/auth/findUserAddressList', method: 'GET' });
// 获取订单商品清单
export const getOrderInfo = () => request({ url: '/order/auth/trade', method: 'GET' });
// 提交订单
export const submitOrder = (params, tradeNo) => request({ url: `order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'POST', data: params });
// 获取支付信息
export const getPayInfo = (orderId) => request({url: `/payment/weixin/createNative/${orderId}`, method:'GET'})
// 获取支付状态信息 
export const getPayStatus = (orderId) => request({url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'GET'});
// 获取我的订单列表 order/auth/{page}/{limit}
export const getMyOrders = (page, limit) => request({url: `/order/auth/${page}/${limit}`});

// mock request
export const getBannerList = () => mock_request.get('/banner');
export const getFloorList = () => mock_request.get('/floor');
