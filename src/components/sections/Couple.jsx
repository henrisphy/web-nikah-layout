import { coupleData } from "../../constants/coupleData";
import {
  componentStyles,
  fontStyles,
  utilityStyles,
} from "../../assets/styles/jsStyles.js";

export default function Couple() {
  return (
    <section id="couple" className="py-20 px-4">
      <h2 style={componentStyles.sectionTitle}>The Happy Couple</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Card Mempelai Perempuan */}
        <div
          style={{
            ...componentStyles.card,
            ...utilityStyles.animateFadeIn,
            maxWidth: "320px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "0.75rem",
              overflow: "hidden",
              margin: "0 auto 1.5rem",
              border: "4px solid #d4af37",
            }}
          >
            <img
              src={coupleData.mempelaiPerempuan.image}
              alt="Mempelai Perempuan"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <h3
            style={{
              ...fontStyles.customFont,
              fontSize: "1.875rem",
              marginBottom: "0.5rem",
              color: "#d4af37",
            }}
          >
            {coupleData.mempelaiPerempuan.name}
          </h3>
          <p style={{ fontSize: "1.125rem" }}>
            {coupleData.mempelaiPerempuan.bio}
          </p>
          {coupleData.mempelaiPerempuan.parents && (
            <div style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
              <p>Putri dari:</p>
              <p>{coupleData.mempelaiPerempuan.parents}</p>
            </div>
          )}
        </div>

        {/* Simbol & di tengah */}
        <div
          style={{
            ...fontStyles.customFont,
            fontSize: "2.25rem",
            color: "#d4af37",
            margin: "2rem 0",
            "@media (min-width: 768px)": {
              margin: "0 2rem",
            },
          }}
        >
          &
        </div>

        {/* Card Mempelai Laki */}
        <div
          style={{
            ...componentStyles.card,
            ...utilityStyles.animateFadeIn,
            maxWidth: "320px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "0.75rem",
              overflow: "hidden",
              margin: "0 auto 1.5rem",
              border: "4px solid #d4af37",
            }}
          >
            <img
              src={coupleData.mempelaiLaki.image}
              alt="Mempelai Laki"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <h3
            style={{
              ...fontStyles.customFont,
              fontSize: "1.875rem",
              marginBottom: "0.5rem",
              color: "#d4af37",
            }}
          >
            {coupleData.mempelaiLaki.name}
          </h3>
          <p style={{ fontSize: "1.125rem" }}>{coupleData.mempelaiLaki.bio}</p>
          {coupleData.mempelaiLaki.parents && (
            <div style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
              <p>Putra dari:</p>
              <p>{coupleData.mempelaiLaki.parents}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
