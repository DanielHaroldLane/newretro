import type { ChangeEvent, HTMLInputAutoCompleteAttribute } from 'react'
import { useState } from 'react'
import { HelperLevel, Input } from '~/components/Input'

interface Helper {
  alwaysShow?: boolean
  validationText?: string
  informationText?: string
}

interface TextInputProps {
  name: string
  labelText: string
  helper?: Helper
  autoComplete?: HTMLInputAutoCompleteAttribute
  validationFunction?: (value: string) => boolean
}

export const TextInput = ({
  name,
  labelText,
  helper,
  autoComplete,
  validationFunction,
}: TextInputProps) => {
  const [isInputValid, setIsInputValid] = useState(true)
  const level = isInputValid ? HelperLevel.Information : HelperLevel.Error

  const handleOnChange = validationFunction
    ? (e: ChangeEvent<HTMLInputElement>) => {
        const validationResult = validationFunction(e.target.value)

        if (validationResult !== isInputValid) {
          setIsInputValid(validationResult)
        }
      }
    : undefined

  let text: string | undefined
  if (helper?.alwaysShow) {
    text = isInputValid ? helper.informationText : helper.validationText
  } else if (validationFunction && helper) {
    text = isInputValid ? helper.informationText : helper.validationText
  }

  const helperDetails = {
    text,
    level,
  }

  return (
    <Input
      name={name}
      labelText={labelText}
      autoComplete={autoComplete}
      type="text"
      onChange={handleOnChange}
      helperDetails={helperDetails}
    />
  )
}
