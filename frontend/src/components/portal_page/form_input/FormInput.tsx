import "./FormInput.scss";
type FormInputProps = {
  type: any;
  value: any;
  setValue: (value: string) => void;
  logo: string;
  placeHolder: string;
};

export default function FormInput({ type, value, setValue, logo, placeHolder }: FormInputProps) {
  return (
    <div className="input_container">
      <img src={logo} />
      <input
        className="login_input"
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
