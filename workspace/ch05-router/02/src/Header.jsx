import Link from "Link";

function Header() {
  const handleClick = (e) => {
    // 브라우저의 기본 동작을 제거(a 태그 동작)
    e.preventDefault();
    // (state, title, url)
    // <a href="http://localhost/home.html">home</a>
    // => pathname: /home.html
    window.history.pushState(null, "", e.target.pathname);
  };
  return (
    <>
      <header>
        <h1>리액트 라우터</h1>
        <Link href="home.html" onClick={handleClick}>
          home
        </Link>
        <br />
        <Link href="page1.html" onClick={handleClick}>
          page1
        </Link>
        <br />
        <Link href="page2.html" onClick={handleClick}>
          page2
        </Link>
      </header>
    </>
  );
}

export default Header;
