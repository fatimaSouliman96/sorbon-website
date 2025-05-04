import { ChangeEvent } from "react";

const InputField = ({
    name,
    value,
    onChange,
    placeholder,
    error,
    type
}: {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    error?: string;
    type?: string
}) => (
    <div>
        <input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="placeholder:text-secondary placeholder:text-sm placeholder:font-semibold text-sm mt-2 w-full font-semibold text-secondary p-1 bg-transparent border-b-secondary border-b outline-none"
            type={type ? type : "text"}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
);

export default InputField;