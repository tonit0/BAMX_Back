import { Router } from "express";
import brands from "./brands";
import employees from "./employees";
import inputs_outputs from "./inputs_outputs";
import maintenances from "./maintenances";
import positions from "./positions";
import products_services from "./products_services";
import providers from "./providers";
import revisions from "./revisions";
import trails from "./trails";
import veh_failures from "./veh_failures";
import vehicles from "./vehicles";

const routes = Router();

routes.use("/brands", brands);
routes.use("/employees", employees);
routes.use("/inputs_outputs", inputs_outputs);
routes.use("/maintenances", maintenances);
routes.use("/positions", positions);
routes.use("/products_services", products_services);
routes.use("/providers", providers);
routes.use("/revisions", revisions);
routes.use("/trails", trails);
routes.use("/veh_failures", veh_failures);
routes.use("/vehicles", vehicles);

export default routes;