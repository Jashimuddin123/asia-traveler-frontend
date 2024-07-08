

const WhyChose = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/2KwKdY7/3727.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-white ">
        <h1 className="text-4xl font-bold mb-4">Why choose us</h1>
        <p className="mb-6">Get the ultimate tool and learn how to grow your audience and build an online business.</p>
        <ul className="list-none space-y-2 flex mb-6">
            <span>
            <li>✔ Personal Touch</li>
          <li>✔ Local expertise</li>
          <li>✔ Quality and service</li>
            </span>
             <span>
             <li>✔ Save time and effort</li>
          <li>✔ Tailor-made holidays</li>
          <li>✔ Legitimacy</li>
             </span>
        </ul>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Our mission</button>
      </div>
    </div>
        </div>
    );
};

export default WhyChose;