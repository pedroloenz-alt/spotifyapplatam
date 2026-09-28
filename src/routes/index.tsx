import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spotify Rewards – Evalúa y Gana" },
      {
        name: "description",
        content: "Evalúa música y gana recompensas con Spotify Rewards.",
      },
      { property: "og:title", content: "Spotify Rewards – Evalúa y Gana" },
      {
        property: "og:description",
        content: "Evalúa música y gana recompensas con Spotify Rewards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/app.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">
        Redirigiendo a la aplicación…{" "}
        <a href="/app.html" className="text-primary underline">
          Abrir aplicación
        </a>
      </p>
    </div>
  );
}
