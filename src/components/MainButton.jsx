export default function MainButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#B88E2F] px-6 py-2 text-[#FFFFFF] font-bold text-[16px] hover:scale-110 transition-transform duration-300 cursor-pointer"
    >
      {children}
    </button>
  );
}
