import { objVerify, capitalizeFirstLetter } from '../utils';

export default {
  methods: {
    mergeProps(options) {
      const propsOptions = this.options;
      const validPropsOptions = propsOptions ? objVerify(propsOptions) : {};
      const validOptions = objVerify(options);
      return {...validPropsOptions, ...validOptions};
    },
    bindPropsWatch() {
      const vueInstance = this;
      const layerInstance = this.layer;
      const propsData = vueInstance.$options.propsData;

      for (const propName in propsData) {
        const methodName = 'set' + capitalizeFirstLetter(propName);
        const isObj = (propsData[propName] instanceof Object) || (propsData[propName] instanceof Array);
        if (!!vueInstance[methodName]) {
          vueInstance.$watch(propName, (newVal, oldVal) => {
            vueInstance[methodName](newVal, oldVal);
          }, {deep: isObj});
        } else if (layerInstance && !!layerInstance[methodName]) {
          vueInstance.$watch(propName, (newVal, oldVal) => {
            layerInstance[methodName](newVal);
          }, {deep: isObj});
        }
      }
    }
  }
};
