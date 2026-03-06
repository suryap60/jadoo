interface ButtonProps {
  variant: 'primary' | 'ghost' | 'play';
  children: React.ReactNode;
}

export const Button = ({ variant, children }: ButtonProps) => {
  const styles = {
    primary: "bg-[#F1A501] text-white px-6 py-4 rounded-xl shadow-lg hover:bg-[#d99501] transition-all",
    ghost: "text-[#212832] font-medium",
    play: "flex items-center gap-4 text-[#686D77] font-medium"
  };

  return <button className={styles[variant]}>{children}</button>;
};