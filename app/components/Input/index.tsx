import type {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
} from 'react'
import { wrapped } from '~/utils'

import {
  helperTextVariants,
  inputWrapperVariants,
  labelVariants,
} from './variants'

const Wrapper = wrapped('div')
const InputWrapper = wrapped('div')
const HelperText = wrapped('p')

export enum HelperLevel {
  Information = 'information',
  Error = 'error',
}

export interface HelperDetailsProps {
  text: string
  level: HelperLevel
}

interface InputProps {
  name: string
  type: HTMLInputTypeAttribute
  labelText?: string
  autoComplete?: HTMLInputAutoCompleteAttribute
  helperDetails?: HelperDetailsProps
}

export const Input = ({
  autoComplete,
  type,
  name,
  helperDetails,
  labelText,
}: InputProps) => {
  const { level, text } = helperDetails ?? {}
  const variant = level ?? 'information'

  return (
    <Wrapper className="w-full">
      <InputWrapper className={inputWrapperVariants({ border: variant })}>
        <input
          className="peer absolute left-0 right-0 top-0 ml-2 mr-2 pt-5 outline-none"
          id={`${name}-input`}
          type={type}
          autoComplete={autoComplete}
          placeholder=" "
          aria-describedby={
            helperDetails?.text ? `${name}-input-helper` : undefined
          }
          aria-label={labelText}
        ></input>
        {labelText && (
          <label
            className={labelVariants({ text: variant })}
            htmlFor={`${name}-input`}
          >
            {labelText}
          </label>
        )}
      </InputWrapper>
      {text && (
        <HelperText
          className={helperTextVariants({
            text: variant,
          })}
          id={`${name}-input-helper`}
          role="alert"
        >
          {text}
        </HelperText>
      )}
    </Wrapper>
  )
}
