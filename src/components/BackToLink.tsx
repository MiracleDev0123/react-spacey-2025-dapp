import { NavLink } from "react-router-dom";

interface BackToLinkProps {
  link: any;
}

const BackToLink: React.FC<BackToLinkProps> = ({ link }) => {
  return (
    <div className="py-3">
      <NavLink to={link}>
        <button className="text-xl">&lt; Back</button>
      </NavLink>
    </div>
  );
};

export default BackToLink;
