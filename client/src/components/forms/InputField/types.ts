export type InputFieldProps = {
  fieldName: string;
  label: string;
  isRequired: boolean;
  type: string;
  value: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
};
