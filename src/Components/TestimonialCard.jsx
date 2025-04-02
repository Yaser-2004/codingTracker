export const TestimonialCard = ({ name, rating, feedback }) => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <div className="h-16 w-16 bg-gray-200 rounded-full mb-4"></div>
        <h3 className="font-bold text-lg ml-1 text-black text-left mb-2">{name}</h3>
        <div className="text-yellow-500 text-left">{"⭐".repeat(rating)}</div>
        <p className="text-gray-600 mt-3 text-left text-base">{feedback}</p>
      </div>
    );
  };