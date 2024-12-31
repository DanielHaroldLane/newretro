import type { ChangeEvent, PropsWithChildren } from 'react'
import { useState } from 'react'
import { DropdownIcon } from '~/icons'
import { wrapped } from '~/utils'

import { labelVariants } from './variants'

const Wrapper = wrapped('div')
const SelectWrapper = wrapped('div')

type Option = {
  value: string
  text: string
}

interface SelectInputProps {
  name: string
  labelText: string
  options: Array<Option>
  onChange?: React.EventHandler<ChangeEvent<HTMLSelectElement>>
}

type LabelVariant = 'default' | 'optionSelected'

export const SelectInput = ({
  name,
  labelText,
  options,
  onChange,
}: PropsWithChildren<SelectInputProps>) => {
  const [labelVariant, setLabelVariant] = useState<LabelVariant>('default')

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (labelVariant === 'default') setLabelVariant('optionSelected')
    if (onChange) onChange(event)
  }

  return (
    <Wrapper className="w-full">
      <SelectWrapper className="group relative h-[3.25rem] w-full rounded-lg border-2 border-gray-300 focus-within:border-black">
        <select
          className="peer absolute left-0 right-0 top-0 ml-2 mr-2 mt-5 cursor-pointer appearance-none bg-white outline-none"
          id={`${name}-select`}
          name={name}
          aria-label={labelText}
          defaultValue=""
          onChange={handleOnChange}
        >
          <option value="" disabled hidden selected></option>
          {options.map(({ value, text }: Option) => {
            return (
              <option key={value} value={value}>
                {text}
              </option>
            )
          })}
        </select>
        {labelText && (
          <label
            className={labelVariants({ text: labelVariant })}
            htmlFor={`${name}-select`}
          >
            {labelText}
          </label>
        )}
        <DropdownIcon className="pointer-events-none absolute right-3 top-3" />
      </SelectWrapper>
    </Wrapper>
  )
}
