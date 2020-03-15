/**
 * 配置 utils/config 下的常量
 */

/**
 * deps 和 get 必须同时出现
 * get 和 init 是互斥的
 * 如果有 route, 那么必须有init
 *
 * @typedef {Object|string} CONFIG
 * @property {?Function} init - 返回返回字符串包裹的字符串模板; 参照 CLIENT_ID
 * @property {?boolean} noChange - 是否能改变 false/undefined => 能改变, true => 不能改变; 参照 CLIENT_ID
 * // * @property {?boolean} route - 是否能被环境变量routeMap改变 false/undefined => 可以改变, true => 不能改变; 参照 HZERO_PLATFORM
 * @property {?string[]} deps - 依赖的CONFIG, 当 依赖的CONFIG 改变时 会同时改变; 参照 AUTH_SELF_URL 的配置
 * @property {?Function} get - 依赖改变生成自己的方法; (...deps: string[]) => string; 参照 AUTH_SELF_URL 的配置
 */

/**
 * @type {Map<string, Config>}
 */
const config = {
  // TODO: 以 项目_模块 命名, 参考 平台的 HZERO_PLATFORM 模块命名
  // // hpfm 模块
  //      HZERO_PLATFORM: {
  //        init: () => {
  //          return "'/hpfm'";
  //        },
  //        route: true,
  //      },

  // 文件存储 桶名(文件服务), 遵循对应后端给的桶名(基本上是服务名)
  // TODO: 以 BKT_XXX 命名, 参考 平台的 BKT_PUBLIC 配置
  // BKT_PUBLIC: {
  //   init: () => '`${process.env.BKT_PUBLIC || \'public\'}`',
  // },
};

const prefix = `/**
 * 不要直接修改这个文件, 请修改 config/apiConfig 文件
 * Config - 全局统一配置
 * @date: 2018-6-20
 * @author: niujiaqing <njq.niu@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2018, Hand
 */
`;

const suffix = '';

module.exports = {
  config,
  prefix,
  suffix,
};
