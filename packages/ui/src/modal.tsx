import BlackButton from "./black-button";

const Modal = ({ show, onClose, onConfirm, actionText, title, message }: any) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-zinc-100 p-6 rounded-lg z-10 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            className="mr-4 px-4 py-2 bg-zinc-300 border-[2px] border-zinc-400 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <BlackButton text={actionText} onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};

export default Modal;