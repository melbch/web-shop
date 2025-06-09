import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 

const socialLinks = [
    { href: "https://facebook.com", icon: <FacebookIcon style={{ fontSize: 32 }} /> },
    { href: "https://instagram.com", icon: <InstagramIcon style={{ fontSize: 32 }} /> },
    { href: "https://twitter.com", icon: <TwitterIcon style={{ fontSize: 32 }} /> },
    { href: "https://linkedin.com", icon: <LinkedInIcon style={{ fontSize: 32 }} /> },
];

const SocialMediaLinks: React.FC = () => (
    <div className="flex space-x-3 mb-4">
        {socialLinks.map(({ href, icon }) => (
            <a key={href} href={href} className="text-white hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                {icon}
            </a>
        ))}
  </div>
);

export default SocialMediaLinks;