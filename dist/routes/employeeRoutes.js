"use strict";
// src/routes/employeeRoutes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = require("../controllers/employeeController");
const router = (0, express_1.Router)();
// Define routes for adding full-time and part-time employees
router.post('/employees/fulltime', employeeController_1.addFullTimeEmployee);
router.post('/employees/parttime', employeeController_1.addPartTimeEmployee);
exports.default = router;
