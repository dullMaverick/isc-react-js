// import logo from './twitter.svg';
import './App.css';

function CloseButton() {
  return (
    <>
      <div className="row-close-button">
        <h1>x</h1>
      </div>
    </>
  )
}

function Logo() {
  return (
    <>
      <div className="row-logo">
        <img src="https://seeklogo.com/images/T/twitter-x-logo-ACDB3F35D8-seeklogo.com.png" />
      </div>
    </>
  )
}

function Header() {
  return <h1>Masuk Ke Twitter</h1>
}

function ButtonLoginByGoogle() {
  return <button>Login dengan Google</button>
}

function ButtonLoginByApple() {
  return <button>Login dengan Apple</button>
}

function Devider() {
  return (
    <>
      <div className="row-divider">
        <div className="line"></div>
        <p>atau</p>
        <div className="line"></div>
      </div>
    </>
  )
}

function ButtonNext() {
  return <button>Selanjutnya</button>
}

function ButtonLupa() {
  return <button>Lupa kata sandi</button>
}

function Akun() {
  return (
    <>
      <div className="row-akun">
        <p>Belum punya akun?</p>
        <a href='#'>Daftar</a>
      </div>
    </>
  ) 
}

function Input() {
  return <input placeholder="Nomor telepon, email, atau nama...."/>
}

function App() {
  return (
    <div className="App">
        <section className="background">
          <div className="col">
            <div className="row-close">
              <CloseButton />
            </div>
            <div className="row">
              <Logo />
            </div>
            <div className="row">
              <Header />
            </div>
            <div className="row row-button">
              <ButtonLoginByGoogle />
              <ButtonLoginByApple />
            </div>
            <div className="row">
              <Devider />
            </div>
            <div className="row">
              <Input />
            </div>
            <div className="row">
              <ButtonNext />
              <ButtonLupa />
            </div>
            <div className="row">
              <Akun />
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
