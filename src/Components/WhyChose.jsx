
const WhyChose = () => {
  return (
    <div className=" lg:[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/2KwKdY7/3727.jpg')" }}>
      <div className="flex items-center justify-center h-full bg-blue-900 bg-opacity-60">
        <div className="p-10 rounded-lg text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Why choose us</h1>
          <p className="mb-6">Get the ultimate tool and learn how to grow your audience and build an online business.</p>
          <ul className="list-none space-y-2 mb-6">
            <li>✔ Personal Touch</li>
            <li>✔ Local expertise</li>
            <li>✔ Quality and service</li>
            <li>✔ Save time and effort</li>
            <li>✔ Tailor-made holidays</li>
            <li>✔ Legitimacy</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">Our mission</button>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
