import "../instrument.mjs"
import {ENV} from "./config/env.js"
import {connectDB} from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import express from "express";
import { serve } from "inngest/express";
import { inngest, functions } from "./config/inngest.js"
import chatRoutes from "./routes/chat.route.js"
import "../instrument.mjs"
import * as Sentry from "@sentry/node"

const app = express();

app.use(clerkMiddleware());

app.get("/debug-sentry", (req, res) => {
    throw new Error("First Sentry Error!")
})

app.use(express.json());
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);

Sentry.setupExpressErrorHandler(app)

app.get('/', (req, res) => {
    res.send('Hello World!');
})
// Add this temporarily to server.js
app.get('/test-stream', async (req, res) => {
    const { StreamChat } = await import('stream-chat');
    const { ENV } = await import('./config/env.js');

    try {
        const client = StreamChat.getInstance(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET);
        const result = await client.upsertUser({
            id: 'test-' + Date.now(),
            name: 'Test User',
        });
        res.json({ success: true, result });
    } catch (error) {
        res.json({ success: false, error: error.message, stack: error.stack });
    }
});





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
startServer()

export default app;
// aaravraghavan_db_user: rzjEmHqVmhQbhi8i