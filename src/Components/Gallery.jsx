

const Gallery = () => {
  return (

    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold my-4">Travel Gallery!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <img src="https://i.ibb.co/FbPRfyL/galary1-png.jpg" alt="Image 1" className="w-full h-80 object-cover" />
        </div>
        <div className="relative">
          <img src="https://i.ibb.co/7py6xX1/galary2-png.jpg" alt="Image 2" className="w-full h-80 object-cover" />
        </div>
        <div className="relative">
          <img src="https://i.ibb.co/jWQfYpq/galary3-png.jpg" alt="Image 3" className="w-full h-80 object-cover" />
        </div>
        <div className="relative">
          <img src="https://i.ibb.co/448j1Kz/galary4-png.jpg" alt="Image 4" className="w-full h-80 object-cover" />
        </div>
        <div className="relative">
          <img src="https://i.ibb.co/r4fzCJL/galary5-png.jpg" alt="Image 5" className="w-full h-80 object-cover" />
        </div>
        <div className="relative">
          <img src="https://i.ibb.co/SdhZq1w/galary6-png.jpg" alt="Image 6" className="w-full h-80 object-cover" />
        </div>
        
      </div>
    </div>
  );
};

export default Gallery;
