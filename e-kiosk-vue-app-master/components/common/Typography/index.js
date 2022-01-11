export default {
  props: {
    tag: {
        type: String,
        default: 'span'
    },
    customStyle:{
        type: Object,
        default: null
    },
    weight: {
        type: [String, Number],
    },
    className: {
        type: [String, Number],
    },
    size: {
        type: [String, Number],
        default: "1em"
    },
    lineHeight: {
        type: [String, Number]
    }
  },
  render (createElement){
    return createElement(this.tag.trim(),{
        style: {lineHeight: this.lineHeight, fontWeight: this.weight, fontSize: this.size, ...this.customStyle},
        class: this.className,
        on: {
            click: () => {
                this.$emit('click')
            }
        }
    }, this.$slots.default)}
}