type StrongProps = {
  children: React.ReactNode;
};

// PATERN TO STRONG
export function Strong({ children }: StrongProps) {
  return <span style={{ fontWeight: 'bold' }}>{children}</span>;
}
