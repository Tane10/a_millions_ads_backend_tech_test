import  PostCodesClass from "../src/classes/postcode.class";
import { latlongExpectedResult, detailsExpectedResult, postcodeLowerCase,
    postcodeUpperCase, qualityCheckObjectPass,
    qualityCheckObjectFail } from "../test_data/expectedData"

describe("postcode class tests", () => {
    const pcc = new PostCodesClass();

    describe("getLatlongFromPostcode", () => {
        test("it should return latlong for given postcodes", async() => {
            const latlong = await pcc.getLatlongFromPostcode(postcodeLowerCase);
            expect(latlong).toEqual(latlongExpectedResult);
        })
    })

    describe("getDetailsFromPostcode", () => {
        test("it should return as well as extra details for given postcode", async() => {
            const details = await pcc.getDetailsFromPostcode(postcodeLowerCase);
            expect(details).toEqual(detailsExpectedResult);
        })
    })

    describe("upperCasePostcodes", () => {
        test("it should return postcode in uppercase", async() => {
            const uppercase = await pcc.upperCasePostcodes(postcodeLowerCase);
            expect(uppercase).toEqual(postcodeUpperCase);
        })
    })

    describe("positionalQualityCheck", () => {
        test("it should return a QualityObject containing a vaild value and meaning when given a number bewteen 1-9", async() => {
            const checked = await pcc.positionalQualityCheck(1);
            expect(checked).toEqual(qualityCheckObjectPass);
        })
        test("it should return a QualityObject containing 0 as value and can't find quality as meaning when given a number not between 1-9", async() => {
            const checked = await pcc.positionalQualityCheck(10);
            expect(checked).toEqual(qualityCheckObjectFail);
        })
    })
})