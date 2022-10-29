import { beforeEach, describe, expect, test } from 'vitest'
import { XoxButton } from '../src/xox-button'

describe('xox-datepicker defaults', async () => {
  const defString: string = 'hello'

  function getDatepicker(): XoxButton | null | undefined {
    return document.body.querySelector('xox-button')
  }

  // ?.shadowRoot?.querySelector("button");

  beforeEach(async () => {
    document.body.innerHTML = `<xox-button name=${defString}>${defString}</xox-button>`
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (getDatepicker()) {
          clearInterval(interval)
          resolve()
        }
      })
    })
  })

  test('datepicker attributes', () => {
    expect(getDatepicker()?.innerHTML).toBe(defString)
    expect(getDatepicker()?.getAttribute('name')).toBe(defString)
  })
})
