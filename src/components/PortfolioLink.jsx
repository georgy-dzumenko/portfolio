export const PortfolioLink = ({href, title, description})  => {
  return (
    <a href={href} className="portfolio-link">
      <div className="portfolio-link__title">{title}</div>
      <div className="portfolio-link__description">{description}</div>
    </a>
  )
}