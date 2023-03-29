import '@testing-library/jest-dom'

// import createFetchMock from 'vitest-fetch-mock'
// import { vi } from 'vitest'
// const fetchMock = createFetchMock(vi)

// fetchMock.enableMocks()

import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'
const fetchMocker = createFetchMock(vi)

// adds the 'fetchMock' global variable and rewires 'fetch' global to call 'fetchMock' instead of the real implementation
fetchMocker.enableMocks()
