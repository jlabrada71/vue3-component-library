/*
Next, we’re going to create a file that registers all the components we wish
to share in our library. We’ll call this components.js and, in it, 
we simply import the components and then export them in a single object.

*/
import InputText from './InputText.vue'
import InputTextarea from './InputTextarea.vue'

export default { InputTextarea, InputText }