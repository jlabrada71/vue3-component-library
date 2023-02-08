import { openBlock, createElementBlock } from 'vue';

var script$1 = {
  name: 'InputText'
};

const _hoisted_1 = { type: "text" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1))
}

script$1.render = render$1;
script$1.__file = "src/InputText.vue";

var script = {
  name: 'InputTextarea'
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("textarea"))
}

script.render = render;
script.__file = "src/InputTextarea.vue";

/*
Next, we’re going to create a file that registers all the components we wish
to share in our library. We’ll call this components.js and, in it, 
we simply import the components and then export them in a single object.

*/

var components = { InputTextarea: script, InputText: script$1 };

/* 
We’re now going to create a Vue 3 plugin that will globally register the components
from your library in a consuming project.

At the top of the file, we will import the registered components.
Then, in the plugin install method, we’ll iterate the components object and
globally register each component on the Vue instance.
*/

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

export { plugin as default };
