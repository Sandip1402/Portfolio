export default function Section({
  children,
  className = '',
  containerClassName = '',
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) {
  return (
    <section className={`py-24 ${className}`}>
      <div className={`mx-auto max-w-6xl px-6 ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}