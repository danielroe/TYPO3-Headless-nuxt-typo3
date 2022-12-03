import { h } from 'vue'

export default {
  inheritAttrs: false,

  setup (props, { attrs }) {
    return () =>
      h(
        'pre',
        {
          style: {
            overflowX: 'scroll'
          }
        },
        [
          h(
            'code',
            {
              style: {
                fontSize: '12px',
                fontFamily:
                  'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace'
              }
            },
            JSON.stringify(attrs, null, 2)
          )
        ]
      )
  }
}
