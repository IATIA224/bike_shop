import React, { useEffect, useState, useMemo, useRef } from "react";
import ReactDOM from "react-dom";
import "../style/product.css";
import "../style/mobile.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const icons = {
  mountain: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <ellipse cx="32" cy="48" rx="24" ry="12" fill="#1a2a4f" opacity="0.2"/>
      <polygon points="16,48 32,16 48,48" fill="#8ED081"/>
      <polygon points="32,16 28,28 36,28" fill="#fff"/>
      <polygon points="28,28 32,16 36,28" fill="#B2A17B"/>
    </svg>
  ),
  racing: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect x="16" y="24" width="32" height="16" fill="#fff"/>
      <rect x="16" y="24" width="8" height="8" fill="#1a2a4f"/>
      <rect x="32" y="32" width="8" height="8" fill="#1a2a4f"/>
    </svg>
  ),
  urban: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect x="20" y="28" width="24" height="20" rx="4" fill="#6C63FF"/>
      <rect x="28" y="36" width="8" height="12" fill="#FFD700"/>
      <rect x="36" y="36" width="4" height="8" fill="#FFD700"/>
    </svg>
  ),
  ebike: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <polygon points="32,16 40,32 24,32" fill="#FFD700"/>
      <polygon points="32,48 32,32 40,32" fill="#00cfff"/>
    </svg>
  ),
  tech: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect x="28" y="20" width="8" height="24" rx="4" fill="#fff"/>
      <rect x="24" y="36" width="16" height="8" rx="4" fill="#00cfff"/>
    </svg>
  ),
  gear: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <ellipse cx="32" cy="32" rx="20" ry="20" fill="#fff" opacity="0.2"/>
      <polygon points="32,20 44,44 20,44" fill="#00cfff"/>
      <polygon points="32,28 38,40 26,40" fill="#fff"/>
    </svg>
  ),
  fallback:(
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect x="8" y="8" width="48" height="48" rx="8" fill="#00cfff22"/>
    </svg>
  )
};

function resolveImage(item) {
  const defaultImg = "/img/brand_logo.png";
  const raw = item.Image || item.IMAGE || item.images || item.IMAGES || item.image || null;
  if (!raw) return defaultImg;
  if (typeof raw === "string" && raw.trim() !== "") return raw;
  if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === "string") return raw[0];
  return defaultImg;
}

function ProductModal({ open, onClose, product }) {
  const scrollYRef = useRef(0);

  React.useEffect(() => {
    if (open) {
      scrollYRef.current = window.scrollY || document.documentElement.scrollTop || 0;
      document.body.classList.add("modal-open");
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const y = scrollYRef.current;
      document.body.classList.remove("modal-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, y);
    }
    return () => {
      const y = scrollYRef.current;
      document.body.classList.remove("modal-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, y);
    };
  }, [open]);

  if (!open || !product) return null;
  const name = product["ITEM NAME"] || product["ITEM_NAME"] || product.ITEM_NAME || "Untitled";
  const price = product.PRICE ?? product.Price ?? "N/A";
  const img = resolveImage(product);
  // Handle array or string for description
  let descLines = [];
  if (Array.isArray(product.description)) {
    descLines = product.description.filter(line => line && line.trim() !== "");
  } else if (typeof product.description === "string") {
    descLines = product.description.split("\n").filter(line => line && line.trim() !== "");
  } else {
    descLines = [(product.desc || product.DESCRIPTION || "No description available.")];
  }
  const stock = product.stockStatus === "in-stock" || product.stockStatus === "In-Stock" ? "In-Stock" : "Out of Stock";

  return (
    <div className="product-modal-backdrop" onClick={onClose}>
      <div className="product-modal" onClick={e => e.stopPropagation()}>
        <button className="product-modal-close" onClick={onClose}>×</button>
        <div className="product-modal-img-wrap">
          <img src={img} alt={name} className="product-modal-img" />
        </div>
        <div className="product-modal-info">
          <h2 className="product-modal-title">{name}</h2>
          <div className="product-modal-price-stock">
            <span className="product-modal-price">{price !== "N/A" ? `₱ ${price}` : "Price N/A"}</span>
            <span className={`product-modal-stock ${stock === "In-Stock" ? "in-stock" : "out-stock"}`}>{stock}</span>
          </div>
          <div className="product-modal-desc">
            {descLines.length > 0
              ? descLines.map((line, idx) => <div key={idx}>{line}</div>)
              : <div>No description available.</div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function Product() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function loadPrices() {
      try {
        const snap = await getDocs(collection(db, "prices"));
        const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        if (mounted) setItems(data);
      } catch (err) {
        console.error("Failed to load prices:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    loadPrices();
    return () => (mounted = false);
  }, []);

  // compute category list (includes All)
  const categories = useMemo(() => {
    const set = new Set();
    items.forEach(item => {
      const cat = (item.CATEGORY || item.category || "Uncategorized").toString().trim();
      set.add(cat || "Uncategorized");
    });
    return ["All", ...Array.from(set)];
  }, [items]);
  
  // filter items by selected category
  const visibleItems = useMemo(() => {
    if (selectedCategory === "All") return items;
    return items.filter(it => ((it.CATEGORY || it.category || "Uncategorized").toString().trim() === selectedCategory));
  }, [items, selectedCategory]);

  return (
    <div className="product-bg">
      <div className="product-content">
        <div className="product-controls">
          <label htmlFor="category-filter" className="sr-only">Filter by category</label>
          <select
            id="category-filter"
            className="product-filter"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <h1 className="product-title">Our Collection</h1>
        <h2 className="product-subtitle">Premium Bikes & Parts</h2>

        {loading ? (
          <div style={{ color: "#e0e6f6", marginTop: 20 }}>Loading items…</div>
        ) : (
          <>
            {modalOpen && modalProduct &&
              ReactDOM.createPortal(
                <ProductModal open={modalOpen} onClose={() => setModalOpen(false)} product={modalProduct} />,
                document.body
              )
            }
            <div className="product-grid">
              {visibleItems.length === 0 ? (
                <div style={{ color: "#e0e6f6" }}>No items found.</div>
              ) : visibleItems.map((item, idx) => {
                  const name = item["ITEM NAME"] || item["ITEM_NAME"] || item.ITEM_NAME || "Untitled";
                  const price = item.PRICE ?? item.Price ?? "N/A";
                  const category = item.CATEGORY || item.category || "Uncategorized";
                  const img = resolveImage(item);
                  const icon = icons[category?.toLowerCase()] || icons.fallback;

                  return (
                    <div className="product-card" key={item.id || idx} onClick={() => { setModalProduct(item); setModalOpen(true); }}>
                      <div className="product-card-icon">
                        {img && img !== "/img/brand_logo.png" ? (
                          <img src={img} alt={name} className="product-card-img" />
                        ) : (
                          icon
                        )}
                      </div>
                      <div className="product-card-info">
                        <div className="product-card-title">{name}</div>
                        <div className="product-card-category">{category}</div>
                        <div className="product-card-desc">{item.desc || item.DESCRIPTION || ""}</div>
                        <div className="product-card-price">{price !== "N/A" ? `₱ ${price}` : "Price N/A"}</div>
                        <div
                          className={`product-card-stock ${
                            item.stockStatus === "in-stock" || item.stockStatus === "In-Stock"
                              ? "in-stock"
                              : "out-stock"
                          }`}
                        >
                          {item.stockStatus === "in-stock" || item.stockStatus === "In-Stock"
                            ? "In-Stock"
                            : "Out of Stock"}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Product;