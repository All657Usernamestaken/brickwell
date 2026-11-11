import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link href="/" className="logo logo--light">
          Brick<span>well</span>
        </Link>
        <p>© 2026 Brickwell. All rights reserved.</p>
      </div>
    </footer>
  );
}