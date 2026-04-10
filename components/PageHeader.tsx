import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  backgroundImage: string;
  eyebrow: string;
  h1Html: string;
  crumbs: Crumb[];
  description: string;
}

export default function PageHeader({
  backgroundImage,
  eyebrow,
  h1Html,
  crumbs,
  description,
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <div
        className="page-header-bg"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="wrap">
        <div className="page-header-inner">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 dangerouslySetInnerHTML={{ __html: h1Html }} />
            <div className="crumbs">
              {crumbs.map((crumb, i) => (
                <span key={i}>
                  {i > 0 && <span />}
                  {crumb.href ? (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span
                      style={{
                        background: "transparent",
                        width: "auto",
                        height: "auto",
                        borderRadius: 0,
                      }}
                    >
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </header>
  );
}
