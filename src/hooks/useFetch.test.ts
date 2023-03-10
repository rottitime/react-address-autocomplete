// import { mockMe, renderHookWithProviders } from '@/lib/test-utils'
// import { AuthUser } from '@/service/types'
import { waitFor, renderHook } from '@testing-library/react'
import useFetch from './useFetch'
import fetchMock from 'jest-fetch-mock'
import { MapData } from '../types'

const mockData: Partial<MapData>[] = [...Array(3).keys()].map((i) => ({
  display_name: `Random title ${i}`
}))

describe('Hook: useFetch', () => {
  afterEach(() => {
    fetchMock.resetMocks()
  })

  it('initialises', async () => {
    const { result } = renderHook(() => useFetch({}))
    expect(result.current.data).toHaveLength(0)
    expect(result.current.status).toEqual('idle')
    expect(fetchMock).not.toHaveBeenCalled()
  })

  describe('fetch', () => {
    it('initialises', async () => {
      const { result } = renderHook(() => useFetch({}))
      result.current.setAddress('Hyrule castle')
      expect(fetchMock).toHaveBeenCalledTimes(1)
    })
  })
})
