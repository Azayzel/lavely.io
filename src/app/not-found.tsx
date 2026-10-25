import Link from "next/link";

export default function NotFound() {
  return <main className="notfound dark" id="main"><span className="kicker">404 / WRONG TURN</span><h1>Nothing here.<br/><em>Let's get back.</em></h1><Link className="btn btn--accent" href="/">Return to homepage ↗</Link></main>;
}
