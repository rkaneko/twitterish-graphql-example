export function encodeBase64(str: string): string {
    if (typeof window === "undefined") {
        const { Buffer } = require("buffer");
        return Buffer.from(str).toString("base64");
    }
    if (typeof window.btoa === "function") {
        return window.btoa(str);
    }
    throw new Error("Unsupported environment.");
}

export function decodeBase64(str: string): string {
    if (typeof window === "undefined") {
        const { Buffer } = require("buffer");
        return Buffer.from(str, "base64").toString("ascii");
    }
    if (typeof window.atob === "function") {
        return decodeURIComponent(
            window
                .atob(str)
                .split("")
                .map(c => "%" + `00${c.charCodeAt(0).toString(16)}`.slice(-2))
                .join("")
        );
    }
    throw new Error("Unsupported environment.");
}
