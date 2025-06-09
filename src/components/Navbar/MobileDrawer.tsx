import React from "react";
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, children }) => {
    return (
        <Drawer
            anchor="left"
            open={isOpen}
            onClose={onClose}
            variant="temporary"
            sx={{
                '& .MuiDrawer-paper': {
                    height: 'calc(100vh - 64px)',
                    top: '64px',
                    width: '250px',
                    zIndex: 1600,
                },
            }}
        >
            <div className="flex flex-col p-4 bg-gray-700 h-full">
                <button onClick={onClose} className="text-white self-end" aria-label="Close menu">
                    <CloseIcon />
                </button>
                <div className="mt-4 flex flex-col space-y-2">
                    {children}
                </div>
            </div>
        </Drawer>
    );
};

export default MobileDrawer;