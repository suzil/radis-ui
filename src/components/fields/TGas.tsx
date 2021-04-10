import { InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CalcSpectrumFieldValues } from "../types";

interface TGasProps {
  register: UseFormRegister<CalcSpectrumFieldValues>;
  errors: FieldErrors<CalcSpectrumFieldValues>;
}

export const TGas: React.FC<TGasProps> = ({ register, errors }) => {
  const { ref, ...rest } = register("tgas", {
    required: "This field is required",
    min: { value: 1, message: "The minimum temperature is 1 K" },
    max: { value: 9000, message: "The minimum temperature is 9000 K" },
    valueAsNumber: true,
  });
  return (
    <>
      <TextField
        fullWidth
        id="tgas-input"
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">K</InputAdornment>,
        }}
        inputProps={{ step: "any" }}
        label="Tgas"
        error={errors.tgas != undefined}
        helperText={errors.tgas?.message}
        inputRef={ref}
        {...rest}
      />
    </>
  );
};
