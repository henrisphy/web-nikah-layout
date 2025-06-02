import { coupleData } from "../../constants/coupleData";

export default function Couple() {
  return (
    <section id="couple" className="py-20 px-4">
      <h2 className="section-title">The Happy Couple</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Bride */}
        <div className="text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary">
            <img
              src={coupleData.bride.image}
              alt="Bride"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-3xl font-script mb-2">{coupleData.bride.name}</h3>
          <p className="text-lg">Daughter of {coupleData.bride.parents}</p>
        </div>

        <div className="text-4xl font-script text-primary my-8 md:my-0">&</div>

        {/* Groom */}
        <div className="text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary">
            <img
              src={coupleData.groom.image}
              alt="Groom"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-3xl font-script mb-2">{coupleData.groom.name}</h3>
          <p className="text-lg">Son of {coupleData.groom.parents}</p>
        </div>
      </div>
    </section>
  );
}
