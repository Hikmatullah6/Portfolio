import { ImageResponse } from "next/og";

export const alt = "Hussain — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded Open Graph card, generated at build time — no external asset needed.
export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background:
                        "radial-gradient(circle at 20% 20%, #2a1c05 0%, #0a0a0a 55%)",
                    color: "white",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        color: "#fbbf24",
                        fontSize: 28,
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                    }}
                >
                    <div
                        style={{
                            width: 14,
                            height: 14,
                            borderRadius: "9999px",
                            background: "#f59e0b",
                        }}
                    />
                    PORTFOLIO
                </div>
                <div style={{ fontSize: 92, fontWeight: 800, marginTop: 24 }}>
                    Hussain
                </div>
                <div style={{ fontSize: 44, fontWeight: 600, color: "#f59e0b" }}>
                    Software Engineer
                </div>
                <div
                    style={{
                        fontSize: 30,
                        color: "#9ca3af",
                        marginTop: 24,
                        maxWidth: 900,
                    }}
                >
                    Full-stack web apps with Next.js, React, TypeScript & Supabase.
                </div>
            </div>
        ),
        { ...size }
    );
}
