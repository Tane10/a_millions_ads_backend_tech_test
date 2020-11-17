export const latlongExpectedResult = [{
        "query": "IG87LX",
        "result": {
            "postcode": "IG8 7LX",
            "longitude": 0.039544,
            "latitude": 51.608797,
            "quality": {
                "value": 1,
                "meaning": "within the building of the matched address closest to the postcode mean"
            }
        }
    },
    {
        "query": "SS67BF",
        "result": {
            "postcode": "SS6 7BF",
            "longitude": 0.605039,
            "latitude": 51.5848,
            "quality": {
                "value": 1,
                "meaning": "within the building of the matched address closest to the postcode mean"
            }
        }
    }
];

export const detailsExpectedResult = [{
        "query": "IG87LX",
        "result": {
            "postcode": "IG8 7LX",
            "longitude": 0.039544,
            "latitude": 51.608797,
            "quality": {
                "value": 1,
                "meaning": "within the building of the matched address closest to the postcode mean"
            },
            "country": "England",
            "admin_county": null,
            "admin_district": "Redbridge"
        }
    },
    {
        "query": "SS67BF",
        "result": {
            "postcode": "SS6 7BF",
            "longitude": 0.605039,
            "latitude": 51.5848,
            "quality": {
                "value": 1,
                "meaning": "within the building of the matched address closest to the postcode mean"
            },
            "country": "England",
            "admin_county": "Essex",
            "admin_district": "Rochford"
        }
    }
];

export const postcodeLowerCase = {
    "postcodes": ["ig87lx", "ss67bf"]
};

export const postcodeUpperCase = {
    "postcodes": ["IG87LX", "SS67BF"]
};

export const qualityCheckObjectPass = {
    value: 1,
    meaning: "within the building of the matched address closest to the postcode mean"
};

export const qualityCheckObjectFail = {
    value: 0,
    meaning: "can't find quality"
};