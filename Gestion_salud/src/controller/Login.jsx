export default function Login() {
  return (
    <>
      <div class="mainContainer">
        <div class="signContainer">
          <header>Login</header>
          <form>
            <input class="classic-input" name="user" type="email" placeholder="User" required/>
              <input type="text" />
            <div id="bx-password-login" class="box-input-password">
              <input id="password-login" name="password" type="password" placeholder="Password" required/>
              <img src="./src/components/images/eye-close.webp" id="eyeIcon-login"/>
            </div>
            <button type="submit" class="button">Login</button>
            <button type="button">Did you forgot password</button>
          </form>
        </div>

        <div class="registerContainer">
          <header>Register</header>
          <form>
            <input class="classic-input" name="user" type="text" placeholder="Name" required/>
            <input class="classic-input" name="mail" type="email" placeholder="Email" required/>
            <div id="bx-password-register" class="box-input-password">
              <input id="password-register" name="password" type="password" placeholder="Password" required/>
              <img src="" id="eyeIcon-register"/>
            </div>

            <label id="position">User access</label>

            <div class="container-select">
              <select name="access" id="select-access">
                <option value="" selected disabled>choose a access</option>
                <option value="auditor">Auditor</option>
                <option value="admin">Administrator</option>
                <option value="auxiliary">Auxiliary</option>
              </select>
            </div>

            <div class="container-select">
              <select name="entity" id="select-entity">
                <option value="" selected disabled>choose a entity</option>
              </select>
            </div>

            <button type="submit" class="button">Send request</button>
          </form>
        </div>
      </div>
    </>
  )
}