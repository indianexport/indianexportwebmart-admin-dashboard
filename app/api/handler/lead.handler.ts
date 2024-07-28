import { createFactory } from "hono/factory";

import { db } from "@/lib/db";

const factory = createFactory();

const createLead = factory.createHandlers(async (c) => {});
const GetLead = factory.createHandlers(async (c) => {});
const updateLead = factory.createHandlers(async (c) => {});
const DeleteLead = factory.createHandlers(async (c) => {});

export { createLead, GetLead, updateLead, DeleteLead };
