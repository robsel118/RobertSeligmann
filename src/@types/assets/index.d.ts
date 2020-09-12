declare module '\*.svg' {
  import React = require('react')
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
declare module '\*.jpg' {
  const content: string
  export default content
}

declare module '\*.png' {
  const content: string
  export default content
}

declare module '\*.json' {
  const content: string
  export default content
}
declare module '\*.pdf' {
  const content: string
  export default content
}
declare module '\*.woff' {
  const content: string
  export default content
}
declare module '\*.woff2' {
  const content: string
  export default content
}
