import React from "react";
import "./client.styles.scss";

import myob from "F:/AMProtocol/project/my-app/src/brand/assets/img/clients/myob.png";
import belimo from "F:/AMProtocol/project/my-app/src/brand/assets/img/clients/belimo.png";
import lifegroups from "F:/AMProtocol/project/my-app/src/brand/assets/img/clients/lifegroups.png";
import lilly from "F:/AMProtocol/project/my-app/src/brand/assets/img/clients/lilly.png";
import citrus from "F:/AMProtocol/project/my-app/src/brand/assets/img/clients/citrus.png";
import trustly from "F:/AMProtocol/project/my-app/src/brand/assets/img/clients/trustly.png";


const allClients = [
    {id: 1, client: myob},
    {id: 2, client: belimo},
    {id: 3, client: lifegroups},
    {id: 4, client: lilly},
    {id: 5, client: citrus},
    {id: 6, client: trustly}
];

const Client = () => {

    return(
        <>
            <section id="clients" className="clients section-bg">
                <div className="trail" data-aos="zoom-in">
                    {allClients.map((item,index) =>(
                            < div className = "brand-names" key={index}>
                            <img src={allClients[index].client} className="img-fluid" alt= "" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
export default Client;


{
    /* <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src={myob} className="img-fluid" alt="Hi brother myob" />
                            </div>
                             <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src={belimo} className="img-fluid" alt="Hi brother myob" />
                            </div>
                             <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src={citrus} className="img-fluid" alt="Hi brother myob" />
                            </div>
                             <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src={lifegroups} className="img-fluid" alt="Hi brother myob" />
                            </div>
                             <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src={lilly} className="img-fluid" alt="Hi brother myob" />
                            </div>
                             <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src={trustly} className="img-fluid" alt="Hi brother myob" />
                            </div> */
}