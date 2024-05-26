import { Router } from "express";
import controllers from "../controllers/books.js";

const router = Router();

router.get("/", controllers.getAllBooks);
router.post("/", controllers.createBook);

export default router;
