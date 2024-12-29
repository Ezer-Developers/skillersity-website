import React from "react";

const PopupForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render the modal if not open

    return (
        <div
            className={`popup-overlay ${isOpen ? "open" : ""}`} // Apply 'open' class to show modal
            onClick={onClose}
        >
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times; 
                </button>
                <h2>Enquire Now</h2>
                <form>
                    <div className="form-group-csm">
                        <input type="text" id="name" name="name" required placeholder="Name" />
                    </div>
                    <div className="form-group-csm">
                        <input type="tel" id="phone" name="phone" required placeholder="Phone" />
                    </div>
                    <div className="form-group-csm">
                        <input type="email" id="email" name="email" required placeholder="Email" />
                    </div>
                    <div className="form-group-csm">
                        <textarea id="message" name="message" rows="4" required placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="rbt-btn btn-gradient">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PopupForm;
