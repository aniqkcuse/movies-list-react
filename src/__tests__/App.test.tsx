import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from "../App.tsx"

test('Render the main pages', () => {
  render(<App />)
  expect(true).toBeTruthy()
})
