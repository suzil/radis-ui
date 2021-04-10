import { TextField, InputAdornment } from "@material-ui/core";
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CalcSpectrumFieldValues } from "../types";
interface PressureProps {
  register: UseFormRegister<CalcSpectrumFieldValues>;
  errors: FieldErrors<CalcSpectrumFieldValues>;
}

export const Pressure: React.FC<PressureProps> = ({ register, errors }) => {
  const { ref, ...rest } = register("pressure", {
    required: "This field is required",
    min: { value: 0, message: "The minimum pressure is 0 bar" },
    valueAsNumber: true,
  });
  return (
    <TextField
      fullWidth
      id="pressure-input"
      type="number"
      InputProps={{
        endAdornment: <InputAdornment position="end">bar</InputAdornment>,
      }}
      inputProps={{ step: "any" }}
      label="Pressure"
      error={errors.pressure != undefined}
      helperText={errors.pressure?.message}
      inputRef={ref}
      {...rest}
    />
  );
};
