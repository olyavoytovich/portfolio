console.log('hellooo')

let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
    if(this.readyState === 4 && this.status === 200){
        let products = JSON.parse(this.responseText);
        let output = "";
        let count = 0;
        for(let item of products){
            count++;
            if (count %2 === 1) {
                output += `
                <div class="item item-cases_l"></div>
                <div class="item item-cases-photo">
                    <div class="box-photo">
                        <img src="${item.image_b}" alt="photo-1" class="photo">
                    </div>
                </div>
                <div class="item item-cases_rs"></div>
                <div class="item item-cases_ls"></div>
                <div class="item item-cases-info">
                    <div class="box-cases-info">
                        <div><p class="p-title">${item.title}</p></div>
                        <div>
                            <p class="p-description-text">
                                <span>${item.description}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item item-cases_rm"></div>
                `;
            }
            else {
                output += `
                <div class="item item-cases_lm"></div>
                <div class="item item-cases-info-b">
                    <div class="box-cases-info">
                        <div><p class="p-title">${item.title}</p></div>
                        <div>
                            <p class="p-description-text">
                                <span>${item.description}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item item-cases-photo">
                    <div class="box-photo">
                        <img src="${item.image_b}" alt="photo-1" class="photo">
                    </div>
                </div>
                <div class="item item-cases_rs"></div>
                <div class="item item-cases_ls"></div>                
                <div class="item item-tms">
                    <div class="box-cases-info">
                        <div><p class="p-title">${item.title}</p></div>
                        <div>
                            <p class="p-description-text">
                                <span>${item.description}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item item-cases_r"></div>
                `;
            }
        }
        if (count %2 === 1){
            output += `
                <div class="item item-cases-info">
                    <div class="box-cases-info">
                        <div><p class="p-title"></p></div>
                        <div>
                            <p class="p-description-text">
                                <span></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item item-empty">
                    <div class="box-photo">
                    </div>
                </div>
                <div class="item item-cases_r"></div>
                `;
        }
        document.querySelector(".container_body_cases").innerHTML = output;
    }
}

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
        <button class="btn btn-slide">Logos</button>
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
            <a href="mailto:olga.voytovich14@gmail.com" target=”_blank”>Email</a>
            <br>
            <a href="https://t.me/lyoka_iz_yanova" target=”_blank”>Telegram</a>
        </div>
    </div>
    <div class="item item-footer-box item-footer-box-2">
        <div class="footer-box-top">
            <p>Social</p>
        </div>
        <div class="footer-box-bottom">
            <a href="https://pl.pinterest.com/volha_vaitovich/" target=”_blank”>Pinterest</a>
            <br>
            <a href="https://www.instagram.com/volha_vaitovich/" target=”_blank”>Instagram</a>
        </div>
    </div>
    <div class="item item-footer-box item-footer-box-3">
        <div class="footer-box-top">
            <p></p>
        </div>
        <div class="footer-box-bottom">
            <a href="https://www.linkedin.com/in/volha-vaitovich/" target=”_blank”>LinkedIn</a>
            <br>
            <a href="https://www.behance.net/b7f84af0" target=”_blank”>Behance</a>
        </div>
    </div>
    <div class="item item-footer-pattern"></div>
    <div class="item item-footer-space-2"></div>
`;