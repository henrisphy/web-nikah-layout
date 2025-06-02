import { events } from "../../constants/eventData";
import {
  componentStyles,
  fontStyles,
  utilityStyles,
} from "../../assets/styles/jsStyles.js";

export default function Event() {
  return (
    <section className="py-20 px-4 bg-white">
      <h2 style={componentStyles.sectionTitle}>Wedding Events</h2>

      {/* Container utama untuk centering */}
      <div className="flex justify-center">
        {/* Grid container untuk card */}
        <div className="grid md:grid-cols-2 gap-8 justify-items-center max-w-5xl w-full">
          {Object.entries(events).map(([key, event]) => (
            <div
              key={key}
              style={{
                ...componentStyles.card,
                ...utilityStyles.animateFadeIn,
                width: "100%",
                maxWidth: "320px",
                textAlign: "center",
              }}
              className="hover:shadow-lg transition-all duration-300"
            >
              <h3
                style={{
                  fontFamily: "CustomFont, sans-serif",
                  fontSize: "1.75rem",
                  marginBottom: "1.5rem",
                  color: "#d4af37",
                }}
              >
                {event.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-lg font-medium">
                    <span className="font-bold">Hari:</span> {event.day},{" "}
                    {event.date}
                  </p>
                  <p className="text-lg font-medium">
                    <span className="font-bold">Waktu:</span> {event.time}
                  </p>
                  <p className="text-lg font-medium">
                    <span className="font-bold">Tempat:</span> {event.venue}
                  </p>
                  <p className="text-lg font-medium">
                    <span className="font-bold">Alamat:</span> {event.address}
                  </p>
                  {event.mapUrl && (
                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Lihat Peta
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
