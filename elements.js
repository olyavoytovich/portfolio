console.log('hellooo')

header.innerHTML =`
    <div class="item item-header-space-1"></div>
    <div class="item item-header-about">
        <button class="btn btn-slide" onclick="window.location.href = 'index.html';">About</button>
    </div>
    <div class="item item-header-cases">
       <button class="btn btn-slide" onclick="window.location.href = 'cases.html';">Cases</button>
    </div>
    <div class="item item-header-CV">
        <button class="btn btn-slide">CV</button>
    </div>
    <div class="item item-header-space-2"></div>
    <div class="item item-subheader">
        <button class="btn btn-slide">UI/UX</button>
    </div>
    <div class="item item-subheader">
        <button class="btn btn-slide">Posters</button>
    </div>
    <div class="item item-subheader">
        <button class="btn btn-slide">Posters</button>
    </div>
    <div class="item  item-subheader">
        <button class="btn btn-slide">Others</button>
    </div>
</div>
`;

footer.innerHTML = `
    <div class="item item-footer-space-1"></div>
    <div class="item item-footer-box item-footer-box-1">
        <div class="footer-box-top">
            <p>Contact</p>
        </div>
        <div class="footer-box-bottom">
            <p>Email</p>
            <p>Telegram</p>
        </div>
    </div>
    <div class="item item-footer-box item-footer-box-2">
        <div class="footer-box-top">
            <p>Social</p>
        </div>
        <div class="footer-box-bottom">
            <p>Pinterest</p>
            <p>Instagram</p>
        </div>
    </div>
    <div class="item item-footer-box item-footer-box-3">
        <div class="footer-box-top">
            <p></p>
        </div>
        <div class="footer-box-bottom">
            <p>LinkedIn</p>
            <p>Behance</p>
        </div>
    </div>
    <div class="item item-footer-pattern"></div>
    <div class="item item-footer-space-2"></div>
`;