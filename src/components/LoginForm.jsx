import "./LoginForm.css";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(email, password) {
    const url = "http://localhost:5001/api/login";
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("ユーザー名またはパスワードが間違っています。");
      }
      const resData = await res.text();
      console.log("ログイン成功:", resData);
      alert("ログイン成功");
    } catch (error) {
      console.log("ログインエラー:", error);
      alert("ログイン失敗");
    }
  }
  return (
    <>
      <div className="wrapper">
        <div className="form-box login">
          <h1>ログイン</h1>
          <div className="input-box">
            <input
              type="text"
              value={email}
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <IoMail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <button type="submit" onClick={() => login(email, password)}>
            ログイン
          </button>

          <div className="register-link">
            <p>
              アカウントをお持ちでない場合は <Link to="/signup">新規登録</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
