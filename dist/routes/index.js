"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generalController_1 = require("../controller/generalController");
const Routes_1 = require("../routes/Routes");
const router = (0, express_1.Router)();
router.post(Routes_1.client.CREATE_CLIENT_ROUTE, generalController_1.insertClientData);
router.get(Routes_1.client.GET_CLIENT_DATA, generalController_1.clientData);
router.put(Routes_1.client.UPDATE_CLIENT_DATA, generalController_1.clientDataUpdate);
router.delete("/client/delete/:id", generalController_1.clientDeleteData);
router.get("/insertar/:id", generalController_1.insertWorkout);
router.get("/find/:id", generalController_1.clientData);
router.get("/update/:id", generalController_1.clientDataUpdate);
// Rutas relacionadas con el ejercicio
/*
router.get(`${GymProgressionRoutes.EXERCISES_ROUTE}${DataRoutes.GET_ALL_ROUTE}`, getAllExercisesController);
// Rutas relacionadas con el rendimiento
router.get(`${GymProgressionRoutes.PERFORMANCE_ROUTE}${DataRoutes.GET_ONE_ROUTE}`, getPerformanceController);
router.post(`${GymProgressionRoutes.PERFORMANCE_ROUTE}${DataRoutes.CREATE_ROUTE}`, createPerformanceController);
router.patch(`${GymProgressionRoutes.PERFORMANCE_ROUTE}${DataRoutes.UPDATE_ROUTE}`, updatePerformanceController);
 */
exports.default = router;
