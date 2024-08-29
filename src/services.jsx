import { Link } from "react-router-dom";

export default function ServicesPage(){
    return(
        <div className="services-container">
            <div className="labEquipmentsRepair"> 
               <h3> Lab Equipment Repair</h3>
                <p>Our expert technicians specialize in the repair and maintenance of laboratory equipment, 
                ensuring precision and reliability. Whether it’s microscopes, centrifuges, 
                or other lab instruments, we provide swift,
                effective solutions to keep your lab running smoothly.</p>
                <button className="learn-more">Learn more</button>
             </div>
            <div className="gasInstallations">
                <h3>Gas Installations</h3>
                <p>We offer professional gas installation services tailored to laboratory needs.
                From setting up gas supply systems to ensuring compliance with safety standards, 
                our services guarantee a reliable and secure gas infrastructure for your lab.</p>
                <button className="learn-more">Learn more</button>
            </div>
            <div className="computerRepairs">
                <h3>Computer Repairs</h3>
                <p>Our computer repair services are designed to keep your lab’s IT infrastructure fully operational.
                We troubleshoot and fix hardware and software issues,
                perform system upgrades, and provide preventive maintenance to avoid downtime.</p>
                <Link to="/computerRepair"><button className="learn-more">Learn more</button></Link>
            </div>
            <div className="printersRepairs">
                <h3>Printer Repairs</h3>
                
                <p>We provide comprehensive repair services for printers,
                including troubleshooting,part replacement, and routine maintenance.
                Our goal is to minimize disruptions and ensure your printing needs are met efficiently.</p>
                <button className="learn-more">Learn more</button>
            </div>
            <div className="laboratorySetup">
                <h3>Laboratory Setup</h3>
                <p>Our team assists in the complete setup of laboratories,
                from planning and design to equipment installation. 
                We ensure that your lab is equipped with the latest technology 
                and configured for optimal workflow and safety.</p>
                <button className="learn-more">Learn more</button>
            </div>
            
        </div>

    )
}