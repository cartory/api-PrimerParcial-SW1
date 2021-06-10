//solo para comprobar que la autentificacion y la api funciona xd
import { Router } from "express";
import * as ConsultaCtrl from "../controllers/consulta.controller";

import { verifyToken } from "../middlewares/authJwt";

const router = Router();

router.get('/consulta', verifyToken, ConsultaCtrl.getConsulta);
router.post("/consultaCreate", verifyToken, ConsultaCtrl.createConsulta);

export default router;