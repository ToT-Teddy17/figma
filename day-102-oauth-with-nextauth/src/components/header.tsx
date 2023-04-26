import { useSession } from "next-auth/react";
export default function Header() {
  const { data: session, status } = useSession();

  const handleLogin = (e: any) => {
    e.preventDefault();
  };
  return (
    <header>
      <div>
        <div>
          {!session && (
            <div>
              <span>you are not signed in</span>
              <a href={"/api/auth/signin"} onClick={handleLogin}>
                Sign in
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
