 import express from "express";

import {
submitHelpdesk
}
from "../controllers/helpdeskController.js";

const router = express.Router();

router.post(
"/",
submitHelpdesk
);

export default router;