export default function StarRating({ rating }) {
  return (
    <div className="flex gap-1 text-yellow-500 ">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}