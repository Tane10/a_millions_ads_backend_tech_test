import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { PostcodeRequestObject, LatLongPostcodeResponse, QualityObject, DetailsPostcodeResponse } from "../utils/types";

export default class PostCodesClass {
    public filters = ['postcode', 'longitude', 'latitude', 'quality'];

    public config: AxiosRequestConfig = {
        headers: {
            "content-type": "application/json"
        }
    };

    private qualityCheckMap: Map<number, string> = new Map([
        [1, "within the building of the matched address closest to the postcode mean"],
        [2, "as for status value 1, except by visual inspection of Landline maps (Scotland only)"],
        [3, "approximate to within 50m"],
        [4, "postcode unit mean (mean of matched addresses with the same postcode, but not snapped to a building)"],
        [5, "imputed by ONS, by reference to surrounding postcode grid references"],
        [6, "postcode sector mean, (mainly | PO Boxes)"],
        [8, "postcode terminated prior to Gridlink® initiative, last known ONS postcode grid reference1"],
        [9, "no grid reference available"]]);

    upperCasePostcodes(postcodes: PostcodeRequestObject): PostcodeRequestObject {
        let formatedPostCodes: PostcodeRequestObject = {
            postcodes: []
        };

        postcodes.postcodes.map((postcode) => {
            formatedPostCodes.postcodes.push(postcode.toUpperCase())
        });

        return formatedPostCodes;
    }

    positionalQualityCheck(quality: number): QualityObject {
        let qualityChecked: QualityObject = {
            value: 0,
            meaning: "can't find quality"
        };

        if (!(this.qualityCheckMap.has(quality))) return qualityChecked;
        else {
            qualityChecked.value = quality;
            qualityChecked.meaning = this.qualityCheckMap.get(quality);
            return qualityChecked;
        }
    }

    async getLatlongFromPostcode(postcodes: PostcodeRequestObject): Promise<LatLongPostcodeResponse> {
        const baseURL: string = "https://api.postcodes.io/postcodes";

        const postcodeFormated: PostcodeRequestObject = this.upperCasePostcodes(postcodes);
        return await axios.post(`${baseURL}?filter=${this.filters}`, postcodeFormated, this.config)
            .then((res: AxiosResponse) => {

                let formatedResponse = res.data.result.map((intialRes: any) => {
                    const quality: number = intialRes.result.quality;
                    intialRes.result.quality = this.positionalQualityCheck(quality);
                    return intialRes;
                })

                const data: LatLongPostcodeResponse = formatedResponse;
                return data;
            });
    }

    async getDetailsFromPostcode(postcodes: PostcodeRequestObject): Promise<DetailsPostcodeResponse> {
        const baseURL: string = "https://api.postcodes.io/postcodes";

        const postcodeFormated: PostcodeRequestObject = this.upperCasePostcodes(postcodes);

        this.filters.push("country","admin_county","admin_district");


        return await axios.post(`${baseURL}?filter=${this.filters}`, postcodeFormated, this.config)
            .then((res: AxiosResponse) => {

                let formatedResponse = res.data.result.map((intialRes: any) => {
                    const quality: number = intialRes.result.quality;
                    intialRes.result.quality = this.positionalQualityCheck(quality);
                    return intialRes;
                })

                const data: DetailsPostcodeResponse = formatedResponse;
                return data;
            });
    }

}

