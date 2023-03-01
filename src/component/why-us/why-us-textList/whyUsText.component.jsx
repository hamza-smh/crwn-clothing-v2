import "./whyUsText.styles.scss";

const WhyUsText = () =>{
    return(
        
        <ul>
            <li>
                <a data-bs-toggle="collapse" 
                className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis?
                     <i class="fa fa-chevron-down icon-show "></i>
                     <i class="fa fa-chevron-up icon-close"></i>
                </a>
                <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                </div>
            </li>
            


            <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? 
                     <i class="fa fa-chevron-down icon-show "></i>
                     <i class="fa fa-chevron-up icon-close"></i>
                </a>
                <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                </div>
            </li>
            
            <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? 
                     <i class="fa fa-chevron-down icon-show "></i>
                     <i class="fa fa-chevron-up icon-close"></i>
                </a>
                <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </p>
                </div>
            </li>
            </ul>

    )
}
export default WhyUsText;