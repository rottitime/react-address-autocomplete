import { renderHook, waitFor } from '@testing-library/react'
import useDebounce from './useDebounce'

describe('useDebounce', () => {
  test('returns the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('hello', 500))
    expect(result.current).toEqual('hello')
  })

  test('returns the updated value after the delay', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }: { value: string; delay: number }) => useDebounce(value, delay),
      { initialProps: { value: 'hello', delay: 500 } }
    )

    rerender({ value: 'world', delay: 500 })
    expect(result.current).toEqual('hello')

    await waitFor(() => expect(result.current).toEqual('world'))
  })

  test('cancels the timeout when unmounted', () => {
    const { result, unmount } = renderHook(() => useDebounce('hello', 500))

    unmount()
    expect(result.current).toEqual('hello')
  })
})
