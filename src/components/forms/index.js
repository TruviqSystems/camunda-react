// https://github.com/tc39/proposal-export-ns-from#proposed-addition
// this can maybe be fixed in the future
import * as invoice from './invoice'
import * as myprocess from './myprocess'

import * as LandAllotmentID from './LandAllotmentID'
export {invoice}
export {myprocess}

export {LandAllotmentID}