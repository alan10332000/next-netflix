interface InputProps {
  id: string
  type?: string
  value: string
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ id, type, value, label, onChange }) => {
  return (
    <div className="relative">
      <input
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="invalid:border-b-1 peer block w-full appearance-none rounded-md bg-neutral-700 px-6 pt-6 pb-1 text-base text-white focus:outline-none focus:ring-0"
        id={id}
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
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
