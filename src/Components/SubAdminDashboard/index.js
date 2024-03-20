import BannarSubAdmin from "./BannarSubAdmin";
import LoginSubAdmin from "./LoginSubAdmin";

export default function SubAdmin() {
  return <div className="flex flex-col justify-center items-center">
    <BannarSubAdmin />
    <LoginSubAdmin />
  </div>;
}
