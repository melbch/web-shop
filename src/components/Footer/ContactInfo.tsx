import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const ContactInfo: React.FC = () => (
    <div className="space-y-2">
        <div className="flex items-center space-x-2">
            <PhoneIcon style={{ fontSize: 20 }} />
            <span>+00 123 456 789</span>
        </div>
        <div className="flex items-center space-x-2">
            <MailOutlineIcon />
            <a href="mailto:info@booknook.com" className="text-neutral-300 hover:text-blue-400">
                info@booknook.com
            </a>
        </div>
    </div>
);

export default ContactInfo;