import express, { Router, Request, Response } from "express";
import PostCodesClass from "../classes/postcode.class";

const router: Router = express.Router();
const postcodeClass = new PostCodesClass();

router.post("/api/v1/postcode/latlong", async (req: Request, res: Response) => {
    let postcodes = req.body;

    if (postcodes.postcodes === undefined) res.status(400).send("request body is empty");
    if (postcodes.postcodes.length === 0) res.status(400).send("Please add some postcodes to the request body");
    else {

        postcodes.postcodes.map((val: string, idx: number) => {
            if (val === "" || val === " ") {
                postcodes.postcodes.splice(idx, 1)
            }
        });

        const postcodesLatLong = await postcodeClass.getLatlongFromPostcode(postcodes);

        res.status(200).send(postcodesLatLong);
    }
})

router.post("/api/v1/postcode/details", async (req: Request, res: Response) => {
    let postcodes = req.body;

    if (postcodes.postcodes === undefined) res.status(400).send("request body is empty");
    if (postcodes.postcodes.length === 0) res.status(400).send("Please add some postcodes to the request body");
    else {

        postcodes.postcodes.map((val: string, idx: number) => {
            if (val === "" || val === " ") {
                postcodes.postcodes.splice(idx, 1)
            }
        });

        const postcodesDeatils = await postcodeClass.getDetailsFromPostcode(postcodes);

        res.status(200).send(postcodesDeatils);
    }
})

export default router;
