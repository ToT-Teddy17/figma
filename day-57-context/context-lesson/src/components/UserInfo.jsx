import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserInfo() {
  const userName = useContext(UserContext);
  console.log(userName);
  return <span>{userName}</span>;
}
