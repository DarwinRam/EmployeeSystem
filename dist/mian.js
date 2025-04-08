"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const employeeRoutes_1 = __importDefault(require("./routes/employeeRoutes"));
const path_1 = __importDefault(require("path")); // Import path module to resolve directory paths
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware to parse JSON requests
app.use(body_parser_1.default.json());
// Serve static files from the "public" directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Use employee routes
app.use('/api', employeeRoutes_1.default);
// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
