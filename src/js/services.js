import React, { useEffect, useState } from "react";
import "../style/services.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchServices() {
      try {
        const snap = await getDocs(collection(db, "services"));
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        if (mounted) setServices(data);
      } catch (err) {
        console.error("Failed to load services:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchServices();
    return () => { mounted = false; };
  }, []);

 function resolveImage(item) {
  const defaultImg = "/img/bikeshop_logo.png";
  // Match image from public/img/services by service name
  const serviceName = (item.SERVICES || "").toLowerCase().replace(/\s+/g, "_");
    const extensions = [".png", ".jpg", ".webp"];
    for (let ext of extensions) {
      const serviceImgPath = `/img/services/${serviceName}${ext}`;
      // We can't check existence in browser, so just return the first path
      return serviceName ? serviceImgPath : defaultImg;
    }
  return defaultImg;
}

  return (
    <div className="services-bg">
      <div className="services-content">
        <h1 className="services-title">Our Services</h1>
        <h2 className="services-subtitle">Expert Care for Every Ride</h2>

        {loading ? (
          <div style={{ color: "#e0e6f6", marginTop: 20 }}>Loading services…</div>
        ) : (
          <div className="services-grid">
            {services.length === 0 ? (
              <div style={{ color: "#e0e6f6" }}>No services found.</div>
            ) : services.map((item) => {
              const img = resolveImage(item);
              return (
                <div className="services-card" key={item.id}>
                  <div className="services-card-img-wrap">
                    <img src={img} alt={item.SERVICES || "service image"} className="services-card-img" />
                  </div>

                  <div className="services-card-info">
                    <div className="services-card-title">{item.SERVICES || "Untitled Service"}</div>
                    <div className="services-card-price">{item.PRICE ? item.PRICE : "Price N/A"}</div>
                    <div className="services-card-desc">{item.desc || item.DESCRIPTION || ""}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;