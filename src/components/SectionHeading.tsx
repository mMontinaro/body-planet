type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="uppercase">{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionHeading
