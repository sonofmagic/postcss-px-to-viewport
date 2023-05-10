import type { Options } from './type'

export const ignoreNextComment = 'px-to-viewport-ignore-next'
export const ignorePrevComment = 'px-to-viewport-ignore'

export const defaults: Required<Omit<Options, 'exclude' | 'include' | 'rules'>> = {
  unitToConvert: 'px',
  viewportWidth: 320,
  // viewportHeight: 568, // not now used; TODO: need for different units and math for different properties
  unitPrecision: 5,
  viewportUnit: 'vw',
  fontViewportUnit: 'vw', // vmin is more suitable.
  selectorBlackList: [],
  propList: ['*'],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  landscape: false,
  landscapeUnit: 'vw',
  landscapeWidth: 568
}
