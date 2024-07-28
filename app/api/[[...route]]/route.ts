import { Hono } from "hono";
import { handle } from "hono/vercel";
import {
  createCompany,
  createLead,
  DeleteCompany,
  DeleteLead,
  getCompany,
  GetLead,
  updateCompany,
  updateLead,
} from "@/app/api/handler";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/health-check", (c) => {
  return c.text("working-server");
});

app.post("/company", ...createCompany);
app.post("/lead", ...createLead);

app.get("/company", ...getCompany);
app.get("/lead", ...GetLead);

app.put("/company", ...updateCompany);
app.put("/lead", ...updateLead);

app.delete("/company", ...DeleteCompany);
app.delete("/lead", ...DeleteLead);

// hono http method config
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
