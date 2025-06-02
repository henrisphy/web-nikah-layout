export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
