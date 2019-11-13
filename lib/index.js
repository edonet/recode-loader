/**
 *****************************************
 * Created by edonet@163.com
 * Created on 2019-11-02 11:00:53
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
const { Script } = require('@ainc/script');


/**
 *****************************************
 * 定义加载器
 *****************************************
 */
async function loader(source) {
    let script = new Script(),
        result = script.run(source, this.resource);

    // 添加依赖
    script.files.forEach(file => this.addDependency(file));

    // 执行自定义函数
    if (typeof result.default === 'function') {
        result = await result.default.call(this, this);
    } else if (typeof result === 'function') {
        result = await result.call(this, this);
    }

    // 返回代码
    if (typeof result === 'string') {
        return result;
    }

    // 返回结果
    return `module.exports = ${ JSON.stringify(result) }`;
}


/**
 *****************************************
 * 抛出接口
 *****************************************
 */
module.exports = loader;
