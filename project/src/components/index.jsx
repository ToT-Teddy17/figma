import { Link } from "react-router-dom";
export default function Index() {
  return (
    <div>
      <h1>hello</h1>
      <nav>
        <Link to={"/register"}></Link>
        <Link to={"/sign"}></Link>
        <Link to={"/allcategary"}></Link>
        <Link to={"/loginafter"}></Link>
        <Link to={"/profile"}></Link>
      </nav>
    </div>
  );
}
