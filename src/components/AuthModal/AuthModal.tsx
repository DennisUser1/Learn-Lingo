import Input from "components/Input/Input";
import { MODAL_CONFIG } from "../../shared/constants/constants";
import ModalWrapper from "components/ModalWrapper/ModalWrapper";

interface AuthModalProps {
  mode?: "login" | "register";
  onAction: (mode?: "login" | "register") => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ mode = "login", onAction }) => {
  const configKey = mode === "register" ? "registration" : "login";
  const { title, message } = MODAL_CONFIG[configKey];

  return (
    <ModalWrapper onClose={() => onAction()}>
      <div className="p-8 tablet:p-16">
        <h2 className="text-4xl font-medium mb-5">{title}</h2>

        <p className="text-base font-normal mb-10">{message}</p>

        <form>
          {mode === "register" && <div className="mb-4.5"></div>}

          <div className="mb-4.5">
            <Input placeholder="Name" />
          </div>

          <div className="mb-4.5">
            <Input placeholder="Email" />
          </div>

          <div className="mb-10">
            <Input placeholder="Password" type="password" />
          </div>

          <button
            type="submit"
            className="bg-accent text-black flex items-center justify-center font-bold text-lg rounded-xl w-full h-[60px] hover:bg-accent-light transition-all duration-300 ease-in cursor-pointer"
          >
            {mode === "register" ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default AuthModal;
