import {ENV} from "./config/env.js"
import {connectDB} from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import express from "express";
import { serve } from "inngest/express";
import { inngest, functions } from "./config/inngest.js"

const app = express();

app.use(clerkMiddleware());

app.use(express.json());
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get('/', (req, res) => {
    res.send('Hello World!');
})



const startServer = async () => {
    try {
        await connectDB();
        if (ENV.NODE_ENV !== "production") {
            app.listen(ENV.PORT, () => {
                console.log(`Server started on port ${ENV.PORT}`);
            })
        }
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}


export default app;
// aaravraghavan_db_user: rzjEmHqVmhQbhi8i