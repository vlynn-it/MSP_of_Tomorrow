async function LoadIncludes() {
    const BasePath =
    window.location.pathname.includes('/pages/') ? '../' : '';

    const Nav = await fetch(`${BasePath}includes/navigation.html`);
    let NavHtml = await Nav.text();
    NavHtml = NavHtml.replaceAll("{BASEPATH}", BasePath);
    document.getElementById('nav-placeholder').innerHTML = NavHtml;

    const Footer = await fetch(`${BasePath}includes/footer.html`);
    let FooterHtml = await Footer.text();
    FooterHtml = FooterHtml.replaceAll("{BASEPATH}", BasePath);
    document.getElementById('footer-placeholder').innerHTML = FooterHtml;
}

LoadIncludes();