type StrongProps = {
  children: React.ReactNode;
};

export function Strong({ children }: StrongProps) {
  return <span style={{ fontWeight: 'bold' }}>{children}</span>;
}
