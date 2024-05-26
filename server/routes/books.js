import controllers from "../controllers/books";
import { Router } from "express";

const router = Router();

router.get("/", controllers.getAllBooks);
router.post("/", controllers.createBook);

export default router;
