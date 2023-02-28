import classes from "./css/Contact.module.css";

import GoogleMapReact from "google-map-react";
import ThreeDots from "./Divider";

const MapDataWrapper = () => <div className={classes.pin} />;

function Contact() {
    const defaultProps = {
        center: {
            lat: 50.079977256206305,
            lng: 14.43162927097994,
        },
        zoom: 11,
    };

    return (
        <div id="museum-contact" className={classes.contact}>
            <h1>Contact</h1>

            <div className={classes["two-columns"]}>
                <div className={classes.left}>
                    <p>Opening hours</p>
                    <div className={classes["opening-hours"]}>
                        <p>Mon-Fri</p>
                        <p>9:00 - 17:00</p>
                        <p>Sat-Sun</p>
                        <p>9:00 - 19:00</p>
                    </div>
                </div>
                <div className={classes.right}>
                    <p>
                        <br />
                        Information office <br />
                        <br />
                        Phone: +420 123 456 78 <br />
                        Email: info@yourmuseum.com <br />
                    </p>
                </div>
            </div>
            <ThreeDots />
            <div className={classes.address}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }} // ADD KEY FOR PRODUCTION
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <MapDataWrapper
                        lat={50.079977256206305}
                        lng={14.43162927097994}
                        text="Museum of modern arts"
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
}
export default Contact;
