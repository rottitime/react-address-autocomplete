import { act, renderHook, waitFor } from '../utils/test-utils'
import useFetch from './useFetch'
import { MapData } from '../types'

const apiPrefix = 'https://nominatim.openstreetmap.org/search?'
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
        `${apiPrefix}q=Hyrule+castle&format=json&addressdetails=1&limit=10&countrycodes=`
      )
    })
  })

  it('after two characters', async () => {
    fetchMock.mockResponse(JSON.stringify(mockData))
    const { result } = renderHook(() => useFetch({}))
    act(() => {
      result.current.setAddress('H')
    })

    await waitFor(() => expect(fetchMock).not.toHaveBeenCalled())

    act(() => {
      result.current.setAddress('Hy')
    })

    await waitFor(() => expect(fetchMock).not.toHaveBeenCalled())

    act(() => {
      result.current.setAddress('Hyr')
    })

    await waitFor(() => expect(fetchMock).toHaveBeenCalled())
  })

  it('with countrycode', async () => {
    fetchMock.mockResponse(JSON.stringify(mockData))
    const { result } = renderHook(() => useFetch({ countrycodes: ['AD', 'AF'] }))

    act(() => {
      result.current.setAddress('Hyrule castle')
    })

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))

    expect(fetchMock).toHaveBeenCalledWith(
      `${apiPrefix}q=Hyrule+castle&format=json&addressdetails=1&limit=10&countrycodes=AD%2CAF`
    )
  })
})
