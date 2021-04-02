import json

import radis


def lambda_handler(event, context):
    spectrum = radis.calc_spectrum(
        1900,
        2300,
        molecule="CO",
        isotope="1,2,3",
        pressure=1.01325,
        Tgas=700,
        mole_fraction=0.1,
        path_length=1,
        databank="hitran",
    )
    wunit = spectrum.get_waveunit()
    var = "radiance_noslit"
    iunit = "default"
    x, y = spectrum.get(var, wunit=wunit, Iunit=iunit)

    return {
        "statusCode": 200,
        "body": json.dumps({"x": list(x), "y": list(y)}),
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": True,
        },
    }
