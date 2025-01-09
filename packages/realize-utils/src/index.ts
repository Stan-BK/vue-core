/* eslint-disable no-restricted-globals */
export const parse2Json = (data: any): void => {
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.download = 'data.json'
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(data, null, 2)], { type: 'text/plain' }),
  )
  a.click()
  document.body.removeChild(a)
}
