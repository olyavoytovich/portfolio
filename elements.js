console.log('hellooo')

// let http = new XMLHttpRequest();
// http.open('get', 'data.json', true);
// http.send();
// http.onload = function(){
//     if(this.readyState === 4 && this.status === 200){
//         let products = JSON.parse(this.responseText);
//         let output = "";
//         for(let item of products){
//             output += `
//             <div class="item item-cases-space-1"></div>
//             <div class="item item-cases-photo">
//                 <div class="box-photo">
//                     <img src="${item.image_b}" alt="photo-1" class="photo">
//                 </div>
//             </div>
//             <div class="item item-cases-info">
//                 <div class="box-cases-info">
//                     <div><p class="p-title">${item.title}</p></div>
//                     <div>
//                         <p class="p-description-text">
//                             <span>${item.description}</span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div class="item item-cases-space-1"></div>
// <!--            <div class="item item-cases-space-1"></div>-->
//             `;
//         }
//         document.querySelector(".container_body_cases").innerHTML = output;
//     }
// }

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