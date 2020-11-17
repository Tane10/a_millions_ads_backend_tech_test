import express, { Router, Request, Response } from "express";
import PostCodesClass from "../classes/postcode.class";

const router: Router = express.Router();
const postcodeClass = new PostCodesClass();

router.post("/api/v1/postcode/latlong", async (req: Request, res: Response) => {
    const postcodes = req.body;

    const postcodesLatLong = await postcodeClass.getLatlongFromPostcode(postcodes);

    res.status(200).send(postcodesLatLong);
})

router.post("/api/v1/postcode/details", async (req: Request, res: Response) => {
    const postcodes = req.body;

    const postcodesDeatils = await postcodeClass.getDetailsFromPostcode(postcodes);

    res.status(200).send(postcodesDeatils);
})

export default router;
