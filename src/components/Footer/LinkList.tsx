import { Link } from "react-router-dom";

interface LinkListProps {
    title: string;
    links: { to: string; label: string}[];
}

const LinkList: React.FC<LinkListProps> = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
            {links.map(({ to, label }) => (
                <li key={to}>
                    <Link to={to} className="hover:text-blue-400">{label}</Link>
                </li>
            ))}
        </ul>
  </div>
);

export default LinkList;