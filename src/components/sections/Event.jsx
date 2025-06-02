import { events } from "../../constants/eventData";
export default function Event() {
  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="section-title">Wedding Events</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {Object.entries(events).map(([key, event]) => (
          <div key={key} className="card text-center">
            <h3 className="text-2xl font-script mb-4">{event.title}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm">Date</p>
                <p className="text-lg font-medium">{event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
