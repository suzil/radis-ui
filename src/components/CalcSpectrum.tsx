import React, { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { Pressure } from "./fields/Pressure";
import { TGas } from "./fields/TGas";
import { PathLength } from "./fields/PathLength";
import { CalcSpectrumFieldValues } from "./types";

// interface Response<T> {
//   data?: T;
//   error?: string;
// }

// const DEFAULT_MIN_WAVENUMBER_RANGE = 1900;
// const DEFAULT_MAX_WAVENUMBER_RANGE = 2300;
const DEFAULT_TEMPERATURE = 700; // K

export const CalcSpectrum: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const defaultValues = {
    tgas: DEFAULT_TEMPERATURE,
    pressure: 1.01325,
    path_length: 1,
  };
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<CalcSpectrumFieldValues>({ defaultValues });
  // const [calcSpectrumResponse, setCalcSpectrumResponse] = useState<
  //   Response<CalcSpectrumResponseData> | undefined
  // >(undefined);
  // const [params, setParams] = useState<CalcSpectrumParams>({
  //   species: [{ molecule: "CO", mole_fraction: 0.1 }],
  //   min_wavenumber_range: DEFAULT_MIN_WAVENUMBER_RANGE,
  //   max_wavenumber_range: DEFAULT_MAX_WAVENUMBER_RANGE,
  //   tgas: DEFAULT_TEMPERATURE,
  //   tvib: null,
  //   trot: null,
  //   pressure: 1.01325,
  //   path_length: 1,
  //   simulate_slit: false,
  // });
  // const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
  //   molecule: [],
  //   mole_fraction: [],
  // });
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | undefined>(undefined);
  // const [
  //   calcSpectrumButtonDisabled,
  //   setCalcSpectrumButtonDisabled,
  // ] = useState<boolean>(false);
  // const [plotData, setPlotData] = useState<CalcSpectrumPlotData | undefined>(
  //   undefined
  // );
  // const [isNonEquilibrium, setIsNonEquilibrium] = useState<boolean>(false);
  // const [moleculeOptions, setMoleculeOptions] = useState<string[]>([]);

  // useEffect(() => {
  //   validate(params);
  // }, [params]);

  // useEffect(() => {
  //   if (hasValidationErrors(validationErrors)) {
  //     setCalcSpectrumButtonDisabled(true);
  //   } else {
  //     setCalcSpectrumButtonDisabled(false);
  //   }
  // }, [validationErrors]);

  // useEffect(() => {
  //   axios
  //     .get(`/molecules`)
  //     .then((response) => response.data)
  //     .then((responseData: { molecules: string[] }) =>
  //       setMoleculeOptions(responseData.molecules)
  //     );
  // }, []);

  // const handleBadResponse = (message: string) => {
  //   // Clear any existing data
  //   setCalcSpectrumResponse(undefined);
  //   setError(message);
  // };

  const onSubmitCalcSpectrum = async (data: any, e: any): Promise<void> => {
    console.log({ data, e });
    // setLoading(true);
    // setError(undefined);
    // setPlotData({
    //   species: params.species.map((species) => ({ ...species })),
    //   minWavenumber: params.min_wavenumber_range,
    //   maxWavenumber: params.max_wavenumber_range,
    // });

    // const rawResponse = await axios.post(`/calc-spectrum`, params);
    // if (!(rawResponse.statusText === "OK")) {
    //   handleBadResponse("Bad response from backend!");
    // } else {
    //   const response = await rawResponse.data;
    //   if (response.error) {
    //     handleBadResponse(response.error);
    //   } else {
    //     setCalcSpectrumResponse(response);
    //   }
    // }
    // setLoading(false);
  };

  // const validate = (params: CalcSpectrumParams): void => {
  //   const updatedValidationErrors: ValidationErrors = {
  //     molecule: [],
  //     mole_fraction: [],
  //   };

  //   updatedValidationErrors.trot = undefined;
  //   updatedValidationErrors.tvib = undefined;
  //   if (isNonEquilibrium) {
  //     if (!params.trot) {
  //       updatedValidationErrors.trot =
  //         "Trot must be defined when running non-equilibrium calculations";
  //     }
  //     if (!params.tvib) {
  //       updatedValidationErrors.tvib =
  //         "Tvib must be defined when running non-equilibrium calculations";
  //     }
  //   }

  //   updatedValidationErrors.molecule = new Array(params.species.length).fill(
  //     undefined
  //   );
  //   updatedValidationErrors.mole_fraction = new Array(
  //     params.species.length
  //   ).fill(undefined);

  //   params.species.forEach((species, index) => {
  //     if (!species.molecule) {
  //       updatedValidationErrors.molecule[index] = "Molecule must be defined";
  //     }
  //     if (
  //       species.mole_fraction === undefined ||
  //       Number.isNaN(species.mole_fraction)
  //     ) {
  //       updatedValidationErrors.mole_fraction[index] =
  //         "Mole fraction must be defined";
  //     } else if (species.mole_fraction && species.mole_fraction < 0) {
  //       updatedValidationErrors.mole_fraction[index] =
  //         "Mole fraction cannot be negative";
  //     }
  //   });

  //   if (Number.isNaN(params.tgas)) {
  //     updatedValidationErrors.tgas = "Tgas must be defined";
  //   } else if (params.tgas < 1 || params.tgas > 9000) {
  //     updatedValidationErrors.tgas = "Tgas must be between 1K and 9000K";
  //   } else {
  //     updatedValidationErrors.tgas = undefined;
  //   }

  //   if (Number.isNaN(params.pressure)) {
  //     updatedValidationErrors.pressure = "Pressure must be defined";
  //   } else if (params.pressure < 0) {
  //     updatedValidationErrors.pressure = "Pressure cannot be negative";
  //   } else {
  //     updatedValidationErrors.pressure = undefined;
  //   }

  //   if (Number.isNaN(params.path_length)) {
  //     updatedValidationErrors.path_length = "Path length must be defined";
  //   } else if (params.path_length < 0) {
  //     updatedValidationErrors.path_length = "Path length cannot be negative";
  //   } else {
  //     updatedValidationErrors.path_length = undefined;
  //   }

  //   setValidationErrors({ ...validationErrors, ...updatedValidationErrors });
  // };

  // const hasValidationErrors = (validationErrors: ValidationErrors): boolean =>
  //   Object.values(
  //     validationErrors
  //   ).some((error: string | string[] | undefined) =>
  //     Array.isArray(error)
  //       ? error.some((error: string | undefined) => error)
  //       : error
  //   );

  // const UseNonEquilibriumCalculations = () => (
  //   <FormControlLabel
  //     label="Use non-equilibrium calculations"
  //     control={
  //       <Switch
  //         checked={isNonEquilibrium}
  //         onChange={(e) => {
  //           setIsNonEquilibrium(e.target.checked);
  //           if (e.target.checked) {
  //             setParams({ ...params, tvib: params.tgas, trot: params.tgas });
  //           } else {
  //             setParams({ ...params, tvib: null, trot: null });
  //           }
  //         }}
  //       />
  //     }
  //   />
  // );

  // disabled={calcSpectrumButtonDisabled}
  const CalcSpectrumButton: React.FC = () => (
    <Button
      id="calc-spectrum-button"
      variant="contained"
      color="primary"
      type="submit"
    >
      Calculate spectrum
    </Button>
  );

  /**
   * Update the URL search params as the form is updated.
   */
  const updateURL = (fieldValues: CalcSpectrumFieldValues) => {
    const searchParams = new URLSearchParams();
    Object.entries(fieldValues).forEach(([key, value]) => {
      searchParams.set(key, String(value));
    });
    history.push({ pathname: "/", search: searchParams.toString() });
  };

  /**
   * Initialize the form based on the URL search params.
   */
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    // If there are no search params, initialize them with the defaults
    if (location.search.length === 0) {
      Object.entries(defaultValues).forEach(([key, value]) => {
        searchParams.set(key, String(value));
      });
      history.push({ pathname: "/", search: searchParams.toString() });
    }
    setValue(
      "tgas",
      searchParams.get("tgas") != undefined
        ? parseFloat(searchParams.get("tgas") as string)
        : undefined,
      { shouldValidate: true }
    );
    setValue(
      "pressure",
      searchParams.get("pressure") != undefined
        ? parseFloat(searchParams.get("pressure") as string)
        : undefined,
      { shouldValidate: true }
    );
    setValue(
      "path_length",
      searchParams.get("path_length") != undefined
        ? parseFloat(searchParams.get("path_length") as string)
        : undefined,
      { shouldValidate: true }
    );
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmitCalcSpectrum)}
      onChange={() => updateURL(getValues())}
    >
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TGas register={register} errors={errors} />
            </Grid>
            <Grid item xs={4}>
              <Pressure register={register} errors={errors} />
            </Grid>
            <Grid item xs={4}>
              <PathLength register={register} errors={errors} />
            </Grid>
            <Grid item xs={12}>
              <CalcSpectrumButton />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
