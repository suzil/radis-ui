export interface Species {
  molecule: string;
  mole_fraction: number;
}

export interface FormValues {
  species: Species[];
  min_wavenumber_range: number;
  max_wavenumber_range: number;
  tgas: number;
  tvib?: number;
  trot?: number;
  pressure: number;
  path_length: number;
  simulate_slit: boolean;
}
