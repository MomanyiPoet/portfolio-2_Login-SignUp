function App() {
  return (
    <div>
      <div className="box">
        <span className="border-line"></span>
        <form action="">
          <div className="up">
            <h2>LOGIN</h2>
          </div>
          <div className="input-box">
            <input type="text" required />
            <span>Username</span>
            <i></i>
          </div>

          <div className="input-box">
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </div>

          <input type="submit" value="Sign In" />

          <div className="links">
            <a href="#">Forgot Password</a>
            <a href="#">Signup</a>
          </div>
        </form>
      </div>

      <div className="combine">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>

        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

        <div className="triangle"></div>
        <div className="triangle"></div>
        <div className="triangle"></div>
        <div className="triangle"></div>
        <div className="triangle"></div>
      </div>
    </div>
  );
}

export default App;
