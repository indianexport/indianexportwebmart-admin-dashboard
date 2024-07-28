import { createFactory } from "hono/factory";
import { db } from "@/lib/db";

const factory = createFactory();

const createCompany = factory.createHandlers(async (c) => {});

const getCompany = factory.createHandlers(async (c) => {});

const updateCompany = factory.createHandlers(async (c) => {});

const DeleteCompany = factory.createHandlers(async (c) => {});

export { createCompany, getCompany, updateCompany, DeleteCompany };
