import { Routes, Route, Link } from 'react-router-dom';

export default function AgusNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/traductor">Traductor</Link>
        </li>
      </ul>
    </nav>
  );
}