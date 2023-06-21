import clsx from 'clsx'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  id: string
  type?: string
  label: string
  autoComplete?: string
  pattern?: RegExp
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  disabled?: boolean
}

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  label,
  autoComplete,
  pattern,
  required,
  register,
  errors,
  disabled,
}) => {
  console.log('errors[id]', errors[id])

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        disabled={disabled}
        {...register(id, { required, pattern })}
        className={clsx(
          `peer block w-full appearance-none rounded-md bg-neutral-700 px-6 pt-6 pb-1 text-base text-white focus:outline-none focus:ring-0`,
          errors[id] && 'focus:ring-rose-500',
          disabled && 'cursor-default opacity-50'
        )}
      />
      <label
        htmlFor={id}
        className="absolute top-4 left-6 z-10 origin-[0] -translate-y-3 scale-75 text-base text-zinc-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  )
}

export default Input
