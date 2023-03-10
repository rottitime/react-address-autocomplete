// import { mockMe, renderHookWithProviders } from '@/lib/test-utils'
// import { AuthUser } from '@/service/types'
import { act, renderHook, waitFor } from '@testing-library/react'
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

  it('initialises', () => {
    const { result } = renderHook(() => useFetch({}))
    expect(result.current.data).toHaveLength(0)
    expect(result.current.status).toEqual('idle')
    expect(fetchMock).not.toHaveBeenCalled()
  })

  describe('fetch', () => {
    it('calls api', async () => {
      fetchMock.mockResponse(JSON.stringify(mockData))
      const { result } = renderHook(() => useFetch({}))

      act(() => {
        result.current.setAddress('Hyrule castle')
      })

      await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))

      expect(fetchMock).toHaveBeenCalledWith(
        'https://nominatim.openstreetmap.org/search?q=Hyrule+castle&format=json&addressdetails=1&limit=10&countrycodes='
      )
    })
  })

  it('with countrycode', async () => {
    fetchMock.mockResponse(JSON.stringify(mockData))
    const { result } = renderHook(() => useFetch({ countrycodes: ['AD', 'AF'] }))

    act(() => {
      result.current.setAddress('Hyrule castle')
    })

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))

    expect(fetchMock).toHaveBeenCalledWith(
      'https://nominatim.openstreetmap.org/search?q=Hyrule+castle&format=json&addressdetails=1&limit=10&countrycodes=AD%2CAF'
    )
  })
})
