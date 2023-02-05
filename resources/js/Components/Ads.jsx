import React, { useEffect } from "react";

const Ads = (props) => {
    const { dataAdSlot } = props;

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {}
    }, []);

    return (
        <div>
            <ins
                className="adsbygoogle"
                style={{display: "block" }}
                data-ad-client="ca-pub-3755518164222853"
                data-ad-slot={dataAdSlot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default Ads;
