import { render, screen } from '@testing-library/react'
import App from './App'

test('hello world', () => {
  render(<App />)
  const greeting = screen.getByText(/hello world/i)
  expect(greeting).toBeInTheDocument()
})
