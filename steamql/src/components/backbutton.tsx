type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function BackButton({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 bg-[#1b2838] text-[#66c0f4] rounded-full flex items-center justify-center hover:bg-[#2a475e] transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}