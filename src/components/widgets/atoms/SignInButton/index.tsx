import { Close } from "@/components/assets/icons/close";
import { Github } from "@/components/assets/icons/github";

type Props = {
  username?: string;
};

export function SignInButton({ username }: Props) {
  const isLogged = Boolean(username);

  return (
    <button className="bg-ignews-gray-shape py-3 px-4 rounded-full flex items-center gap-4 hover:brightness-110 transition">
      <Github color={isLogged ? "#04D361" : "#EBA417"} />
      <span className="font-bold">
        {isLogged ? username : "Sing in with GitHub"}
      </span>
      {isLogged ? <Close /> : null}
    </button>
  );
}
