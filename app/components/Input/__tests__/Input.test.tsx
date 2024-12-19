import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import type { HelperDetailsProps } from '../'
import { HelperLevel, Input } from '../'

describe('Input component', () => {
  const defaultProps = {
    name: 'test-input',
    type: 'text',
  }

  it('renders the input element with the correct attributes', () => {
    render(<Input {...defaultProps} />)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('id', `${defaultProps.name}-input`)
    expect(inputElement).toHaveAttribute('type', defaultProps.type)
    expect(inputElement).toHaveAttribute('placeholder', ' ')
  })

  it('renders the label when labelText is provided', () => {
    render(<Input {...defaultProps} labelText="Test Label" />)

    const labelElement = screen.getByText('Test Label')
    expect(labelElement).toBeInTheDocument()
    expect(labelElement).toHaveAttribute('for', `${defaultProps.name}-input`)
  })

  it('does not render the label when labelText is not provided', () => {
    render(<Input {...defaultProps} />)

    const labelElement = screen.queryByText('Test Label')
    expect(labelElement).not.toBeInTheDocument()
  })

  it('renders helper text when provided on helperDetails', () => {
    const helperDetails: HelperDetailsProps = {
      text: 'This is helper text',
      level: HelperLevel.Information,
    }

    render(<Input {...defaultProps} helperDetails={helperDetails} />)

    const helperTextElement = screen.getByText(helperDetails.text!)
    expect(helperTextElement).toBeInTheDocument()
    expect(helperTextElement).toHaveAttribute(
      'id',
      `${defaultProps.name}-input-helper`
    )
    expect(helperTextElement).toHaveAttribute('role', 'alert')
  })

  it('does not render helper text when not provided on helperDetails', () => {
    render(<Input {...defaultProps} />)

    const helperTextElement = screen.queryByRole('alert')
    expect(helperTextElement).not.toBeInTheDocument()
  })

  it('applies a thick red border when the helper details level is set to Error', () => {
    const helperDetails: HelperDetailsProps = {
      text: 'Error text',
      level: HelperLevel.Error,
    }

    render(<Input {...defaultProps} helperDetails={helperDetails} />)

    const inputWrapper = screen.getByRole('textbox').closest('div')
    expect(inputWrapper).toHaveClass('focus-within:shadow-red-700')
  })

  it('sets aria-describedby when helper text is provided', () => {
    const helperDetails: HelperDetailsProps = {
      text: 'Descriptive text',
      level: HelperLevel.Information,
    }

    render(<Input {...defaultProps} helperDetails={helperDetails} />)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveAttribute(
      'aria-describedby',
      `${defaultProps.name}-input-helper`
    )
  })

  it('does not set aria-describedby when helper text is not provided', () => {
    render(<Input {...defaultProps} />)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).not.toHaveAttribute('aria-describedby')
  })
})
