const plugin = require('tailwindcss/plugin')

let columnCount = {}
let columnGap = {}

for (let i = 1; i <= 12; i++) {
  columnCount[`.column-count-${i}`] = { columnCount: i }
  columnGap[`.column-gap-${i}`] = { columnGap: i+'px' }
}

module.exports = plugin(function({ addUtilities }) {
  addUtilities({
    ...columnCount,
    ...columnGap
  })
})