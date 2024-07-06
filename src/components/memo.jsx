async function login(
  url = "http://localhost:5001/api/login",
  data = { email, password }
) {
  const response = await axios
    .post(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));

  return response.json();
}

const handleSubmit = (e) => {
  e.preventDefault();

  // バックエンドにPOSTリクエストを送る(先ほどgit cloneしてい、サーバーを立ち上げたもののURL)
  axios
    .post("http://localhost:5001/api/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      // ここでユーザー情報をローカルストレージに保存します
      localStorage.setItem("user_id", response.data.user_id);
      alert("ログイン成功！");
      navigate("/add");
    })
    .catch((error) => {
      console.error(error);
      setError("ログインに失敗しました。");
    });
};

const user = users.find((u) => u.email === email && u.password === password);
if (user) {
  res.json({ message: "ログイン成功" });
} else {
  res
    .status(401)
    .json({ error: "ユーザー名またはパスワードが正しくありません" });
}

const users = [
  { email: "user1", password: "password1" },
  { email: "user2", password: "password2" },
];
