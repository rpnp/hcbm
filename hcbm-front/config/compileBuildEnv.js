/**
 * 打包编译时的环境变量配置
 * compileBuildEnv
 * @author WY <yang.wang06@hand-china.com>
 * @date 2019-06-17
 * @copyright 2019-06-17 © HAND
 */

module.exports = {
  BASE_PATH: '/',
  PLATFORM_VERSION: 'BUILD_PLATFORM_VERSION',
  WEBSOCKET_HOST: 'BUILD_WEBSOCKET_HOST',
  CLIENT_ID: 'BUILD_CLIENT_ID',
  API_HOST: 'BUILD_API_HOST',
  GENERATE_SOURCEMAP: false,
  IM_ENABLE: 'BUILD_IM_ENABLE', // im是否启用，true/false
  IM_WEBSOCKET_HOST: 'BUILD_IM_WEBSOCKET_HOST', // im websocket 地址
  CUSTOMIZE_ICON_NAME: 'BUILD_CUSTOMIZE_ICON_NAME', // // 客制化的iconfont font family 名称
};
