import type {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
} from 'react'
import { wrapped } from '~/utils'

const Wrapper = wrapped('div')
const InputWrapper = wrapped('div')
const HelperText = wrapped('p')

interface InputProps {
  name: string
  type: HTMLInputTypeAttribute
  labelText?: string
  autoComplete?: HTMLInputAutoCompleteAttribute
  helpText?: string
}

const styles = {
  inputWrapper: {
    normal:
      'group relative h-[3.25rem] w-full rounded-lg border-2 border-gray-300 focus-within:border-black',
    helper:
      'group relative h-[3.25rem] w-full rounded-lg border-2 border-red-700 focus-within:shadow-red-700 focus-within:shadow-[0_0_0_0.0625rem]',
  },
  label: {
    normal:
      'absolute left-2 right-2 top-3 text-gray-500 transition-all ease-in-out group-focus-within:top-0 group-focus-within:text-sm peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm',
    helper:
      'absolute left-2 right-2 top-3 text-red-700 transition-all ease-in-out group-focus-within:top-0 group-focus-within:text-current group-focus-within:text-sm peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-current',
  },
}

export const Input = ({
  autoComplete,
  type,
  name,
  helpText,
  labelText,
}: InputProps) => (
  <Wrapper className="w-full">
    <InputWrapper
      className={
        !helpText ? styles.inputWrapper.normal : styles.inputWrapper.helper
      }
    >
      <input
        className="peer absolute left-0 right-0 top-0 ml-2 mr-2 pt-5 outline-none"
        id={`${name}-input`}
        type={type}
        autoComplete={autoComplete}
        placeholder=" "
        aria-describedby={helpText ? `${name}-input-helper` : undefined}
        aria-label={labelText}
      ></input>
      {labelText && (
        <label
          className={!helpText ? styles.label.normal : styles.label.helper}
          htmlFor={`${name}-input`}
        >
          {labelText}
        </label>
      )}
    </InputWrapper>
    {helpText && (
      <HelperText
        className="flex-row pl-2 pr-2 pt-1 text-sm text-red-700"
        id={`${name}-input-helper`}
        role="alert"
      >
        {helpText}
      </HelperText>
    )}
  </Wrapper>
)
