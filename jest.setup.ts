/* eslint-disable @typescript-eslint/no-var-requires */
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

// import { TextDecoder, TextEncoder } from 'util'
// global.TextEncoder = TextEncoder
// global.TextDecoder = TextDecoder
// global.ArrayBuffer = ArrayBuffer
// global.Uint8Array = Uint8Array

require('jest-fetch-mock').enableMocks()
