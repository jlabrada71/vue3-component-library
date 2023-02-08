/* 
We’re now going to create a Vue 3 plugin that will globally register the components
from your library in a consuming project.

At the top of the file, we will import the registered components.
Then, in the plugin install method, we’ll iterate the components object and
globally register each component on the Vue instance.
*/

import components from'./components'

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin