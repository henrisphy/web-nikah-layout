import { loveStoryData } from "../../constants/loveStoryData";

export default function LoveStory() {
  return (
    <section id="story" className="py-20 px-4 bg-white">
      <h2 className="section-title">Our Love Story</h2>

      <div className="max-w-2xl mx-auto">
        {loveStoryData.map((item, index) => (
          <div
            key={index}
            className="relative pl-8 pb-8 border-l-2 border-primary last:border-0 last:pb-0"
          >
            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
              <span className="text-lg font-medium text-primary">
                {item.year}
              </span>
              <h3 className="text-xl font-medium">{item.title}</h3>
            </div>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
