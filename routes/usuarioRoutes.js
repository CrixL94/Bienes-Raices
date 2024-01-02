import express from "express";

const router = express.Router();

//routing
router.get("/login", (req, res) => {
  res.render('auth/login',{
    autenticado: true
  });
});

router.post("/", (req, res) => {
  res.json({ msg: "Respuesta tipo json" });
});

// router.route('/')
//   .get(function (req, res) {
//     res.json("Hola mundo desde express");
//   })
//   .post(function (req, res) {
//     res.json({ msg: "Respuesta tipo json" });
//   });

export default router;
