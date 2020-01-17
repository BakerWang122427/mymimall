/**
 * 封装storage  主要用于封装处理sessionStorage;一般封装为一个json就可以了 ；
 * 如果项目比较大的涉及在session中数据比较多可以封装为多个对应的模块json对象；
 * 该项目为一个小的学习项目 所以统一封装为一个 MiMall json对象就OK
 */

const STORAGE_KEY = "MiMall";
export default {
  // 存储值
  getStorage() {
    // 获得整个session数据 转为JSON对象
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
  },
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    } else {
      let val = this.getStorage(); //首先获得整个sessionStorage
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val)); //将修改后的json转为字符串重新赋值给sessionStorage
    }
  },
  //获取某一个模块下面的属性值 例如：user下面的userName
  getItem(key, module_name) {
    // 带模块的情况 即：一个复杂一点的json对象
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val[key];
    }
    return this.getStorage()[key]; //不带模块情况即 就是存储的key:value
  },
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {
      delete val[module_name][key];
    } else {
      delete val[key];
    }
    this.setItem(val);
  }
};
