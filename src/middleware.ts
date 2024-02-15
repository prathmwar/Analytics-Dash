import { NextRequest, NextResponse } from "next/server";
import { Analytics } from "./utils/analytics";  

export default async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname == "/") {
        // Create an instance of Analytics
        const analyticsInstance = new Analytics();

        // Call the track method on the instance
        try {
            await analyticsInstance.track("pageview", {
                page: "/",
                country: req.geo?.country,
            });
        } catch (err) {
            // fail silently
            console.log(err);
        }
    }

    return NextResponse.next();
}

export const matcher = {
    matcher: ["/"],
};
