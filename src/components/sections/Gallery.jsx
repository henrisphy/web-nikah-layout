import { useState } from "react";
import { galleryData } from "../../constants/galleryData";
import Modal from "../../components/ui/Modal";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 px-4">
      <h2 className="section-title">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {galleryData.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={img.thumbnail}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <img
            src={selectedImage.full}
            alt="Gallery"
            className="max-h-[80vh] max-w-full object-contain"
          />
        )}
      </Modal>
    </section>
  );
}
