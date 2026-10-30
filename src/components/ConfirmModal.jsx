import "./ConfirmModal.css";

function ConfirmModal({
  open,
  title,
  message,
  onConfirm,
  onCancel
}) {
  if (!open) {
    return null;
  }

  return (
    <div className="confirm-overlay">
      <div className="confirm-modal">

        <button
          className="confirm-close"
          onClick={onCancel}
          aria-label="Close"
        >
          ×
        </button>

        <div className="confirm-icon">
          ?
        </div>

        <span className="confirm-label">
          PLEASE CONFIRM
        </span>

        <h3>{title}</h3>

        <p>{message}</p>

        <div className="confirm-actions">

          <button
            className="confirm-cancel"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="confirm-delete"
            onClick={onConfirm}
          >
            Confirm
          </button>

        </div>

      </div>
    </div>
  );
}

export default ConfirmModal;