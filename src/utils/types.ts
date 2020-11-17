export interface PostcodeRequestObject {
    postcodes: string[]
}


export interface LatLongPostcodeResponse {
    response: [{
        query: string,
        result: {
            postcode: string,
            longitude: number,
            latitude: number,
            quality: {
                value: number,
                meaning: string
            }
        }
    }
    ]
}

export interface DetailsPostcodeResponse {
    response: [{
        query: string,
        result: {
            postcode: string,
            longitude: number,
            latitude: number,
            quality: {
                value: number,
                meaning: string
            },
            country: string,
            admin_county: string,
            admin_district: string,
        }
    }
    ]
}

export interface QualityObject {
    value: number,
    meaning: string | undefined
}
