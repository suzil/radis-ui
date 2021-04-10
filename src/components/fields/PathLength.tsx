import { TextField, InputAdornment } from "@material-ui/core";
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CalcSpectrumFieldValues } from "../types";

interface PathLengthProps {
  register: UseFormRegister<CalcSpectrumFieldValues>;
  errors: FieldErrors<CalcSpectrumFieldValues>;
}

export const PathLength: React.FC<PathLengthProps> = ({ register, errors }) => {
  const { ref, ...rest } = register("path_length", {
    required: "This field is required",
    min: { value: 0, message: "The minimum path length is 0 cm" },
    valueAsNumber: true,
  });
  return (
    <TextField
      fullWidth
      id="path-length-input"
      type="number"
      InputProps={{
        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
      }}
      label="Path length"
      error={errors.path_length != undefined}
      helperText={errors.path_length?.message}
      inputRef={ref}
      {...rest}
    />
  );
};
