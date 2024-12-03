import './WebModal.scss';

interface ModalButton {
    text: string;
    onClick: () => void;
}

interface WebModalProps {
    isOpen: boolean;
    onClose: () => void;
    buttons: ModalButton[];
};

const WebModal = ({ isOpen, onClose, buttons }: WebModalProps) => {
        if (!isOpen) return null;

    return(
        <aside role='dialog' aria-modal='true'>
            <div className="webmodal-backdrop" onClick={onClose} />
            <section className='webmodal-contaier'>
                <nav className='webmodal-content'>
                    <ul className='webmodal-button-list'>
                        {buttons.map((button, index) => (
                            <li key={index}>
                                <button
                                    type='button'
                                    className='webmodal-button'
                                    onClick={button.onClick}
                                >
                                    {button.text}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </aside>
    );
};

export default WebModal;