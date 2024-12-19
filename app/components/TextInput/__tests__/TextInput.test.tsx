import { fireEvent, render, screen } from '@testing-library/react'
import type { HelperDetailsProps } from '~/components/Input'
import { HelperLevel } from '~/components/Input'

import { TextInput } from '../'

vi.mock('~/components/Input', async (importOriginal) => {
  const actual: object = await importOriginal()
  return {
    ...actual,
    Input: vi.fn(
      ({ helperDetails, ...props }: { helperDetails: HelperDetailsProps }) => (
        <div data-testid="input">
          <input {...props} />
          <span data-testid="helper-text">{helperDetails.text}</span>
          <span data-testid="helper-level">{helperDetails.level}</span>
        </div>
      )
    ),
  }
})

describe('TextInput Component', () => {
  const defaultProps = {
    name: 'test-input',
    labelText: 'Test Input',
  }

  it('renders correctly', () => {
    render(<TextInput {...defaultProps} />)
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  it('displays the correct helper text when `alwaysShow` is true', () => {
    const helper = {
      alwaysShow: true,
      informationText: 'Always show this text',
      validationText: 'Error text',
    }

    render(<TextInput {...defaultProps} helper={helper} />)

    expect(screen.getByTestId('helper-text')).toHaveTextContent(
      'Always show this text'
    )
    expect(screen.getByTestId('helper-level')).toHaveTextContent(
      HelperLevel.Information
    )
  })

  it('displays validation text when `alwaysShow` is true and input is invalid', () => {
    const helper = {
      alwaysShow: true,
      informationText: 'Always show this text',
      validationText: 'Error text',
    }

    const validationFunction = vi.fn().mockReturnValue(false)

    render(
      <TextInput
        {...defaultProps}
        helper={helper}
        validationFunction={validationFunction}
      />
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'invalid' },
    })

    expect(validationFunction).toHaveBeenCalledWith('invalid')
    expect(screen.getByTestId('helper-text')).toHaveTextContent(
      helper.validationText
    )
    expect(screen.getByTestId('helper-level')).toHaveTextContent(
      HelperLevel.Error
    )
  })

  it('displays information text when input is valid and `alwaysShow` is false', () => {
    const helper = {
      informationText: 'This is informational',
      validationText: 'This is an error',
    }

    const validationFunction = vi.fn().mockReturnValue(true)

    render(
      <TextInput
        {...defaultProps}
        helper={helper}
        validationFunction={validationFunction}
      />
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'valid' },
    })

    expect(validationFunction).toHaveBeenCalledWith('valid')
    expect(screen.getByTestId('helper-text')).toHaveTextContent(
      helper.informationText
    )
    expect(screen.getByTestId('helper-level')).toHaveTextContent(
      HelperLevel.Information
    )
  })

  it('does not display helper text if no helper is provided', () => {
    render(<TextInput {...defaultProps} />)

    expect(screen.getByTestId('helper-text')).toBeEmptyDOMElement()
  })

  it('calls the validation function on input change', () => {
    const validationFunction = vi.fn().mockReturnValue(true)

    render(
      <TextInput {...defaultProps} validationFunction={validationFunction} />
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test value' },
    })

    expect(validationFunction).toHaveBeenCalledWith('test value')
  })

  it('calls the validation function and sets error text on validation failure', () => {
    const validationFunction = vi.fn().mockReturnValue(false)
    const helper = {
      validationText: 'Error text',
    }

    render(
      <TextInput
        {...defaultProps}
        helper={helper}
        validationFunction={validationFunction}
      />
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test value' },
    })

    expect(validationFunction).toHaveBeenCalledWith('test value')
    expect(screen.getByTestId('helper-text')).toHaveTextContent('Error text')
  })
})
