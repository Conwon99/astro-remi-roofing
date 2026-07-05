import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const INSTAGRAM_POST_URL = "https://www.instagram.com/p/DVrAqpEjPLo/";
const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js";

const InstagramPost = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      `script[src="${EMBED_SCRIPT_SRC}"]`
    );

    if (existingScript) {
      window.instgrm?.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-12 sm:mb-16">
          <div className="flex items-center mb-4 sm:mb-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mr-4 sm:mr-6">
              FOLLOW US ON INSTAGRAM
            </h2>
            <div className="flex-1 h-px bg-[hsl(var(--asphalt-grey))]"></div>
          </div>
          <p className="text-lg sm:text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl">
            See more of our roofing work in action
          </p>
        </div>

        <div className="flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={INSTAGRAM_POST_URL}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
              width: "99%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramPost;
