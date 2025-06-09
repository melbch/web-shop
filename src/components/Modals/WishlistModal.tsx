import FavoriteIcon from '@mui/icons-material/Favorite';
import ModalWrapper from './ModalWrapper';

type Props = {
    onClose: () => void;
    openLoginModal: () => void;
};

const WishlistModal = ({ onClose, openLoginModal }: Props) => {
    return (
        <ModalWrapper onClose={onClose}>
            <div className="text-center mt-10 mb-10">
                <FavoriteIcon className="text-blue-600 mx-auto mb-4 !text-rose-500" style={{ fontSize: 40 }} />
                <h2 className="text-2xl font-bold text-gray-800">Your Wishlist</h2>
                <p className="text-gray-500 mt-2 max-w-sm mx-auto">
                    Please sign in to your account to view and manage your wishlist.
                </p>

                <hr className="my-6 border-gray-300 w-[200px] mx-auto" />

                <button
                    onClick={openLoginModal}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-md text-white px-6 py-2 rounded max-w-md mx-auto hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out mt-4 mb-2"
                >
                    Login
                </button>
            </div>
        </ModalWrapper>
    );
};

export default WishlistModal;